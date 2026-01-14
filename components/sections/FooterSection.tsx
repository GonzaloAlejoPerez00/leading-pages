'use client'

import Container from '@/components/ui/Container'
import { LandingPageConfig } from '@/types/landing-config'

interface FooterSectionProps {
  config: LandingPageConfig['footer']
  primaryColor: string
}

export default function FooterSection({ config, primaryColor }: FooterSectionProps) {
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        
        <div className="text-center">
          
          {/* Nombre de la Empresa */}
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ color: primaryColor }}
          >
            {config.companyName}
          </h3>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {config.year} {config.companyName}. Todos los derechos reservados.
          </p>

          {/* Créditos */}
          <p className="text-gray-500 text-xs mt-4">
            Creado por Gonzalo Pérez &amp; Landing Page Kit
          </p>

        </div>

      </Container>
    </footer>
  )
}