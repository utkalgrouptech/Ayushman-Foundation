"use client";
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
 
    Briefcase,
  HeartPulse,
  
  Building2,
   
  ShieldCheck,
  Handshake,
  BadgePercent,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"

const iconMap = {
  stethoscope: Stethoscope,
  graduationCap: GraduationCap,
  mapPin: MapPin,
  star: Star,
}
const slides = [
  {
    image: "/images/Ayushman_banner_1.png",
    title: "Lives Across India",
    subtitle: "Healthcare, Education & Social Development for All",
     buttons: [
      { label: "Join Us", link: "/join", style: "primary" },
      { label: "Donate", link: "/donate", style: "secondary" },
    ],
  },
  {
    image: "/images/Ayushman_Healthcare.png",
    title: "for Every Life",
    subtitle: "Free medical camps & health awareness in rural areas",
     buttons: [
      { label: "Support Healthcare", link: "/health-camps", style: "primary" },
      
    ],
  },
  {
    image: "/images/Education.png",
    title: "Changes Everything",
    subtitle: "Helping children learn,grow, and build a better future",
     buttons: [
      { label: "Support Education", link: "/education", style: "primary" },
   
    ],
  },
  {
    image: "/images/healthy.png" ,
    title: "Healthy Lives",
    subtitle: "Providing safe drinking water and hygiene awareness",
     buttons: [
      { label: "Donate", link: "/donate", style: "primary" },
   
    ],
  },
  {
    image: "/images/strength.png" ,
    title: "Strengthening Families",
    subtitle: "Skill training & health awareness Programs",
     buttons: [
      { label: "Get Involved", link: "/donate", style: "primary" },
   
    ],
  },
  {
    image: "/images/Together.png",
    title: "Be the Change",
    subtitle: "Join us in making a difference",
    buttons: [
      { label: "Volunteer / Donate", link: "/donate", style: "primary" },
   
    ],
  },
]
// images array add karo
const partnerImages = [
  "/images/partner1.png",
  "/images/partner2.png",
  "/images/partner3.png",
  "/images/partner4.png",
  "/images/partner5.png",
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HomePage() {
    const [current, setCurrent] = useState(0)
      const [showMore, setShowMore] = useState(false)
      const [scrollIndex, setScrollIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
  const interval = setInterval(() => {
    setScrollIndex((prev) => (prev + 1) % partnerImages.length)
  }, 2200)

  return () => clearInterval(interval)
}, [])
  return (
    <div className="min-h-screen">

{/* 🔥 New Banner Section */}
 <section className="relative w-full h-[85vh] overflow-hidden">
      
      {/* Images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Content (same rahega) */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 h-full flex items-center">
       <AnimatePresence mode="wait">
  <motion.div
    key={current}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.8 }}
    className="text-white"
  >

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "84.9px",
        lineHeight: "1.05",
        fontWeight: "700",
      }}
      className="mb-4"
    >
      {slides[current].title.split(" ").slice(0, 2).join(" ")}
      <br />
      {slides[current].title.split(" ").slice(2).join(" ")}
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      style={{
        fontFamily: "Nunito, sans-serif",
        fontSize: "16.5px",
      }}
      className="text-gray-200 mb-6"
    >
      {slides[current].subtitle}
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="flex gap-4"
    >
      {slides[current].buttons.map((btn, i) => (
        <a key={i} href={btn.link}>
          <button
            className={
              btn.style === "primary"
                ? "bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 px-7 py-3 rounded-md"
                : "bg-red-500 hover:bg-red-600 transition-all duration-300 hover:scale-105 px-7 py-3 rounded-md"
            }
          >
            {btn.label}
          </button>
        </a>
      ))}
    </motion.div>

  </motion.div>
</AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === i ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </section>
 <section className="w-full py-14 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Label */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-[2px] bg-red-600" />
            <span className="uppercase text-xs font-semibold tracking-[3px] text-red-600">
              About Us
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-[#111827] leading-tight max-w-4xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ayushman Foundation
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-3 text-lg text-gray-500 italic max-w-3xl"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Empowering marginalized communities through sustainable
            development and lasting social impact.
          </motion.p>

          {/* Focus Areas */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-2 mt-5 mb-6"
          >
            {[
              "Women Empowerment",
              "Education",
              "Health & Nutrition",
              "Skill Development",
              "Environment",
            ].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                className="px-3 py-1.5 rounded-full bg-white text-sm text-gray-700 border border-gray-200 hover:border-red-200 transition-all cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeUp}
            className="max-w-4xl"
          >
            <p
              className="text-gray-700 leading-7 text-[16px] mb-4"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Ayushman Foundation is a dynamic, non-profit organization
              registered under the Section 8 Company Act, 2013 dedicated
              to the holistic empowerment of marginalized and underserved
              communities across Odisha and beyond.
            </p>

            <p
              className="text-gray-700 leading-7 text-[16px]"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Established with a vision to create sustainable, dignified,
              and empowered lives, the Foundation works at the grassroots
              level with a strong focus on women empowerment, sustainable
              livelihoods, skill development, health & nutrition,
              education, and environmental conservation.
            </p>
          </motion.div>

          {/* Read More Button */}
          <motion.div
            variants={fadeUp}
            className="mt-6"
          >
            <motion.a
              href="/about"
              whileHover={{
                x: 8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="inline-flex items-center gap-2 text-red-600 font-semibold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Read More

              <motion.span
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-lg"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
<section className="w-full bg-[#F7F8F5] py-14 overflow-hidden">
  <div className="max-w-[1280px] mx-auto px-5 lg:px-[60px]">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <div className="relative z-10">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-[#EEF5EF] px-4 py-2 rounded-full mb-5">
          <div className="w-3 h-3 rounded-full bg-[#16A34A]" />
          <span className="text-[#15803D] font-semibold text-[12px]">
            Our Purpose
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[#06113C] text-[42px] leading-[1.05] font-bold tracking-[-1px] mb-4">
          Our Mission <span className="text-[#16A34A]">&</span>
          <br />
          Vision
        </h2>

        {/* Small Line */}
        <div className="w-[55px] h-[3px] bg-[#16A34A] rounded-full mb-6" />

        {/* Content Block 1 */}
        <div className="flex items-start gap-4 mb-7">

          {/* Icon Circle */}
          <div className="min-w-[55px] h-[55px] rounded-full bg-[#EAF6EC] flex items-center justify-center">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="#16A34A"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>

          <div>
            <p className="text-[#222] text-[14px] leading-[1.9] max-w-[500px]">
              To build an equitable and inclusive society where every individual — especially women, youth, and tribal communities — has equal access to opportunities for growth,{" "}
              <span className="text-[#16A34A] font-semibold">
               dignity,
              </span>{" "}
              and{" "}
              <span className="text-[#16A34A] font-semibold">
                prosperity.
              </span>
            </p>
          </div>
        </div>

     

        {/* Bottom Mission Card */}
        <div className="border-t border-[#D9E2DC] pt-6 flex items-start gap-4">

          <div className="min-w-[65px] h-[65px] rounded-full bg-[#EDF4FF] flex items-center justify-center shadow-sm">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>

          <div>
            <h3 className="text-[#1456D9] text-[24px] font-bold mb-2">
              Our Mission
            </h3>

            <p className="text-[#222] text-[14px] leading-[1.8] max-w-[470px]">
             To empower marginalized communities through integrated interventions in livelihood promotion, skill enhancement, health & hygiene, education, and environmental sustainability, while fostering strong community institutions and market-driven enterprises.
            </p>
          </div>
        </div>
      </div>

     {/* RIGHT SIDE */}
<div className="relative h-[520px] flex items-center justify-end">

  {/* BIG LIGHT SHAPE */}
  <div className="absolute top-[-20px] right-[60px] w-[420px] h-[420px] bg-[#EAF1FF] rounded-[45%] rotate-[12deg]" />

  

  {/* MAIN BIG IMAGE */}
  <div className="absolute top-[10px] right-[80px] w-[390px] h-[390px] rounded-[45%] overflow-hidden border-[8px] border-white shadow-xl z-20">

    <img
      src="/images/missionimg.jpeg"
      alt="Main"
      className="w-full h-full object-cover"
    />

  </div>

  {/* TOP RIGHT SMALL IMAGE */}
  <div className="absolute top-[40px] right-[10px] w-[150px] h-[150px] rounded-full overflow-hidden border-[7px] border-white shadow-lg z-30">

    <img
      src="/images/community.jpeg"
      alt="Community"
      className="w-full h-full object-cover"
    />

  </div>

  {/* BOTTOM RIGHT SMALL IMAGE */}
  <div className="absolute bottom-[60px] right-[0px] w-[170px] h-[170px] rounded-full overflow-hidden border-[7px] border-white shadow-lg z-30">

    <img
      src="/images/health.jpg"
      alt="Health"
      className="w-full h-full object-cover"
    />

  </div>

  {/* CENTER ICON */}
  <div className="absolute bottom-[135px] right-[145px] w-[70px] h-[70px] rounded-full bg-white shadow-xl flex items-center justify-center z-40">

    <div className="w-[48px] h-[48px] rounded-full bg-[#F2F7FF] flex items-center justify-center">

      <svg
        width="26"
        height="26"
        fill="none"
        stroke="#16A34A"
        strokeWidth="2.3"
        viewBox="0 0 24 24"
      >
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" />
      </svg>

    </div>

  </div>



</div>

    </div>
  </div>
</section>

  <section className="relative py-10 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <FadeInSection>
      <div className="relative overflow-hidden rounded-[26px] bg-white border border-[#edf2f7] shadow-[0_8px_30px_rgba(0,0,0,0.05)]">

        {/* LEFT SOFT SHAPE */}
        <div className="absolute left-0 bottom-0 w-[220px] h-[120px] bg-[#eef5ff] rounded-tr-[100px] opacity-80" />

        {/* RIGHT TRIANGLE */}
        <div className="absolute right-0 top-0 w-[180px] h-[120px] bg-[#eef5ff] clip-path-diagonal opacity-80" />

        {/* LEFT DOTS */}
        <div className="absolute left-5 top-5 hidden lg:grid grid-cols-4 gap-2 opacity-40">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="w-[4px] h-[4px] rounded-full bg-[#cfe0ff]"
            />
          ))}
        </div>

        {/* RIGHT DOTS */}
        <div className="absolute right-5 bottom-5 hidden lg:grid grid-cols-4 gap-2 opacity-40">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="w-[4px] h-[4px] rounded-full bg-[#cfe0ff]"
            />
          ))}
        </div>

        <div className="relative grid grid-cols-2 lg:grid-cols-4">

     {/* ITEM 1 */}
<div className="relative flex flex-col items-center text-center px-5 py-8">
  <div className="w-[72px] h-[72px] rounded-full border border-[#d7e6ff] bg-[#f5f9ff] flex items-center justify-center mb-4">
    <Building2 className="w-8 h-8 text-[#2454d3] stroke-[2]" />
  </div>

  <h3 className="text-[17px] font-semibold text-[#111827] leading-tight">
    Section 8 Company
  </h3>

  <p className="mt-2 text-[13px] leading-6 text-[#6b7280] max-w-[190px]">
    Registered non-profit organization
  </p>

  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[90px] bg-[#e5e7eb]" />
</div>

{/* ITEM 2 */}
<div className="relative flex flex-col items-center text-center px-5 py-8">
  <div className="w-[72px] h-[72px] rounded-full border border-[#d7e6ff] bg-[#f5f9ff] flex items-center justify-center mb-4">
    <ShieldCheck className="w-8 h-8 text-[#2454d3] stroke-[2]" />
  </div>

  <h3 className="text-[17px] font-semibold text-[#111827] leading-tight">
    ISO Certified
  </h3>

  <p className="mt-2 text-[13px] leading-6 text-[#6b7280] max-w-[190px]">
    Commitment to quality standards
  </p>

  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[90px] bg-[#e5e7eb]" />
</div>

{/* ITEM 3 */}
<div className="relative flex flex-col items-center text-center px-5 py-8">
  <div className="w-[72px] h-[72px] rounded-full border border-[#d7e6ff] bg-[#f5f9ff] flex items-center justify-center mb-4">
    <Handshake className="w-8 h-8 text-[#2454d3] stroke-[2]" />
  </div>

  <h3 className="text-[17px] font-semibold text-[#111827] leading-tight">
    CSR Partner
  </h3>

  <p className="mt-2 text-[13px] leading-6 text-[#6b7280] max-w-[190px]">
    Trusted CSR implementation agency
  </p>

  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[90px] bg-[#e5e7eb]" />
</div>

{/* ITEM 4 */}
<div className="relative flex flex-col items-center text-center px-5 py-8">
  <div className="w-[72px] h-[72px] rounded-full border border-[#d7e6ff] bg-[#f5f9ff] flex items-center justify-center mb-4">
    <BadgePercent className="w-8 h-8 text-[#2454d3] stroke-[2]" />
  </div>

  <h3 className="text-[17px] font-semibold text-[#111827] leading-tight">
    80G Tax Benefit
  </h3>

  <p className="mt-2 text-[13px] leading-6 text-[#6b7280] max-w-[190px]">
    Eligible for tax exemption benefits
  </p>
</div>
        </div>
      </div>
    </FadeInSection>
  </div>

  <style jsx>{`
    .clip-path-diagonal {
      clip-path: polygon(100% 0, 0 0, 100% 100%);
    }
  `}</style>
</section>

{/* ================= EXACT OUR IMPACT SECTION ================= */}
<section className="relative w-full bg-[#F3F3F3] overflow-hidden">

  {/* TOP SPACING */}
  <div className="pt-[74px]" />

  {/* HEADING AREA */}
  <div className="flex items-start">

    {/* LEFT HEADING */}
    <div className="ml-[78px]">
      <h2
        className="text-[#020B2D]"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "50px",
          fontWeight: "700",
          lineHeight: "0.92",
          letterSpacing: "-1px",
        }}
      >
        Our Impact
      </h2>
    </div>

    {/* RIGHT TEXT */}
    <div className="ml-[70px] mt-[8px]">
      <p
        className="text-[#111827] max-w-[770px]"
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "20px",
          lineHeight: "1.34",
          fontWeight: "400",
        }}
      >
        Every number represents a life touched, a family
        supported, and a community uplifted through our
        continuous efforts.
      </p>
    </div>
  </div>

  {/* IMAGES + BRUSH AREA */}
  <div className="relative mt-[58px] h-[470px] overflow-hidden">

    {/* BLUE BRUSH */}
    <img
      src="/images/blue-brush.png"
      alt=""
      className="absolute left-0 bottom-0 w-full h-[464px] object-cover z-0"
    />

    {/* FIRST IMAGE */}
    <div className="absolute left-[101px] top-0 z-20">
      <div className="w-[300px] h-[308px] rounded-[22px] overflow-hidden">
        <img
          src="/images/impact1.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="mt-[83px] ml-[12px]">
        <h3
          className="text-white"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "1",
          }}
        >
          50K+
        </h3>

        <p
          className="text-white mt-[4px]"
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "23px",
            fontWeight: "400",
            lineHeight: "1.15",
          }}
        >
          Lives Impacted
        </p>
      </div>
    </div>

    {/* SECOND IMAGE */}
    <div className="absolute left-[543px] top-0 z-20">
      <div className="w-[300px] h-[308px] rounded-[22px] overflow-hidden">
        <img
          src="/images/img10.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="mt-[83px] ml-[12px]">
        <h3
          className="text-white"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "1",
          }}
        >
          200+
        </h3>

        <p
          className="text-white mt-[4px]"
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "23px",
            fontWeight: "400",
            lineHeight: "1.15",
          }}
        >
          Villages Served
        </p>
      </div>
    </div>

    {/* THIRD IMAGE PARTIAL */}
    <div className="absolute left-[945px] top-0 z-20">
      <div className="w-[300px] h-[308px] rounded-[22px] overflow-hidden">
        <img
          src="/images/img9.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="mt-[83px] ml-[12px]">
        <h3
          className="text-white"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "1",
          }}
        >
          06+
        </h3>

        <p
          className="text-white mt-[4px]"
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "22px",
            fontWeight: "400",
            lineHeight: "1.15",
          }}
        >
          Years of Service
        </p>
      </div>
    </div>

  </div>
