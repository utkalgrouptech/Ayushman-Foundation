"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  content: string
  avatar?: string
  rating?: number
}

export function TestimonialCard({ name, content, avatar, rating = 5}: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="relative p-6">
        <div className="flex items-start gap-4">
          <Quote className="text-emerald-500 flex-shrink-0 mt-1" size={24} />
          <div className="flex-1">
            <p className="text-gray-700 mb-4 leading-relaxed italic">"{content}"</p>

            <div className="flex items-center gap-1 mb-3">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={16} />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
                <AvatarFallback className="bg-emerald-100 text-emerald-700">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div>
                <h4 className="font-semibold text-gray-900">{name}</h4>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
