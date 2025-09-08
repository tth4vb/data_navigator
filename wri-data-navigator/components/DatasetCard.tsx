import { Dataset } from '@/types/dataset';
import Link from 'next/link';

interface DatasetCardProps {
  dataset: Dataset;
  index: number;
}

export default function DatasetCard({ dataset, index }: DatasetCardProps) {
  const domainColors: { [key: string]: string } = {
    'Water': 'bg-blue-100 text-blue-800',
    'Land': 'bg-green-100 text-green-800',
    'Climate': 'bg-orange-100 text-orange-800',
    'Forest': 'bg-emerald-100 text-emerald-800',
    'Agriculture': 'bg-yellow-100 text-yellow-800',
    'Energy': 'bg-purple-100 text-purple-800',
  };

  const getDomainColor = (domain: string | null) => {
    if (!domain) return 'bg-gray-100 text-gray-800';
    const key = Object.keys(domainColors).find(k => 
      domain.toLowerCase().includes(k.toLowerCase())
    );
    return key ? domainColors[key] : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <Link 
            href={`/dataset/${index}`}
            className="text-lg font-semibold text-gray-900 hover:text-green-700 line-clamp-2"
          >
            {dataset.Dataset}
          </Link>
          {dataset.Domain && (
            <span className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded ${getDomainColor(dataset.Domain)}`}>
              {dataset.Domain}
            </span>
          )}
        </div>
      </div>
      
      {dataset.Summary && (
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {dataset.Summary}
        </p>
      )}
      
      <div className="space-y-2 text-sm">
        {dataset.Format && (
          <div className="flex items-center">
            <span className="text-gray-500 w-20">Format:</span>
            <span className="text-gray-700">{dataset.Format}</span>
          </div>
        )}
        
        {dataset["Space (Coverage)"] && (
          <div className="flex items-center">
            <span className="text-gray-500 w-20">Coverage:</span>
            <span className="text-gray-700">{dataset["Space (Coverage)"]}</span>
          </div>
        )}
        
        {dataset["Time (Refresh Freq.)"] && (
          <div className="flex items-center">
            <span className="text-gray-500 w-20">Updates:</span>
            <span className="text-gray-700">{dataset["Time (Refresh Freq.)"]}</span>
          </div>
        )}
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex space-x-2">
          {dataset["CRS Relevant?"] === "Yes" && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              CRS Relevant
            </span>
          )}
        </div>
        
        <Link 
          href={`/dataset/${index}`}
          className="text-sm font-medium text-green-700 hover:text-green-800"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}