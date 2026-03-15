"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles, Cpu } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/krinsitaliya", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/krins-italiya", label: "LinkedIn" },
  { icon: Mail, href: "mailto:krinsitaliya30@gmail.com", label: "Email" }
]

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-card/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto container-padding py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3 group mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-accent flex items-center justify-center text-white font-bold overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-gradient">Krins Italiya</span>
              </div>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Electronics & Communication Engineering student passionate about VLSI design, 
              embedded systems, and creating innovative hardware solutions.
            </p>
            {/* Social Links with 3D effect */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="social-icon-3d p-3"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:krinsitaliya30@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                krinsitaliya30@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-cyan-500" />
                </div>
                <span>VLSI & Embedded Systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Krins Italiya. All rights reserved.</span>
          </div>

          {/* Built with Love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            <span>for hardware innovation</span>
          </div>

          {/* Back to Top with 3D effect */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span className="text-sm font-medium">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
