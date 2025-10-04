"use client"

import type React from "react"

import { useState } from "react"
import { FadeInSection } from "@/components/fade-in-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Users,
  Briefcase,
  Camera,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle,
  Star,
  Quote,
  Handshake,
  Building,
  Globe,
  Award,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["Kalinga Vihar, Patrapada,", "Bhuabneswar, Khordha, Odisha, India-751019."],
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98531 11010"],
      color: "text-secondary",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@ayushmanfoundation.org"],
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      color: "text-primary",
    },
  ]

  const offices = [
    {
      city: "New Delhi",
      address: "123 Healthcare Street, New Delhi 110001",
      phone: "+91 11 2345 6789",
      email: "Info@ayushmanfoundation.in",
      type: "Head Office",
    },
    {
      city: "Bhubaneswar",
      address: "Kalinga Vihar, Patrapada,Bhuabneswar, Khordha, Odisha, India-751019",
      phone: "+91 98531 11010",
      email: "Info@ayushmanfoundation.in",
      type: "Head Office",
    },
  ]

  const contactCategories = [
    { value: "general", label: "General Inquiry", icon: MessageCircle },
    { value: "volunteer", label: "Volunteer Opportunities", icon: Users },
    { value: "partnership", label: "Partnership & Collaboration", icon: Briefcase },
    { value: "media", label: "Media & Press", icon: Camera },
    { value: "donation", label: "Donation Support", icon: CheckCircle },
  ]

  const faqs = [
    {
      question: "How can I volunteer with Ayushman Foundation?",
      answer:
        "You can apply to volunteer through our online form or contact our volunteer coordinator. We offer various opportunities in healthcare, education, and community development.",
    },
    {
      question: "Are donations to Ayushman Foundation tax-deductible?",
      answer:
        "Yes, we have 80G certification from the Income Tax Department. All donations are eligible for tax deduction under Section 80G of the Income Tax Act.",
    },
    {
      question: "How can I track the impact of my donation?",
      answer:
        "We provide regular updates through our newsletter, annual reports, and personalized impact reports for major donors. You can also visit our projects page to see ongoing initiatives.",
    },
    {
      question: "Do you accept international donations?",
      answer:
        "Yes, we accept international donations through our FCRA registration. Please contact us for specific procedures and requirements for international contributions.",
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
                <MessageCircle className="w-3 h-3 mr-1" />
                Contact Us
              </Badge>
              <h1 className="heading-primary text-foreground">
                Get in Touch &<span className="text-primary block">Join Our Mission</span>
              </h1>
              <p className="body-large text-muted-foreground max-w-3xl mx-auto">
                Whether you want to volunteer, partner with us, or learn more about our programs, we'd love to hear from
                you. Together, we can create lasting change in communities across India.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Contact Information
            </Badge>
            <h2 className="heading-secondary">Multiple Ways to Reach Us</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to get in touch with our team.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="text-center border-0 bg-card/50 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <h3 className="font-serif font-semibold text-lg">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeInSection>
              <Card className="border-0 bg-card/50">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="heading-tertiary">Send us a Message</h3>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center space-y-4 py-8">
                      <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-serif font-semibold text-lg">Message Sent Successfully!</h4>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category">Inquiry Type *</Label>
                          <Select
                            value={formData.category}
                            onValueChange={(value) => handleInputChange("category", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {contactCategories.map((category) => (
                                <SelectItem key={category.value} value={category.value}>
                                  <div className="flex items-center space-x-2">
                                    <category.icon className="w-4 h-4" />
                                    <span>{category.label}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeInSection>

            {/* Map & Social Media */}
            <div className="space-y-8">
              <FadeInSection delay={200}>
                <Card className="border-0 bg-card/50">
                  <CardContent className="p-8 space-y-6">
                    <h3 className="heading-tertiary">Find Us</h3>
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <div className="w-full">
                        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin"
              className="w-full h-64 sm:h-80 lg:h-96 border-0 rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={400}>
                <Card className="border-0 bg-card/50">
                  <CardContent className="p-8 space-y-6">
                    <h3 className="heading-tertiary">Follow Us</h3>
                    <p className="text-muted-foreground text-sm">
                      Stay connected with our latest updates and impact stories.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { icon: Facebook, name: "Facebook", color: "hover:text-blue-600" },
                        { icon: Twitter, name: "Twitter", color: "hover:text-blue-400" },
                        { icon: Instagram, name: "Instagram", color: "hover:text-pink-600" },
                        { icon: Linkedin, name: "LinkedIn", color: "hover:text-blue-700" },
                        { icon: Youtube, name: "YouTube", color: "hover:text-red-600" },
                        { icon: MessageCircle, name: "WhatsApp", color: "hover:text-green-600" },
                      ].map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className={`flex flex-col space-y-1 h-auto py-3 ${social.color} transition-colors duration-200`}
                        >
                          <social.icon className="w-5 h-5" />
                          <span className="text-xs">{social.name}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Our Offices
            </Badge>
            <h2 className="heading-secondary">Visit Our Locations</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              We have offices across major cities to better serve communities nationwide.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="border-0 bg-card/50 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif font-semibold text-lg">{office.city}</h3>
                      <Badge variant={office.type === "Head Office" ? "default" : "secondary"} className="text-xs">
                        {office.type}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">{office.address}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">{office.phone}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">{office.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Frequently Asked Questions
            </Badge>
            <h2 className="heading-secondary">Common Questions</h2>
            <p className="body-large text-muted-foreground">
              Find quick answers to the most commonly asked questions about our organization and programs.
            </p>
          </FadeInSection>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="border-0 bg-card/50">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-serif font-semibold text-lg text-primary">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-3 h-3 mr-1" />
              Success Stories
            </Badge>
            <h2 className="heading-secondary">How Contact Led to Impact</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Real stories of how reaching out to us has led to meaningful collaborations and positive change.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Mehta",
                role: "Medical Volunteer",
                story: "Contacted us through the volunteer form and now leads our telemedicine program in 15 villages.",
                impact: "2,500+ patients treated",
                category: "Volunteer",
                icon: Users,
              },
              {
                name: "TechCorp Foundation",
                role: "Corporate Partner",
                story:
                  "Reached out for partnership opportunities and funded our digital literacy program across 3 states.",
                impact: "5,000+ students trained",
                category: "Partnership",
                icon: Briefcase,
              },
              {
                name: "Priya Sharma",
                role: "Individual Donor",
                story:
                  "Started with a simple inquiry about donations and now sponsors education for 50 children annually.",
                impact: "50 scholarships funded",
                category: "Donation",
                icon: CheckCircle,
              },
            ].map((story, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="border-0 bg-card/50 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <story.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {story.category}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif font-semibold text-lg">{story.name}</h3>
                      <p className="text-primary text-sm font-medium">{story.role}</p>
                    </div>
                    <div className="relative">
                      <Quote className="w-4 h-4 text-primary/40 absolute -top-1 -left-1" />
                      <p className="text-muted-foreground text-sm leading-relaxed pl-4">{story.story}</p>
                    </div>
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-primary font-semibold text-sm">{story.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">
              <MessageCircle className="w-3 h-3 mr-1" />
              Community Feedback
            </Badge>
            <h2 className="heading-secondary">What People Say About Us</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Testimonials from community members, partners, and beneficiaries who have experienced our impact
              firsthand.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sunita Devi",
                feedback:
                  "The mobile health clinic changed our lives. My daughter received treatment that saved her life. The team is always responsive when we contact them.",
                rating: 5,
                category: "Healthcare Beneficiary",
              },
              {
                name: "Amit Kumar",
                feedback:
                  "I contacted them about the scholarship program for my son. The process was smooth and the support team guided us every step of the way.",
                rating: 5,
                category: "Education Beneficiary",
              },
              {
                name: "Maya Enterprises",
                feedback:
                  "Working with Ayushman Foundation has been incredible. Their transparency and regular updates make partnership meaningful and impactful.",
                rating: 5,
                category: "Corporate Partner",
              },
              {
                name: "Ravi Patel",
                feedback:
                  "As a volunteer, I appreciate how organized and welcoming the team is. They make it easy to contribute and see the direct impact of our work.",
                rating: 5,
                category: "Volunteer",
              },
            ].map((feedback, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="border-0 bg-card/50 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {[...Array(feedback.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {feedback.category}
                      </Badge>
                    </div>
                    <div className="relative">
                      <Quote className="w-5 h-5 text-primary/40 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground leading-relaxed pl-4">{feedback.feedback}</p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="font-serif font-semibold">{feedback.name}</h4>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">
              <Handshake className="w-3 h-3 mr-1" />
              Partnership Opportunities
            </Badge>
            <h2 className="heading-secondary">Collaborate With Us</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Explore various ways to partner with us and amplify your impact in creating positive social change.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Partnerships",
                description:
                  "CSR collaborations, employee volunteering, and strategic partnerships for sustainable impact.",
                icon: Building,
                benefits: ["Tax benefits under CSR", "Employee engagement", "Brand visibility", "Impact reporting"],
                contact: "Info@ayushmanfoundation.in",
              },
              {
                title: "International Collaborations",
                description: "Global partnerships with NGOs, foundations, and international development organizations.",
                icon: Globe,
                benefits: [
                  "Cross-cultural exchange",
                  "Best practice sharing",
                  "Funding opportunities",
                  "Global network",
                ],
                contact: "info@ayushmanfoundation.in",
              },
              {
                title: "Government Partnerships",
                description: "Collaborate with government agencies to scale programs and policy implementation.",
                icon: Award,
                benefits: ["Policy influence", "Scale opportunities", "Resource sharing", "Systemic change"],
                contact: "info@ayushmanfoundation.in",
              },
            ].map((partnership, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="border-0 bg-card/50 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-primary/20 rounded-xl flex items-center justify-center">
                        <partnership.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-serif font-semibold text-lg">{partnership.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{partnership.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {partnership.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border/50 space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>{partnership.contact}</span>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Handshake className="w-4 h-4 mr-2" />
                        Start Partnership
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