</section>

      {/* Enhanced Programs Section */}
 <section className="relative py-14 overflow-hidden bg-white">
  {/* Soft Decorative Shape */}
  <div className="absolute top-0 left-0 w-44 h-44 bg-[#eef5e8] rounded-full opacity-50 -translate-x-20 -translate-y-20" />

  {/* Small Decorative Leaf */}
  <div className="absolute left-0 top-24 opacity-20 hidden lg:block">
    <img
      src="/images/leaf-line.png"
      alt="H"
      className="w-28"
    />
  </div>

  {/* Right Corner Image */}
  <div className="absolute top-0 right-0 hidden xl:block">
    <div className="relative">
      <div className="w-[240px] h-[170px] overflow-hidden rounded-bl-[80px] ">
        <img
          src="/images/corner.png"
          alt="ngo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

   
  {/* Heading */}
<FadeInSection className="text-center mb-10">
  <div className="flex justify-center mb-4">
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#d7decf] bg-[#f4f7ef]">
      <Leaf className="w-4 h-4 text-[#2d6a4f]" />

      <span className="text-[13px] font-medium text-[#2d6a4f]">
        Key Focus Areas & Expertise
      </span>
    </div>
  </div>

  <h2 className="text-3xl md:text-3xl font-bold text-[#0b1633] leading-tight">
    Empowering Communities Through Sustainable Development
  </h2>

  <div className="w-16 h-[3px] bg-[#7fb069] rounded-full mx-auto mt-4 mb-5" />

  <p className="max-w-3xl mx-auto text-[15px] leading-7 text-[#6b7280]">
    Ayushman Foundation works across women empowerment,
    entrepreneurship, health, education, environmental sustainability,
    and institutional strengthening to create long-term community impact.
  </p>
