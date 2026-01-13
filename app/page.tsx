import Link from 'next/link'
import { getAllConfigSlugs } from '@/lib/config-loader'

export default function Home() {
  const slugs = getAllConfigSlugs()

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full">
        
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          🚀 LandingPageKit
        </h1>
        
        <p className="text-center text-gray-600 mb-8">
          Sistema de plantillas de landing pages ultra-reutilizables
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            📄 Landing Pages Disponibles:
          </h2>

          {slugs.length > 0 ? (
            slugs.map((slug) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="block p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
              >
                <span className="font-semibold capitalize">
                  {slug.replace('-', ' ')} →
                </span>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              No hay landing pages configuradas
            </p>
          )}
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            💡 Para crear una nueva landing page, agrega un archivo JSON en la carpeta <code className="bg-gray-200 px-2 py-1 rounded">config/</code>
          </p>
        </div>

      </div>
    </main>
  )
}