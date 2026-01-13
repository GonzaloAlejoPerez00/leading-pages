'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface WhatsAppButtonProps {
  phoneNumber: string
  message: string
  buttonText?: string
  position?: 'bottom-right' | 'bottom-left'
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message, 
  buttonText = "Contactar",
  position = 'bottom-right'
}: WhatsAppButtonProps) {
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6'
  }

  const initialAnimation = {
    'bottom-right': { opacity: 0, x: 100 },
    'bottom-left': { opacity: 0, x: -100 }
  }

  return (
    <>
      {/* Botón flotante móvil */}
      <motion.button
        onClick={handleClick}
        className={`fixed ${positionClasses[position]} z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors md:hidden`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaWhatsapp className="text-white text-3xl" />
        
        {/* Animación de pulso */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
      </motion.button>

      {/* Botón expandido desktop */}
      <motion.button
        onClick={handleClick}
        className={`hidden md:flex fixed ${positionClasses[position]} z-50 items-center gap-3 px-6 py-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={initialAnimation[position]}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaWhatsapp className="text-white text-2xl" />
        <span className="text-white font-semibold">{buttonText}</span>
        
        {/* Animación de pulso */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
      </motion.button>
    </>
  )
}