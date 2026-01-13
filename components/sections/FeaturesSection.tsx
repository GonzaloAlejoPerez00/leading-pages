'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import { LandingPageConfig } from '@/types/landing-config'
import * as Icons from 'react-icons/fa'

interface FeaturesSectionProps {
  config: LandingPageConfig['features']
  primaryColor: string
}

export default function FeaturesSection({ config, primaryColor }: FeaturesSectionProps) {
  
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {config.title}
          </h2>
        </motion.div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.items.map((feature, index) => {
            // Obtener el ícono dinámicamente
            const IconComponent = (Icons as any)[feature.icon] || Icons.FaStar
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  
                  {/* Ícono */}
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${primaryColor}20`,
                      color: primaryColor 
                    }}
                  >
                    <IconComponent className="text-3xl" />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-600">
                    {feature.description}
                  </p>

                </Card>
              </motion.div>
            )
          })}
        </div>

      </Container>
    </section>
  )
}