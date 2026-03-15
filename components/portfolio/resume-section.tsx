"use client"

import { useRef } from "react"
import { GraduationCap, Download, Code2, Cpu, Cog, Wrench, FileText, Zap, CircuitBoard, Layers, Terminal, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    color: "from-blue-500 to-cyan-500",
    bgGlow: "blue",
    skills: ["Verilog HDL", "System Verilog", "C Programming", "Assembly (8086)", "Embedded C", "Python"]
  },
  {
    icon: CircuitBoard,
    title: "VLSI & ASIC Design",
    color: "from-cyan-500 to-teal-500",
    bgGlow: "cyan",
    skills: ["RTL Design", "FSM Design", "Static Timing Analysis", "RTL-to-GDSII Flow"]
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    color: "from-purple-500 to-blue-500",
    bgGlow: "purple",
    skills: ["Microcontrollers", "Interrupt Handling", "RTOS", "Sensor Interfacing"]
  },
  {
    icon: Wrench,
    title: "EDA Tools",
    color: "from-emerald-500 to-cyan-500",
    bgGlow: "emerald",
    skills: ["Synopsys Design Compiler", "Cadence Virtuoso", "MATLAB", "Proteus", "LTspice", "KiCad", "Linux"]
  }
]

// 3D Animated SVG Icons for each category
const AnimatedIcons = {
  programming: () => (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="prog-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6">
            <animate attributeName="stopColor" values="#3b82f6;#06b6d4;#3b82f6" dur="3s" repeatCount="indefinite"/>
          </stop>
          <stop offset="100%" stopColor="#06b6d4">
            <animate attributeName="stopColor" values="#06b6d4;#8b5cf6;#06b6d4" dur="3s" repeatCount="indefinite"/>
          </stop>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="60" height="60" rx="12" fill="url(#prog-grad)" opacity="0.1"/>
      <text x="20" y="32" fill="url(#prog-grad)" fontSize="12" fontFamily="monospace" fontWeight="bold">
        <tspan>{'<code>'}</tspan>
      </text>
      <rect x="20" y="38" width="35" height="4" rx="2" fill="url(#prog-grad)" opacity="0.6">
        <animate attributeName="width" values="35;40;35" dur="2s" repeatCount="indefinite"/>
      </rect>
      <rect x="20" y="48" width="25" height="4" rx="2" fill="url(#prog-grad)" opacity="0.4">
        <animate attributeName="width" values="25;30;25" dur="2.5s" repeatCount="indefinite"/>
      </rect>
      <text x="20" y="66" fill="url(#prog-grad)" fontSize="12" fontFamily="monospace" fontWeight="bold">
        <tspan>{'</>'}</tspan>
      </text>
    </svg>
  ),
  vlsi: () => (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="vlsi-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4"/>
          <stop offset="100%" stopColor="#14b8a6"/>
        </linearGradient>
      </defs>
      {/* Chip body */}
      <rect x="20" y="20" width="40" height="40" rx="4" fill="url(#vlsi-grad)" opacity="0.2"/>
      <rect x="25" y="25" width="30" height="30" rx="2" fill="url(#vlsi-grad)" opacity="0.4"/>
      {/* Animated pins */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={28 + i * 10} y="12" width="4" height="10" rx="1" fill="url(#vlsi-grad)">
            <animate attributeName="height" values="10;14;10" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite"/>
          </rect>
          <rect x={28 + i * 10} y="58" width="4" height="10" rx="1" fill="url(#vlsi-grad)">
            <animate attributeName="height" values="10;14;10" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite"/>
          </rect>
        </g>
      ))}
      {/* Core */}
      <circle cx="40" cy="40" r="8" fill="url(#vlsi-grad)">
        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="40" cy="40" r="4" fill="#0c1222"/>
    </svg>
  ),
  embedded: () => (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="emb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
      </defs>
      {/* Board */}
      <rect x="12" y="20" width="56" height="40" rx="4" fill="url(#emb-grad)" opacity="0.15"/>
      {/* MCU */}
      <rect x="30" y="30" width="20" height="20" rx="2" fill="url(#emb-grad)"/>
      {/* Animated signal lines */}
      <path d="M15 35 L28 35" stroke="url(#emb-grad)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="1s" repeatCount="indefinite"/>
      </path>
      <path d="M52 35 L65 35" stroke="url(#emb-grad)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="1s" repeatCount="indefinite"/>
      </path>
      <path d="M15 45 L28 45" stroke="url(#emb-grad)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="1.2s" repeatCount="indefinite"/>
      </path>
      <path d="M52 45 L65 45" stroke="url(#emb-grad)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="1.2s" repeatCount="indefinite"/>
      </path>
      {/* LED indicators */}
      <circle cx="20" cy="25" r="3" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="60" cy="25" r="3" fill="#ef4444">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="0.8s" repeatCount="indefinite"/>
      </circle>
    </svg>
  ),
  eda: () => (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="eda-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#06b6d4"/>
        </linearGradient>
      </defs>
      {/* Waveform display */}
      <rect x="10" y="15" width="60" height="50" rx="6" fill="url(#eda-grad)" opacity="0.1"/>
      <rect x="15" y="20" width="50" height="40" rx="3" fill="#0c1222" opacity="0.3"/>
      {/* Animated waveform */}
      <path d="M20 40 L28 30 L36 50 L44 35 L52 45 L60 38" stroke="url(#eda-grad)" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="d" 
          values="M20 40 L28 30 L36 50 L44 35 L52 45 L60 38;M20 38 L28 48 L36 30 L44 45 L52 35 L60 42;M20 40 L28 30 L36 50 L44 35 L52 45 L60 38" 
          dur="2s" repeatCount="indefinite"/>
      </path>
      {/* Grid lines */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="20" y1={25 + i * 10} x2="60" y2={25 + i * 10} stroke="url(#eda-grad)" strokeWidth="0.5" opacity="0.3"/>
      ))}
    </svg>
  )
}

