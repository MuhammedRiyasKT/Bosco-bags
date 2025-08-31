"use client"

import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageTransition } from "@/components/page-transition"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [message, setMessage] = useState("Hello, I'd like to know more about your bags.")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      const url = `https://wa.me/9745561967?text=${encodeURIComponent(message)}`
      window.open(url, "_blank", "noopener,noreferrer")
      toast({ 
        title: "Opening WhatsApp", 
        description: "Your message is being sent." 
      })
      setIsSubmitting(false)
    }, 800)
  }

  return (
    <div className="min-h-dvh bg-gradient-to-br from-background to-muted/30 text-foreground">
      <SiteHeader />
      <main>
        <PageTransition>
          <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We'd love to hear from you. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information Cards */}
              <div className="lg:col-span-1 space-y-6">
                <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <a href="tel:+919745561967" className="mt-1 text-foreground hover:text-primary transition-colors">
                        +91 97455 61967
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM, Sat 10AM-2PM</p>
                </div>

                <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <a 
                        href="mailto:contact@yourbrand.com" 
                        className="mt-1 text-foreground hover:text-primary transition-colors break-words"
                      >
                        contact@yourbrand.com
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>

                <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p className="mt-1 text-foreground">
                        Your Company Address<br />
                        City, Country
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Come see our collection in person</p>
                </div>

                <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Clock className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <ul className="mt-2 text-sm space-y-1">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Mon-Fri</span>
                          <span className="font-medium">9:00 AM – 6:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="font-medium">10:00 AM – 2:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="font-medium text-muted-foreground">Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form & Map */}
              <div className="lg:col-span-2 space-y-8">
                <div className="rounded-2xl overflow-hidden border shadow-sm">
                  <iframe
                    title="Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.610535745076!2d76.10694067480588!3d10.841087489311606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c7dc1552c4bd%3A0x515d9430eb89d20f!2sR4R5%2BCRJ%2C%20Pallipuram%2C%20Parudur%2C%20Kerala%20679305!5e0!3m2!1sen!2sin!4v1756623240966!5m2!1sen!2sin"
                    className="w-full h-80"
                    loading="lazy"
                  />
                </div>

                <form onSubmit={onSubmit} className="rounded-2xl border bg-card p-6 space-y-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <MessageCircle className="size-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">Send us a Message</h2>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground">Your Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-2 w-full rounded-lg border bg-background p-4 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      rows={5}
                      placeholder="Tell us what you're looking for..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gap-2 py-3 text-base" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Send via WhatsApp
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours. You can also call us at +91 97455 61967
                  </p>
                </form>
              </div>
            </div>
          </section>
        </PageTransition>
      </main>
      <SiteFooter />
    </div>
  )
}