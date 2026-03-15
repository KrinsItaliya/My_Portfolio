"use client"

import { useRef, useState } from "react"
import { Award, ExternalLink, X, FileText, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const certifications = [
  {
    id: 1,
    title: "IESA DeepTech Hackathon Certificate",
    subtitle: "Vision Summit 2026",
    description: "Certificate of participation in DeepTech Hackathon 2026 Grand Finale, recognizing valuable contribution, innovation-driven efforts, and commitment to advancing semiconductor and embedded technologies.",
    color: "from-emerald-500 to-teal-500",
    pdfUrl: "/certificates/certificate1-iesa.pdf"
  },
  {
    id: 2,
    title: "RTL-to-GDSII Workshop",
    subtitle: "VSD - VLSI System Design",
    description: "Industry certification for completing the comprehensive RTL-to-GDSII ASIC design workshop with hands-on experience in RTL design, synthesis, and physical design flow.",
    color: "from-blue-500 to-cyan-500",
    pdfUrl: "/certificates/certificate2-rtl.pdf"
  },
  {
    id: 3,
    title: "PCB Design Course",
    subtitle: "NPTEL - IIT Delhi",
    description: "Electronic Systems Design: Hands-on Circuits and PCB Design with CAD Software. Scored 77/100 with 3-4 credit recommendation.",
    color: "from-purple-500 to-blue-500",
    pdfUrl: "/certificates/certificate3-pcb.pdf"
  },
  {
    id: 4,
    title: "Advanced Semiconductor Device Design",
    subtitle: "PDEU - School of Technology",
    description: "Three-day Skill Development Program on Advanced Semiconductor Device Design, Simulation and Circuit Implementation organized by the Departments of ICT/ECE at PDEU.",
    color: "from-cyan-500 to-teal-500",
    pdfUrl: "/certificates/certificate4-semiconductor.pdf"
  }
]

export function CertificationsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null)

  return (
    <section id="certifications" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-[10%] animate-float-3d opacity-20">
        <Award className="w-14 h-14 text-primary" />
      </div>
      <div className="absolute bottom-24 left-[8%] animate-float-3d opacity-15" style={{ animationDelay: '2s' }}>
        <FileText className="w-10 h-10 text-cyan-500" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
            <Award className="h-4 w-4" />
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-1 bg-primary/30 rounded-full" />
          </div>
        </div>

        {/* Certifications Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${isInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
          {certifications.map((cert, index) => (
            <button
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group text-left p-6 rounded-2xl bg-card border border-border shadow-lg card-3d relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-2 leading-tight text-center group-hover:text-gradient transition-all duration-300">
                  {cert.title}
                </h4>
                <p className="text-xs text-muted-foreground text-center mb-3">{cert.subtitle}</p>
                
                {/* View indicator */}
                <div className="flex items-center justify-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Certificate</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-card rounded-3xl shadow-2xl border border-border overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gradient */}
            <div className={`h-2 bg-gradient-to-r ${selectedCert.color}`} />
            
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Content */}
            <div className="p-8">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedCert.color} flex items-center justify-center mb-6 shadow-xl`}>
                <Award className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{selectedCert.title}</h3>
              <p className="text-primary font-medium mb-4">{selectedCert.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {selectedCert.description}
              </p>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${selectedCert.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5`}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
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
