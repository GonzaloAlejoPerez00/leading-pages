import { redirect } from 'next/navigation'

export default function Home() {
  // Si hay variable de entorno, redirigir directo
  const slug = process.env.LANDING_SLUG
  
  if (slug) {
    redirect(`/${slug}`)
  }

  // Si no hay variable, mostrar 404 o mensaje
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">404</h1>
        <p>Esta URL no está configurada</p>
      </div>
    </main>
  )
}