export function ResumeSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  const iconMap = ['programming', 'vlsi', 'embedded', 'eda'] as const

  return (
    <section id="resume" ref={ref} className="section-padding relative bg-secondary/30 overflow-hidden">
      {/* Background with floating elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
      
      {/* Floating 3D elements */}
      <div className="absolute top-20 right-[10%] animate-float-3d opacity-20">
        <Terminal className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-32 left-[8%] animate-float-3d opacity-20" style={{ animationDelay: '1.5s' }}>
        <Database className="w-10 h-10 text-cyan-500" />
      </div>
      <div className="absolute top-1/2 right-[5%] animate-float-3d opacity-15" style={{ animationDelay: '2.5s' }}>
        <Layers className="w-14 h-14 text-purple-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        {/* Section Header with 3D icon */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
            <FileText className="h-4 w-4" />
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Resume & <span className="text-gradient">Skills</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
          </div>
        </div>

        {/* Education Card with 3D effect */}
        <div className={`mb-12 ${isInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
          <div className="p-8 rounded-3xl bg-card border border-border shadow-xl card-3d resume-card-glow relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
            
            <div className="flex flex-col sm:flex-row items-start gap-6 relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center shrink-0 education-icon-3d border border-primary/20">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Pandit Deendayal Energy University
                </h3>
                <p className="text-primary font-semibold text-lg mb-4">
                  B.Tech Electronics & Communication Engineering
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary border border-border">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm text-muted-foreground">Expected: June 2027</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-primary">CGPA: 9.24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid with 3D animated icons */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = AnimatedIcons[iconMap[index]]
            return (
              <div
                key={category.title}
                className={`skill-card-3d section-card-glow rounded-3xl bg-card border border-border shadow-lg overflow-hidden flex flex-col ${
                  isInView ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Header with animated icon */}
                <div className="p-6 pb-4 flex-1">
                  <div className="flex items-center gap-4 mb-5">
                    {/* 3D Animated SVG Icon */}
                    <div className="w-16 h-16 relative shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-20 blur-sm`} />
                      <div className="relative w-full h-full">
                        <IconComponent />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{category.title}</h4>
                      <p className="text-sm text-muted-foreground">{category.skills.length} skills</p>
                    </div>
                  </div>

                  {/* Skills as animated tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="skill-tag-3d"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Bottom gradient line - always at the bottom */}
                <div className={`h-1 w-full bg-gradient-to-r ${category.color} mt-auto`} />
              </div>
            )
          })}
        </div>

        {/* Download Resume Button with 3D effect */}
        <div className={`flex justify-center ${isInView ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
          <a
            href="/Resume_Krins_Italiya.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="btn-gradient-3d text-white rounded-xl px-10 py-7 group shadow-xl"
            >
              <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              <span className="font-semibold text-lg">Download Full Resume</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
