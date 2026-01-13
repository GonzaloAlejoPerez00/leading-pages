'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

interface NavbarProps {
  companyName: string
  ctaText: string
  onCtaClick: () => void
  primaryColor: string
}

export default function Navbar({ companyName, ctaText, onCtaClick, primaryColor }: NavbarProps) {
  
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo / Nombre - Más a la izquierda */}
          <div className="flex items-center">
            <h1 
              className={`text-2xl md:text-3xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
              }`}
              style={isScrolled ? { color: primaryColor } : {}}
            >
              {companyName}
            </h1>
          </div>

          {/* CTA Button - Más a la derecha */}
          <div>
            <Button
              onClick={onCtaClick}
              size="md"
              style={{ backgroundColor: primaryColor }}
              className="font-bold shadow-lg hover:shadow-xl"
            >
              {ctaText}
            </Button>
          </div>

        </div>
      </Container>
    </motion.nav>
  )
}