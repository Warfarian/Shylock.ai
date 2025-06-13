import React, { useEffect, useState } from 'react';
import { useForm } from '../context/FormContext';
import FloatingElements from './FloatingElements';

const HeroSection: React.FC = () => {
  const { setIsFormOpen } = useForm();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <FloatingElements />
      
      {/* Katakana overlay */}
      <div className="absolute top-1/4 right-8 text-6xl md:text-8xl font-light text-white/5 select-none">
        シャイロック
      </div>
      
      <div className="section-padding container-max relative z-10">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            NOTHING PERSONAL,
            <br />
            <span className="text-gray-400">JUST PAYBACK</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Because nothing says ‘pay up’ like a voice that won’t shut up.
            <br className="hidden md:block" />
            <em className="font-serif">Automate the uncomfortable.</em>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="btn-primary text-lg px-12 py-5"
            >
              TRY A DEMO
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="btn-secondary text-lg px-12 py-5"
            >
              SEE HOW IT WORKS
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;