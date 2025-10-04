import { FadeInSection } from "@/components/fade-in-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Tag,
  Clock,
  Heart,
  Users,
  Stethoscope,
  GraduationCap,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    id: "telemedicine-rural-healthcare",
    title: "How Telemedicine is Revolutionizing Rural Healthcare in India",
    excerpt:
      "Discover how our telemedicine initiatives are bridging the healthcare gap in remote villages, connecting patients with specialist doctors through innovative technology solutions.",
    author: "Dr. Anita Sharma",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Healthcare",
    tags: ["Telemedicine", "Rural Health", "Technology", "Innovation"],
    image: "/blog-telemedicine.jpg",
  }

  const blogPosts = [
    {
      id: "digital-literacy-impact",
      title: "Digital Literacy: Empowering Rural Communities for the Future",
      excerpt:
        "Exploring how our digital literacy programs are transforming lives and creating new opportunities in underserved communities.",
      author: "Rajesh Kumar",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Education",
      tags: ["Digital Literacy", "Education", "Technology"],
      image: "/blog-digital-literacy.jpg",
    },
    {
      id: "women-entrepreneurship",
      title: "Women Entrepreneurs: Driving Change in Rural India",
      excerpt:
        "Success stories of women who have transformed their communities through our microfinance and entrepreneurship programs.",
      author: "Priya Patel",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Community Development",
      tags: ["Women Empowerment", "Entrepreneurship", "Microfinance"],
      image: "/blog-women-entrepreneurs.jpg",
    },
    {
      id: "clean-water-initiative",
      title: "Clean Water Access: A Fundamental Right for All",
      excerpt:
        "How our water and sanitation projects are eliminating waterborne diseases and improving quality of life in rural areas.",
      author: "Suresh Gupta",
      date: "February 28, 2024",
      readTime: "5 min read",
      category: "Community Development",
      tags: ["Water", "Sanitation", "Health", "Infrastructure"],
      image: "/blog-clean-water.jpg",
    },
    {
      id: "mobile-health-clinics",
      title: "Mobile Health Clinics: Bringing Healthcare to Your Doorstep",
      excerpt:
        "An inside look at how our mobile health units are providing essential medical services to remote villages across India.",
      author: "Dr. Meera Sharma",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Healthcare",
      tags: ["Mobile Clinics", "Healthcare Access", "Rural Health"],
      image: "/blog-mobile-clinics.jpg",
    },
    {
      id: "education-scholarships",
      title: "Breaking Barriers: How Scholarships Change Lives",
      excerpt:
        "Real stories of students whose lives have been transformed through our scholarship programs and educational support.",
      author: "Anita Verma",
      date: "February 15, 2024",
      readTime: "8 min read",
      category: "Education",
      tags: ["Scholarships", "Education", "Student Success"],
      image: "/blog-scholarships.jpg",
    },
    {
      id: "sustainable-agriculture",
      title: "Sustainable Agriculture: Growing a Better Future",
      excerpt:
        "How we're helping farmers adopt sustainable practices that increase yields while protecting the environment.",
      author: "Vikram Singh",
      date: "February 10, 2024",
      readTime: "7 min read",
      category: "Community Development",
      tags: ["Agriculture", "Sustainability", "Farming", "Environment"],
      image: "/blog-agriculture.jpg",
    },
  ]

  const categories = [
    { name: "All", count: 25, icon: BookOpen },
    { name: "Healthcare", count: 12, icon: Stethoscope },
    { name: "Education", count: 8, icon: GraduationCap },
    { name: "Community Development", count: 5, icon: Users },
  ]

  const recentPosts = [
    {
      title: "Mental Health Support in Rural Communities",
      date: "March 18, 2024",
      category: "Healthcare",
    },
    {
      title: "Vocational Training Success Stories",
      date: "March 12, 2024",
      category: "Education",
    },
    {
      title: "Solar Energy Projects in Remote Villages",
      date: "March 8, 2024",
      category: "Community Development",
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
                <BookOpen className="w-3 h-3 mr-1" />
                Our Blog
              </Badge>
              <h1 className="heading-primary text-foreground">
                Stories of Impact &<span className="text-primary block">Community Change</span>
              </h1>
              <p className="body-large text-muted-foreground max-w-3xl mx-auto">
                Stay updated with our latest initiatives, success stories, and insights from the field. Discover how
                we're creating lasting change in communities across India.
              </p>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 bg-background/50 backdrop-blur"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="mb-16">
            <Badge variant="outline" className="mb-4">
              Featured Article
            </Badge>
            <Card className="border-0 bg-gradient-to-br from-card to-muted/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Featured Image */}
                  <div className="relative aspect-video lg:aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto bg-primary/20 rounded-xl flex items-center justify-center">
                          <Stethoscope className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-white">
                          <BookOpen className="w-8 h-8 mx-auto mb-2" />
                          <p className="text-sm">Featured Article</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Content */}
                  <div className="p-8 lg:p-12 space-y-6">
                    <div className="space-y-4">
                      <Badge variant="secondary" className="text-xs">
                        {featuredPost.category}
                      </Badge>
                      <h2 className="heading-tertiary">{featuredPost.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild>
                      <Link href={`/blog/${featuredPost.id}`}>
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <FadeInSection className="mb-8">
                <h2 className="heading-secondary mb-8">Latest Articles</h2>
              </FadeInSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <FadeInSection key={post.id} delay={index * 150}>
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 h-full">
                      <CardContent className="p-0">
                        {/* Post Image */}
                        <div className="relative aspect-video overflow-hidden rounded-t-lg">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                            <div className="text-center space-y-2">
                              <div className="w-12 h-12 mx-auto bg-primary/20 rounded-lg flex items-center justify-center">
                                {post.category === "Healthcare" && <Stethoscope className="w-6 h-6 text-primary" />}
                                {post.category === "Education" && <GraduationCap className="w-6 h-6 text-primary" />}
                                {post.category === "Community Development" && (
                                  <Users className="w-6 h-6 text-primary" />
                                )}
                              </div>
                              <p className="text-white text-xs">{post.category}</p>
                            </div>
                          </div>
                        </div>

                        {/* Post Content */}
                        <div className="p-6 space-y-4">
                          <div className="space-y-3">
                            <Badge variant="secondary" className="text-xs">
                              {post.category}
                            </Badge>
                            <h3 className="font-serif font-semibold text-lg group-hover:text-primary transition-colors duration-300 line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                          </div>

                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <Button
                            variant="ghost"
                            className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                            asChild
                          >
                            <Link href={`/blog/${post.id}`}>
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>

              {/* Pagination */}
              <FadeInSection delay={600}>
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Previous
                    </Button>
                    <Button size="sm">1</Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <FadeInSection>
                  <Card className="border-0 bg-card/50">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-serif font-semibold text-lg">Categories</h3>
                      <div className="space-y-2">
                        {categories.map((category, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            className="w-full justify-between hover:bg-primary/10 hover:text-primary"
                            asChild
                          >
                            <Link href={`/blog/category/${category.name.toLowerCase()}`}>
                              <div className="flex items-center space-x-2">
                                <category.icon className="w-4 h-4" />
                                <span>{category.name}</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {category.count}
                              </Badge>
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>

                {/* Recent Posts */}
                <FadeInSection delay={200}>
                  <Card className="border-0 bg-card/50">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-serif font-semibold text-lg">Recent Posts</h3>
                      <div className="space-y-4">
                        {recentPosts.map((post, index) => (
                          <div key={index} className="space-y-2">
                            <h4 className="font-medium text-sm hover:text-primary transition-colors duration-200 cursor-pointer">
                              {post.title}
                            </h4>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <Badge variant="outline" className="text-xs">
                                {post.category}
                              </Badge>
                              <span>{post.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Tag className="w-3 h-3 mr-1" />
              Explore Topics
            </Badge>
            <h2 className="heading-secondary">Browse by Category</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Discover articles organized by our key focus areas and find content that matters most to you.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Healthcare",
                count: 12,
                icon: Stethoscope,
                description: "Medical initiatives, telemedicine, and health programs",
                color: "from-blue-500/20 to-cyan-500/20",
              },
              {
                name: "Education",
                count: 8,
                icon: GraduationCap,
                description: "Scholarships, digital literacy, and educational support",
                color: "from-green-500/20 to-emerald-500/20",
              },
              {
                name: "Community Development",
                count: 5,
                icon: Users,
                description: "Women empowerment, microfinance, and rural development",
                color: "from-purple-500/20 to-pink-500/20",
              },
            ].map((category, index) => (
              <FadeInSection key={category.name} delay={index * 150}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 h-full">
                  <CardContent className="p-8 text-center space-y-6">
                    <div
                      className={`w-16 h-16 mx-auto bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif font-semibold text-xl">{category.name}</h3>
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Badge variant="secondary">{category.count} Articles</Badge>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                      asChild
                    >
                      <Link href={`/blog/category/${category.name.toLowerCase()}`}>
                        Explore {category.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Author Spotlight Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <User className="w-3 h-3 mr-1" />
              Meet Our Writers
            </Badge>
            <h2 className="heading-secondary">Author Spotlight</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Get to know the passionate individuals behind our stories and insights.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Anita Sharma",
                role: "Chief Medical Officer",
                expertise: "Healthcare & Telemedicine",
                articles: 15,
                bio: "Leading our healthcare initiatives with 20+ years of experience in rural medicine.",
                image: "/author-anita.jpg",
              },
              {
                name: "Rajesh Kumar",
                role: "Education Program Director",
                expertise: "Digital Literacy & Education",
                articles: 12,
                bio: "Passionate about bridging the digital divide through innovative education programs.",
                image: "/author-rajesh.jpg",
              },
              {
                name: "Priya Patel",
                role: "Community Development Lead",
                expertise: "Women Empowerment",
                articles: 10,
                bio: "Empowering women entrepreneurs and driving sustainable community development.",
                image: "/author-priya.jpg",
              },
            ].map((author, index) => (
              <FadeInSection key={author.name} delay={index * 150}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <User className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif font-semibold text-lg">{author.name}</h3>
                      <p className="text-primary text-sm font-medium">{author.role}</p>
                      <p className="text-muted-foreground text-xs">{author.expertise}</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{author.bio}</p>
                    <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-3 h-3" />
                        <span>{author.articles} Articles</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <Link href={`/blog/author/${author.name.toLowerCase().replace(" ", "-")}`}>View Articles</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-3 h-3 mr-1" />
              Additional Resources
            </Badge>
            <h2 className="heading-secondary">Related Resources</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Explore additional materials, reports, and resources to deepen your understanding of our work.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Annual Impact Report 2024",
                type: "PDF Report",
                description: "Comprehensive overview of our achievements and impact metrics.",
                icon: BookOpen,
                downloadCount: "2.5K",
              },
              {
                title: "Healthcare Guidelines",
                type: "Resource Guide",
                description: "Best practices for implementing healthcare programs in rural areas.",
                icon: Stethoscope,
                downloadCount: "1.8K",
              },
              {
                title: "Education Toolkit",
                type: "Training Material",
                description: "Complete toolkit for setting up digital literacy programs.",
                icon: GraduationCap,
                downloadCount: "3.2K",
              },
              {
                title: "Community Development Framework",
                type: "Strategy Document",
                description: "Framework for sustainable community development initiatives.",
                icon: Users,
                downloadCount: "1.5K",
              },
            ].map((resource, index) => (
              <FadeInSection key={resource.title} delay={index * 150}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                      <h3 className="font-serif font-semibold text-sm">{resource.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{resource.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{resource.downloadCount} downloads</span>
                      <Button size="sm" variant="ghost" className="text-xs">
                        Download
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center">
            <Card className="border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-12 space-y-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    Stay Connected
                  </Badge>
                  <h2 className="heading-secondary">Never Miss an Update</h2>
                  <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                    Subscribe to our newsletter and be the first to know about our latest programs, success stories, and
                    impact updates.
                  </p>
                </div>

                <div className="max-w-md mx-auto space-y-4">
                  <div className="flex space-x-2">
                    <Input type="email" placeholder="Enter your email address" className="bg-background/50" />
                    <Button>
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Join 10,000+ subscribers. Unsubscribe anytime.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                  {[
                    { icon: BookOpen, title: "Weekly Articles", description: "Latest stories and insights" },
                    { icon: Heart, title: "Impact Updates", description: "Real-time program results" },
                    { icon: Users, title: "Community News", description: "Success stories from the field" },
                  ].map((benefit, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="w-8 h-8 mx-auto bg-primary/20 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-medium text-sm">{benefit.title}</h3>
                      <p className="text-xs text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
