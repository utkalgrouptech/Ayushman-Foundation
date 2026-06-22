"use client";

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
import { motion } from "framer-motion";
import Image from "next/image"
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

<section className="relative h-[350px] md:h-[450px] overflow-hidden">

  <Image
    src="/images/Aboutusbnr.png"
    alt="About Us"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10"
  >
    {/* Heading */}
    <motion.h1
      initial={{ letterSpacing: "20px", opacity: 0 }}
      animate={{ letterSpacing: "0px", opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="text-4xl md:text-6xl font-bold mb-4"
    >
      Our Programs
    </motion.h1>

    {/* Animated Line */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 80 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="h-[2px] bg-primary mb-5"
    />

    {/* Breadcrumb */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="flex items-center justify-center gap-2 text-white/80"
    >
      <Link href="/" className="hover:text-primary transition">
        Home
      </Link>
      <span>/</span>
      <span>Programs</span>
    </motion.div>
  </motion.div>

</section>


   
    </div>
  )
}