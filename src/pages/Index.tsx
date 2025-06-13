
import { useEffect } from 'react';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { ProgramHighlights } from "@/components/ProgramHighlights";
import { PhotoGallery } from "@/components/PhotoGallery";
import { HoursLocations } from "@/components/HoursLocations";
import { EbookSection } from "@/components/EbookSection";
import { Consultation } from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import { Accreditations } from "@/components/Accreditations";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <ProgramHighlights />
      <PhotoGallery />
      <HoursLocations />
      <EbookSection />
      <Consultation />
      <Testimonials />
      <Accreditations />
      <EnrollmentForm />
      <Footer />
    </main>
  );
};

export default Index;
