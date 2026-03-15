"use client"

import { useRef } from "react"
import { Mail, Phone, Github, Linkedin, MapPin, Send, Sparkles, ExternalLink, MessageCircle } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const contactLinks = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "krinsitaliya30@gmail.com",
    href: "mailto:krinsitaliya30@gmail.com",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/30"
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 98254 70778",
    href: "tel:+919825470778",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "linkedin.com/in/krins-italiya",
    href: "https://linkedin.com/in/krins-italiya",
    color: "from-blue-600 to-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30"
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "github.com/krinsitaliya",
    href: "https://github.com/krinsitaliya",
    color: "from-gray-700 to-gray-500",
    bgColor: "bg-gray-50 dark:bg-gray-950/30"
  }
]

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      {/* Floating 3D elements */}
      <div className="absolute top-24 right-[10%] animate-float-3d opacity-20">
        <MessageCircle className="w-14 h-14 text-primary" />
      </div>
      <div className="absolute bottom-32 left-[8%] animate-float-3d opacity-15" style={{ animationDelay: '2s' }}>
        <Send className="w-10 h-10 text-purple-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
            <Send className="h-4 w-4" />
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 mb-6">
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I&apos;m always open to discussing new opportunities, collaborations, or simply connecting with fellow engineers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Contact Info */}
          <div className={`${isInView ? 'animate-slide-left delay-200' : 'opacity-0'}`}>
            {/* Location Card with 3D effect */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-lg card-3d mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl education-icon-3d">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Location</p>
                  <p className="text-xl font-bold text-foreground">Gujarat, India</p>
                </div>
              </div>
            </div>

            {/* Contact Links Grid with 3D hover */}
            <div className="grid grid-cols-2 gap-4">
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="contact-card-3d group p-5 rounded-2xl bg-card border border-border shadow-lg overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Colored top area */}
                  <div className={`-mx-5 -mt-5 mb-4 p-4 ${link.bgColor}`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <link.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground font-semibold tracking-wider mb-1">{link.label}</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                    {link.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - CTA Card with 3D effect */}
          <div className={`${isInView ? 'animate-slide-right delay-300' : 'opacity-0'}`}>
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary via-purple-500 to-accent text-white shadow-2xl overflow-hidden relative cta-card-3d">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse-soft" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              
              <div className="relative">
                {/* Icon with 3D effect */}
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm shadow-xl border border-white/10">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Ready to collaborate?
                </h3>
                <p className="text-white/90 leading-relaxed mb-8">
                  Whether you have a project in mind, want to discuss opportunities, or just want to connect about VLSI and embedded systems, I would love to hear from you.
                </p>

                {/* CTA Buttons with 3D effect */}
                <div className="space-y-4">
                  <a 
                    href="mailto:krinsitaliya30@gmail.com"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white text-primary font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
                  >
                    <Send className="h-5 w-5" />
                    Send me an Email
                  </a>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://linkedin.com/in/krins-italiya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/20 text-white font-semibold backdrop-blur-sm hover:bg-white/30 hover:-translate-y-0.5 transition-all duration-300 border border-white/10"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href="https://github.com/krinsitaliya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/20 text-white font-semibold backdrop-blur-sm hover:bg-white/30 hover:-translate-y-0.5 transition-all duration-300 border border-white/10"
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
