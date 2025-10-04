"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Phone, Mail, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    { icon: Heart, label: "Donate", href: "#donate", color: "bg-red-500 hover:bg-red-600" },
    { icon: Phone, label: "Call", href: "tel:+911234567890", color: "bg-green-500 hover:bg-green-600" },
    { icon: Mail, label: "Email", href: "mailto:info@ayushmanfoundation.org", color: "bg-blue-500 hover:bg-blue-600" },
    { icon: MessageCircle, label: "Chat", href: "#chat", color: "bg-purple-500 hover:bg-purple-600" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Action buttons */}
        <div
          className={cn(
            "absolute bottom-16 right-0 space-y-3 transition-all duration-300",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
          )}
        >
          {actions.map((action, index) => (
            <div
              key={action.label}
              className="flex items-center gap-3"
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : `${(actions.length - index) * 50}ms`,
              }}
            >
              <span className="bg-white px-3 py-1 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                {action.label}
              </span>
              <Button
                size="sm"
                className={cn(
                  "h-12 w-12 rounded-full shadow-lg transition-all duration-200 hover:scale-110",
                  action.color,
                )}
                onClick={() => {
                  if (action.href.startsWith("#")) {
                    // Handle internal actions
                    console.log(`Action: ${action.label}`)
                  } else {
                    window.open(action.href, "_blank")
                  }
                }}
              >
                <action.icon className="h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>

        {/* Main FAB */}
        <Button
          size="lg"
          className={cn(
            "h-14 w-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110",
            "bg-emerald-600 hover:bg-emerald-700",
            isOpen && "rotate-45",
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Heart className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
