"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Heart , ChevronDown} from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

 const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },

   {
    label: "Report",
    submenu: [
      {
        href: "/annual-report",
        label: "Annual Report",
      },
      {
        href: "/images/Ayushman_Profile_final.pdf",
        label: "Profile",
      },
    ],
  },

   {
    label: "Gallery",
    submenu: [
      {
        href: "/gallery",
        label: "Image Gallery",
      },
      {
        href: "/video",
        label: "Video Gallery",
      },
    ],
  },

  

 

  { href: "/membership", label: "Become A Member" },
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

         <div className="hidden md:flex items-center space-x-8">
  {navItems.map((item, index) =>
    item.submenu ? (
      <div key={index} className="relative group">
        <button className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors">
          {item.label}
          <ChevronDown className="w-4 h-4" />
        </button>

        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          {item.submenu.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      </div>
    ) : (
      <Link
        key={item.href}
        href={item.href}
        className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
      >
        {item.label}
      </Link>
    )
  )}
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
            {navItems.map((item, index) =>
  item.submenu ? (
    <div key={index}>
      <div className="px-3 py-2 font-medium text-foreground">
        {item.label}
      </div>

      <div className="ml-4 border-l border-gray-200">
        {item.submenu.map((subItem) => (
          <Link
            key={subItem.href}
            href={subItem.href}
            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            {subItem.label}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Link
      key={item.href}
      href={item.href}
      className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
      onClick={() => setIsOpen(false)}
    >
      {item.label}
    </Link>
  )
)}
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
