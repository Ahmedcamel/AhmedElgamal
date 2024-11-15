import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[rgb(243,243,243)]">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link href="/" className="flex items-center">
            <svg 
              preserveAspectRatio="none" 
              data-bbox="0 0 200 200" 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 200 200" 
              role="img" 
              aria-label="Homepage"
              className="mr-2"
            >
              <g>
                <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z" fill="currentColor"></path>
              </g>
            </svg>
            <span className="text-xl font-semibold text-gray-800">Dalya Baron</span>
          </Link>
          <span className="ml-4 text-sm text-gray-600">Postdoctoral research fellow</span>
        </div>
        <nav>
          <ul className="flex items-center">
            <li>
              <Link href="/resume" className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2">
                Resume
              </Link>
            </li>
            <li className="h-5 border-l border-black"></li>
            <li>
              <Link href="/research" className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2">
                Research
              </Link>
            </li>
            <li className="h-5 border-l border-black"></li>
            <li>
              <Link href="/outreach" className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2">
                Outreach
              </Link>
            </li>
            <li className="h-5 border-l border-black"></li>
            <li>
              <Link href="/personal" className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2">
                Personal
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
