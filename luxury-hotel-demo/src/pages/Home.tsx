import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import HeroSection from "@/sections/HeroSection";
import PhilosophySection from "@/sections/PhilosophySection";
import ResidencesSection from "@/sections/ResidencesSection";
import GallerySection from "@/sections/GallerySection";
import ExperienceSection from "@/sections/ExperienceSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative">
      <GrainOverlay />
      <Navigation />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ResidencesSection />
        <GallerySection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
