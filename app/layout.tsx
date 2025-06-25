import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

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
                <div className="hidden md:flex md:space-x-6">
                  <Link href="/" className="text-white hover:text-accent-500 px-2 py-1 rounded-md text-sm font-medium transition-colors">
                    Home
                  </Link>
                  <Link href="/life" className="text-white hover:text-accent-500 px-2 py-1 rounded-md text-sm font-medium transition-colors">
                    Life
                  </Link>
                  <Link href="/work" className="text-white hover:text-accent-500 px-2 py-1 rounded-md text-sm font-medium transition-colors">
                    Work
                  </Link>
                  <Link href="/jesus" className="text-white hover:text-accent-500 px-2 py-1 rounded-md text-sm font-medium transition-colors">
                    Jesus
                  </Link>
                  <Link href="/projects" className="text-white hover:text-accent-500 px-2 py-1 rounded-md text-sm font-medium transition-colors">
                    Projects
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
              © {new Date().getFullYear()} K2U. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
} 