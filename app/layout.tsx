import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Website',
  description: 'A personal website built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-primary-500 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-xl font-bold text-white">
                    Personal Website
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/" className="text-white hover:text-accent-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Home
                  </Link>
                  <Link href="/life" className="text-white hover:text-accent-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Life
                  </Link>
                  <Link href="/work" className="text-white hover:text-accent-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Work
                  </Link>
                  <Link href="/jesus" className="text-white hover:text-accent-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Jesus
                  </Link>
                  <Link href="/projects" className="text-white hover:text-accent-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Projects
                  </Link>
                  <Link href="/resources" className="text-white hover:text-accent-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Resources
                  </Link>
                  <Link href="/response" className="text-white hover:text-accent-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Response
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="bg-primary-500 shadow-lg mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-white">
              © {new Date().getFullYear()} Personal Website. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
} 