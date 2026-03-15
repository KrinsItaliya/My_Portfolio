"use client"

import { useRef } from "react"
import { Zap, AlertTriangle, TrendingUp, Shield, BarChart3, Target, Compass } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const swotData = [
  {
    category: "Strengths",
    icon: Zap,
    bgClass: "swot-green",
    iconColor: "from-emerald-500 to-teal-500",
    titleColor: "text-emerald-600 dark:text-emerald-400",
    bulletColor: "bg-emerald-500",
    items: [
      "Strong foundation in Verilog HDL and RTL design",
      "Excellent academic performance (9.24 CGPA)",
      "Hands-on experience with embedded systems and VLSI"
    ]
  },
  {
    category: "Weaknesses",
    icon: AlertTriangle,
    bgClass: "swot-yellow",
    iconColor: "from-amber-500 to-orange-500",
    titleColor: "text-amber-600 dark:text-amber-400",
    bulletColor: "bg-amber-500",
    items: [
      "Limited industry experience in professional settings",
      "Currently building expertise in advanced verification",
      "Expanding knowledge in analog design concepts"
    ]
  },
  {
    category: "Opportunities",
    icon: TrendingUp,
    bgClass: "swot-blue",
    iconColor: "from-blue-500 to-cyan-500",
    titleColor: "text-blue-600 dark:text-blue-400",
    bulletColor: "bg-blue-500",
    items: [
      "Growing semiconductor industry in India",
      "Rising demand for Edge AI and embedded systems",
      "Emerging opportunities in RISC-V ecosystem"
    ]
  },
  {
    category: "Threats",
    icon: Shield,
    bgClass: "swot-red",
    iconColor: "from-rose-500 to-red-500",
    titleColor: "text-rose-600 dark:text-rose-400",
    bulletColor: "bg-rose-500",
    items: [
      "Rapidly evolving technology landscape",
      "High competition in semiconductor industry",
      "Need for continuous upskilling and adaptation"
    ]
  }
]

export function SwotSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="swot" ref={ref} className="section-padding relative bg-secondary/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
      
      {/* Floating 3D elements */}
      <div className="absolute top-20 right-[10%] animate-float-3d opacity-20">
        <Target className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-24 left-[8%] animate-float-3d opacity-15" style={{ animationDelay: '1.5s' }}>
        <Compass className="w-10 h-10 text-emerald-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
            <BarChart3 className="h-4 w-4" />
            Self Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            SWOT <span className="text-gradient">Analysis</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
          </div>
        </div>

        {/* SWOT Grid with 3D effects */}
        <div className="grid md:grid-cols-2 gap-6">
          {swotData.map((section, index) => (
            <div
              key={section.category}
              className={`swot-card-3d rounded-3xl border border-border/50 shadow-lg overflow-hidden ${section.bgClass} ${
                isInView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.iconColor} flex items-center justify-center shadow-lg swot-icon-3d`}>
                    <section.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${section.titleColor}`}>
                    {section.category}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-foreground/80 group">
                      <span className={`w-2.5 h-2.5 mt-1.5 rounded-full ${section.bulletColor} shrink-0 group-hover:scale-125 transition-transform`} />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
