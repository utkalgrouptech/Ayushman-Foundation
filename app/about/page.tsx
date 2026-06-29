"use client";
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
import { motion } from "framer-motion";
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
      About Us
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
      <span>About Us</span>
    </motion.div>
  </motion.div>

</section>


<section className="py-16 md:py-20 bg-white">
<div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-8">
      <span className="text-primary font-semibold uppercase tracking-[3px]">
        About Us
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
        Ayushman Foundation
      </h2>

      <div className="w-20 h-1 bg-primary mx-auto mt-5 rounded-full"></div>
    </div>

     <div className="space-y-4 text-lg leading-8 text-gray-600">

      <p>
        <span className="font-semibold text-primary">
          Ayushman Foundation
        </span>{" "}
        is a dynamic, non-profit organization registered under the{" "}
        <span className="font-semibold text-primary">
          Section 8 Company Act, 2013
        </span>{" "}
        dedicated to the holistic empowerment of marginalized and underserved
        communities across Odisha and beyond.
      </p>

      <p>
        Established with a vision to create{" "}
        <span className="font-semibold text-primary">
          sustainable, dignified, and empowered lives
        </span>
        , the Foundation works at the grassroots level with a strong focus on{" "}
        <span className="font-semibold text-primary">
          women empowerment
        </span>
        ,{" "}
        <span className="font-semibold text-primary">
          sustainable livelihoods
        </span>
        ,{" "}
        <span className="font-semibold text-primary">
          skill development
        </span>
        ,{" "}
        <span className="font-semibold text-primary">
          health & nutrition
        </span>
        ,{" "}
        <span className="font-semibold text-primary">
          education
        </span>
        , and{" "}
        <span className="font-semibold text-primary">
          environmental conservation
        </span>
        .
      </p>

      <p>
        Ayushman Foundation adopts a{" "}
        <span className="font-semibold text-primary">
          participatory, community-centric approach
        </span>{" "}
        that combines traditional knowledge with modern techniques,
        innovation, and market linkages to ensure{" "}
        <span className="font-semibold text-primary">
          long-term impact and self-reliance
        </span>
        .
      </p>

    </div>
  </div>
</section>
<section className="py-12 md:py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
<div className="text-center mb-10">
      <span className="text-primary font-semibold uppercase tracking-[3px]">
        Purpose & Direction
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        Vision & Mission
      </h2>

      <div className="w-20 h-1 bg-primary mx-auto mt-5 rounded-full"></div>
    </div>

    <div className="relative">

      {/* Center Line */}
      <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[2px] bg-primary/20 -translate-x-1/2"></div>

      <div className="space-y-4">

        {/* Vision */}
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div className="bg-primary/5 border border-primary/10 rounded-[24px] p-6 lg:text-right">
              <div className="flex lg:justify-end mb-5">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center">
                  <Eye className="w-7 h-7" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-primary mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-8">
                To build an equitable and inclusive society where every
                individual, especially
                <span className="font-semibold text-primary">
                  {" "}women, youth and tribal communities
                </span>,
                has equal access to opportunities for growth,
                dignity and prosperity.
              </p>
            </div>

            <div></div>

          </div>
        </FadeInSection>

        {/* Mission */}
        <FadeInSection delay={200}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div></div>

            <div className="bg-secondary/5 border border-secondary/10 rounded-[24px] p-6">
              <div className="mb-5">
                <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center">
                  <Target className="w-7 h-7" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-secondary mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-8">
                To empower marginalized communities through integrated
                interventions in
                <span className="font-semibold text-secondary">
                  {" "}livelihood promotion, skill enhancement,
                  health & hygiene, education and environmental sustainability
                </span>,
                while fostering strong community institutions and
                market-driven enterprises.
              </p>
            </div>

          </div>
        </FadeInSection>

      </div>

    </div>

  </div>
</section>

