"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail, MapPin, GraduationCap, ChevronDown, Cpu, Zap, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const roles = [
  "Embedded Systems Engineer",
  "VLSI Design Engineer",
  "RTL Designer",
  "Edge AI Developer"
]

// Floating 3D particles - subtle and professional
const floatingParticles = [
  { size: 6, x: 5, y: 15, duration: 8, delay: 0 },
  { size: 4, x: 12, y: 40, duration: 10, delay: 1 },
  { size: 8, x: 88, y: 20, duration: 9, delay: 0.5 },
  { size: 5, x: 92, y: 55, duration: 11, delay: 2 },
  { size: 6, x: 80, y: 75, duration: 8, delay: 1.5 },
  { size: 4, x: 15, y: 70, duration: 10, delay: 0.8 },
  { size: 5, x: 95, y: 85, duration: 9, delay: 2.5 },
]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2500)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern" />

      {/* 3D Gradient Orbs with parallax */}
      <div
        className="absolute w-[700px] h-[700px] bg-gradient-to-br from-primary/25 via-cyan-500/15 to-transparent rounded-full blur-[150px] animate-pulse-soft"
        style={{
          left: `calc(5% + ${mousePosition.x * 0.02}px)`,
          top: `calc(5% + ${mousePosition.y * 0.02}px)`,
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 via-accent/15 to-transparent rounded-full blur-[120px] animate-pulse-soft"
        style={{
          right: `calc(0% + ${mousePosition.x * -0.015}px)`,
          bottom: `calc(5% + ${mousePosition.y * -0.015}px)`,
          animationDelay: '1s'
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] bg-gradient-to-br from-emerald-500/15 to-transparent rounded-full blur-[100px] animate-pulse-soft"
        style={{
          left: '45%',
          bottom: '15%',
          animationDelay: '2s'
        }}
      />

      {/* Floating 3D Particles */}
      {floatingParticles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float-3d"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            background: `linear-gradient(135deg, ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#06b6d4' : '#8b5cf6'}, transparent)`,
            boxShadow: `0 0 ${particle.size * 4}px ${particle.size}px ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.3)' : i % 3 === 1 ? 'rgba(6, 182, 212, 0.3)' : 'rgba(139, 92, 246, 0.3)'}`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 lg:pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with 3D Effects */}
          <div className="relative mb-10 animate-fade-up">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 w-[280px] h-[280px] -left-[30px] -top-[30px] sm:w-[320px] sm:h-[320px] sm:-left-[50px] sm:-top-[50px] rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />

            {/* Middle rotating ring */}
            <div className="absolute inset-0 w-[250px] h-[250px] -left-[15px] -top-[15px] sm:w-[280px] sm:h-[280px] sm:-left-[30px] sm:-top-[30px] rounded-full border border-accent/20 animate-spin-reverse" />

            {/* Glow ring */}
            <div className="absolute inset-0 w-[230px] h-[230px] -left-[5px] -top-[5px] sm:w-[250px] sm:h-[250px] sm:-left-[15px] sm:-top-[15px] rounded-full bg-gradient-to-br from-primary/20 via-cyan-500/10 to-purple-500/20 animate-pulse-ring blur-sm" />

            {/* Profile Image */}
            <div className="relative w-52 h-52 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-card shadow-2xl profile-ring-3d group">
              <Image
                src="/photo_Krins.jpg"
                alt="Krins Italiya"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
                priority
              />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine rounded-full" />
            </div>

            {/* Floating Tech Icons */}
            <div className="floating-badge-3d animate-orbit-icon" style={{ left: 'calc(50% + 100px)', top: 'calc(50% - 60px)', animationDelay: '0s' }}>
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl">
                <Cpu className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="floating-badge-3d animate-orbit-icon" style={{ left: 'calc(50% - 130px)', top: 'calc(50% + 20px)', animationDelay: '0.5s' }}>
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-xl">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="floating-badge-3d animate-orbit-icon" style={{ left: 'calc(50% + 60px)', top: 'calc(50% + 100px)', animationDelay: '1s' }}>
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-xl">
                <Code2 className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Name with animated gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 animate-fade-up delay-100 leading-tight tracking-tight">
            <span className="text-foreground">Krins</span>{" "}
            <span className="text-gradient-animated">Italiya</span>
          </h1>

          {/* Typing Role */}
          <div className="h-10 sm:h-12 mb-8 animate-fade-up delay-200">
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient">
              {displayText}
              <span className="animate-pulse ml-0.5 inline-block w-0.5 h-6 sm:h-8 bg-primary align-middle" />
            </p>
          </div>

          {/* Info Cards with glow effect */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl w-full mb-10 animate-fade-up delay-300">
            {/* Academic Journey Card */}
            <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-xl card-glow group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg icon-glow-blue group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gradient">Academic Journey</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pursuing B.Tech in Electronics & Communication at PDEU with CGPA <span className="text-primary font-bold">9.24</span>. Focused on digital design, embedded systems, and VLSI.
              </p>
            </div>

            {/* Passion & Vision Card */}
            <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-xl card-glow group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg icon-glow-purple group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gradient">Passion & Vision</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building efficient hardware from microcontroller programming to RTL design and ASIC flow for high-performance real-time systems.
              </p>
            </div>
          </div>

          {/* Tags with hover glow */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-fade-up delay-400">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg tag-glow transition-all duration-300 hover:-translate-y-1">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">B.Tech ECE @ PDEU</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg tag-glow transition-all duration-300 hover:-translate-y-1">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Gujarat, India</span>
            </div>
          </div>

          {/* CTA Buttons with 3D effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-up delay-500">
            <Button
              size="lg"
              className="w-full sm:w-auto btn-gradient-3d text-white rounded-xl px-8 py-6 group"
              onClick={() => scrollToSection("projects")}
            >
              <span className="font-semibold">View My Work</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="/Resume_Krins_Italiya.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-xl px-8 py-6 border-2 hover:bg-primary/5 hover:border-primary/50 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <span className="font-semibold">View Resume</span>
              </Button>
            </a>
          </div>

          {/* Hero Bottom - Social Links and Scroll Indicator */}
          <div className="hero-bottom flex flex-col items-center">
            {/* Social Links with 3D glow */}
            <div className="connect-icons flex items-center justify-center gap-4 animate-fade-up delay-600">
              <span className="text-sm text-muted-foreground font-medium">Connect:</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: "https://github.com/krinsitaliya", label: "GitHub", color: "hover:shadow-slate-500/30" },
                  { icon: Linkedin, href: "https://linkedin.com/in/krins-italiya", label: "LinkedIn", color: "hover:shadow-blue-500/30" },
                  { icon: Mail, href: "mailto:krinsitaliya30@gmail.com", label: "Email", color: "hover:shadow-primary/30" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`social-icon-3d ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Scroll Indicator - positioned below social icons with proper spacing */}
            <div className="hero-scroll-indicator mt-10 sm:mt-12 flex flex-col items-center gap-2 animate-fade-up delay-700">
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Scroll</span>
              <div className="scroll-indicator-3d">
                <ChevronDown className="w-4 h-4 text-primary animate-bounce-soft" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
