import { notFound } from 'next/navigation'
import { getConfigBySlug } from '@/lib/config-loader'
import ClientLandingPage from '@/components/ClientLandingPage'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params
  const config = getConfigBySlug(slug)

  if (!config) {
    notFound()
  }

  return (
    <main>
      <ClientLandingPage config={config} />
    </main>
  )
}

// Metadata dinámica para SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const config = getConfigBySlug(slug)

  if (!config) {
    return {
      title: 'Página no encontrada'
    }
  }

  return {
    title: config.metadata.title,
    description: config.metadata.description,
    keywords: config.metadata.keywords.join(', ')
  }
}