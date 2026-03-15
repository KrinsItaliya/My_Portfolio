"use client"

import { useRef } from "react"
import { Trophy, GraduationCap, Cpu, Medal, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const achievements = [
  {
    icon: Trophy,
    title: "IESA Hackathon Semi-Finalist",
    badge: "Top 30 of 500+ Teams",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    description: "Ranked in Top 30 among 500+ teams for developing an Edge AI based wafer die defect detection system for semiconductor manufacturing. Demonstrated innovation in real-time defect classification on resource-constrained edge devices.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    badge: "CGPA 9.24",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Maintaining a 9.24 CGPA in B.Tech Electronics & Communication Engineering at PDEU with strong focus on digital design, embedded systems, and VLSI. Consistently ranked among top performers in the department.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Cpu,
    title: "Advanced Semiconductor & Embedded Projects",
    badge: "5+ Major Projects",
    badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    description: "Developed multiple projects in VLSI design, embedded systems, and AI-driven semiconductor applications including RTL-to-GDSII flow implementation, interrupt-driven microprocessor systems, and tethered UAV flight control.",
    color: "from-purple-500 to-blue-500"
  }
]

export function AchievementsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="achievements" ref={ref} className="section-padding relative bg-secondary/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
      
      {/* Floating 3D elements */}
      <div className="absolute top-24 left-[10%] animate-float-3d opacity-20">
        <Medal className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-32 right-[8%] animate-float-3d opacity-15" style={{ animationDelay: '2s' }}>
        <Star className="w-10 h-10 text-yellow-500" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
            <Trophy className="h-4 w-4" />
            Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
          </div>
        </div>

        {/* Achievements Grid with 3D effect */}
        <div className={`grid md:grid-cols-3 gap-6 ${isInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group p-8 rounded-3xl bg-card border border-border shadow-xl card-3d relative overflow-hidden transition-all duration-500 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color}`} />
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-5 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">{achievement.title}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${achievement.badgeColor}`}>
                  {achievement.badge}
                </span>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
