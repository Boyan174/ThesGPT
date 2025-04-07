"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  
  // Check if current path is related to thesis helper functionality
  const isThesisHelperActive = 
    pathname === '/thesis-helper' || 
    pathname === '/generate-outline' ||
    pathname.startsWith('/thesis-helper/') ||
    pathname.startsWith('/generate-outline/')

  return (
    <header className="container mx-auto py-2 px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-500 pl-2">
          ThesGPT
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 pr-2">
            <li>
              <Link 
                href="/" 
                className={`px-4 py-2 rounded-full ${
                  pathname === '/' 
                    ? 'bg-blue-50 text-blue-500 font-medium' 
                    : 'text-gray-700 hover:text-blue-500 transition-colors'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/thesis-helper" 
                className={`px-4 py-2 rounded-full ${
                  isThesisHelperActive
                    ? 'bg-blue-50 text-blue-500 font-medium' 
                    : 'text-gray-700 hover:text-blue-500 transition-colors'
                }`}
              >
                Thesis-Helfer
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`px-4 py-2 rounded-full ${
                  pathname === '/about' 
                    ? 'bg-blue-50 text-blue-500 font-medium' 
                    : 'text-gray-700 hover:text-blue-500 transition-colors'
                }`}
              >
                Über uns
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 