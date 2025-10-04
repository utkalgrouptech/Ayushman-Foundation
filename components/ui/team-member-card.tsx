"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Linkedin, Twitter, Mail, MapPin } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  department?: string
  bio: string
  avatar: string
  location?: string
  experience?: string
  specialties?: string[]
  social?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
  achievements?: string[]
}

interface TeamMemberCardProps extends TeamMemberProps {
  index?: number
}

export function TeamMemberCard({
  name,
  role,
  department,
  bio,
  avatar,
  location,
  experience,
  specialties = [],
  social = {},
  achievements = [],
  index = 0,
}: TeamMemberCardProps) {
  return (
    <FadeInSection delay={index * 150}>
      <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-card/50 hover:bg-card h-full overflow-hidden">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Avatar Section */}
          <div className="relative overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10">
              <img
                src={avatar || "/placeholder.svg"}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Social Links Overlay */}
            {(social.linkedin || social.twitter || social.email) && (
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.linkedin && (
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white" asChild>
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                {social.twitter && (
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white" asChild>
                    <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                {social.email && (
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white" asChild>
                    <a href={`mailto:${social.email}`}>
                      <Mail className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4 flex-grow flex flex-col">
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="heading-tertiary group-hover:text-primary transition-colors duration-300">{name}</h3>
                  <p className="text-primary font-medium">{role}</p>
                  {department && <p className="text-sm text-muted-foreground">{department}</p>}
                </div>
              </div>

              {location && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{location}</span>
                </div>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed flex-grow">{bio}</p>

            {experience && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Experience</h4>
                <p className="text-sm text-muted-foreground">{experience}</p>
              </div>
            )}

            {specialties.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Specialties</h4>
                <div className="flex flex-wrap gap-1">
                  {specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {achievements.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Achievements</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {achievements.slice(0, 2).map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </FadeInSection>
  )
}

interface TeamGridProps {
  title?: string
  description?: string
  members: TeamMemberProps[]
  columns?: 2 | 3 | 4
}

export function TeamGrid({
  title = "Our Team",
  description = "Meet the dedicated professionals driving our mission",
  members,
  columns = 3,
}: TeamGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Our Team
          </Badge>
          <h2 className="heading-secondary">{title}</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </FadeInSection>

        <div className={`grid ${gridCols[columns]} gap-8`}>
          {members.map((member, index) => (
            <TeamMemberCard key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
