import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Daily Blog',
  description: 'A collection of my daily thoughts and experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link href="/">
              <h1 className="text-3xl font-bold text-gray-900 hover:text-indigo-600 transition">
                📝 My Daily Blog
              </h1>
            </Link>
            <p className="text-gray-600 mt-2">Thoughts, stories, and daily reflections</p>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-400">
              © 2026 My Daily Blog. All rights reserved.
            </p>
            <p className="text-center text-gray-400 mt-2">
              Built with Next.js • Powered by passion
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
