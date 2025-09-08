'use client';

import { useState, useEffect } from 'react';
import { Dataset, DataStore } from '@/types/dataset';
import DatasetCard from '@/components/DatasetCard';
import Breadcrumb from '@/components/Breadcrumb';

export default function Home() {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [filteredDatasets, setFilteredDatasets] = useState<Dataset[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then((data: DataStore) => {
        setDatasets(data.Data || []);
        setFilteredDatasets(data.Data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading data:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = datasets;

    if (searchTerm) {
      filtered = filtered.filter(dataset =>
        dataset.Dataset?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dataset.Summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dataset.Domain?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedDomain !== 'all') {
      filtered = filtered.filter(dataset =>
        dataset.Domain?.toLowerCase().includes(selectedDomain.toLowerCase())
      );
    }

    setFilteredDatasets(filtered);
  }, [searchTerm, selectedDomain, datasets]);

  const domains = Array.from(new Set(datasets.map(d => d.Domain).filter(Boolean)));

  return (
    <>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Datasets' }
      ]} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            WRI Data Navigator
          </h1>
          <p className="text-gray-600">
            Explore datasets, models, and tools from the World Resources Institute
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Filters</h2>
              
              <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search datasets..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                  Domain
                </label>
                <select
                  id="domain"
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="all">All Domains</option>
                  {domains.map(domain => (
                    <option key={domain} value={domain || ''}>
                      {domain}
                    </option>
                  ))}
                </select>
              </div>

              <div className="border-t pt-4">
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between mb-2">
                    <span>Total Datasets:</span>
                    <span className="font-medium">{datasets.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Showing:</span>
                    <span className="font-medium">{filteredDatasets.length}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mt-4 border border-blue-200">
              <h3 className="font-medium text-blue-900 mb-2">Data Source</h3>
              <p className="text-sm text-blue-700">
                This navigator displays CRS-relevant data, applications, and tools from WRI.
              </p>
            </div>
          </aside>

          <div className="flex-1">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-gray-500">Loading datasets...</div>
              </div>
            ) : filteredDatasets.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <p className="text-gray-500">No datasets found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {filteredDatasets.map((dataset, index) => (
                  <DatasetCard key={index} dataset={dataset} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
