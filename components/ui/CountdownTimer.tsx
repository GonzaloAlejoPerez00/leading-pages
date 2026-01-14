'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: string
  primaryColor: string
}

export default function CountdownTimer({ targetDate, primaryColor }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  // No renderizar hasta que esté montado en el cliente
  if (!mounted) {
    return (
      <div className="flex gap-3 justify-center">
        <div className="flex flex-col items-center">
          <div 
            className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg min-w-[70px]"
            style={{ borderTop: `3px solid ${primaryColor}` }}
          >
            <span className="text-3xl md:text-4xl font-bold text-gray-900">00</span>
          </div>
          <span className="text-sm text-white font-semibold mt-2">Días</span>
        </div>
        <div className="flex flex-col items-center">
          <div 
            className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg min-w-[70px]"
            style={{ borderTop: `3px solid ${primaryColor}` }}
          >
            <span className="text-3xl md:text-4xl font-bold text-gray-900">00</span>
          </div>
          <span className="text-sm text-white font-semibold mt-2">Hrs</span>
        </div>
        <div className="flex flex-col items-center">
          <div 
            className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg min-w-[70px]"
            style={{ borderTop: `3px solid ${primaryColor}` }}
          >
            <span className="text-3xl md:text-4xl font-bold text-gray-900">00</span>
          </div>
          <span className="text-sm text-white font-semibold mt-2">Min</span>
        </div>
        <div className="flex flex-col items-center">
          <div 
            className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg min-w-[70px]"
            style={{ borderTop: `3px solid ${primaryColor}` }}
          >
            <span className="text-3xl md:text-4xl font-bold text-gray-900">00</span>
          </div>
          <span className="text-sm text-white font-semibold mt-2">Seg</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-3 justify-center">
      <TimeBox value={timeLeft.days} label="Días" primaryColor={primaryColor} />
      <TimeBox value={timeLeft.hours} label="Hrs" primaryColor={primaryColor} />
      <TimeBox value={timeLeft.minutes} label="Min" primaryColor={primaryColor} />
      <TimeBox value={timeLeft.seconds} label="Seg" primaryColor={primaryColor} />
    </div>
  )
}

function TimeBox({ value, label, primaryColor }: { value: number; label: string; primaryColor: string }) {
  return (
    <div className="flex flex-col items-center">
      <div 
        className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg min-w-[70px]"
        style={{ borderTop: `3px solid ${primaryColor}` }}
      >
        <span className="text-3xl md:text-4xl font-bold text-gray-900" suppressHydrationWarning>
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm text-white font-semibold mt-2">{label}</span>
    </div>
  )
}