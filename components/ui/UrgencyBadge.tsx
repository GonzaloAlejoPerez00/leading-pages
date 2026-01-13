'use client'

import { motion } from 'framer-motion'
import { FaFire, FaClock, FaUsers } from 'react-icons/fa'

interface UrgencyBadgeProps {
  text: string
  type: 'fire' | 'clock' | 'spots'
  primaryColor: string
}

export default function UrgencyBadge({ text, type, primaryColor }: UrgencyBadgeProps) {
  
  const icons = {
    fire: FaFire,
    clock: FaClock,
    spots: FaUsers
  }

  const Icon = icons[type]

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl"
      style={{ border: `2px solid ${primaryColor}` }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: type === 'fire' ? [0, 5, -5, 0] : 0 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      >
        <Icon className="text-xl" style={{ color: primaryColor }} />
      </motion.div>
      <span className="font-bold text-gray-900">
        {text}
      </span>
    </motion.div>
  )
}