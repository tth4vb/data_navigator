import Link from 'next/link';

interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>;
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-green-700 text-white px-4 sm:px-6 lg:px-8 py-3">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-green-200">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}