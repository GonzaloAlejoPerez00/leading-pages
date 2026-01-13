'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { LandingPageConfig } from '@/types/landing-config'
import * as Icons from 'react-icons/fa'

interface FeaturesSectionProps {
  config: LandingPageConfig['features']
  primaryColor: string
}

export default function FeaturesSection({ config, primaryColor }: FeaturesSectionProps) {
  
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 border-r border-gray-100 h-full flex flex-col">
      <Container className="flex-1 flex flex-col">
        
        {/* Título */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            {config.title}
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: primaryColor }} />
        </motion.div>

        {/* Grid de Features - Flexible según cantidad */}
        <div className={`grid gap-6 max-w-2xl mx-auto flex-1 ${
          config.items.length <= 4 
            ? 'grid-cols-1 md:grid-cols-2' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'
        }`}>
          {config.items.map((feature, index) => {
            const IconComponent = (Icons as any)[feature.icon] || Icons.FaStar
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  
                  {/* Ícono */}
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        backgroundColor: `${primaryColor}15`,
                      }}
                    >
                      <IconComponent className="text-2xl" style={{ color: primaryColor }} />
                    </div>

                    <div className="flex-1">
                      {/* Título */}
                      <h3 className="text-lg font-bold mb-2 text-gray-900">
                        {feature.title}
                      </h3>

                      {/* Descripción */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>

      </Container>
    </section>
  )
}