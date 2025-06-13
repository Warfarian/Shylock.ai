import React from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import HowItWorksSection from './components/HowItWorksSection';
import VoicesSection from './components/VoicesSection';
import ExamplesSection from './components/ExamplesSection';
import GlobalReachSection from './components/GlobalReachSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FormModal from './components/FormModal';
import { FormProvider } from './context/FormContext';

function App() {
  return (
    <FormProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <CustomCursor />
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <HowItWorksSection />
          <VoicesSection />
          <ExamplesSection />
          <GlobalReachSection />
          <CTASection />
        </main>
        <Footer />
        <FormModal />
      </div>
    </FormProvider>
  );
}

export default App;