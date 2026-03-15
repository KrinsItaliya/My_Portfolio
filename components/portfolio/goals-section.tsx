"use client"

import { useRef } from "react"
import { Target, Rocket, Award, Sparkles, Flag, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const goals = [
  {
    icon: Target,
    title: "Short Term (1-2 Years)",
    items: [
      "Master advanced ASIC design methodologies and RTL-to-GDSII flow",
      "Gain hands-on industry experience in embedded systems development",
      "Build a strong portfolio of hardware and firmware projects"
    ],
    color: "from-blue-500 to-cyan-500",
    dotColor: "border-blue-500"
  },
  {
    icon: Rocket,
    title: "Medium Term (3-5 Years)",
    items: [
      "Work as a Hardware Design Engineer at a leading semiconductor company",
      "Specialize in digital architecture and SoC design",
      "Contribute to cutting-edge processor or accelerator development"
    ],
    color: "from-purple-500 to-blue-500",
    dotColor: "border-purple-500"
  },
  {
    icon: Award,
    title: "Long Term (5-10 Years)",
    items: [
      "Lead development of high-performance embedded computing systems",
      "Pioneer innovations in hardware-software co-design",
      "Mentor the next generation of hardware engineers"
    ],
    color: "from-cyan-500 to-teal-500",
    dotColor: "border-cyan-500"
  }
]

export function GoalsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="goals" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
      
      {/* Floating 3D elements */}
      <div className="absolute top-24 right-[10%] animate-float-3d opacity-20">
        <Flag className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-32 left-[8%] animate-float-3d opacity-15" style={{ animationDelay: '2s' }}>
        <Star className="w-10 h-10 text-purple-500" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto container-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Vision
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Future <span className="text-gradient">Goals</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
          </div>
        </div>

        {/* Timeline with 3D effects */}
        <div className={`relative ${isInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
          {/* Timeline Line with gradient */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full" />

          {/* Goal Items */}
          <div className="space-y-8 pl-20">
            {goals.map((goal, index) => (
              <div
                key={goal.title}
                className={`relative goal-item ${isInView ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Icon with 3D effect */}
                <div className={`absolute -left-20 w-14 h-14 rounded-2xl bg-gradient-to-br ${goal.color} flex items-center justify-center shadow-xl goal-icon-3d`}>
                  <goal.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Connecting line */}
                <div className={`absolute -left-6 top-7 w-6 h-0.5 bg-gradient-to-r ${goal.color}`} />

                {/* Card with 3D effect */}
                <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-lg goal-card-3d">
                  <h3 className="text-xl font-bold text-foreground mb-4">{goal.title}</h3>
                  <ul className="space-y-4">
                    {goal.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground group">
                        <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
