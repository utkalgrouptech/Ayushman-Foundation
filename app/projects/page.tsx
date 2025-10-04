import { FadeInSection } from "@/components/fade-in-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Users,
  MapPin,
  Calendar,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  GraduationCap,
  Droplets,
  Building,
  Camera,
} from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const featuredProjects = [
    {
      id: "rural-health-rajasthan",
      title: "Rural Health Transformation - Rajasthan",
      category: "Healthcare",
      status: "Completed",
      duration: "2020-2023",
      location: "Rajasthan, India",
      beneficiaries: 15000,
      villages: 45,
      budget: "₹2.5 Crores",
      description:
        "A comprehensive healthcare initiative that established mobile clinics and telemedicine centers across 45 villages in rural Rajasthan.",
      image: "/project-rajasthan-health.jpg",
      icon: Stethoscope,
      color: "text-primary",
      bgColor: "bg-primary/10",
      outcomes: [
        "15,000+ patients treated",
        "45 villages covered",
        "85% reduction in preventable diseases",
        "12 permanent health workers trained",
      ],
      impact: {
        before: "Limited healthcare access, high infant mortality, preventable disease outbreaks",
        after: "24/7 telemedicine access, trained local health workers, 90% vaccination coverage",
      },
    },
    {
      id: "digital-education-bihar",
      title: "Digital Education Initiative - Bihar",
      category: "Education",
      status: "Ongoing",
      duration: "2022-2025",
      location: "Bihar, India",
      beneficiaries: 8000,
      villages: 30,
      budget: "₹1.8 Crores",
      description:
        "Establishing digital learning centers and providing technology access to students in underserved areas of Bihar.",
      image: "/project-bihar-education.jpg",
      icon: GraduationCap,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      outcomes: [
        "8,000+ students enrolled",
        "30 digital centers established",
        "95% improvement in literacy rates",
        "500+ teachers trained",
      ],
      impact: {
        before: "Low literacy rates, limited educational resources, high dropout rates",
        after: "Digital literacy programs, improved academic performance, reduced dropout by 70%",
      },
    },
    {
      id: "water-sanitation-mp",
      title: "Clean Water & Sanitation - Madhya Pradesh",
      category: "Community Development",
      status: "Completed",
      duration: "2019-2022",
      location: "Madhya Pradesh, India",
      beneficiaries: 12000,
      villages: 25,
      budget: "₹3.2 Crores",
      description:
        "Comprehensive water and sanitation infrastructure development project improving access to clean water and proper sanitation facilities.",
      image: "/project-mp-water.jpg",
      icon: Droplets,
      color: "text-accent",
      bgColor: "bg-accent/10",
      outcomes: [
        "12,000+ people with clean water access",
        "25 villages transformed",
        "100% reduction in waterborne diseases",
        "200+ sanitation facilities built",
      ],
      impact: {
        before: "Contaminated water sources, open defecation, frequent waterborne diseases",
        after: "Clean piped water, modern sanitation facilities, zero waterborne disease cases",
      },
    },
  ]

  const impactMetrics = [
    {
      category: "Healthcare",
      metrics: [
        { label: "Patients Treated", value: 50000, suffix: "+" },
        { label: "Health Camps", value: 500, suffix: "+" },
        { label: "Mobile Clinics", value: 25, suffix: "" },
        { label: "Telemedicine Centers", value: 100, suffix: "+" },
      ],
    },
    {
      category: "Education",
      metrics: [
        { label: "Students Supported", value: 15000, suffix: "+" },
        { label: "Scholarships Awarded", value: 2500, suffix: "+" },
        { label: "Learning Centers", value: 75, suffix: "" },
        { label: "Teachers Trained", value: 1200, suffix: "+" },
      ],
    },
    {
      category: "Community Development",
      metrics: [
        { label: "Families Empowered", value: 8000, suffix: "+" },
        { label: "Women Entrepreneurs", value: 1500, suffix: "+" },
        { label: "Water Projects", value: 150, suffix: "+" },
        { label: "Sanitation Facilities", value: 500, suffix: "+" },
      ],
    },
  ]

  const projectTimeline = [
    {
      year: "2024",
      projects: [
        "Solar Energy Initiative - Gujarat",
        "Mental Health Support Program - Kerala",
        "Skill Development Center - Uttar Pradesh",
      ],
    },
    {
      year: "2023",
      projects: [
        "Rural Health Transformation - Rajasthan (Completed)",
        "Women Empowerment Program - Haryana",
        "Digital Literacy Drive - Odisha",
      ],
    },
    {
      year: "2022",
      projects: [
        "Clean Water Project - Madhya Pradesh (Completed)",
        "Education Initiative - Bihar (Ongoing)",
        "Agricultural Training - Punjab",
      ],
    },
    {
      year: "2021",
      projects: [
        "COVID-19 Relief Operations - Multi-state",
        "Telemedicine Network Expansion",
        "Maternal Health Program - Assam",
      ],
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
                Projects & Impact
              </Badge>
              <h1 className="heading-primary text-foreground">
                Measurable Impact Through
                <span className="text-primary block">Strategic Projects</span>
              </h1>
              <p className="body-large text-muted-foreground max-w-3xl mx-auto">
                Discover how our targeted projects are creating lasting change across India. Each initiative is designed
                with clear objectives, measurable outcomes, and sustainable impact for the communities we serve.
              </p>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter end={75} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter end={200} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Villages Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter end={50} suffix="K+" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter end={15} suffix="" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">States Covered</div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Featured Projects
            </Badge>
            <h2 className="heading-secondary">Transformative Initiatives</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Explore our flagship projects that demonstrate our commitment to creating sustainable, measurable change.
            </p>
          </FadeInSection>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <FadeInSection key={project.id} delay={index * 200}>
                <Card className="border-0 bg-gradient-to-br from-card to-muted/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                    >
                      {/* Project Image */}
                      <div
                        className={`relative aspect-video lg:aspect-square ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div
                              className={`w-16 h-16 mx-auto ${project.bgColor} rounded-xl flex items-center justify-center`}
                            >
                              <project.icon className={`w-8 h-8 ${project.color}`} />
                            </div>
                            <div className="text-white">
                              <Camera className="w-8 h-8 mx-auto mb-2" />
                              <p className="text-sm">Project Documentation</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="p-8 lg:p-12 space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Badge variant="secondary" className="text-xs">
                              {project.category}
                            </Badge>
                            <Badge variant={project.status === "Completed" ? "default" : "outline"} className="text-xs">
                              {project.status}
                            </Badge>
                          </div>

                          <h3 className="heading-tertiary">{project.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>

                        {/* Project Stats */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{project.duration}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Users className="w-4 h-4" />
                              <span>{project.beneficiaries.toLocaleString()} beneficiaries</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Target className="w-4 h-4" />
                              <span>{project.budget}</span>
                            </div>
                          </div>
                        </div>

                        {/* Outcomes */}
                        <div className="space-y-3">
                          <h4 className="font-serif font-semibold text-lg">Key Outcomes</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.outcomes.map((outcome, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{outcome}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Before/After Impact */}
                        <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                          <h4 className="font-serif font-semibold text-sm">Impact Transformation</h4>
                          <div className="space-y-3">
                            <div>
                              <span className="text-xs font-medium text-destructive">Before:</span>
                              <p className="text-xs text-muted-foreground mt-1">{project.impact.before}</p>
                            </div>
                            <div>
                              <span className="text-xs font-medium text-primary">After:</span>
                              <p className="text-xs text-muted-foreground mt-1">{project.impact.after}</p>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full sm:w-auto" asChild>
                          <Link href={`/projects/${project.id}`}>
                            View Full Case Study
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Dashboard */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Impact Dashboard
            </Badge>
            <h2 className="heading-secondary">Measurable Results</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Our commitment to transparency means every project is measured against clear, quantifiable outcomes.
            </p>
          </FadeInSection>

          <Tabs defaultValue="Healthcare" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              {impactMetrics.map((category) => (
                <TabsTrigger key={category.category} value={category.category}>
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {impactMetrics.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <FadeInSection>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {category.metrics.map((metric, index) => (
                      <Card
                        key={index}
                        className="text-center border-0 bg-card/50 hover:shadow-lg transition-all duration-300"
                      >
                        <CardContent className="p-6 space-y-4">
                          <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-primary" />
                          </div>
                          <div className="text-3xl font-bold text-primary">
                            <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                          </div>
                          <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </FadeInSection>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Project Timeline
            </Badge>
            <h2 className="heading-secondary">Our Journey of Impact</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Track our progress over the years and see how we've expanded our reach and impact.
            </p>
          </FadeInSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {projectTimeline.map((yearData, index) => (
                <FadeInSection key={yearData.year} delay={index * 150}>
                  <div className="relative flex items-start">
                    {/* Year marker */}
                    <div className="absolute left-8 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="ml-20">
                      <Card className="border-0 bg-card/50 hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center space-x-3">
                            <Badge variant="secondary" className="text-sm font-bold">
                              {yearData.year}
                            </Badge>
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="space-y-2">
                            {yearData.projects.map((project, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{project}</span>
                              </div>
                            ))}
                          </div>
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

      {/* Geographic Impact */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Geographic Reach
            </Badge>
            <h2 className="heading-secondary">Nationwide Impact</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Our projects span across multiple states, reaching diverse communities with tailored solutions.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { state: "Rajasthan", projects: 15, beneficiaries: 18000, focus: "Healthcare & Water" },
              { state: "Bihar", projects: 12, beneficiaries: 15000, focus: "Education & Skills" },
              { state: "Madhya Pradesh", projects: 10, beneficiaries: 12000, focus: "Sanitation & Health" },
              { state: "Uttar Pradesh", projects: 8, beneficiaries: 10000, focus: "Women Empowerment" },
              { state: "Gujarat", projects: 6, beneficiaries: 8000, focus: "Renewable Energy" },
              { state: "Haryana", projects: 5, beneficiaries: 6000, focus: "Agriculture & Skills" },
            ].map((location, index) => (
              <FadeInSection key={location.state} delay={index * 100}>
                <Card className="border-0 bg-card/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif font-semibold text-lg">{location.state}</h3>
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Projects:</span>
                        <span className="font-medium">{location.projects}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Beneficiaries:</span>
                        <span className="font-medium">{location.beneficiaries.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Focus Areas:</span>
                        <span className="font-medium text-primary">{location.focus}</span>
                      </div>
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
            <h2 className="heading-secondary text-primary-foreground">Be Part of Our Next Project</h2>
            <p className="body-large opacity-90 max-w-2xl mx-auto">
              Help us expand our impact and reach more communities. Your support enables us to launch new projects and
              create lasting change.
            </p>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Fund a Project
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/partnerships">
                  <Building className="w-5 h-5 mr-2" />
                  Partner With Us
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
