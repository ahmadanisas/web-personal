'use client'

import AppLayout from "@/src/components/App";
import HeroSection from "@/src/components/HeroSection";
import AboutMeSection from "@/src/components/AboutSection";
import PortfolioSection from "@/src/components/PortofolioSection";
import ExperienceSection from "@/src/components/ExperienceSection";
import TestimonialSection from "@/src/components/TestimonialSection";
import ContactSection from "@/src/components/ContactSection";

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