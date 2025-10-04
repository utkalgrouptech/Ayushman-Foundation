"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, GraduationCap, MapPin, Star, Heart, Users, TrendingUp } from "lucide-react"

interface StatsCardProps {
  icon: string
  title: string
  value: string | number
  description: string
  trend?: {
    value: number
    label: string
  }
  color?: "emerald" | "blue" | "orange" | "purple"
}

const iconMap = {
  stethoscope: Stethoscope,
  graduationCap: GraduationCap,
  mapPin: MapPin,
  star: Star,
  heart: Heart,
  users: Users,
  trendingUp: TrendingUp,
}

export function StatsCard({ icon, title, value, description, trend, color = "emerald" }: StatsCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const IconComponent = iconMap[icon as keyof typeof iconMap] || Stethoscope

  const colorClasses = {
    emerald: "from-emerald-500 to-emerald-600 text-emerald-600 bg-emerald-50",
    blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50",
    orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-50",
    purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50",
  }

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color].split(" ")[0]} ${colorClasses[color].split(" ")[1]} opacity-5`}
      />

      <CardContent className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl ${colorClasses[color].split(" ")[3]}`}>
            <IconComponent className={`h-6 w-6 ${colorClasses[color].split(" ")[2]}`} />
          </div>

          {trend && (
            <div className="text-right">
              <div className={`text-sm font-medium ${colorClasses[color].split(" ")[2]}`}>+{trend.value}%</div>
              <div className="text-xs text-gray-500">{trend.label}</div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          <h4 className="font-semibold text-gray-700">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
