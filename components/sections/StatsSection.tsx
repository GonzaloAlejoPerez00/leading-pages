'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { LandingPageConfig } from '@/types/landing-config'

interface StatsSectionProps {
  config: LandingPageConfig['stats']
  primaryColor: string
}

export default function StatsSection({ config, primaryColor }: StatsSectionProps) {
  
  if (!config) return null

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image con Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${config.backgroundImage})`,
            filter: 'brightness(0.3)'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}dd 0%, ${primaryColor}99 100%)`
          }}
        />
      </div>

      {/* Contenido */}
      <Container className="relative z-10">
        
        {/* Título */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {config.title}
          </h2>
          {config.subtitle && (
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {config.subtitle}
            </p>
          )}
        </motion.div>

        {/* Grid de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {config.metrics.map((metric, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group h-full"
            >
            <div className="relative h-full">
                {/* Card con Glassmorphism */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 h-full flex flex-col justify-center items-center">
                
                {/* Valor */}
                <div className="text-center mb-3">
                    <span className="text-5xl md:text-6xl font-black text-white drop-shadow-lg">
                    {metric.value}
                    </span>
                </div>

                {/* Label */}
                <h3 className="text-lg md:text-xl font-bold text-center mb-2 text-white">
                    {metric.label}
                </h3>

                {/* Descripción */}
                {metric.description && (
                    <p className="text-sm text-center text-white/80 leading-relaxed">
                    {metric.description}
                    </p>
                )}

                {/* Efecto de Brillo en Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background: `radial-gradient(circle at center, ${primaryColor}44 0%, transparent 70%)`
                    }}
                    />
                </div>
                </div>

                {/* Glow Effect */}
                <div 
                className="absolute -inset-1 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-300 -z-10"
                style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, white 100%)`
                }}
                />
            </div>
            </motion.div>
        ))}
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      </Container>
    </section>
  )
}