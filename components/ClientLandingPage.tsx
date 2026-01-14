'use client'

import { LandingPageConfig } from '@/types/landing-config'
import Navbar from '@/components/common/Navbar'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import StickyBar from '@/components/common/StickyBar'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PricingSection from '@/components/sections/PricingSection'
import FAQSection from '@/components/sections/FAQSection'
import FooterSection from '@/components/sections/FooterSection'
import LocationSection from './sections/LocationSection'
import StatsSection from './sections/StatsSection'

interface ClientLandingPageProps {
  config: LandingPageConfig
}

export default function ClientLandingPage({ config }: ClientLandingPageProps) {
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(config.whatsapp.message)
    const whatsappUrl = `https://wa.me/${config.whatsapp.number.replace(/\+/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Navbar - Condicional */}
      {config.settings.navbar.enabled && (
        <Navbar
          companyName={config.footer.companyName}
          ctaText={config.whatsapp.buttonText}
          onCtaClick={handleWhatsAppClick}
          primaryColor={config.theme.primaryColor}
        />
      )}

      {/* Hero Section - Condicional */}
      {config.settings.sections.hero && (
        <HeroSection
          config={config.hero}
          whatsapp={config.whatsapp}
          primaryColor={config.theme.primaryColor}
        />
      )}

      {/* Grid o Stack según configuración */}
      {config.settings.layout?.featuresTestimonialsGrid ? (
        // LAYOUT GRID (para analytics)
        <div className="grid grid-cols-1 lg:grid-cols-2 relative items-stretch">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          
          {config.settings.sections.features && (
            <FeaturesSection
              config={config.features}
              primaryColor={config.theme.primaryColor}
            />
          )}

          {config.settings.sections.testimonials && (
            <TestimonialsSection
              config={config.testimonials}
              primaryColor={config.theme.primaryColor}
            />
          )}
        </div>
      ) : (
        // LAYOUT NORMAL (para gym)
        <>
          {config.settings.sections.features && (
            <FeaturesSection
              config={config.features}
              primaryColor={config.theme.primaryColor}
            />
          )}

          {config.settings.sections.testimonials && (
            <TestimonialsSection
              config={config.testimonials}
              primaryColor={config.theme.primaryColor}
            />
          )}
        </>
      )}

      {/* Pricing Section - Condicional */}
      {config.settings.sections.pricing && config.pricing && (
        <PricingSection
          config={config.pricing}
          whatsapp={config.whatsapp}
          primaryColor={config.theme.primaryColor}
        />
      )}

      {/* FAQ Section - Condicional */}
      {config.settings.sections.faq && (
        <FAQSection
          config={config.faq}
          primaryColor={config.theme.primaryColor}
        />
      )}

      {/* Location Section - Condicional */}
      {config.settings.sections.location && config.location && (
        <LocationSection
          config={config.location}
          primaryColor={config.theme.primaryColor}
        />
      )}
      {/* Stats Section - Condicional */}
      {config.settings.sections.stats && config.stats && (
        <StatsSection
          config={config.stats}
          primaryColor={config.theme.primaryColor}
        />
      )}

      {/* Footer - Condicional */}
      {config.settings.sections.footer && (
        <FooterSection
          config={config.footer}
          primaryColor={config.theme.primaryColor}
        />
      )}

      {/* Botón Flotante de WhatsApp - Condicional */}
      {config.settings.whatsappButton.enabled && (
        <WhatsAppButton
          phoneNumber={config.whatsapp.number}
          message={config.whatsapp.message}
          buttonText={config.whatsapp.buttonText}
          position={config.settings.whatsappButton.position}
        />
      )}

{/* Sticky Bar - Condicional */}
      {config.settings.stickyBar.enabled && (
        <StickyBar
          text={config.settings.stickyBar.text} 
          buttonText={config.whatsapp.buttonText}
          onButtonClick={handleWhatsAppClick}
          primaryColor={config.theme.primaryColor}
          showAfterScroll={config.settings.stickyBar.showAfterScroll}
        />
      )}
    </>
  )
}