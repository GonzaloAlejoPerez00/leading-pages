'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { LandingPageConfig } from '@/types/landing-config'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

interface TestimonialsSectionProps {
  config: LandingPageConfig['testimonials']
  primaryColor: string
}

export default function TestimonialsSection({ config, primaryColor }: TestimonialsSectionProps) {
  
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? '' : 'opacity-20'}
            style={{ color: primaryColor }}
            size={18}
          />
        ))}
      </div>
    )
  }

  // Determinar layout: si hay 4+ testimonios, usar grid
  const useGrid = config.items.length >= 4

  return (
    <section className="py-20 bg-gradient-to-bl from-gray-50 to-white h-full flex flex-col">
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

        {/* Grid o Stack según cantidad */}
        <div className={useGrid 
          ? "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto flex-1"
          : "space-y-6 max-w-2xl mx-auto flex-1 flex flex-col justify-center"
        }>
          {config.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: useGrid ? 0 : (index % 2 === 0 ? -30 : 30), y: useGrid ? 30 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden h-full flex flex-col">
                
                {/* Quote Icon Background */}
                <div 
                  className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ color: primaryColor }}
                >
                  <FaQuoteLeft size={120} />
                </div>

                {/* Contenido */}
                <div className="relative z-10 flex flex-col flex-1">
                  {/* Estrellas */}
                  {renderStars(testimonial.rating)}

                  {/* Testimonio */}
                  <p className="text-gray-700 mb-6 italic leading-relaxed text-base flex-1">
                    "{testimonial.content}"
                  </p>

                  {/* Autor */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shrink-0"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-base">
                        {testimonial.name}
                      </p>
                      <p 
                        className="text-sm font-semibold"
                        style={{ color: primaryColor }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  )
}