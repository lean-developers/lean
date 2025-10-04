import DynamicIsland from "./components/DynamicIsland";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Dynamic Island Navigation */}
      <DynamicIsland />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
