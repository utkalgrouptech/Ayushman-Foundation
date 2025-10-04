"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Bell } from "lucide-react"
import { cn } from "@/lib/utils"

interface NotificationBannerProps {
  message: string
  type?: "info" | "success" | "warning" | "error"
  dismissible?: boolean
  action?: {
    label: string
    type: "donate" | "volunteer" | "contact" | "external"
    href?: string
  }
}

export function NotificationBanner({ message, type = "info", dismissible = true, action }: NotificationBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const handleActionClick = () => {
    if (!action) return

    switch (action.type) {
      case "donate":
        window.open("/donate", "_blank")
        break
      case "volunteer":
        window.open("/volunteer", "_blank")
        break
      case "contact":
        window.open("/contact", "_blank")
        break
      case "external":
        if (action.href) {
          window.open(action.href, "_blank")
        }
        break
      default:
        console.log(`Action: ${action.label}`)
    }
  }

  const typeClasses = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800",
  }

  return (
    <div className={cn("border-l-4 p-4 transition-all duration-300", typeClasses[type])}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell className="h-5 w-5" />
          <p className="font-medium">{message}</p>
        </div>

        <div className="flex items-center gap-2">
          {action && (
            <Button variant="ghost" size="sm" onClick={handleActionClick} className="text-current hover:bg-white/20">
              {action.label}
            </Button>
          )}

          {dismissible && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="text-current hover:bg-white/20 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
