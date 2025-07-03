'use client'

import AppLayout from "@/src/components/app";
import HeroSection from "@/src/components/hero-section";
import AboutMeSection from "@/src/components/about-section";
import PortfolioSection from "@/src/components/portofolio-section";
import ExperienceSection from "@/src/components/experience-section";
import TestimonialSection from "@/src/components/testimonial-section";
import ContactSection from "@/src/components/contact-section";

export default function Home() {
  return (
    <AppLayout>

      <HeroSection />
      
      <AboutMeSection />
      
      <PortfolioSection />
      
      <ExperienceSection />
      
      <TestimonialSection />
      
      <ContactSection />
    
    </AppLayout>
  );
}