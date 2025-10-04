"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/animated-counter"
import { FadeInSection } from "@/components/fade-in-section"
import { TrendingUp, TrendingDown } from "lucide-react"

interface MetricProps {
  title: string
  value: number
  suffix?: string
  prefix?: string
  description: string
  trend?: {
    value: number
    label: string
    direction: "up" | "down"
  }
  icon: React.ReactNode
  color?: "emerald" | "blue" | "orange" | "purple" | "red"
}

interface ImpactMetricsProps {
  title?: string
  description?: string
  metrics: MetricProps[]
  columns?: 2 | 3 | 4
}

const colorClasses = {
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-950",
    border: "border-emerald-200 dark:border-emerald-800",
    icon: "text-emerald-600 dark:text-emerald-400",
    value: "text-emerald-700 dark:text-emerald-300",
    trend: "text-emerald-600 dark:text-emerald-400",
  },
  blue: {
    bg: "bg-blue-50 dark:bg-blue-950",
    border: "border-blue-200 dark:border-blue-800",
    icon: "text-blue-600 dark:text-blue-400",
    value: "text-blue-700 dark:text-blue-300",
    trend: "text-blue-600 dark:text-blue-400",
  },
  orange: {
    bg: "bg-orange-50 dark:bg-orange-950",
    border: "border-orange-200 dark:border-orange-800",
    icon: "text-orange-600 dark:text-orange-400",
    value: "text-orange-700 dark:text-orange-300",
    trend: "text-orange-600 dark:text-orange-400",
  },
  purple: {
    bg: "bg-purple-50 dark:bg-purple-950",
    border: "border-purple-200 dark:border-purple-800",
    icon: "text-purple-600 dark:text-purple-400",
    value: "text-purple-700 dark:text-purple-300",
    trend: "text-purple-600 dark:text-purple-400",
  },
  red: {
    bg: "bg-red-50 dark:bg-red-950",
    border: "border-red-200 dark:border-red-800",
    icon: "text-red-600 dark:text-red-400",
    value: "text-red-700 dark:text-red-300",
    trend: "text-red-600 dark:text-red-400",
  },
}

function MetricCard({ metric, index }: { metric: MetricProps; index: number }) {
  const colors = colorClasses[metric.color || "emerald"]

  return (
    <FadeInSection delay={index * 150}>
      <Card className={`group hover:shadow-lg transition-all duration-300 ${colors.bg} ${colors.border} border`}>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div
              className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            >
              <div className={colors.icon}>{metric.icon}</div>
            </div>
            {metric.trend && (
              <Badge variant="secondary" className={`${colors.trend} bg-transparent border-current`}>
                {metric.trend.direction === "up" ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1" />
                )}
                {metric.trend.value}% {metric.trend.label}
              </Badge>
            )}
          </div>

          <div className="space-y-2">
            <div
              className={`text-3xl font-bold ${colors.value} group-hover:scale-105 transition-transform duration-300`}
            >
              {metric.prefix}
              <AnimatedCounter end={metric.value} suffix={metric.suffix} />
            </div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {metric.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{metric.description}</p>
          </div>
        </CardContent>
      </Card>
    </FadeInSection>
  )
}

export function ImpactMetrics({
  title = "Our Impact",
  description = "Measurable change across communities",
  metrics,
  columns = 4,
}: ImpactMetricsProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Real Impact
          </Badge>
          <h2 className="heading-secondary">{title}</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </FadeInSection>

        <div className={`grid ${gridCols[columns]} gap-8`}>
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
