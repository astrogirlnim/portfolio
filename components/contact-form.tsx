"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Call our local API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        console.error("Server error:", data.error)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="Your email"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            placeholder="Subject"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 bg-background border border-border rounded-md resize-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            placeholder="Your message"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-md text-green-700 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300">
          ✅ Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-md text-red-700 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300">
          ❌ There was an error sending your message. Please try again or email me directly at nmmsoftware@gmail.com
        </div>
      )}
    </div>
  )
} 