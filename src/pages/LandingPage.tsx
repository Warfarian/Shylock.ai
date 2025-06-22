import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import HowItWorksSection from '../components/HowItWorksSection';
import VoicesSection from '../components/VoicesSection';
import ExamplesSection from '../components/ExamplesSection';
import GlobalReachSection from '../components/GlobalReachSection';
import LegalDisclaimer from '../components/LegalDisclaimer';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import BoltBadge from '../components/BoltBadge';

const LandingPage: React.FC = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <VoicesSection />
        <ExamplesSection />
        <GlobalReachSection />
        <LegalDisclaimer />
        <CTASection />
      </main>
      <Footer />
      <BoltBadge />
    </>
  );
};

export default LandingPage;