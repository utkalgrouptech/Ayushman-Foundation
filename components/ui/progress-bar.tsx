"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showPercentage?: boolean
  color?: "emerald" | "blue" | "orange" | "purple"
  className?: string
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  color = "emerald",
  className,
}: ProgressBarProps) {
  const [animatedValue, setAnimatedValue] = useState(0)
  const percentage = Math.min((value / max) * 100, 100)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(percentage)
    }, 200)
    return () => clearTimeout(timer)
  }, [percentage])

  const colorClasses = {
    emerald: "bg-emerald-600",
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    purple: "bg-purple-600",
  }

  return (
    <div className={cn("space-y-2", className)}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center text-sm">
          {label && <span className="font-medium text-gray-700">{label}</span>}
          {showPercentage && <span className="text-gray-600">{Math.round(animatedValue)}%</span>}
        </div>
      )}

      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-1000 ease-out", colorClasses[color])}
          style={{ width: `${animatedValue}%` }}
        />
      </div>
    </div>
  )
}
