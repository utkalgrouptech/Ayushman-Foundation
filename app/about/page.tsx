import { FadeInSection } from "@/components/fade-in-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Award,
  Globe,
  Target,
  Eye,
  Lightbulb,
  Calendar,
  Mail,
  Linkedin,
  TrendingUp,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const milestones = [
    {
      year: "2009",
      title: "Foundation Established",
      description: "Started with a vision to provide healthcare access to rural communities in Rajasthan.",
    },
    {
      year: "2012",
      title: "First Mobile Clinic",
      description: "Launched our first mobile healthcare unit, serving 50 villages in the first year.",
    },
    {
      year: "2015",
      title: "Education Initiative",
      description: "Expanded to include education support and scholarship programs for underprivileged children.",
    },
    {
      year: "2018",
      title: "Digital Health Platform",
      description: "Introduced telemedicine services, connecting remote patients with specialist doctors.",
    },
    {
      year: "2020",
      title: "COVID-19 Response",
      description: "Provided emergency healthcare and relief services during the pandemic, reaching 100+ villages.",
    },
    {
      year: "2022",
      title: "National Recognition",
      description: "Received the National NGO Excellence Award for outstanding contribution to healthcare.",
    },
    {
      year: "2024",
      title: "50K Lives Milestone",
      description: "Celebrated impacting over 50,000 lives across 200+ villages in 8 states.",
    },
  ]

const leadership = [
  {
    name: "Suresh Mishra",
    role: "Managing Director",
    bio: "Suresh Mishra provides visionary leadership and strategic direction as Managing Director.",
    education: "",
    image: "/images/CMD.jpeg",
  },
  {
    name: "Swayanshree Mishra",
    role: "Director",
    bio: "Swayanshree Mishra brings expertise and dedication as Director.",
    education: "Business Development, Operations",
    image: "/images/Madam.jpeg",
  },
  {
    name: "Niranjan Mishra",
    role: "Director",
    bio: "Niranjan Mishra leads with experience and insight.",
    education: "",
    image: "/images/Niranjan.jpeg",
  },
  {
    name: "Santosh Kumar Sahoo",
    role: "Technical Coordinator",
    bio: "Santosh Kumar Sahoo brings technical expertise and coordination skills to the team.",
    education: "Information Technology, Systems Management",
    image: "/images/santosh.jpg", // ✅ put this file inside public/images/
  },
];


  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every individual with empathy, understanding their unique challenges and needs.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of transparency and accountability in all our operations.",
    },
    {
      icon: Users,
      title: "Community-Centric",
      description: "We work with communities, not for them, ensuring sustainable and locally-driven solutions.",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We strive for the highest quality in our programs and continuously improve our impact.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We build programs that create lasting change and can be sustained by the communities themselves.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace technology and innovative approaches to solve complex healthcare challenges.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <FadeInSection>
              <Badge variant="secondary" className="mb-4">
                <Award className="w-3 h-3 mr-1" />
                About Ayushman Foundation
              </Badge>
              <h1 className="heading-primary text-foreground">
                Transforming Healthcare
                <span className="text-primary block">One Community at a Time</span>
              </h1>
              <p className="body-large text-muted-foreground max-w-3xl mx-auto">
               Ayushman Foundation is a non-profit organization dedicated to improving the lives of
 underserved communities across India by bridging the gap between healthcare,
 education, and social development. Established with a vision to create lasting impact,
 our foundation works at the grassroots level to ensure that every individual has the
 opportunity to lead a healthy, empowered, and dignified life.
              </p>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter end={50} suffix="K+" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Lives Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter end={200} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Villages Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter end={8} suffix="" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">States Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter end={15} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Years of Service</div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <FadeInSection>
              <Card className="h-full border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="heading-tertiary text-primary">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide accessible, quality healthcare and education services to underserved communities,
                    empowering them to lead healthier, more prosperous lives while building sustainable local capacity.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={200}>
              <Card className="h-full border-0 bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="heading-tertiary text-secondary">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where every individual, regardless of their geographic location or economic status, has
                    access to quality healthcare and education opportunities that enable them to thrive.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={400}>
              <Card className="h-full border-0 bg-gradient-to-br from-accent/5 to-accent/10">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="heading-tertiary text-accent">Our Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Through evidence-based programs and community partnerships, we create measurable, lasting change
                    that transforms lives and strengthens communities across rural India.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>

          {/* Core Values */}
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Our Foundation
            </Badge>
            <h2 className="heading-secondary">Core Values That Guide Us</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles shape every decision we make and every program we implement.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Leadership
            </Badge>
            <h2 className="heading-secondary">Meet Our Leadership Team</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Our experienced leaders bring decades of expertise in healthcare, social development, and community
              engagement.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50">
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="relative mx-auto w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Image
  src={leader.image}
  alt={leader.name}
  width={80}
  height={80}
  className="rounded-full object-cover"
/>
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg text-foreground">{leader.name}</h3>
                      <p className="text-primary font-medium text-sm">{leader.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">{leader.education}</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                    <div className="flex justify-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Our Journey
            </Badge>
            <h2 className="heading-secondary">Milestones of Impact</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to national recognition, our journey reflects our commitment to transforming lives.
            </p>
          </FadeInSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <div
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <Card className="border-0 bg-card/50 hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6 space-y-3">
                          <div className="flex items-center space-x-3">
                            <Badge variant="secondary" className="text-xs">
                              {milestone.year}
                            </Badge>
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <h3 className="font-serif font-semibold text-lg text-foreground">{milestone.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Recognition
            </Badge>
            <h2 className="heading-secondary">Awards & Certifications</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by national and international organizations.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "National NGO Excellence Award", year: "2022", org: "Ministry of Health" },
              { title: "ISO 9001:2015 Certified", year: "2021", org: "Quality Management" },
              { title: "UN SDG Partnership", year: "2020", org: "United Nations" },
              { title: "80G Tax Exemption", year: "2010", org: "Income Tax Department" },
            ].map((award, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="text-center border-0 bg-card/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-sm text-foreground">{award.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {award.org} • {award.year}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <FadeInSection>
            <h2 className="heading-secondary text-primary-foreground">Join Our Mission</h2>
            <p className="body-large opacity-90 max-w-2xl mx-auto">
              Be part of our journey to transform healthcare in rural India. Together, we can create lasting change.
            </p>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/volunteer">
                  <Users className="w-5 h-5 mr-2" />
                  Volunteer With Us
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Cause
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
