'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import { LandingPageConfig } from '@/types/landing-config'
import { FaStar } from 'react-icons/fa'

interface TestimonialsSectionProps {
  config: LandingPageConfig['testimonials']
  primaryColor: string
}

export default function TestimonialsSection({ config, primaryColor }: TestimonialsSectionProps) {
  
  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
            size={20}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="py-20 bg-white">
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

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                
                {/* Estrellas */}
                {renderStars(testimonial.rating)}

                {/* Contenido */}
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Autor */}
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p 
                    className="text-sm font-semibold"
                    style={{ color: primaryColor }}
                  >
                    {testimonial.role}
                  </p>
                </div>

              </Card>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  )
}