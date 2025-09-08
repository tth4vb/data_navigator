import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <svg className="h-10 w-10 mr-3" viewBox="0 0 40 40" fill="none">
                <rect width="8" height="8" x="4" y="4" fill="#FDB714" />
                <rect width="8" height="8" x="14" y="4" fill="#FDB714" />
                <rect width="8" height="8" x="24" y="4" fill="#FDB714" />
                <rect width="8" height="8" x="4" y="14" fill="#FDB714" />
                <rect width="8" height="8" x="14" y="14" fill="#FDB714" />
                <rect width="8" height="8" x="24" y="14" fill="#FDB714" />
                <rect width="8" height="8" x="4" y="24" fill="#FDB714" />
                <rect width="8" height="8" x="14" y="24" fill="#FDB714" />
              </svg>
              <div>
                <div className="text-sm font-semibold leading-tight">WORLD</div>
                <div className="text-sm font-semibold leading-tight">RESOURCES</div>
                <div className="text-sm font-semibold leading-tight">INSTITUTE</div>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/search" className="text-gray-700 hover:text-gray-900 font-medium">
              Search
            </Link>
            <Link href="/topics" className="text-gray-700 hover:text-gray-900 font-medium">
              Topics
            </Link>
            <Link href="/teams" className="text-gray-700 hover:text-gray-900 font-medium">
              Teams
            </Link>
            <Link href="/applications" className="text-gray-700 hover:text-gray-900 font-medium">
              Applications
            </Link>
            <button className="bg-gray-100 text-gray-700 px-4 py-1 rounded hover:bg-gray-200 font-medium">
              Login
            </button>
          </nav>
          
          <button className="md:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}