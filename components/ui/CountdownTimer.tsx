'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: string // Formato: "2024-12-31T23:59:59"
  primaryColor: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate, primaryColor }: CountdownTimerProps) {
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date()
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div 
        className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[70px] shadow-lg"
        style={{ borderTop: `3px solid ${primaryColor}` }}
      >
        <span className="text-3xl md:text-4xl font-bold text-gray-900">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm font-semibold mt-2 text-white uppercase">
        {label}
      </span>
    </div>
  )

  return (
    <div className="flex gap-3 md:gap-4 justify-center items-center">
      <TimeBox value={timeLeft.days} label="Días" />
      <span className="text-3xl text-white font-bold">:</span>
      <TimeBox value={timeLeft.hours} label="Horas" />
      <span className="text-3xl text-white font-bold">:</span>
      <TimeBox value={timeLeft.minutes} label="Min" />
      <span className="text-3xl text-white font-bold">:</span>
      <TimeBox value={timeLeft.seconds} label="Seg" />
    </div>
  )
}