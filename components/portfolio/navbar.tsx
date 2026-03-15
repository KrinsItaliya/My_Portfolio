"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Awareness", href: "#awareness" },
  { label: "Goals", href: "#goals" },
  { label: "SWOT", href: "#swot" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-primary/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick("#home") }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-cyan-500 to-accent flex items-center justify-center text-white font-bold text-lg overflow-hidden group-hover:scale-110 transition-all duration-500 shadow-lg shadow-primary/30 group-hover:shadow-primary/50">
              <Sparkles className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-cyan-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="hidden sm:flex items-center">
              <span className="text-xl font-bold text-gradient">Krins</span>
              <span className="text-xl font-bold text-gradient ml-1.5">Italiya</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium rounded-xl transition-all duration-300 group nav-item-glow",
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.href.slice(1) && (
                  <span className="absolute inset-0 rounded-xl bg-primary/5 animate-pulse-soft" />
                )}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative rounded-xl hover:bg-secondary overflow-hidden group w-10 h-10 nav-item-glow"
              >
                <div className="relative z-10 transition-transform duration-500">
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-primary group-hover:-rotate-12 transition-transform duration-300" />
                  )}
                </div>
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden rounded-xl w-10 h-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-5 h-5">
                <span className={cn(
                  "absolute left-0 w-5 h-0.5 bg-foreground transition-all duration-300",
                  isOpen ? "top-2.5 rotate-45" : "top-1"
                )} />
                <span className={cn(
                  "absolute left-0 top-2.5 w-5 h-0.5 bg-foreground transition-all duration-300",
                  isOpen ? "opacity-0 scale-0" : "opacity-100"
                )} />
                <span className={cn(
                  "absolute left-0 w-5 h-0.5 bg-foreground transition-all duration-300",
                  isOpen ? "top-2.5 -rotate-45" : "top-4"
                )} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "xl:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-2xl border-b border-border overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-6 space-y-1 max-h-[70vh] overflow-y-auto">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 nav-item-glow",
                activeSection === item.href.slice(1)
                  ? "text-primary bg-primary/10 font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? 'fade-up 0.3s ease forwards' : 'none'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
