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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-black">
      <FloatingElements />
      
      {/* Katakana overlay */}
      <div className="absolute top-1/4 right-8 text-6xl md:text-8xl font-light text-black/5 select-none">
        シャイロック
      </div>
      
      <div className="section-padding container-max relative z-10">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-none">
            NOTHING
            <br />
            <span className="font-serif italic text-gray-400 text-5xl md:text-6xl lg:text-7xl">personal,</span>
            <br />
            JUST
            <br />
            PAYBACK
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Shylock.ai lets you send <strong>Shylock</strong> to gently recover what's owed — 
            <br className="hidden md:block" />
            <em className="font-serif">as stories, not threats.</em>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-black text-white px-12 py-5 text-lg font-semibold tracking-wide hover:bg-gray-800 transition-colors"
            >
              TRY DEMO
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="border-2 border-black text-black px-12 py-5 text-lg font-semibold tracking-wide hover:bg-black hover:text-white transition-colors"
            >
              HOW IT WORKS
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;