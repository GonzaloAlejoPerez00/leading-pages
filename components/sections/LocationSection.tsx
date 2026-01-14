'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { LandingPageConfig } from '@/types/landing-config'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaExternalLinkAlt } from 'react-icons/fa'

interface LocationSectionProps {
  config: LandingPageConfig['location']
  primaryColor: string
}

export default function LocationSection({ config, primaryColor }: LocationSectionProps) {
  
  if (!config) return null

  const [selectedBranch, setSelectedBranch] = useState(0)

  return (
    <section className="py-20 bg-white">
      <Container>
        
        {/* Título */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {config.title}
          </h2>
          {config.subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {config.subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          
          {/* Lista de Sucursales */}
          <div className="space-y-4">
            {config.branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  onClick={() => setSelectedBranch(index)}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedBranch === index
                      ? 'shadow-lg scale-105'
                      : 'shadow-sm hover:shadow-md'
                  }`}
                  style={{
                    borderColor: selectedBranch === index ? primaryColor : '#e5e7eb',
                    backgroundColor: selectedBranch === index ? `${primaryColor}10` : 'white'
                  }}
                >
                  {/* Nombre Sucursal */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {branch.name}
                  </h3>

                  {/* Info */}
                  <div className="space-y-3">
                    {/* Dirección */}
                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt 
                        className="mt-1 shrink-0" 
                        style={{ color: primaryColor }}
                        size={18}
                      />
                      <p className="text-gray-700">{branch.address}</p>
                    </div>

                    {/* Teléfono */}
                    {branch.phone && (
                      <div className="flex items-center gap-3">
                        <FaPhone 
                          className="shrink-0" 
                          style={{ color: primaryColor }}
                          size={16}
                        />
                        <a 
                          href={`tel:${branch.phone}`}
                          className="text-gray-700 hover:underline"
                        >
                          {branch.phone}
                        </a>
                      </div>
                    )}

                    {/* Email */}
                    {branch.email && (
                      <div className="flex items-center gap-3">
                        <FaEnvelope 
                          className="shrink-0" 
                          style={{ color: primaryColor }}
                          size={16}
                        />
                        <a 
                          href={`mailto:${branch.email}`}
                          className="text-gray-700 hover:underline"
                        >
                          {branch.email}
                        </a>
                      </div>
                    )}

                    {/* Horarios */}
                    {branch.hours && (
                      <div className="flex items-start gap-3">
                        <FaClock 
                          className="mt-1 shrink-0" 
                          style={{ color: primaryColor }}
                          size={16}
                        />
                        <p className="text-gray-700">{branch.hours}</p>
                      </div>
                    )}
                  </div>

                  {/* Botón Ver en Google Maps */}
                  
                  <a  href={branch.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                    style={{ color: primaryColor }}
                    onClick={(e) => e.stopPropagation()}
                    >
                    Abrir en Google Maps <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 h-[600px]"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
              <iframe
                src={config.branches[selectedBranch].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>

      </Container>
    </section>
  )
}