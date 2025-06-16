import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlowDiagram from "@/components/FlowDiagram";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white scroll-smooth">
      <Header />
      <div className="pt-16"> {/* Add padding-top to account for fixed header */}
        <HeroSection />
        <FlowDiagram />
        <FeaturesSection />
        <BenefitsSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
