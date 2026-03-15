"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, MessageSquare, Quote, Star, Sparkles } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const testimonials = [
  {
    quote: "Krins demonstrates exceptional understanding of hardware design principles and consistently delivers high-quality work in embedded systems projects. His attention to detail and problem-solving abilities are remarkable.",
    name: "Dr. Mahesh Kumar",
    role: "Professor, Electronics Engineering",
    organization: "PDEU",
    avatar: "MK",
    rating: 5,
    color: "from-blue-500 to-cyan-500"
  },
  {
    quote: "Working with Krins on the robotics project was a great experience. He brings both technical expertise and leadership skills to the team. His ability to break down complex problems is impressive.",
    name: "Arjun Mehta",
    role: "Project Team Member",
    organization: "PDEU Robotics Club",
    avatar: "AM",
    rating: 5,
    color: "from-purple-500 to-blue-500"
  },
  {
    quote: "His innovative approach to the semiconductor defect detection challenge during the IESA Hackathon showed remarkable problem-solving abilities. Krins has a bright future in the VLSI industry.",
    name: "Technical Mentor",
    role: "Industry Expert",
    organization: "IESA Hackathon",
    avatar: "TM",
    rating: 5,
    color: "from-cyan-500 to-teal-500"
  }
]

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance slider
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section id="testimonials" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-[10%] animate-float-3d opacity-20">
        <Quote className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-24 right-[8%] animate-float-3d opacity-15" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-12 h-12 text-purple-500" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto container-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
            <MessageSquare className="h-4 w-4" />
            References
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">Testimonials</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
          </div>
        </div>

        {/* Testimonial Cards Container */}
        <div 
          className={`relative ${isInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="testimonial-card-3d testimonial-glow relative">
                    {/* Background gradient based on testimonial */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-5 rounded-3xl`} />
                    
                    {/* Quote icon */}
                    <div className="absolute -top-2 -left-2 w-16 h-16 flex items-center justify-center">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-lg rotate-[-10deg]`}>
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-8 sm:p-12 text-center">
                      {/* Stars */}
                      <div className="flex items-center justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 italic max-w-3xl mx-auto">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      
                      {/* Author */}
                      <div className="flex flex-col items-center">
                        {/* Avatar */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg avatar-3d`}>
                          {testimonial.avatar}
                        </div>
                        <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <span className={`mt-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${testimonial.color} text-white`}>
                          {testimonial.organization}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="nav-button-3d group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            {/* Dots with progress */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="relative"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <div className={`transition-all duration-500 ${
                    index === currentIndex
                      ? "w-10 h-3 rounded-full bg-gradient-to-r from-primary to-cyan-500"
                      : "w-3 h-3 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`} />
                  {index === currentIndex && isAutoPlaying && (
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="h-full bg-white/30 animate-progress-bar" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="nav-button-3d group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl rounded-full" />
        </div>
      </div>
    </section>
  )
}
