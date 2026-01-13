'use client'

import { ReactNode, CSSProperties } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
  style?: CSSProperties  // ✅ AGREGADA
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  style  // ✅ AGREGADA
}: ButtonProps) {
  
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        style={style}  // ✅ AGREGADA
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      style={style}  // ✅ AGREGADA
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}