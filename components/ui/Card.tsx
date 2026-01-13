'use client'

import { ReactNode, CSSProperties } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  style?: CSSProperties  // ✅ AGREGADA
}

export default function Card({ children, className = '', hover = true, style }: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg p-6 ${className}`}
      style={style}  // ✅ AGREGADA
      whileHover={hover ? { 
        y: -5, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' 
      } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}