'use client'

import AppLayout from "@/src/components/app";
import HeroSection from "@/src/layouts/hero-section";
import AboutMeSection from "@/src/layouts/about-section";
import PortfolioSection from "@/src/layouts/portofolio-section";
import ExperienceSection from "@/src/layouts/experience-section";
import TestimonialSection from "@/src/layouts/testimonial-section";
import ContactSection from "@/src/layouts/contact-section";

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