<section className="py-20 bg-[#F7F9F8]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="text-[#1F5E4E] font-semibold uppercase tracking-[3px]">
        Geographic Presence
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
        Where We Work
      </h2>

      <div className="w-20 h-1 bg-[#C7A86B] mx-auto mt-5 rounded-full"></div>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Map Section */}
      <div>
        <div className="bg-white rounded-[28px] p-5 shadow-xl border border-[#E6ECE9]">
          <Image
            src="/images/odisha map.png"
            alt="Ayushman Foundation Geographic Presence"
            width={800}
            height={600}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-2xl p-5 text-center shadow-md border border-[#E6ECE9]">
            <h4 className="text-3xl font-bold text-[#1F5E4E]">6</h4>
            <p className="text-sm text-gray-500 mt-1">
              Districts
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 text-center shadow-md border border-[#E6ECE9]">
            <h4 className="text-3xl font-bold text-[#1F5E4E]">2</h4>
            <p className="text-sm text-gray-500 mt-1">
              Emerging States
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 text-center shadow-md border border-[#E6ECE9]">
            <h4 className="text-xl font-bold text-[#1F5E4E]">
              PVTG
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Focus Areas
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-10">

        {/* Core Areas */}
        <div>
          <h3 className="text-2xl font-bold text-[#1F5E4E] mb-5">
            Core Operational Areas (Odisha)
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Keonjhar",
              "Nayagarh",
              "Khordha",
              "Kendrapara",
              "Dhenkanal",
              "Cuttack",
            ].map((district) => (
              <span
                key={district}
                className="px-5 py-2.5 rounded-full bg-[#EEF5F2] text-[#1F5E4E] border border-[#D8E7E0] font-medium"
              >
                {district}
              </span>
            ))}
          </div>
        </div>

        {/* Emerging Areas */}
        <div>
          <h3 className="text-2xl font-bold text-[#1F5E4E] mb-5">
            Emerging Areas
          </h3>

          <div className="flex flex-wrap gap-3">
            {["West Bengal", "Andhra Pradesh"].map((state) => (
              <span
                key={state}
                className="px-5 py-2.5 rounded-full bg-[#F7F2E8] text-[#9B7A3E] border border-[#E8D9B9] font-medium"
              >
                {state}
              </span>
            ))}
          </div>
        </div>

        {/* Special Focus */}
        <div>
          <h3 className="text-2xl font-bold text-[#1F5E4E] mb-5">
            Special Focus
          </h3>

          <div className="grid md:grid-cols-1 gap-4">

            <div className="bg-white rounded-2xl p-5 border border-[#E6ECE9] shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[#1F5E4E] mb-2">
                Particularly Vulnerable Tribal Groups (PVTGs)
              </h4>
              <p className="text-gray-600 text-sm">
                Dedicated interventions for highly vulnerable tribal communities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E6ECE9] shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[#1F5E4E] mb-2">
                Remote, Mineral-Rich & Forest Villages
              </h4>
              <p className="text-gray-600 text-sm">
                Supporting communities living in geographically challenging areas.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E6ECE9] shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[#1F5E4E] mb-2">
                Rural & Underserved Communities
              </h4>
              <p className="text-gray-600 text-sm">
                Creating opportunities where access to services remains limited.
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>
</section>

    {/* ================= COMPANY PROFILE SECTION ================= */}
{/* ================= ORGANIZATION PROFILE ================= */}
<section className="py-10 bg-gradient-to-r from-[#0B5D4D] to-[#144D7A]">
  <div className="max-w-6xl mx-auto px-6">

    <div className="bg-white rounded-[24px] overflow-hidden shadow-xl">

      <div className="grid lg:grid-cols-2 items-center gap-4">

        {/* Left Side */}
        <div className="bg-[#F8FAFC] p-6 flex justify-center">

          <div className="relative w-[180px] h-[240px] bg-white rounded-xl shadow-lg border overflow-hidden group">

            <Image
              src="/images/Ayushman_profile_final_page-1.jpg"
              alt="Ayushman Foundation Profile"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-[10px] font-semibold">
              PDF
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="p-6 lg:p-8">

          <span className="uppercase tracking-[3px] text-[#0B5D4D] text-xs font-semibold">
            Organization Profile
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-[#12355B] mt-2">
            View Our Foundation Profile
          </h2>

          <p className="text-gray-500 text-sm leading-7 mt-4">
            Explore Ayushman Foundation's mission, vision, governance,
            key achievements, CSR partnerships, livelihood initiatives,
            community impact and future roadmap through our official
            organization profile.
          </p>

          <div className="flex flex-wrap gap-3 mt-5">

            {/* View Button */}
            <a
              href="/images/Ayushman_Profile_final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0B5D4D] text-white text-sm font-medium hover:scale-105 transition duration-300"
            >
              📖 View Profile
            </a>

            {/* Download Button */}
            <a
              href="/images/Ayushman_Profile_final.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#0B5D4D] text-[#0B5D4D] text-sm font-medium hover:bg-[#0B5D4D] hover:text-white transition duration-300"
            >
              ⬇ Download Profile
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
     

<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Key Achievements */}
    <div className="mb-14">

      <div className="flex items-center gap-4 mb-6">
        <div className="h-[3px] w-16 bg-yellow-400"></div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">
          Key Achievements (2025–26)
        </h2>

        <div className="flex-1 h-[3px] bg-yellow-400"></div>
      </div>

      <div className="space-y-4 text-[15px] leading-8 text-gray-700">

        <p>
          ● Directly impacted <span className="font-semibold text-black">over 5,200 Nos of individuals and families</span> across multiple districts.
        </p>

        <p>
          ● Formed and strengthened <span className="font-semibold text-black">28 Nos of new Self-Help Groups</span> covering 412 Nos of women.
        </p>

        <p>
          ● Provided vocational and skill training to <span className="font-semibold text-black">633 Nos of beneficiaries</span>, with <span className="font-semibold text-black">142 successful job placements</span>.
        </p>

        <p>
          ● Planted <span className="font-semibold text-black">3,200 Nos of saplings</span> and established <span className="font-semibold text-black">7 waste-to-wealth micro-enterprises</span>.
        </p>

        <p>
          ● Supported <span className="font-semibold text-black">485 Nos of  women</span> through livelihood and entrepreneurship programs.
        </p>

        <p>
          ● Reached <span className="font-semibold text-black">310 Nos of youth and women</span> through digital literacy initiatives.
        </p>

        <p>
          ● Successfully implemented multiple CSR-supported projects with corporates.
        </p>

      </div>
    </div>

    {/* Core Competencies */}
    <div className="mb-14">

      <div className="flex items-center gap-4 mb-6">
        <div className="h-[3px] w-16 bg-yellow-400"></div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">
          Core Competencies
        </h2>

        <div className="flex-1 h-[3px] bg-yellow-400"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-[15px] text-gray-700 leading-8">

        <p>✓ Professional management of large-scale CSR projects with transparency and accountability.</p>

        <p>✓ Expertise in developing women-led Producer Companies with strong governance.</p>

        <p>✓ Design innovation and premium market linkage for traditional crafts.</p>

        <p>✓ Robust Monitoring, Evaluation & Learning (MEL) systems including digital MIS and geo-tagging.</p>

        <p>✓ Strong networking with government departments, CSR partners and marketing organizations.</p>

      </div>
    </div>

    {/* Registration */}
    <div className="border-t pt-8">

      <div className="flex items-center gap-4 mb-6">
        <div className="h-[3px] w-16 bg-yellow-400"></div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">
          Registrations & Compliance
        </h2>

        <div className="flex-1 h-[3px] bg-yellow-400"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div>
          <h4 className="font-semibold text-lg">
            Section 8 Company
          </h4>

          <p className="text-sm text-gray-500 mt-1">
            Registered under Companies Act, 2013
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">
            NITI Aayog • 12A • 80G
          </h4>

          <p className="text-sm text-gray-500 mt-1">
            Statutory Registrations
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">
            CSR-1 Registration
          </h4>

          <p className="text-sm text-gray-500 mt-1">
            Ministry of Corporate Affairs
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* Mission, Vision, Values */}
     
      {/* Leadership Team */}
     <section className="py-20 bg-[#F8FAFC] overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="text-primary uppercase tracking-[4px] font-semibold">
        Governance
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#0B1E5B]">
        Executive Body
      </h2>

      <div className="w-24 h-1 bg-primary mx-auto mt-5 rounded-full"></div>
    </div>


    {/* Chairman */}
    <div className="flex justify-center relative">

      <div className="bg-[#0B1E5B] text-white px-10 py-7 rounded-[30px] shadow-2xl text-center z-10">

        <p className="uppercase tracking-[4px] text-xs text-white/70">
          Chairman
        </p>

        <h3 className="text-3xl font-bold mt-3">
          Suresh Kumar Mishra
        </h3>

      </div>

    </div>

    {/* Vertical Line */}
    <div className="w-[2px] h-16 bg-primary mx-auto"></div>


    {/* Row 2 */}
    <div className="grid md:grid-cols-2 gap-20 relative">

      <ExecutiveNode
        role="Vice Chairman"
        name="Sashmita Dash"
      />

      <ExecutiveNode
        role="Secretary"
        name="Swayanshree Mishra"
      />

    </div>

    {/* Line */}
    <div className="w-[2px] h-14 bg-primary mx-auto"></div>


    {/* Row 3 */}
    <div className="grid md:grid-cols-2 gap-20">

      <ExecutiveNode
        role="Treasurer"
        name="Niranjan Mishra"
      />

      <ExecutiveNode
        role="Asst. Secretary"
        name="Etishree Pattanaik"
      />

    </div>


    {/* Members */}
    <div className="mt-16 bg-white rounded-[35px] p-10 shadow-xl border border-slate-100 text-center">

      <p className="uppercase tracking-[4px] text-sm text-gray-500">
        Members
      </p>

      <h3 className="text-2xl font-bold text-[#0B1E5B] mt-4">
        Dusmanta Kumar Nayak
      </h3>

      <div className="w-12 h-[2px] bg-primary mx-auto my-4"></div>

      <h3 className="text-2xl font-bold text-[#0B1E5B]">
        Rudra Narayan Mishra
      </h3>

    </div>

  </div>
</section>



     
    </div>
  )
}
function ExecutiveNode({
  role,
  name,
}: {
  role: string;
  name: string;
}) {
  return (
    <div className="relative">

      <div className="bg-white rounded-[30px] p-8 shadow-xl border border-slate-100 text-center">

        <p className="uppercase tracking-[3px] text-xs text-gray-500">
          {role}
        </p>

        <h3 className="text-2xl font-bold text-[#0B1E5B] mt-3">
          {name}
        </h3>

      </div>

    </div>
  );
}
