import { AnimatedCounter } from "@/components/animated-counter"
import { FadeInSection } from "@/components/fade-in-section"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { StatsCard } from "@/components/ui/stats-card"
import { ProgressBar } from "@/components/ui/progress-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  Star,
  Award,
  Globe,
  Shield,
  CheckCircle,
  TrendingUp,
  MapPin,
  Target,
  Eye,
  Activity,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

const iconMap = {
  stethoscope: Stethoscope,
  graduationCap: GraduationCap,
  mapPin: MapPin,
  star: Star,
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  <Award className="w-3 h-3 mr-1" />
                  15+ Years of Trusted Service
                </Badge>

                <h1 className="heading-primary text-foreground">
                  Transforming Lives Through
                  <span className="text-primary block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Healthcare & Hope
                  </span>
                </h1>

                <p className="body-large text-muted-foreground max-w-lg leading-relaxed">
  Ayushman Foundation is a non-profit organization dedicated to improving the lives of
  underserved communities across India by bridging the gap between healthcare,
  education, and social development. Established with a vision to create lasting impact,
  our foundation works at the grassroots level to ensure that every individual has the
  opportunity to lead a healthy, empowered, and dignified life.
  We believe that access to healthcare and education is not a privilege—it is a
  fundamental right. With this belief at our core, we collaborate with local
  communities, government bodies, healthcare professionals, and other NGOs to
  deliver meaningful interventions in areas such as:
</p>

<ol className="list-decimal list-inside body-large text-muted-foreground max-w-lg leading-relaxed mt-2">
  <li>Preventive and primary healthcare</li>
  <li>Health awareness and education campaigns</li>
  <li>Skill development and vocational training</li>
  <li>Support for vulnerable and marginalized populations</li>
  <li>Disaster response and medical relief</li>
</ol>

              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group hover:scale-105 transition-transform duration-200" asChild>
                  <Link href="/donate">
                    <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Donate Now
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:scale-105 transition-transform duration-200 bg-transparent"
                  asChild
                >
                  <Link href="/volunteer">
                    <Users className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Volunteer With Us
                  </Link>
                </Button>
              </div>

              {/* Enhanced Impact Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <FadeInSection delay={200} className="text-center group">
                  <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={50} suffix="K+" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Lives Impacted</div>
                </FadeInSection>
                <FadeInSection delay={400} className="text-center group">
                  <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={200} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Villages Served</div>
                </FadeInSection>
                <FadeInSection delay={600} className="text-center group">
                  <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={15} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Years of Service</div>
                </FadeInSection>
              </div>
            </FadeInSection>

            <FadeInSection delay={300} className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden">
                  <img
                    src="https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/474007802_590874457024960_7467717151280159714_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=q4RgcKtd5lkQ7kNvwH8MqZ5&_nc_oc=AdntXRzqHkDvoYJyC6HKKWLZSZv-CylVJXXxTUXkbRKkSN0bkQS82vBo_Lorq2yE0_WLjMnDWAwDTUOXrWTo10Y3&_nc_zt=23&_nc_ht=scontent.fbbi2-1.fna&_nc_gid=qpXTMuNvRmg9CcEkRuGAEw&oh=00_AfYkADxE5VZwvGwlOCnfHEoHpxxIgLzHS3zvpDMIcCWjhw&oe=68C47E0C"
                    alt="Ayushman Foundation healthcare workers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <div className="relative group">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <img
                      src="/Ayushman1.jpg"
                      alt="Medical team meeting"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="relative h-40 rounded-2xl overflow-hidden">
                      <img
                        src="/Ayushman4.jpg"
                        alt="Health camp setup"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="relative h-40 rounded-2xl overflow-hidden">
                      <img
                        src="/Ayushman3.jpg"
                        alt="Community education"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="space-y-6">
                <Badge variant="outline" className="mb-4">
                  About Us
                </Badge>
                <h2 className="heading-secondary">Our Mission & Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
To create a healthier, equitable, and empowered society where every individual,
 regardless of their socio-economic background, has the opportunity to live a life of dignity,
 good health, and hope.
                </p>
                <p className="text-muted-foreground leading-relaxed">
To serve humanity by ensuring accessible, affordable, and quality healthcare for all—
 especially the underprivileged—while promoting education, social awareness, and
 sustainable development to uplift communities and improve overall well-being.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-primary mr-2" />
                      <h4 className="font-semibold">Our Mission</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      To provide comprehensive healthcare services to underserved communities through innovative programs.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Eye className="w-5 h-5 text-primary mr-2" />
                      <h4 className="font-semibold">Our Vision</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A India where quality healthcare is accessible to all, creating healthier, thriving communities.
                    </p>
                  </div>
                </div>
                
                <Button className="mt-6 group" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">NGO Excellence Award</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">UN Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">80G Tax Exemption</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Enhanced Programs Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Our Impact Areas
            </Badge>
            <h2 className="heading-secondary">Comprehensive Care Programs</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              We focus on holistic healthcare, education, and community development to create sustainable, long-lasting
              change in underserved communities.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Healthcare Services",
                description:
                  "Mobile clinics, health camps, telemedicine, and preventive care programs reaching remote villages.",
                stats: "25K+ patients treated annually",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: GraduationCap,
                title: "Education Support",
                description:
                  "Scholarships, digital literacy, vocational training, and educational infrastructure development.",
                stats: "5K+ students supported",
                color: "text-secondary",
                bgColor: "bg-secondary/10",
              },
              {
                icon: Users,
                title: "Community Development",
                description: "Women empowerment, skill development, microfinance, and sustainable livelihood programs.",
                stats: "100+ communities empowered",
                color: "text-accent",
                bgColor: "bg-accent/10",
              },
            ].map((program, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-card/50 hover:bg-card h-full">
                  <CardContent className="p-8 space-y-6 h-full flex flex-col">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-14 h-14 rounded-xl ${program.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <program.icon className={`w-7 h-7 ${program.color}`} />
                      </div>
                      <TrendingUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>

                    <div className="space-y-3 flex-grow">
                      <h3 className="heading-tertiary group-hover:text-primary transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="text-sm font-semibold text-primary">{program.stats}</div>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto font-medium text-primary hover:text-primary/80 group/btn"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Impact Showcase */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Real Impact
            </Badge>
            <h2 className="heading-secondary">Measurable Change Across India</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Our data-driven approach ensures every rupee donated creates maximum impact in the communities we serve.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <FadeInSection delay={0}>
              <StatsCard
                icon={iconMap["stethoscope"]}
                title="Medical Consultations"
                value="25,000+"
                description="Annual healthcare services provided"
                trend={{ value: 15, label: "vs last year" }}
                color="emerald"
              />
            </FadeInSection>
            <FadeInSection delay={150}>
              <StatsCard
                icon={iconMap["graduationCap"]}
                title="Students Educated"
                value="5,000+"
                description="Scholarships and educational support"
                trend={{ value: 22, label: "vs last year" }}
                color="blue"
              />
            </FadeInSection>
            <FadeInSection delay={300}>
              <StatsCard
                icon={iconMap["mapPin"]}
                title="Villages Transformed"
                value="150+"
                description="Communities with active programs"
                trend={{ value: 8, label: "new this year" }}
                color="orange"
              />
            </FadeInSection>
            <FadeInSection delay={450}>
              <StatsCard
                icon={iconMap["star"]}
                title="Satisfaction Rate"
                value="98%"
                description="Beneficiary satisfaction score"
                trend={{ value: 3, label: "improvement" }}
                color="blue"
              />
            </FadeInSection>
          </div>

          <FadeInSection delay={600}>
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="heading-tertiary mb-2">2024 Goals Progress</h3>
                  <p className="text-muted-foreground">Tracking our annual objectives</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-emerald-600" />
                      <span className="font-medium">Healthcare Outreach</span>
                    </div>
                    <ProgressBar value={75} label="30,000 consultations target" color="emerald" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Education Support</span>
                    </div>
                    <ProgressBar value={60} label="7,000 students target" color="blue" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-orange-600" />
                      <span className="font-medium">Community Programs</span>
                    </div>
                    <ProgressBar value={85} label="200 villages target" color="orange" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </section> */}

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Community Voices
            </Badge>
            <h2 className="heading-secondary">Stories of Transformation</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Real stories from the communities and volunteers whose lives have been transformed through our programs.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0}>
              <TestimonialCard
                name="Priya Sharma"
                content="The mobile clinic brought hope to our village. My daughter received life-saving treatment that wouldn't have been possible otherwise. The doctors were so caring and professional."
                rating={5}
                avatar="/indian-woman-smiling.png"
              />
            </FadeInSection>

            <FadeInSection delay={200}>
              <TestimonialCard
                name="Dr. Rajesh Kumar"
                content="Working with Ayushman Foundation has been incredibly fulfilling. The impact we create together in underserved communities is remarkable. Every patient story motivates me."
                rating={5}
                avatar="/indian-doctor-male.png"
              />
            </FadeInSection>

            <FadeInSection delay={400}>
              <TestimonialCard
                name="Meera Patel"
                content="The scholarship program changed my life trajectory. I'm now a teacher, giving back to my community just like Ayushman Foundation gave to me. Education truly transforms lives."
                rating={5}
                avatar="/indian-female-teacher.png"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative">
          <FadeInSection>
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Join Our Mission
            </Badge>
            <h2 className="heading-secondary text-primary-foreground">Together, We Can Transform Lives</h2>
            <p className="body-large opacity-90 max-w-2xl mx-auto leading-relaxed">
              Every contribution, whether time or resources, helps us reach more communities and save more lives. Be
              part of our mission to create a healthier, more equitable India.
            </p>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="group hover:scale-105 transition-all duration-200 bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/donate">
                  <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Make a Donation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all duration-200 hover:scale-105"
                asChild
              >
                <Link href="/volunteer">
                  <Users className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Become a Volunteer
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
