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

  const programs = [
  {
    title: "Women Empowerment & Sustainable Livelihoods",
    location: "Keonjhar",
    image: "/images/women.png",
    category: "Women Empowerment",
    desc: "Formation and nurturin of Self-Help Groups (SHGs) and Women-led Producer Companies.",
  },
  {
    title: "Skill Development & Entrepreneurship",
    location: "Nayagarh",
    image: "/images/img15.jpeg",
    category: "Skill",
    desc: "Market-relevant vocational training ,Entrepreneurship development programs,Successful job placement support",
  },
  {
    title: "Health, Nutrition & Hygiene",
    location: "Bhubaneswar",
    image: "/images/health1.png",
    category: "Health",
    desc: "Community health awareness, mobile health camps, menstrual hygiene management, nutrition support & kitchen garden initiatives,Waste-to-Wealth programs",
  },
  {
    title: "Education & Youth Development",
    location: "Nayagarh",
    image: "/images/Education1.jpeg",
    category: "Youth Development",
    desc: "Support to underprivileged children,Digital literacy for youth and women",
  },
  {
    title: "Environment & Climate Action",
    location: "Odisha",
    image: "/images/cleanodisha.jpeg",
    category: "Livelihood",
    desc: "Massive tree plantations,Cleanliness drives & waste management,Climate-resilient livelihood models",
  },
  {
    title: "Institutional Building",
    location: "Bhubaneswar",
    image: "/images/community1.jpeg",
    category: "Community Support",
    desc: "Strengthening community institutions,Convergence with government schemes (NABARD, MSME, TRIFED, ORMAS, PM Vishwakarma, etc.)",
  },
   {
    title: "Ayushman Pathsala",
    location: "Bhubaneswar",
    image: "/images/Ayushman_Pathshala_compressed_page-0001.jpg",
    category: "Education Initiative",
    desc: "Empowering children and youth through quality education, digital learning, personality development, career mentoring, and skill enhancement to create confident and self-reliant future leaders.",
  },
];

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

{/* ================= PROGRAMS SECTION ================= */}

<section className="relative py-15 bg-[#F8FAFC] overflow-hidden">

  {/* Background Blur */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0B5D4D]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#144D7A]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

  <div className="relative z-10 max-w-[1320px] mx-auto px-6">

 <div className="text-center mb-16">

  {/* Small Tag */}
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B5D4D]/10 border border-[#0B5D4D]/20 mb-4">
    <div className="w-2 h-2 rounded-full bg-[#0B5D4D]" />
    <span className="text-[#0B5D4D] font-semibold tracking-wide text-xs uppercase">
      Our Initiatives
    </span>
  </div>

  {/* Main Heading */}
  <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111827] leading-tight">
    Transforming Lives Through
    <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#0B5D4D] to-[#144D7A]">
      Programs & Projects
    </span>
  </h2>

  {/* Divider */}
  <div className="flex justify-center mt-4 mb-4">
    <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-[#0B5D4D] to-[#144D7A]" />
  </div>

  {/* Description */}
  <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
    Creating sustainable impact through women empowerment,
    livelihood generation, healthcare, education and
    community development initiatives.
  </p>

</div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {programs.map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-[28px] overflow-hidden border border-gray-200 hover:border-[#0B5D4D]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2"
        >

          {/* Image */}
          <div className="relative h-[260px] overflow-hidden">

            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <span className="absolute top-5 left-5 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full text-sm font-semibold text-[#0B5D4D]">
              {item.category}
            </span>

          </div>

          {/* Content */}
          <div className="p-7">

            <h3 className="text-[26px] font-bold text-[#111827] leading-tight mb-4 group-hover:text-[#0B5D4D] transition">
              {item.title}
            </h3>

            <div className="flex items-center gap-2 text-[#D62828] font-medium mb-4">
              <MapPin size={16} />
              <span>{item.location}</span>
            </div>

            <p className="text-gray-600 leading-relaxed min-h-[96px]">
              {item.desc}
            </p>

            <button className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#0B5D4D] text-[#0B5D4D] font-semibold hover:bg-[#0B5D4D] hover:text-white transition-all duration-300">
              Read More
              <ArrowRight size={16} />
            </button>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>
   
    </div>
  )
}