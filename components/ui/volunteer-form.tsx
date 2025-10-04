"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Heart } from "lucide-react"

const volunteerAreas = [
  { id: "healthcare", label: "Healthcare Services", description: "Medical camps, health awareness" },
  { id: "education", label: "Education Support", description: "Teaching, tutoring, digital literacy" },
  { id: "community", label: "Community Development", description: "Skill training, women empowerment" },
  { id: "fundraising", label: "Fundraising", description: "Event organization, donor relations" },
  { id: "admin", label: "Administrative", description: "Data entry, coordination, planning" },
]

const timeCommitments = [
  "2-4 hours per week",
  "4-8 hours per week",
  "8-16 hours per week",
  "Weekends only",
  "Flexible schedule",
]

export function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    profession: "",
    experience: "",
    motivation: "",
    timeCommitment: "",
    preferredAreas: [] as string[],
    skills: "",
    availability: {
      weekdays: false,
      weekends: false,
      evenings: false,
    },
  })

  const handleAreaToggle = (areaId: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredAreas: prev.preferredAreas.includes(areaId)
        ? prev.preferredAreas.filter((id) => id !== areaId)
        : [...prev.preferredAreas, areaId],
    }))
  }

  const handleAvailabilityChange = (key: keyof typeof formData.availability) => {
    setFormData((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [key]: !prev.availability[key],
      },
    }))
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="text-center space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Users className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-2xl">Volunteer Application</CardTitle>
        <p className="text-muted-foreground">Join our mission to transform lives through healthcare and education</p>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="v-name">Full Name *</Label>
              <Input
                id="v-name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="v-email">Email *</Label>
              <Input
                id="v-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="v-phone">Phone Number *</Label>
              <Input
                id="v-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="v-location">Location *</Label>
              <Input
                id="v-location"
                value={formData.location}
                onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                placeholder="City, State"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="v-profession">Profession/Occupation</Label>
            <Input
              id="v-profession"
              value={formData.profession}
              onChange={(e) => setFormData((prev) => ({ ...prev, profession: e.target.value }))}
              placeholder="Your current profession"
            />
          </div>
        </div>

        {/* Volunteer Preferences */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Volunteer Preferences</h3>

          <div className="space-y-3">
            <Label>Areas of Interest (Select all that apply)</Label>
            <div className="grid grid-cols-1 gap-3">
              {volunteerAreas.map((area) => (
                <div key={area.id} className="flex items-start space-x-3">
                  <Checkbox
                    id={area.id}
                    checked={formData.preferredAreas.includes(area.id)}
                    onCheckedChange={() => handleAreaToggle(area.id)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor={area.id} className="font-medium">
                      {area.label}
                    </Label>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Time Commitment</Label>
            <Select
              value={formData.timeCommitment}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, timeCommitment: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your availability" />
              </SelectTrigger>
              <SelectContent>
                {timeCommitments.map((commitment) => (
                  <SelectItem key={commitment} value={commitment}>
                    {commitment}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>Availability</Label>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="weekdays"
                  checked={formData.availability.weekdays}
                  onCheckedChange={() => handleAvailabilityChange("weekdays")}
                />
                <Label htmlFor="weekdays">Weekdays</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="weekends"
                  checked={formData.availability.weekends}
                  onCheckedChange={() => handleAvailabilityChange("weekends")}
                />
                <Label htmlFor="weekends">Weekends</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="evenings"
                  checked={formData.availability.evenings}
                  onCheckedChange={() => handleAvailabilityChange("evenings")}
                />
                <Label htmlFor="evenings">Evenings</Label>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Skills */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Experience & Skills</h3>

          <div className="space-y-2">
            <Label htmlFor="v-skills">Relevant Skills</Label>
            <Textarea
              id="v-skills"
              value={formData.skills}
              onChange={(e) => setFormData((prev) => ({ ...prev, skills: e.target.value }))}
              placeholder="List your relevant skills, certifications, or expertise..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="v-experience">Previous Volunteer Experience</Label>
            <Textarea
              id="v-experience"
              value={formData.experience}
              onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
              placeholder="Describe any previous volunteer work or community involvement..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="v-motivation">Why do you want to volunteer with us?</Label>
            <Textarea
              id="v-motivation"
              value={formData.motivation}
              onChange={(e) => setFormData((prev) => ({ ...prev, motivation: e.target.value }))}
              placeholder="Share your motivation and what you hope to achieve..."
              rows={4}
            />
          </div>
        </div>

        {/* Impact Preview */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-primary" />
              <h4 className="font-semibold text-primary">Your Volunteer Impact</h4>
            </div>
            <div className="space-y-1 text-sm">
              <p>• Join 500+ active volunteers across India</p>
              <p>• Directly impact 100+ lives through your service</p>
              <p>• Gain valuable experience in social work</p>
              <p>• Connect with like-minded changemakers</p>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button
          size="lg"
          className="w-full group hover:scale-105 transition-transform duration-200"
          disabled={!formData.name || !formData.email || !formData.phone || formData.preferredAreas.length === 0}
        >
          <Users className="w-5 h-5 mr-2 group-hover:animate-bounce" />
          Submit Application
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          <p>We'll review your application and get back to you within 3-5 business days.</p>
        </div>
      </CardContent>
    </Card>
  )
}
