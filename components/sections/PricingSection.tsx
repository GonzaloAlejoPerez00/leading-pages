'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { LandingPageConfig } from '@/types/landing-config'
import { FaCheck } from 'react-icons/fa'

interface PricingSectionProps {
  config: LandingPageConfig['pricing']
  whatsapp: LandingPageConfig['whatsapp']
  primaryColor: string
}

export default function PricingSection({ config, whatsapp, primaryColor }: PricingSectionProps) {
  
  if (!config) return null

  const handlePlanClick = (planName: string) => {
    const message = `Hola! Me interesa el plan ${planName}. ¿Me pueden dar más información?`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsapp.number.replace(/\+/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        
        {/* Título */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {config.title}
          </h2>
        </motion.div>

        {/* Grid de Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {config.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={plan.highlighted ? 'md:scale-110 z-10' : ''}
            >
              <Card 
                className={`h-full relative ${plan.highlighted ? 'border-4' : ''}`}
                style={plan.highlighted ? { borderColor: primaryColor } : {}}
              >
                
                {/* Badge "Más Popular" */}
                {plan.highlighted && (
                  <div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-bold"
                    style={{ backgroundColor: primaryColor }}
                  >
                    MÁS POPULAR
                  </div>
                )}

                {/* Nombre del Plan */}
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
                  {plan.name}
                </h3>

                {/* Precio */}
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold" style={{ color: primaryColor }}>
                    {plan.currency}{plan.price}
                  </span>
                  <span className="text-gray-600">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheck 
                        className="mt-1 shrink-0" 
                        style={{ color: primaryColor }}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón */}
                <Button
                  onClick={() => handlePlanClick(plan.name)}
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  className="w-full"
                  style={plan.highlighted ? { backgroundColor: primaryColor } : { borderColor: primaryColor, color: primaryColor }}
                >
                  Elegir Plan
                </Button>

              </Card>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  )
}