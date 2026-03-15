import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ResumeSection } from "@/components/portfolio/resume-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { AchievementsSection } from "@/components/portfolio/achievements-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { AwarenessSection } from "@/components/portfolio/awareness-section"
import { GoalsSection } from "@/components/portfolio/goals-section"
import { SwotSection } from "@/components/portfolio/swot-section"
import { TestimonialsSection } from "@/components/portfolio/testimonials-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <AchievementsSection />
      <CertificationsSection />
      <AwarenessSection />
      <GoalsSection />
      <SwotSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
