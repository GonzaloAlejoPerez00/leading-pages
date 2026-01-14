export interface LandingPageConfig {
  // Metadata SEO
  metadata: {
    title: string
    description: string
    keywords: string[]
  }

  // WhatsApp
  whatsapp: {
    number: string // Ej: +5491123456789
    message: string // Mensaje pre-llenado
    buttonText: string
  }

  // Sección Hero (principal)
  hero: {
    title: string
    subtitle: string
    ctaText: string
    backgroundImage?: string
    urgency?: {
      enabled: boolean
      type: 'countdown' | 'badge' | 'both'
      countdown?: {
        targetDate: string // "2024-12-31T23:59:59"
        text?: string
      }
      badge?: {
        text: string
        icon: 'fire' | 'clock' | 'spots'
      }
    }
  }

  // Características/Features
  features: {
    title: string
    items: Array<{
      icon: string // Nombre del ícono de react-icons
      title: string
      description: string
    }>
  }

  // Testimonios
  testimonials: {
    title: string
    items: Array<{
      name: string
      role: string
      content: string
      rating: number
    }>
  }

  // Precios
  pricing?: {
    title: string
    plans: Array<{
      name: string
      price: string
      currency: string
      period: string
      features: string[]
      highlighted?: boolean
    }>
  }

  // FAQ
  faq: {
    title: string
    items: Array<{
      question: string
      answer: string
    }>
  }

  // Footer
  footer: {
    companyName: string
    year: number
  }

  // Colores del tema
  theme: {
    primaryColor: string
    secondaryColor: string
  }

  stickyBar?: {
    enabled: boolean
    text: string
    buttonText: string
  }

  location?: {
  title: string
  subtitle?: string
  branches: Array<{
    name: string
    address: string
    phone?: string
    email?: string
    hours?: string
    mapUrl: string  
    googleMapsLink: string  
  }>
  }
  stats?: {
  title: string
  subtitle?: string
  backgroundImage: string
  metrics: Array<{
    value: string
    label: string
    description?: string
  }>
}
  settings: {
    navbar: {
      enabled: boolean
      transparent: boolean // true = transparente en hero, false = siempre con fondo
    }
    whatsappButton: {
      enabled: boolean
      position: 'bottom-right' | 'bottom-left'
    }
    stickyBar: {
      enabled: boolean
      text: string 
      showAfterScroll: number
    }
    layout?: {
    featuresTestimonialsGrid: boolean 
    }
    sections: {
      hero: boolean
      features: boolean
      testimonials: boolean
      pricing: boolean
      faq: boolean
      stats: boolean
      location: boolean
      footer: boolean
    }
  }
}