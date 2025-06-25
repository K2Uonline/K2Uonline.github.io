import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'K2U',
  description: 'A personal website built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-primary-500 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-12 md:h-14">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-2xl font-extrabold tracking-tight text-accent-500 hover:text-white transition-colors">
                  K2U
                </Link>
                <div className="flex items-center">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white focus:outline-none"
                    aria-label="Open menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {menuOpen && (
              <div className="bg-primary-500 px-2 pb-2 pt-1 rounded-b shadow-lg z-50">
                <Link href="/" className="block text-white hover:text-accent-500 px-2 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/life" className="block text-white hover:text-accent-500 px-2 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMenuOpen(false)}>
                  Life
                </Link>
                <Link href="/work" className="block text-white hover:text-accent-500 px-2 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMenuOpen(false)}>
                  Work
                </Link>
                <Link href="/jesus" className="block text-white hover:text-accent-500 px-2 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMenuOpen(false)}>
                  Jesus
                </Link>
                <Link href="/projects" className="block text-white hover:text-accent-500 px-2 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMenuOpen(false)}>
                  Projects
                </Link>
              </div>
            )}
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="bg-primary-500 shadow-lg mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-white">
              © {new Date().getFullYear()} K2U. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
} 