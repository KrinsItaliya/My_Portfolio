"use client"

import { useRef } from "react"
import { Users, Bot, Lightbulb, Award, ArrowRight, Briefcase, Rocket, Heart } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const activities = [
  {
    icon: Bot,
    title: "Robotics Workshop Coordinator",
    description: "Organized and led hands-on robotics workshops for junior students, introducing them to embedded systems, sensor integration, and autonomous robot design principles.",
    badge: "Mentored 50+ students",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Technical Club Active Member",
    description: "Active member of the university's electronics and robotics club, contributing to team projects and participating in inter-college technical competitions.",
    badge: "3+ successful projects",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Lightbulb,
    title: "Collaborative Engineering Projects",
    description: "Led cross-functional teams in developing complex engineering solutions, coordinating between hardware and software teams to deliver integrated systems.",
    badge: "Team Lead for 4 projects",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Award,
    title: "Technical Mentorship",
    description: "Provided peer mentorship in VLSI design and embedded systems, helping fellow students understand complex concepts and complete their academic projects.",
    badge: "20+ students mentored",
    color: "from-emerald-500 to-teal-500"
  }
]

export function LeadershipSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="leadership" ref={ref} className="section-padding relative bg-secondary/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      {/* Floating 3D elements */}
      <div className="absolute top-24 left-[10%] animate-float-3d opacity-20">
        <Rocket className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-32 right-[8%] animate-float-3d opacity-15" style={{ animationDelay: '2s' }}>
        <Heart className="w-10 h-10 text-pink-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
            <Briefcase className="h-4 w-4" />
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Leadership & <span className="text-gradient">Activities</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 mb-6">
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Actively contributing to the engineering community through leadership roles, workshops, and collaborative initiatives.
          </p>
        </div>

        {/* Activities Grid with 3D effects */}
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className={`leadership-card-3d group relative p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xl overflow-hidden ${
                isInView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top border gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${activity.color}`} />
              
              {/* Icon with 3D effect */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-5 shadow-xl leadership-icon-3d`}>
                <activity.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                {activity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {activity.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {activity.badge}
                </span>
                <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group/btn">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
