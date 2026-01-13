'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'

interface StickyBarProps {
  text: string
  buttonText: string
  onButtonClick: () => void
  primaryColor: string
  showAfterScroll?: number
}

export default function StickyBar({ 
  text, 
  buttonText, 
  onButtonClick, 
  primaryColor,
  showAfterScroll = 300
}: StickyBarProps) {
  
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfterScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showAfterScroll])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-2xl border-t-4"
          style={{ borderColor: primaryColor }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Texto */}
              <div className="text-center md:text-left">
                <p className="text-lg font-bold text-gray-900">
                  {text}
                </p>
              </div>

              {/* Botón */}
              <Button
                onClick={onButtonClick}
                size="lg"
                style={{ backgroundColor: primaryColor }}
                className="whitespace-nowrap"
              >
                {buttonText} 🚀
              </Button>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}