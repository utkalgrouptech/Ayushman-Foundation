"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Heart, CreditCard, Shield, Users } from "lucide-react"

const donationAmounts = [500, 1000, 2500, 5000, 10000]

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const finalAmount = selectedAmount || Number.parseInt(customAmount) || 0

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Heart className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-2xl">Make a Donation</CardTitle>
        <p className="text-muted-foreground">
          Your contribution helps us provide healthcare and education to underserved communities
        </p>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Amount Selection */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Select Donation Amount</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {donationAmounts.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? "default" : "outline"}
                onClick={() => handleAmountSelect(amount)}
                className="h-12"
              >
                ₹{amount.toLocaleString()}
              </Button>
            ))}
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-amount">Custom Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
              <Input
                id="custom-amount"
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
        </div>

        {/* Impact Preview */}
        {finalAmount > 0 && (
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4">
              <h4 className="font-semibold text-primary mb-2">Your Impact</h4>
              <div className="space-y-1 text-sm">
                {finalAmount >= 500 && <p>• Provides medical consultation for 5 patients</p>}
                {finalAmount >= 1000 && <p>• Supports education for 2 children for a month</p>}
                {finalAmount >= 2500 && <p>• Funds a health camp in a rural village</p>}
                {finalAmount >= 5000 && <p>• Provides scholarship for 1 student for a year</p>}
                {finalAmount >= 10000 && <p>• Establishes a mobile clinic route</p>}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Donor Information */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Donor Information</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={donorInfo.name}
                onChange={(e) => setDonorInfo((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={donorInfo.email}
                onChange={(e) => setDonorInfo((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={donorInfo.phone}
              onChange={(e) => setDonorInfo((prev) => ({ ...prev, phone: e.target.value }))}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              value={donorInfo.message}
              onChange={(e) => setDonorInfo((prev) => ({ ...prev, message: e.target.value }))}
              placeholder="Share why you're supporting our cause..."
              rows={3}
            />
          </div>
        </div>

        {/* Security & Tax Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-1">
              <CreditCard className="w-4 h-4" />
              <span>80G Tax Exemption</span>
            </div>
          </div>

          <Badge variant="secondary" className="w-fit">
            <Users className="w-3 h-3 mr-1" />
            Join 10,000+ donors making a difference
          </Badge>
        </div>

        {/* Donate Button */}
        <Button
          size="lg"
          className="w-full group hover:scale-105 transition-transform duration-200"
          disabled={!finalAmount || !donorInfo.name || !donorInfo.email}
        >
          <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
          Donate ₹{finalAmount.toLocaleString()}
        </Button>
      </CardContent>
    </Card>
  )
}
