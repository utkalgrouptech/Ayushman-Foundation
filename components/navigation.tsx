"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Heart } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/blog", label: "Blog" },
         { href: "/membership", label: "Become A Member" },
    { href: "/gallery", label: "Gallery" },

  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/donate">
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/donate">
                    <img src="/images/donate-icon.png" alt="Donate Icon" className="w-4 h-4 mr-2" />
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
