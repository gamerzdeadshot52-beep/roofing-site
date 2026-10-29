import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { SystemsShowcase } from './components/SystemsShowcase';
import { TechSpecs } from './components/TechSpecs';
import { InteractiveEstimator } from './components/InteractiveEstimator';
import { ProjectGallery } from './components/ProjectGallery';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';

export function App() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState<any>(null);
  const [selectedMaterialForEstimate, setSelectedMaterialForEstimate] = useState<string>('standing-seam');

  const handleOpenConsultation = (customData?: any) => {
    setModalInitialData(customData || null);
    setLeadModalOpen(true);
  };

  const handleScrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSystemForEstimate = (materialId: string) => {
    setSelectedMaterialForEstimate(materialId);
    handleScrollToEstimator();
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 selection:bg-sky-500 selection:text-slate-950 font-sans antialiased">
      {/* Sticky Navigation */}
      <Navbar
        onOpenEstimator={handleScrollToEstimator}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenEstimator={handleScrollToEstimator}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Social Proof & Certifications Ribbon */}
        <SocialProof />

        {/* Systems & Materials Showcase */}
        <SystemsShowcase
          onSelectSystemForEstimate={handleSelectSystemForEstimate}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Technology & Engineering Differentiators */}
        <TechSpecs
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Interactive Instant Cost Estimator */}
        <InteractiveEstimator
          initialMaterialId={selectedMaterialForEstimate}
          onBookInspection={(estimateData) => handleOpenConsultation(estimateData)}
        />

        {/* Architectural Portfolio Case Studies */}
        <ProjectGallery
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Guaranteed Fixed Pricing Packages */}
        <Pricing
          onSelectPackage={(pkg) => handleOpenConsultation({ packageName: pkg.name, priceEstimate: pkg.priceEstimate })}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Verified Client Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Conversion-Focused Final Call to Action */}
        <FinalCTA
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenEstimator={handleScrollToEstimator}
        />
      </main>

      {/* Production-Ready Comprehensive Footer */}
      <Footer />

      {/* Interactive Consultation / Drone Inspection Lead Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        initialData={modalInitialData}
      />
    </div>
  );
}

export default App;
