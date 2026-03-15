"use client"

import { useRef, useState } from "react"
import { Folder, ExternalLink, Github, Cpu, CircuitBoard, Zap, Bot, Eye, Layers, X, Calendar, Tag } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

// 3D Animated SVG Illustrations for projects
const ProjectIllustrations = {
  uav: () => (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="uav-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#06b6d4"/>
        </linearGradient>
        <linearGradient id="uav-prop" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3"/>
          <stop offset="50%" stopColor="#06b6d4"/>
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3"/>
        </linearGradient>
        <filter id="uav-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Tether line */}
      <path d="M100 130 Q100 145, 100 155" stroke="#64748b" strokeWidth="2" strokeDasharray="4,4">
        <animate attributeName="stroke-dashoffset" values="0;8" dur="1s" repeatCount="indefinite"/>
      </path>
      
      {/* Arms */}
      <line x1="65" y1="80" x2="35" y2="60" stroke="url(#uav-body)" strokeWidth="6" strokeLinecap="round"/>
      <line x1="135" y1="80" x2="165" y2="60" stroke="url(#uav-body)" strokeWidth="6" strokeLinecap="round"/>
      <line x1="65" y1="80" x2="35" y2="100" stroke="url(#uav-body)" strokeWidth="6" strokeLinecap="round"/>
      <line x1="135" y1="80" x2="165" y2="100" stroke="url(#uav-body)" strokeWidth="6" strokeLinecap="round"/>
      
      {/* Center body */}
      <ellipse cx="100" cy="80" rx="35" ry="20" fill="url(#uav-body)" filter="url(#uav-glow)"/>
      <ellipse cx="100" cy="80" rx="20" ry="12" fill="#e0f2fe"/>
      <ellipse cx="100" cy="80" rx="8" ry="5" fill="#3b82f6"/>
      
      {/* Propellers with rotation */}
      <g transform="translate(35, 60)">
        <ellipse cx="0" cy="0" rx="20" ry="5" fill="url(#uav-prop)">
          <animateTransform attributeName="transform" type="rotate" values="0;360" dur="0.3s" repeatCount="indefinite"/>
        </ellipse>
      </g>
      <g transform="translate(165, 60)">
        <ellipse cx="0" cy="0" rx="20" ry="5" fill="url(#uav-prop)">
          <animateTransform attributeName="transform" type="rotate" values="360;0" dur="0.3s" repeatCount="indefinite"/>
        </ellipse>
      </g>
      <g transform="translate(35, 100)">
        <ellipse cx="0" cy="0" rx="20" ry="5" fill="url(#uav-prop)">
          <animateTransform attributeName="transform" type="rotate" values="360;0" dur="0.3s" repeatCount="indefinite"/>
        </ellipse>
      </g>
      <g transform="translate(165, 100)">
        <ellipse cx="0" cy="0" rx="20" ry="5" fill="url(#uav-prop)">
          <animateTransform attributeName="transform" type="rotate" values="0;360" dur="0.3s" repeatCount="indefinite"/>
        </ellipse>
      </g>
      
      {/* Floating particles */}
      <circle cx="50" cy="40" r="2" fill="#06b6d4" opacity="0.6">
        <animate attributeName="cy" values="40;30;40" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="150" cy="45" r="2" fill="#3b82f6" opacity="0.6">
        <animate attributeName="cy" values="45;35;45" dur="2.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  ),
  
  wafer: () => (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="wafer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
        <linearGradient id="scan-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent"/>
          <stop offset="50%" stopColor="#22d3ee"/>
          <stop offset="100%" stopColor="transparent"/>
        </linearGradient>
      </defs>
      
      {/* Wafer circle */}
      <circle cx="100" cy="80" r="55" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="3"/>
      <circle cx="100" cy="80" r="50" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.5"/>
      
      {/* Grid pattern on wafer */}
      {[...Array(9)].map((_, i) => (
        <line key={`h${i}`} x1="50" y1={40 + i * 10} x2="150" y2={40 + i * 10} stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
      ))}
      {[...Array(9)].map((_, i) => (
        <line key={`v${i}`} x1={55 + i * 10} y1="30" x2={55 + i * 10} y2="130" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
      ))}
      
      {/* AI scanning effect */}
      <rect x="50" y="30" width="100" height="100" fill="url(#scan-line)" opacity="0.3">
        <animate attributeName="y" values="30;120;30" dur="3s" repeatCount="indefinite"/>
      </rect>
      
      {/* Defect indicators with pulse */}
      <g>
        <circle cx="75" cy="60" r="6" fill="#ef4444">
          <animate attributeName="r" values="6;8;6" dur="1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="75" cy="60" r="10" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.5">
          <animate attributeName="r" values="10;14;10" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.5;0;0.5" dur="1s" repeatCount="indefinite"/>
        </circle>
      </g>
      <g>
        <circle cx="120" cy="95" r="5" fill="#ef4444">
          <animate attributeName="r" values="5;7;5" dur="1.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="120" cy="95" r="9" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.5">
          <animate attributeName="r" values="9;13;9" dur="1.2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.5;0;0.5" dur="1.2s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      {/* AI eye */}
      <circle cx="100" cy="80" r="12" fill="#3b82f6" opacity="0.2"/>
      <circle cx="100" cy="80" r="6" fill="#3b82f6">
        <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  ),
  
  microprocessor: () => (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="chip-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#06b6d4"/>
        </linearGradient>
        <filter id="chip-shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* PCB background */}
      <rect x="30" y="20" width="140" height="120" rx="8" fill="#065f46" opacity="0.2"/>
      <rect x="35" y="25" width="130" height="110" rx="6" fill="#059669" opacity="0.15"/>
      
      {/* Main chip */}
      <rect x="55" y="40" width="90" height="80" rx="8" fill="url(#chip-grad)" filter="url(#chip-shadow)"/>
      
      {/* Display */}
      <rect x="65" y="55" width="70" height="30" rx="4" fill="#0c1222"/>
      <text x="100" y="75" textAnchor="middle" fill="#22d3ee" fontSize="14" fontFamily="monospace" fontWeight="bold">8086</text>
      
      {/* Animated data lines */}
      <rect x="75" y="92" width="50" height="3" rx="1" fill="#22d3ee" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="0.5s" repeatCount="indefinite"/>
      </rect>
      <rect x="75" y="100" width="30" height="3" rx="1" fill="#22d3ee" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="0.7s" repeatCount="indefinite"/>
      </rect>
      
      {/* Pins with signal animation */}
      {[...Array(7)].map((_, i) => (
        <g key={`pin-${i}`}>
          <rect x={58 + i * 12} y="28" width="5" height="14" rx="1" fill="#fbbf24"/>
          <rect x={58 + i * 12} y="118" width="5" height="14" rx="1" fill="#fbbf24"/>
          {/* Signal dots */}
          <circle cx={60 + i * 12} r="2" fill="#22d3ee">
            <animate attributeName="cy" values="25;22;25" dur={`${0.3 + i * 0.1}s`} repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0;1" dur={`${0.3 + i * 0.1}s`} repeatCount="indefinite"/>
          </circle>
        </g>
      ))}
      
      {/* Side pins */}
      {[...Array(5)].map((_, i) => (
        <g key={`side-${i}`}>
          <rect x="43" y={48 + i * 14} width="14" height="5" rx="1" fill="#fbbf24"/>
          <rect x="143" y={48 + i * 14} width="14" height="5" rx="1" fill="#fbbf24"/>
        </g>
      ))}
    </svg>
  ),
  
  rtl: () => (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="rtl-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
        <linearGradient id="signal-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
          <stop offset="50%" stopColor="#8b5cf6"/>
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
        </linearGradient>
      </defs>
      
      {/* Logic gates - AND */}
      <rect x="25" y="35" width="45" height="30" rx="6" fill="#3b82f6"/>
      <text x="47" y="55" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">AND</text>
      
      {/* Logic gates - OR */}
      <rect x="25" y="95" width="45" height="30" rx="6" fill="#06b6d4"/>
      <text x="47" y="115" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">OR</text>
      
      {/* Logic gates - XOR */}
      <rect x="115" y="65" width="50" height="30" rx="6" fill="#8b5cf6"/>
      <text x="140" y="85" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">XOR</text>
      
      {/* Animated signal paths */}
      <path d="M70 50 L85 50 L85 75 L115 75" stroke="#64748b" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M70 110 L85 110 L85 85 L115 85" stroke="#64748b" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M165 80 L185 80" stroke="#64748b" strokeWidth="3" fill="none" strokeLinecap="round"/>
      
      {/* Input lines */}
      <path d="M10 50 L25 50" stroke="#64748b" strokeWidth="3" fill="none"/>
      <path d="M10 110 L25 110" stroke="#64748b" strokeWidth="3" fill="none"/>
      
      {/* Animated signal pulses */}
      <circle cx="15" cy="50" r="4" fill="#3b82f6">
        <animate attributeName="cx" values="15;70" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0" dur="1s" repeatCount="indefinite"/>
      </circle>
      <circle cx="15" cy="110" r="4" fill="#06b6d4">
        <animate attributeName="cx" values="15;70" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0" dur="1.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="165" cy="80" r="4" fill="#8b5cf6">
        <animate attributeName="cx" values="165;185" dur="0.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0" dur="0.8s" repeatCount="indefinite"/>
      </circle>
      
      {/* Output indicator */}
      <circle cx="185" cy="80" r="8" fill="#22c55e" opacity="0.3">
        <animate attributeName="r" values="8;12;8" dur="1s" repeatCount="indefinite"/>
      </circle>
      <circle cx="185" cy="80" r="5" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  ),
  
  robot: () => (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="robot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316"/>
          <stop offset="100%" stopColor="#eab308"/>
        </linearGradient>
        <linearGradient id="robot-metal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8"/>
          <stop offset="100%" stopColor="#64748b"/>
        </linearGradient>
      </defs>
      
      {/* Robot body */}
      <rect x="60" y="45" width="80" height="70" rx="15" fill="url(#robot-grad)"/>
      
      {/* Eyes */}
      <circle cx="85" cy="75" r="12" fill="white"/>
      <circle cx="115" cy="75" r="12" fill="white"/>
      <circle cx="85" cy="75" r="6" fill="#0c1222">
        <animate attributeName="cx" values="85;88;85;82;85" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="115" cy="75" r="6" fill="#0c1222">
        <animate attributeName="cx" values="115;118;115;112;115" dur="3s" repeatCount="indefinite"/>
      </circle>
      
      {/* Eye glow */}
      <circle cx="85" cy="75" r="3" fill="#22d3ee" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite"/>
      </circle>
      <circle cx="115" cy="75" r="3" fill="#22d3ee" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite"/>
      </circle>
      
      {/* Mouth/Speaker */}
      <rect x="80" y="95" width="40" height="8" rx="4" fill="#0c1222"/>
      <rect x="85" y="97" width="8" height="4" rx="1" fill="#22d3ee">
        <animate attributeName="width" values="8;12;8" dur="0.5s" repeatCount="indefinite"/>
      </rect>
      <rect x="97" y="97" width="6" height="4" rx="1" fill="#22d3ee">
        <animate attributeName="width" values="6;10;6" dur="0.7s" repeatCount="indefinite"/>
      </rect>
      <rect x="107" y="97" width="8" height="4" rx="1" fill="#22d3ee">
        <animate attributeName="width" values="8;12;8" dur="0.6s" repeatCount="indefinite"/>
      </rect>
      
      {/* Antenna */}
      <line x1="100" y1="45" x2="100" y2="25" stroke="url(#robot-metal)" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="100" cy="20" r="8" fill="#22d3ee">
        <animate attributeName="r" values="8;10;8" dur="1s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="20" r="12" fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.3">
        <animate attributeName="r" values="12;18;12" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0;0.3" dur="1s" repeatCount="indefinite"/>
      </circle>
      
      {/* Arms */}
      <rect x="40" y="60" width="20" height="35" rx="8" fill="url(#robot-metal)"/>
      <rect x="140" y="60" width="20" height="35" rx="8" fill="url(#robot-metal)"/>
      
      {/* Wheels */}
      <ellipse cx="75" cy="125" rx="12" ry="8" fill="url(#robot-metal)"/>
      <ellipse cx="125" cy="125" rx="12" ry="8" fill="url(#robot-metal)"/>
      
      {/* Wheel spin indicators */}
      <line x1="70" y1="125" x2="80" y2="125" stroke="#475569" strokeWidth="2">
        <animateTransform attributeName="transform" type="rotate" values="0 75 125;360 75 125" dur="1s" repeatCount="indefinite"/>
      </line>
      <line x1="120" y1="125" x2="130" y2="125" stroke="#475569" strokeWidth="2">
        <animateTransform attributeName="transform" type="rotate" values="0 125 125;360 125 125" dur="1s" repeatCount="indefinite"/>
      </line>
    </svg>
  )
}

const projects = [
  {
    id: 1,
    title: "Tethered UAV Flight Control System",
    description: "Designing a highly stable and reliable flight control system for a tethered UAV intended for continuous 24/7 operation in monitoring applications. Features real-time PID control and high-speed sensor interfacing.",
    fullDescription: "This project involves developing a sophisticated flight control system for a tethered UAV platform designed for continuous surveillance and monitoring applications. The system implements real-time PID control algorithms for precise attitude and altitude control, with high-speed SPI communication to the MPU-6050 IMU for accurate motion sensing. The interrupt-driven architecture ensures minimal latency in control loops, enabling stable hovering even in varying wind conditions.",
    highlights: [
      "Real-time PID control with 1kHz update rate",
      "MPU-6050 integration via high-speed SPI interface",
      "Interrupt-driven architecture for minimal latency",
      "Designed for 24/7 continuous operation",
      "Fail-safe mechanisms for tether tension monitoring"
    ],
    technologies: ["Interrupt-driven PID Control", "MPU-6050 SPI Interface", "Real-time Processing", "Embedded C"],
    date: "Jan 2026 - Present",
    illustration: "uav",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    github: "https://github.com/krinsitaliya"
  },
  {
    id: 2,
    title: "Wafer Die Defect Detection using Edge AI",
    description: "Developed an Edge-AI based semiconductor defect detection system at IESA Hackathon. Capable of identifying wafer die defects with high accuracy directly on resource-constrained edge devices using optimized MobileNetV2.",
    fullDescription: "Created an innovative Edge AI solution for real-time wafer die defect detection as part of the IESA DeepTech Hackathon 2026. The system uses an optimized MobileNetV2 architecture trained on a dataset of 23,000+ SEM images to classify various types of semiconductor defects. TensorFlow Lite quantization enables deployment on resource-constrained edge devices while maintaining high inference accuracy, making it suitable for integration into production semiconductor manufacturing lines.",
    highlights: [
      "Top 30 finish among 500+ teams at IESA Hackathon",
      "MobileNetV2 optimized with TensorFlow Lite quantization",
      "Trained on 23,000+ SEM wafer images",
      "Real-time inference on edge devices",
      "Multi-class defect classification with 94%+ accuracy"
    ],
    technologies: ["Edge AI / TensorFlow Lite", "MobileNetV2 Optimization", "23k+ SEM Dataset", "Real-time Inference"],
    date: "Jan 2026",
    illustration: "wafer",
    icon: Eye,
    color: "from-cyan-500 to-teal-500",
    badge: "IESA Hackathon",
    github: "https://github.com/krinsitaliya"
  },
  {
    id: 3,
    title: "Interrupt-Driven LED Control - 8086",
    description: "Implemented a precise hardware-level control system using the Intel 8086 microprocessor with external programmable peripheral chips. Demonstrates interrupt handling, timer configuration, and peripheral interfacing.",
    fullDescription: "This project demonstrates advanced microprocessor programming concepts using the Intel 8086 architecture with external programmable peripherals. The system implements a sophisticated LED pattern generator using the 8253 Programmable Interval Timer for precise timing and the 8259 Programmable Interrupt Controller for efficient interrupt handling. Assembly language programming provides direct hardware control, showcasing fundamental concepts in computer architecture and embedded systems design.",
    highlights: [
      "8253 PIT configuration for precise timing intervals",
      "8259 PIC for efficient interrupt management",
      "Assembly language for direct hardware control",
      "Proteus simulation and verification",
      "External latch for address/data demultiplexing"
    ],
    technologies: ["8253 PIT Timer", "8259 PIC Interrupt", "Assembly Language", "Hardware Interfacing"],
    date: "Nov 2025",
    illustration: "microprocessor",
    icon: Cpu,
    color: "from-emerald-500 to-cyan-500",
    github: "https://github.com/krinsitaliya"
  },
  {
    id: 4,
    title: "RTL-to-GDSII: 8-bit Ripple Carry Adder",
    description: "Complete VLSI digital design flow from Verilog RTL description to final physical layout generation. Includes synthesis, placement, routing, and timing analysis using industry-standard EDA tools.",
    fullDescription: "Executed a complete ASIC design flow from RTL specification to GDSII layout for an 8-bit ripple carry adder circuit. The project covers all stages of digital IC design including RTL coding in Verilog HDL, functional verification with comprehensive testbenches, logic synthesis using Synopsys Design Compiler, and physical design exploration. Static timing analysis ensures the design meets timing requirements, providing hands-on experience with industry-standard EDA tools and design methodologies.",
    highlights: [
      "Complete RTL-to-GDSII flow implementation",
      "Verilog HDL design with self-checking testbench",
      "Logic synthesis using Synopsys Design Compiler",
      "Static Timing Analysis (STA) verification",
      "Physical design: floorplanning, placement, routing"
    ],
    technologies: ["Verilog RTL Design", "Synopsys DC", "Static Timing Analysis", "Physical Design"],
    date: "Jun 2025",
    illustration: "rtl",
    icon: CircuitBoard,
    color: "from-purple-500 to-blue-500",
    github: "https://github.com/krinsitaliya"
  },
  {
    id: 5,
    title: "Line Following & Obstacle Avoiding Robot",
    description: "Built an autonomous robot capable of following lines and avoiding obstacles using IR sensors and ultrasonic distance measurement. Implemented efficient control algorithms on microcontroller platform.",
    fullDescription: "Developed an autonomous mobile robot platform capable of line following and obstacle avoidance behaviors. The robot uses an array of IR sensors for line detection and an ultrasonic sensor for distance measurement to obstacles. Control algorithms implemented on an Arduino/AVR microcontroller enable smooth path following while dynamically avoiding obstacles. The project demonstrates practical embedded systems integration including sensor interfacing, motor control, and real-time decision making.",
    highlights: [
      "Dual-mode operation: line following and obstacle avoidance",
      "IR sensor array for precise line detection",
      "HC-SR04 ultrasonic sensor for distance measurement",
      "PWM motor control for smooth motion",
      "Real-time sensor fusion and decision logic"
    ],
    technologies: ["Arduino/AVR", "IR Sensors", "Ultrasonic Sensing", "Motor Control"],
    date: "Mar 2025",
    illustration: "robot",
    icon: Bot,
    color: "from-orange-500 to-yellow-500",
    github: "https://github.com/krinsitaliya"
  }
]

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />

      {/* Floating 3D icons */}
      <div className="absolute top-24 right-[8%] animate-float-3d opacity-20">
        <Layers className="w-14 h-14 text-primary" />
      </div>
      <div className="absolute bottom-32 left-[5%] animate-float-3d opacity-15" style={{ animationDelay: '2s' }}>
        <CircuitBoard className="w-12 h-12 text-purple-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
            <Folder className="h-4 w-4" />
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projects & <span className="text-gradient">Innovations</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IllustrationComponent = ProjectIllustrations[project.illustration as keyof typeof ProjectIllustrations]
            const IconComponent = project.icon
            
            return (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`project-card-3d project-card-glow group text-left ${
                  isInView ? 'animate-scale-in' : 'opacity-0'
                } ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Illustration Container */}
                <div className="relative h-52 bg-gradient-to-br from-secondary via-secondary/50 to-background rounded-t-3xl overflow-hidden">
                  {/* Badge */}
                  {project.badge && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-cyan-500 text-white text-xs font-bold shadow-lg">
                      {project.badge}
                    </div>
                  )}
                  
                  {/* Icon badge */}
                  <div className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* 3D Illustration */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-110">
                    <div className="w-full h-full max-w-[200px]">
                      <IllustrationComponent />
                    </div>
                  </div>
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 bg-card rounded-b-3xl border border-t-0 border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-primary font-medium">{project.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary text-muted-foreground">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl shadow-2xl border border-border animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gradient */}
            <div className={`h-2 bg-gradient-to-r ${selectedProject.color}`} />
            
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center shadow-xl shrink-0`}>
                  <selectedProject.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{selectedProject.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{selectedProject.date}</span>
                    {selectedProject.badge && (
                      <>
                        <span className="text-muted-foreground/50">|</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${selectedProject.color} text-white`}>
                          {selectedProject.badge}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>
              
              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-primary" />
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${selectedProject.color} mt-2 shrink-0`} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-foreground mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
