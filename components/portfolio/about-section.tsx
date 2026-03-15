"use client"

import { useRef } from "react"
import { GraduationCap, Award, Cpu, Calendar, BookOpen, Sparkles, Zap, Target } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  { 
    label: "Education", 
    value: "B.Tech ECE", 
    subtitle: "PDEU, Gujarat",
    icon: GraduationCap, 
    color: "from-blue-500 to-cyan-500" 
  },
  { 
    label: "CGPA", 
    value: "9.24", 
    subtitle: "Current Standing",
    icon: Award, 
    color: "from-cyan-500 to-teal-500" 
  },
  { 
    label: "Focus Areas", 
    value: "VLSI & Embedded", 
    subtitle: "Hardware Design",
    icon: Cpu, 
    color: "from-purple-500 to-blue-500" 
  }
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      {/* Floating 3D elements */}
      <div className="absolute top-24 left-[10%] animate-float-3d opacity-20">
        <Sparkles className="w-10 h-10 text-primary" />
      </div>
      <div className="absolute bottom-32 right-[8%] animate-float-3d opacity-15" style={{ animationDelay: '2s' }}>
        <Target className="w-12 h-12 text-purple-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
            <BookOpen className="h-4 w-4" />
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Introduction & <span className="text-gradient">Philosophy</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
          </div>
        </div>

        {/* Stats Cards with 3D effect */}
        <div className={`grid sm:grid-cols-3 gap-6 mb-16 ${isInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card-3d section-card-glow flex flex-col items-center p-8 rounded-3xl bg-card border border-border shadow-lg text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-5 shadow-lg stat-icon-3d`}>
                <stat.icon className="h-9 w-9 text-white" />
              </div>
              <span className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</span>
              <span className="text-2xl font-bold text-foreground mb-1">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.subtitle}</span>
            </div>
          ))}
        </div>

        {/* Main Content with 3D card */}
        <div className={`max-w-4xl mx-auto ${isInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
          {/* Journey Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-xl card-3d section-card-glow relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-xl education-icon-3d">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
                  <p className="text-muted-foreground">From curious student to aspiring engineer</p>
                </div>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>
                    As a second-year <span className="text-foreground font-semibold">Electronics and Communication Engineering</span> student 
                    at PDEU, I am deeply passionate about exploring the intersection of hardware design and digital systems.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-cyan-500 shrink-0 mt-1" />
                  <span>
                    My academic journey has been marked by a strong foundation in <span className="text-primary font-semibold">VLSI design</span>, 
                    <span className="text-primary font-semibold"> embedded systems</span>, and <span className="text-primary font-semibold">digital logic</span>, 
                    complemented by hands-on experience with industry-standard tools.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <span>
                    With a CGPA of <span className="text-primary font-bold">9.24</span>, I have consistently demonstrated academic excellence 
                    while actively participating in technical projects and leadership activities.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
