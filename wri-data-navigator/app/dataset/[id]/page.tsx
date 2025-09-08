'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Dataset, DataStore } from '@/types/dataset';
import Breadcrumb from '@/components/Breadcrumb';

export default function DatasetDetail() {
  const params = useParams();
  const [dataset, setDataset] = useState<Dataset | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then((data: DataStore) => {
        const index = parseInt(params.id as string);
        if (data.Data && data.Data[index]) {
          setDataset(data.Data[index]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading data:', err);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-500">Loading dataset...</div>
      </div>
    );
  }

  if (!dataset) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-500">Dataset not found</div>
      </div>
    );
  }

  const fieldGroups = [
    {
      title: 'Basic Information',
      fields: [
        { label: 'Dataset Name', value: dataset.Dataset },
        { label: 'Summary', value: dataset.Summary },
        { label: 'Domain', value: dataset.Domain },
        { label: 'Format', value: dataset.Format },
      ]
    },
    {
      title: 'Temporal Information',
      fields: [
        { label: 'Refresh Frequency', value: dataset["Time (Refresh Freq.)"] },
        { label: 'Historical Length', value: dataset["Time (Historical Length)"] },
        { label: 'Forecast Horizon', value: dataset["Time (Forecast Horizon)"] },
      ]
    },
    {
      title: 'Spatial Information',
      fields: [
        { label: 'Resolution', value: dataset["Space (Resolution)"] },
        { label: 'Coverage', value: dataset["Space (Coverage)"] },
      ]
    },
    {
      title: 'Technical Details',
      fields: [
        { label: 'Methods', value: dataset.Methods },
        { label: 'Known Error/Accuracy', value: dataset["Accuracy (Known Error)"] },
        { label: 'Data Availability', value: dataset["Where is the Data Available?"] },
      ]
    },
    {
      title: 'Rights & Usage',
      fields: [
        { label: 'Remix Rights', value: dataset["Rights (Remix?)"] },
        { label: 'Share Rights', value: dataset["Rights (Share?)"] },
        { label: 'Theoretical Relevance', value: dataset["Theoretical Relevance"] },
        { label: 'CRS Relevant', value: dataset["CRS Relevant?"] },
        { label: 'CRS Use Case', value: dataset["What is the CRS Use Case?"] },
      ]
    }
  ];

  return (
    <>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Datasets', href: '/' },
        { label: dataset.Dataset || 'Dataset' }
      ]} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            ← Back to datasets
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {dataset.Dataset}
          </h1>
          
          {dataset.Domain && (
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
              {dataset.Domain}
            </span>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {fieldGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {group.title}
                </h2>
                <dl className="space-y-4">
                  {group.fields.map((field, fieldIndex) => (
                    <div key={fieldIndex}>
                      <dt className="text-sm font-medium text-gray-500">
                        {field.label}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {field.value || <span className="text-gray-400">Not specified</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                {dataset["Where is the Data Available?"] && (
                  <button className="w-full px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors">
                    Access Dataset
                  </button>
                )}
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Export Metadata
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Share Dataset
                </button>
              </div>
            </div>

            {dataset["CRS Relevant?"] === "Yes" && (
              <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  CRS Relevance
                </h3>
                <p className="text-sm text-green-700">
                  This dataset has been identified as relevant for CRS applications.
                </p>
                {dataset["What is the CRS Use Case?"] && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-green-900">Use Case:</p>
                    <p className="text-sm text-green-700 mt-1">
                      {dataset["What is the CRS Use Case?"]}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Need Help?
              </h3>
              <p className="text-sm text-gray-600">
                Contact the WRI data team for assistance with this dataset.
              </p>
              <a href="#" className="text-sm text-green-700 hover:text-green-800 mt-2 inline-block">
                Get Support →
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}