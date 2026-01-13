'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import OptimizedImage from '@/components/ui/OptimizedImage'
import CountdownTimer from '@/components/ui/CountdownTimer'  // ✅ AGREGAR
import UrgencyBadge from '@/components/ui/UrgencyBadge'      // ✅ AGREGAR
import { LandingPageConfig } from '@/types/landing-config'

interface HeroSectionProps {
  config: LandingPageConfig['hero']
  whatsapp: LandingPageConfig['whatsapp']
  primaryColor: string
}

export default function HeroSection({ config, whatsapp, primaryColor }: HeroSectionProps) {
  
  const handleCTA = () => {
    const encodedMessage = encodeURIComponent(whatsapp.message)
    const whatsappUrl = `https://wa.me/${whatsapp.number.replace(/\+/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Imagen de Fondo Optimizada */}
      {config.backgroundImage ? (
        <>
          <OptimizedImage
            src={config.backgroundImage}
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-0" />
        </>
      ) : (
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        />
      )}

      <Container className="relative z-10 py-20">
        <div className="text-center text-white">
          
          {/* Título */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {config.title}
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {config.subtitle}
          </motion.p>

          {/* ✅ AGREGAR ESTO - Urgencia */}
          {config.urgency?.enabled && (
            <motion.div
              className="mb-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Countdown Timer */}
              {(config.urgency.type === 'countdown' || config.urgency.type === 'both') && 
               config.urgency.countdown?.targetDate && (
                <div>
                  {config.urgency.countdown.text && (
                    <p className="text-lg font-semibold mb-4 text-yellow-300">
                      {config.urgency.countdown.text}
                    </p>
                  )}
                  <CountdownTimer
                    targetDate={config.urgency.countdown.targetDate}
                    primaryColor={primaryColor}
                  />
                </div>
              )}

              {/* Badge de Urgencia */}
              {(config.urgency.type === 'badge' || config.urgency.type === 'both') && 
               config.urgency.badge && (
                <div className="flex justify-center">
                  <UrgencyBadge
                    text={config.urgency.badge.text}
                    type={config.urgency.badge.icon}
                    primaryColor={primaryColor}
                  />
                </div>
              )}
            </motion.div>
          )}
          {/* FIN URGENCIA */}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={handleCTA}
              size="lg"
              className="text-xl"
              style={{ 
                backgroundColor: primaryColor,
                color: 'white'
              }}
            >
              {config.ctaText} 🚀
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}