"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeInSection } from "@/components/fade-in-section"
import { AnimatedCounter } from "@/components/animated-counter"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description: string
  primaryCTA: {
    text: string
    href: string
    icon?: React.ReactNode
  }
  secondaryCTA?: {
    text: string
    href: string
    icon?: React.ReactNode
  }
  badge?: {
    text: string
    icon?: React.ReactNode
  }
  stats?: Array<{
    value: number
    suffix?: string
    label: string
  }>
  backgroundImage?: string
  variant?: "default" | "centered" | "split"
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  stats,
  backgroundImage,
  variant = "default",
}: HeroSectionProps) {
  const renderContent = () => (
    <FadeInSection className="space-y-8">
      <div className="space-y-6">
        {badge && (
          <Badge variant="secondary" className="w-fit">
            {badge.icon}
            {badge.text}
          </Badge>
        )}

        <div className="space-y-4">
          <h1 className="heading-primary text-foreground">
            {title}
            {subtitle && (
              <span className="text-primary block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {subtitle}
              </span>
            )}
          </h1>

          <p className="body-large text-muted-foreground max-w-lg leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="group hover:scale-105 transition-transform duration-200" asChild>
          <Link href={primaryCTA.href}>
            {primaryCTA.icon}
            {primaryCTA.text}
          </Link>
        </Button>
        {secondaryCTA && (
          <Button
            variant="outline"
            size="lg"
            className="group hover:scale-105 transition-transform duration-200 bg-transparent"
            asChild
          >
            <Link href={secondaryCTA.href}>
              {secondaryCTA.icon}
              {secondaryCTA.text}
            </Link>
          </Button>
        )}
      </div>

      {stats && (
        <div className="grid grid-cols-3 gap-6 pt-8">
          {stats.map((stat, index) => (
            <FadeInSection key={index} delay={200 * (index + 1)} className="text-center group">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </FadeInSection>
          ))}
        </div>
      )}
    </FadeInSection>
  )

  const renderImage = () => (
    <FadeInSection delay={300} className="relative">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden">
          {backgroundImage && (
            <img
              src={backgroundImage || "/placeholder.svg"}
              alt="Hero image"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </FadeInSection>
  )

  if (variant === "centered") {
    return (
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">{renderContent()}</div>
      </section>
    )
  }

  if (variant === "split") {
    return (
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {renderContent()}
            {backgroundImage && renderImage()}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">{renderContent()}</div>
    </section>
  )
}
