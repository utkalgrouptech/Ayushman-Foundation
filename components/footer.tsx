import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/images/ayushman-logo.jpg"
                alt="Ayushman Foundation logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <h1 className="font-serif font-bold text-xl text-primary">Ayushman</h1>
                <p className="text-xs text-muted-foreground -mt-1">Foundation</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dedicated to providing healthcare and social welfare services to underserved communities across India.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Our Programs" },
                { href: "/projects", label: "Projects" },
                { href: "/volunteer", label: "Volunteer" },
                { href: "/careers", label: "Careers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Kalinga Vihar, Patrapada,
                  <br />
                  Bhubaneswar, Khordha, Odisha, India 751019
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">+91 98531 11010</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">info@ayushmanfoundation.in</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for updates on our programs and impact.
            </p>
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="w-full" />
              <Button className="w-full" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Ayushman Foundation. All rights reserved. |
            <Link href="/privacy" className="hover:text-primary ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-primary ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