</FadeInSection>

    {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

     {[
  {
    icon: Users,
    title: "Women Empowerment & Sustainable Livelihoods",
    description:
      "Formation and nurturin of Self-Help Groups (SHGs) and Women-led Producer Companies.Revival and upgradation of traditional crafts: Appliqué & Embroidery, Jute handicrafts, and GI-tagged products. ",
    stats: "SHGs",
    sub: "women-led initiatives",
    color: "#C62828",
    bg: "#FFF1F1",
    image: "/images/women.png",
  },

  {
    icon: Briefcase,
    title: "Skill Development & Entrepreneurship",
    description:
      "Market-relevant vocational training ,Entrepreneurship development programs,Successful job placement support",
    stats: "Skills",
    sub: "training & enterprise support",
    color: "#2457C5",
    bg: "#EEF3FF",
    image: "/images/img15.jpeg",
  },

  {
    icon: HeartPulse,
    title: "Health, Nutrition & Hygiene",
    description:
      "Community health awareness, mobile health camps, menstrual hygiene management, nutrition support & kitchen garden initiatives,Waste-to-Wealth programs",
    stats: "Health",
    sub: "well-being programs",
    color: "#8E24AA",
    bg: "#F7EEFF",
    image: "/images/health1.png",
  },

  {
    icon: GraduationCap,
    title: "Education & Youth Development",
    description:
      "Support to underprivileged children,Digital literacy for youth and women",
    stats: "Youth",
    sub: "education support",
    color: "#2F7D32",
    bg: "#EDF7EA",
    image: "/images/Education1.jpeg",
  },

  {
    icon: Leaf,
    title: "Environment & Climate Action",
    description:
      "Massive tree plantations,Cleanliness drives & waste management,Climate-resilient livelihood models",
    stats: "Green",
    sub: "environment initiatives",
    color: "#0F9D58",
    bg: "#ECFDF3",
    image: "/images/environment.jpg",
  },

  {
    icon: Building2,
    title: "Institutional Building",
    description:
      "Strengthening community institutions,Convergence with government schemes (NABARD, MSME, TRIFED, ORMAS, PM Vishwakarma, etc.)",
    stats: "Govt",
    sub: "institutional partnerships",
    color: "#EA7B16",
    bg: "#FFF3EA",
    image: "/images/community1.jpeg",
  },
].map((program, index) => (
        <FadeInSection key={index} delay={index * 100}>
       <Card className="overflow-hidden border border-[#efefef] rounded-[20px] shadow-sm hover:shadow-xl transition-all duration-300 bg-white group max-w-[360px] mx-auto">

  {/* Image */}
  <div className="relative px-3 pt-3">

    <div className="relative overflow-hidden rounded-[14px]">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-[155px] object-cover"
      />

  <svg
  className="absolute bottom-0 left-0 w-full"
  viewBox="0 0 500 60"
  preserveAspectRatio="none"
>
  <path
    d="M0,35 
       C120,75 250,5 500,38 
       L500,60 
       L0,60 Z"
    fill={program.bg}
  />
</svg>
    </div>

    {/* Floating Icon */}
    <div
      className="absolute bottom-[-12px] left-7 w-14 h-14 rounded-full flex items-center justify-center shadow-md border-[3px]"
      style={{
        background: "#fff",
        borderColor: program.bg,
      }}
    >
      <program.icon
        className="w-5 h-5"
        style={{ color: program.color }}
      />
    </div>
  </div>

  {/* Content */}
  <CardContent className="px-6 pt-8 pb-5">

    {/* Title */}
    <h3
      className="text-[20px] leading-snug font-bold mb-2"
      style={{
        color: program.color,
        fontFamily: "Georgia, serif",
      }}
    >
      {program.title}
    </h3>

    {/* Small Line */}
    <div
      className="w-8 h-[2px] rounded-full mb-3"
      style={{ background: program.color }}
    />

    {/* Description */}
    <p className="text-[14px] leading-7 text-[#6b7280] mb-5">
      {program.description}
    </p>

    {/* Stats */}
    <div
      className="rounded-2xl px-4 py-3 flex items-center gap-3 mb-5"
      style={{ background: program.bg }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
        style={{ background: program.color }}
      >
        <program.icon className="w-4 h-4" />
      </div>

      <div>
        <div
          className="text-[28px] font-bold leading-none"
          style={{ color: program.color }}
        >
          {program.stats}
        </div>

        <div className="text-[12px] text-[#4b5563] mt-1">
          {program.sub}
        </div>
      </div>
    </div>

    {/* Button */}
    <Button
      variant="ghost"
      className="p-0 h-auto text-[14px] font-semibold hover:bg-transparent"
      style={{ color: program.color }}
    >
      Learn More
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
    </Button>

  </CardContent>
</Card>
        </FadeInSection>
      ))}
    </div>

   {/* Bottom Text */}
<div className="mt-10 text-center">

  {/* Decorative Line */}
  <div className="flex justify-center mb-3">
    <div className="relative flex items-center">
      <div className="w-16 h-[1.5px] bg-[#b7c9b0]" />

      <div className="mx-3 text-[#7fb069] text-2xl">
        ♡
      </div>

      <div className="w-16 h-[1.5px] bg-[#b7c9b0]" />
    </div>
  </div>

  <p className="text-[#2f7d32] italic text-[18px] font-medium">
    Together, we build stronger communities and brighter futures.
  </p>
</div>

  </div>
</section>

{/* <section className="relative w-full overflow-hidden  bg-[#FFE500]">

  <div className="absolute bottom-0 left-0 w-full z-0">
    <img
      src="/images/yellow-brush-bottom.png"
      alt=""
      className="w-full object-cover"
    />
  </div>

  <div className="relative z-10 max-w-[1350px] mx-auto ">

    
    <h2
      className="text-[#06163A] mb-[55px]"
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "50px",
        fontWeight: "700",
        lineHeight: "1",
      }}
    >
      Our Roots
    </h2>

    
    <div className="relative h-[520px]">

     
      <div className="absolute left-[20px] bottom-[89px] z-10">

        <div className="w-[430px] bg-[#ffffff] rounded-[22px] px-[34px] pt-[62px] pb-[39px] relative">

         
          <div className="absolute left-[28px] top-[5px] text-black text-[95px] leading-none font-serif">
            “
          </div>

          <h3
            className="text-[#06163A]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            Suresh Mishra
          </h3>

          <p
            className="text-[#06163A] mt-1"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            CMD, Ayushman Foundation
          </p>

          <p
            className="text-[#111827] mt-5"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
              lineHeight: "1.55",
              fontWeight: "400",
            }}
          >
            At Ayushman Foundation, we are committed to empowering
            lives through healthcare, education, and community
            support. Together, we can create a healthier and more
            inclusive society.
          </p>
        </div>
      </div>

      
      <div className="absolute right-[40px] top-[20px] z-20">

        <div className="relative w-[691px] bg-[#ffffff] rounded-[22px] px-[52px] pt-[55px] pb-[36px]">

         
          <div className="absolute left-[42px] top-[10px] text-black text-[120px] leading-none font-serif">
            “
          </div>

         
          <div className="max-w-[399px]">

            <h3
              className="text-[#06163A]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              Suresh Mishra
            </h3>

            <p
              className="text-[#06163A] mt-1"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "19px",
                fontWeight: "500",
              }}
            >
              CMD, Ayushman Foundation
            </p>

            <p
              className="text-[#111827] mt-6"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "18px",
                lineHeight: "1.65",
                fontWeight: "400",
              }}
            >
              At Ayushman Foundation, we are committed to empowering
              lives through healthcare, education, and community
              support. Together, we can create a healthier and more
              inclusive society.
            </p>
          </div>

          
          <div className="absolute right-[-100px] top-[-140px]">

          
            <div className="absolute w-[260px] h-[260px]  rounded-full blur-[60px] opacity-70 top-[110px] left-[40px]" />

            <img
              src="/images/founder.png"
              alt="Founder"
              className="relative h-[432px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]"
            />
          </div>

        </div>
      </div>

    </div>
  </div>
</section> */}

{/* <section className="relative py-[70px] bg-[#FBFBF8] overflow-hidden">
 
  <div className="hidden 2xl:block">
    <img
      src="images/v1.png"
      alt=""
      className="absolute left-0 top-0 w-[190px]"
    />

    <img
      src="/left-bottom.png"
      alt=""
      className="absolute left-0 bottom-0 w-[190px]"
    />

    <img
      src="/right-top.png"
      alt=""
      className="absolute right-0 top-0 w-[190px]"
    />

    <img
      src="/right-bottom.png"
      alt=""
      className="absolute right-0 bottom-0 w-[190px]"
    />
  </div>

  <div className="max-w-[1280px] mx-auto px-6 relative z-10">
   
    <div className="text-center mb-[55px]">
      <div
        className="inline-flex items-center justify-center h-[38px] px-4 rounded-full bg-[#EAF5EE] text-[#198754] text-[13px] font-medium mb-4"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
       Community Impact
      </div>

      <h2
        className="text-[52px] leading-[1.05] text-[#111827]"
        style={{
          fontFamily: "Playfair Display, serif",
          fontWeight: 700,
        }}
      >
       Real Voices, Real Change
      </h2>

      <p
        className="max-w-[760px] mx-auto mt-4 text-[15px] leading-[30px] text-[#667085]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        “Ayushman didn’t just give us skills — they gave us confidence and market access.” 
      </p>
    </div>

    
 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[22px] max-w-[980px] mx-auto">
     
      <div className="relative bg-white rounded-[24px] border border-[#23B26D] px-[30px] pt-[11px] pb-[26px] overflow-hidden h-[314px]">
        <div
          className="text-[#23B26D] text-[58px] leading-none"
          style={{
            fontFamily: "Georgia",
            fontWeight: 700,
          }}
        >
          “
        </div>

        <p
          className="mt-1 text-[14px] leading-[25px] italic text-[#1D2939]"
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
         From a daily wage laborer to a successful appliqué entrepreneur earning ₹18,000–22,000/month.
        </p>

        <div className="flex gap-[3px] mt-4 text-[#FFB800] text-[16px]">
          ★ ★ ★ ★ ★
        </div>

        <div className="flex items-center mt-6">
          <div className="w-[50px] h-[50px] rounded-full border border-[#23B26D] bg-[#F2F4F7] flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-[#98A2B3]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0"
      />
    </svg>
  </div>

          <div className="ml-3">
            <h4
              className="text-[16px] text-[#101828]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
              }}
            >
              Sasmita’s
            </h4>

            <p
              className="text-[13px] text-[#667085] mt-1"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
             Story
            </p>
          </div>
        </div>

       
        <div className="absolute right-[28px] bottom-[35px] opacity-[0.15]">
          <svg
            width="55"
            height="55"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#23B26D"
            strokeWidth="1.5"
          >
            <path d="M7 21L3 17L7 13" />
            <path d="M17 3L21 7L17 11" />
          </svg>
        </div>

      
<div className="absolute bottom-0 right-0">
  <svg
    width="120"
    height="42"
    viewBox="0 0 120 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="greenGradient"
        x1="0"
        y1="0"
        x2="120"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#16A34A" />
        <stop offset="50%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#86EFAC" />
      </linearGradient>
    </defs>

    <path
      d="M120 42H0C40 42 62 18 120 0V42Z"
      fill="url(#greenGradient)"
    />
  </svg>
</div>
      </div>

      
      <div className="relative bg-white rounded-[24px] border border-[#2F80ED] px-[30px] pt-[11px] pb-[26px] overflow-hidden h-[314px]">
        <div
          className="text-[#2F80ED] text-[58px] leading-none"
          style={{
            fontFamily: "Georgia",
            fontWeight: 700,
          }}
        >
          “
        </div>

        <p
          className="mt-1 text-[14px] leading-[25px] italic text-[#1D2939]"
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Working with Ayushman Foundation has been incredibly fulfilling. Every
          patient story motivates me.
        </p>

        <div className="flex gap-[3px] mt-4 text-[#FFB800] text-[16px]">
          ★ ★ ★ ★ ★
        </div>

        <div className="flex items-center mt-6">
         <div className="w-[50px] h-[50px] rounded-full border border-[#23B26D] bg-[#F2F4F7] flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-[#98A2B3]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0"
      />
    </svg>
  </div>

          <div className="ml-3">
            <h4
              className="text-[16px] text-[#101828]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
              }}
            >
               Rajesh Kumar
            </h4>

            <p
              className="text-[13px] text-[#667085] mt-1"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Story
            </p>
          </div>
        </div>

        <div className="absolute right-[28px] bottom-[35px] opacity-[0.15]">
          <svg
            width="55"
            height="55"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2F80ED"
            strokeWidth="1.5"
          >
            <path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z" />
          </svg>
        </div>


<div className="absolute bottom-0 right-0">
  <svg
    width="120"
    height="42"
    viewBox="0 0 120 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="blueGradient"
        x1="0"
        y1="0"
        x2="120"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="50%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#93C5FD" />
      </linearGradient>
    </defs>

    <path
      d="M120 42H0C40 42 62 18 120 0V42Z"
      fill="url(#blueGradient)"
    />
  </svg>
</div>
      </div>


      <div className="relative bg-white rounded-[24px] border border-[#F59E0B] px-[30px] pt-[11px] pb-[26px] overflow-hidden h-[314px]">
        <div
          className="text-[#F59E0B] text-[58px] leading-none"
          style={{
            fontFamily: "Georgia",
            fontWeight: 700,
          }}
        >
          “
        </div>

        <p
          className="mt-1 text-[14px] leading-[25px] italic text-[#1D2939]"
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          The scholarship program changed my life trajectory. Education truly
          transforms lives.
        </p>

        <div className="flex gap-[3px] mt-4 text-[#FFB800] text-[16px]">
          ★ ★ ★ ★ ★
        </div>

        <div className="flex items-center mt-6">
         <div className="w-[50px] h-[50px] rounded-full border border-[#23B26D] bg-[#F2F4F7] flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-[#98A2B3]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0"
      />
    </svg>
  </div>

          <div className="ml-3">
            <h4
              className="text-[16px] text-[#101828]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
              }}
            >
              Meera Patel
            </h4>

            <p
              className="text-[13px] text-[#667085] mt-1"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Story
            </p>
          </div>
        </div>

        <div className="absolute right-[28px] bottom-[35px] opacity-[0.15]">
          <svg
            width="55"
            height="55"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1.5"
          >
            <path d="M4 19.5V4.5C4 3.67 4.67 3 5.5 3H18.5C19.33 3 20 3.67 20 4.5V19.5L12 16L4 19.5Z" />
          </svg>
        </div>

  
<div className="absolute bottom-0 right-0">
  <svg
    width="120"
    height="42"
    viewBox="0 0 120 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="orangeGradient"
        x1="0"
        y1="0"
        x2="120"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#FDE68A" />
      </linearGradient>
    </defs>

    <path
      d="M120 42H0C40 42 62 18 120 0V42Z"
      fill="url(#orangeGradient)"
    />
  </svg>
</div>
      </div>
    </div>
  </div>
</section> */}

<section className="relative w-full overflow-hidden pt-[70px] pb-[60px]">

  {/* ================= MAIN CONTAINER ================= */}
  <div className="relative z-10 max-w-[1320px] mx-auto px-[60px]">

    {/* ================= TOP AREA ================= */}
    <div className="flex items-center justify-between gap-[40px]">

      {/* ================= LEFT CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-[500px] ml-[20px] relative z-10"
      >

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#f5ede1] rounded-full px-4 py-2 mb-5"
        >
          <Heart
            className="text-[#d88a1c]"
            size={14}
            strokeWidth={2.2}
          />

          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              color: "#d88a1c",
            }}
            className="uppercase"
          >
            Join Our Mission
          </span>
        </motion.div>

        {/* HEADING */}
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "50px",
            lineHeight: "0.96",
            fontWeight: "700",
            letterSpacing: "-1px",
          }}
          className="text-[#06163A]"
        >
          Together, We Can
        </h2>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "50px",
            lineHeight: "0.96",
            fontWeight: "700",
            letterSpacing: "-1px",
          }}
          className="text-[#d88a1c] mt-1"
        >
          Transform Lives
        </h2>

        {/* LINE */}
        <div className="flex items-center gap-4 mt-5 mb-5">

          <div className="w-[110px] h-[1px] bg-[#d7a14d]" />

          <Heart
            className="text-[#d88a1c]"
            size={15}
            strokeWidth={2}
          />

          <div className="w-[110px] h-[1px] bg-[#d7a14d]" />
        </div>

        {/* PARAGRAPH */}
        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "15px",
            lineHeight: "1.8",
            fontWeight: "500",
          }}
          className="text-[#4b5563] max-w-[470px]"
        >
          Every contribution, whether time or resources, helps us
          reach more communities and save more lives. Be part of our
          mission to create a{" "}
          <span className="font-[800] text-[#06163A]">
            healthier, more equitable India.
          </span>
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-3 mt-6">

          {/* DONATE */}
          <Link href="/donate">
            <motion.button
              whileHover={{
                scale: 1.04,
                y: -4,
              }}
              whileTap={{ scale: 0.98 }}
              className="h-[48px] px-6 rounded-[10px] bg-[#08245c] hover:bg-[#06193d] transition-all duration-300 flex items-center gap-2.5 shadow-md hover:shadow-xl"
            >
              <Heart
                className="text-white"
                size={17}
                strokeWidth={2.2}
              />

              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
                className="text-white"
              >
                Make a Donation
              </span>
            </motion.button>
          </Link>

          {/* VOLUNTEER */}
          <Link href="/volunteer">
            <motion.button
              whileHover={{
                scale: 1.04,
                y: -4,
              }}
              whileTap={{ scale: 0.98 }}
              className="group h-[48px] px-6 rounded-[10px] border-[1.5px] border-[#08245c] hover:bg-[#08245c] transition-all duration-300 flex items-center gap-2.5"
            >
              <Users
                className="text-[#08245c] group-hover:text-white transition-all"
                size={17}
                strokeWidth={2.2}
              />

              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
                className="text-[#08245c] group-hover:text-white transition-all"
              >
                Become a Volunteer
              </span>
            </motion.button>
          </Link>
        </div>

        {/* PEOPLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex items-center gap-3 mt-6"
        >

          {/* AVATARS */}
          <div className="flex items-center">

            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300"
              alt=""
              className="w-[40px] h-[40px] rounded-full border-[2px] border-white object-cover"
            />

            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300"
              alt=""
              className="w-[40px] h-[40px] rounded-full border-[2px] border-white object-cover -ml-2"
            />

            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300"
              alt=""
              className="w-[40px] h-[40px] rounded-full border-[2px] border-white object-cover -ml-2"
            />

            <div className="w-[40px] h-[40px] rounded-full bg-[#efefef] border-[2px] border-white -ml-2 flex items-center justify-center">
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
                className="text-[#06163A]"
              >
                1K+
              </span>
            </div>
          </div>

          {/* TEXT */}
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              lineHeight: "1.5",
              fontWeight: "600",
            }}
            className="text-[#4b5563]"
          >
            Join 1,000+ changemakers <br />
            making a difference every day
          </p>
        </motion.div>
      </motion.div>

      {/* ================= RIGHT IMAGE ================= */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center justify-end flex-1"
      >

        <img
          src="/images/Transfer1.png"
          alt="Volunteer"
          className="relative z-10 w-[560px] object-contain mr-[-70px] mt-[-115px]"
        />
      </motion.div>
    </div>
  </div>
</section>
    </div>
  )
}
