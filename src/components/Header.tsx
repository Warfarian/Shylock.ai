import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="section-padding container-max">
        <nav className="flex items-center justify-between py-6">
          <div className="text-2xl font-bold tracking-tight">
            SHYLOCK<span className="text-gray-400">.ai</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors"
            >
              HOW IT WORKS
            </button>
            <button 
              onClick={() => scrollToSection('voices')}
              className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors"
            >
              VOICES
            </button>
            <button 
              onClick={() => scrollToSection('examples')}
              className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors"
            >
              EXAMPLES
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;