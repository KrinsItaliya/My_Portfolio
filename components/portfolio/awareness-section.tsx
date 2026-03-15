"use client"

import { useRef } from "react"
import { Brain, Cpu, Cog, Cloud, TrendingUp, Globe, Zap, Network } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const awarenessAreas = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Understanding the intersection of AI with hardware acceleration, from neural processing units to custom ASIC designs optimized for machine learning workloads.",
    tags: ["AI Hardware", "NPUs & Accelerators"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30"
  },
  {
    icon: Cpu,
    title: "Semiconductor Industry",
    description: "Staying informed about the global semiconductor landscape, advanced manufacturing processes, and the strategic importance of chip fabrication.",
    tags: ["3nm & Below", "Process Technology"],
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/30"
  },
  {
    icon: Cog,
    title: "Embedded Systems",
    description: "Tracking the evolution from simple microcontrollers to sophisticated SoCs. Understanding edge computing and IoT convergence with AI.",
    tags: ["IoT & Edge", "Computing Trends"],
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Recognizing cloud infrastructure in modern engineering workflows, from remote FPGA development to cloud-based EDA tools.",
    tags: ["Cloud EDA", "Design Tools"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
  }
]

export function AwarenessSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="awareness" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      {/* Floating 3D elements */}
      <div className="absolute top-24 left-[10%] animate-float-3d opacity-20">
        <Network className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-32 right-[8%] animate-float-3d opacity-15" style={{ animationDelay: '2s' }}>
        <Zap className="w-10 h-10 text-cyan-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
            <Globe className="h-4 w-4" />
            Industry Trends
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Global <span className="text-gradient">Awareness</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 mb-6">
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Keeping pace with emerging technologies and global trends shaping the future of electronics and computing.
          </p>
        </div>

        {/* Awareness Grid with 3D effects */}
        <div className="grid md:grid-cols-2 gap-6">
          {awarenessAreas.map((area, index) => (
            <div
              key={area.title}
              className={`awareness-card-3d group relative p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xl overflow-hidden ${
                isInView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top border gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color}`} />
              
              {/* Decorative background */}
              <div className={`absolute top-0 left-0 right-0 h-36 ${area.bgColor} opacity-50 rounded-t-3xl`} />
              
              {/* Icon with 3D effect */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-5 shadow-xl awareness-icon-3d`}>
                <area.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                {area.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed mb-5">
                {area.description}
              </p>

              {/* Tags */}
              <div className="relative flex flex-wrap items-center gap-3">
                {area.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
