import type React from "react"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { NotificationBanner } from "@/components/ui/notification-banner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ayushman Foundation - Healthcare & Social Welfare NGO",
  description:
    "Ayushman Foundation is dedicated to providing healthcare and social welfare services to underserved communities across India.",
  generator: "v0.app",
    icons: {
    icon: "/favicon.ico", // or "/favicon.ico"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">

        <Navigation />

        <main className="min-h-screen">{children}</main>

        <Footer />

        <FloatingActionButton />
        <ScrollToTop />
      </body>
    </html>
  )
}
