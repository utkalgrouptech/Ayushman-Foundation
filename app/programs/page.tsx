import { FadeInSection } from "@/components/fade-in-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Users,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  MapPin,
  Target,
  CheckCircle,
  BookOpen,
  Award,
  TrendingUp,
  Pill,
  Package,
  Lightbulb,
  Droplet,
  Baby,
  Brain,
  Briefcase,
  Wrench,
  Store,
  UserCheck,
  HeartHandshake,
  Smile,
  Accessibility,
  MessageCircle,
  TreePine,
  CloudRain,
  Building,
  Recycle,
  Shield,
  Sprout,
  Flame,
} from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
  const sectors = [
    {
      id: "children-development",
      title: "Children's Development",
      icon: Baby,
      description:
        "We focus on holistic child development through education, nutrition, and protection programs for underprivileged children.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      stats: {
        beneficiaries: "5K+",
        locations: "200+",
        programs: "15+ initiatives",
      },
    },
    {
      id: "climate-change",
      title: "Climate Change",
      icon: CloudRain,
      description:
        "Addressing climate challenges through awareness, adaptation strategies, and sustainable practices in vulnerable communities.",
      color: "text-green-600",
      bgColor: "bg-green-100",
      stats: {
        beneficiaries: "10K+",
        locations: "50+",
        programs: "20+ initiatives",
      },
    },
    {
      id: "urban-development",
      title: "Urban Development",
      icon: Building,
      description:
        "Improving living conditions in urban slums through better infrastructure, services, and community participation.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      stats: {
        beneficiaries: "8K+",
        locations: "30+",
        programs: "12+ initiatives",
      },
    },
    {
      id: "skilling-livelihood",
      title: "Skilling & Livelihood",
      icon: Briefcase,
      description:
        "Enhancing employability and entrepreneurship through skill development programs for youth and women.",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      stats: {
        beneficiaries: "3K+",
        locations: "40+",
        programs: "10+ initiatives",
      },
    },
    {
      id: "forest-tribal",
      title: "Forest & Tribal Development",
      icon: TreePine,
      description:
        "Promoting sustainable forest management and supporting tribal communities for climate-resilient development.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      stats: {
        beneficiaries: "7K+",
        locations: "25+",
        programs: "8+ initiatives",
      },
    },
    {
      id: "environment-disaster",
      title: "Environment & Disaster Management",
      icon: Shield,
      description:
        "Building community resilience through environmental conservation and disaster risk reduction programs.",
      color: "text-red-600",
      bgColor: "bg-red-100",
      stats: {
        beneficiaries: "12K+",
        locations: "35+",
        programs: "18+ initiatives",
      },
    },
  ]

  const services = [
    {
      id: "medical-camps",
      title: "Free Medical Camps",
      icon: Stethoscope,
      description:
        "We organize regular health camps in rural and urban slum areas to provide free medical check-ups, consultations, and medicines to those who cannot afford basic healthcare.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      stats: {
        beneficiaries: "20K+",
        locations: "300+",
        camps: "500+ camps",
      },
    },
    {
      id: "education-support",
      title: "Support for Children & Education",
      icon: GraduationCap,
      description:
        "We support education through school enrollment drives, distribution of learning materials, and scholarships for underprivileged children.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      stats: {
        beneficiaries: "5K+",
        locations: "200+",
        enrollments: "1000+ enrollments",
      },
    },
    {
      id: "health-awareness",
      title: "Health Awareness & Education",
      icon: Lightbulb,
      description:
        "We conduct health education programs on sanitation, maternal health, mental health, and lifestyle diseases to encourage healthier living.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      stats: {
        beneficiaries: "10K+",
        locations: "100+",
        programs: "50+ programs",
      },
    },
    {
      id: "skill-development",
      title: "Skill Development & Training",
      icon: Wrench,
      description:
        "We offer vocational training and skill-building workshops to empower youth and women, helping them become self-reliant and financially independent.",
      color: "text-green-600",
      bgColor: "bg-green-100",
      stats: {
        beneficiaries: "3K+",
        locations: "50+",
        programs: "25+ training programs",
      },
    },
    {
      id: "elderly-care",
      title: "Elderly & Special Needs Care",
      icon: HeartHandshake,
      description:
        "We provide care, medical support, and counseling services for senior citizens and differently-abled individuals in neglected communities.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      stats: {
        beneficiaries: "2K+",
        locations: "30+",
        programs: "15+ programs",
      },
    },
  ]

  const howWeWork = [
    {
      step: "1",
      title: "Needs Assessment",
      description: "We begin by identifying real challenges on the ground through community surveys, local partnerships, and data insights.",
      icon: Target,
    },
    {
      step: "2",
      title: "Strategic Planning",
      description: "Our team develops targeted programs that are practical, scalable, and aligned with both community needs and government policies.",
      icon: TrendingUp,
    },
    {
      step: "3",
      title: "Implementation",
      description: "With the help of trained volunteers, field experts, and partners, we execute each program with efficiency, transparency, and compassion.",
      icon: CheckCircle,
    },
    {
      step: "4",
      title: "Monitoring & Impact",
      description: "We continuously evaluate our impact, document outcomes, and adapt strategies to ensure long-term success and accountability.",
      icon: Award,
    },
    {
      step: "5",
      title: "Community Engagement",
      description: "We involve local stakeholders at every step—empowering beneficiaries to take ownership and actively participate in their own development.",
      icon: Users,
    },
  ]

  const coreObjectives = [
    {
      title: "Education",
      description: "Ensuring quality education in villages through better schools, resources, and skill-based learning opportunities.",
      icon: BookOpen,
    },
    {
      title: "Environmental/Climate Change/Eco Restoration",
      description: "Engaging marginalized and vulnerable groups in eco-restoration and climate action.",
      icon: Sprout,
    },
    {
      title: "Health & Sanitization",
      description: "Promoting community well-being through WASH – Water, Sanitation & Hygiene.",
      icon: Droplet,
    },
    {
      title: "Empowerment/Upliftment",
      description: "Through empowerment and upliftment, we aim to break cycles of poverty and enable communities to thrive.",
      icon: UserCheck,
    },
    {
      title: "Disaster Management/Risk Reduction(DRR)",
      description: "Empowering women and youth in disaster risk reduction through grassroots leadership and preparedness.",
      icon: Shield,
    },
    {
      title: "Urban Governance",
      description: "Promoting inclusive urban governance through participation, better services, and community empowerment.",
      icon: Building,
    },
    {
      title: "Solid & Liquid Waste Management",
      description: "Safe and sustainable waste management reduces pollution, encourages recycling, and protects community health and the environment.",
      icon: Recycle,
    },
    {
      title: "Livelihood & Enterprise Development",
      description: "Enhancing livelihoods through agrovest ventures and traditional occupational trades.",
      icon: Store,
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
                <Target className="w-3 h-3 mr-1" />
                Our Programs & Initiatives
              </Badge>
              <h1 className="heading-primary text-foreground">
                Comprehensive Solutions for
                <span className="text-primary block">Community Transformation</span>
              </h1>
              <p className="body-large text-muted-foreground max-w-3xl mx-auto">
                Our integrated approach addresses multiple development needs through evidence-based programs designed to create lasting, sustainable change in underserved communities.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Sectors of Focus */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Sectors of Focus
            </Badge>
            <h2 className="heading-secondary">Our Key Focus Areas</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              We work across multiple sectors to address the diverse needs of underserved communities.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 ${sector.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <sector.icon className={`w-6 h-6 ${sector.color}`} />
                      </div>
                      <TrendingUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                        {sector.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                        {sector.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs pt-4 border-t border-border">
                      <div>
                        <div className="font-bold text-primary">{sector.stats.beneficiaries}</div>
                        <div className="text-muted-foreground">Beneficiaries</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary">{sector.stats.locations}</div>
                        <div className="text-muted-foreground">Locations</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary">{sector.stats.programs}</div>
                        <div className="text-muted-foreground">Programs</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="heading-secondary">How We Serve Communities</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              At Ayushman Foundation, we are dedicated to creating lasting change through a range of health and community support services.
            </p>
          </FadeInSection>

          <Tabs defaultValue="medical-camps" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-12">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="flex items-center space-x-2">
                  <service.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{service.title.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <FadeInSection>
                  <div className="space-y-12">
                    {/* Service Overview */}
                    <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
                      <CardContent className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                          <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center`}
                              >
                                <service.icon className={`w-8 h-8 ${service.color}`} />
                              </div>
                              <div>
                                <h3 className="heading-tertiary">{service.title}</h3>
                                <p className="text-muted-foreground">{service.description}</p>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                              <Button asChild>
                                <Link href="/volunteer">
                                  <Users className="w-4 h-4 mr-2" />
                                  Get Involved
                                </Link>
                              </Button>
                              <Button variant="outline" asChild>
                                <Link href="/contact">
                                  <ArrowRight className="w-4 h-4 mr-2" />
                                  Learn More
                                </Link>
                              </Button>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-background rounded-lg">
                              <div className="text-2xl font-bold text-primary">
                                <AnimatedCounter
                                  end={Number.parseInt(service.stats.beneficiaries.replace(/\D/g, ""))}
                                  suffix={service.stats.beneficiaries.replace(/\d/g, "")}
                                />
                              </div>
                              <div className="text-sm text-muted-foreground">Beneficiaries</div>
                            </div>
                            <div className="text-center p-4 bg-background rounded-lg">
                              <div className="text-2xl font-bold text-primary">
                                <AnimatedCounter
                                  end={Number.parseInt(service.stats.locations.replace(/\D/g, ""))}
                                  suffix={service.stats.locations.replace(/\d/g, "")}
                                />
                              </div>
                              <div className="text-sm text-muted-foreground">Locations</div>
                            </div>
                            <div className="text-center p-4 bg-background rounded-lg">
                              <div className="text-2xl font-bold text-primary">
                                <AnimatedCounter
                                  end={Number.parseInt(Object.values(service.stats)[2].replace(/\D/g, ""))}
                                  suffix={Object.values(service.stats)[2].replace(/\d/g, "")}
                                />
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {Object.keys(service.stats)[2].charAt(0).toUpperCase() + Object.keys(service.stats)[2].slice(1)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </FadeInSection>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Our Approach
            </Badge>
            <h2 className="heading-secondary">How We Work</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Our work is driven by empathy, guided by research, and supported by a strong network of volunteers and partners.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {howWeWork.map((step, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 text-center h-full">
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold text-primary">{step.step}</span>
                    </div>
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-serif font-semibold text-lg mb-2">{step.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Core Objectives
            </Badge>
            <h2 className="heading-secondary">Ayushman Village Program Focus</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Our program focuses on critical areas for the growth and well-being of communities.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreObjectives.map((objective, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <objective.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                        {objective.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                        {objective.description}
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
            <h2 className="heading-secondary text-primary-foreground">Ready to Make a Difference?</h2>
            <p className="body-large opacity-90 max-w-2xl mx-auto">
              Join thousands of supporters who are helping us transform communities across India. Every contribution counts.
            </p>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Programs
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/volunteer">
                  <Users className="w-5 h-5 mr-2" />
                  Volunteer Today
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}