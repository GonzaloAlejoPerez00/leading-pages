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
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Nombre */}
          <div className="flex items-center">
            <h1 
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              style={isScrolled ? { color: primaryColor } : {}}
            >
              {companyName}
            </h1>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={onCtaClick}
              size="md"
              style={{ backgroundColor: primaryColor }}
            >
              {ctaText}
            </Button>
          </div>

        </div>
      </Container>
    </motion.nav>
  )
}