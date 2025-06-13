import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

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
      isScrolled || !isLandingPage ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="section-padding container-max">
        <nav className="flex items-center justify-between py-6">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            SHYLOCK<span className="text-gray-400">.ai</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {isLandingPage ? (
              <>
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
              </>
            ) : (
              <>
                <Link 
                  to="/dashboard"
                  className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors"
                >
                  DASHBOARD
                </Link>
                <Link 
                  to="/ledger"
                  className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors"
                >
                  LEDGER
                </Link>
                <Link 
                  to="/activity"
                  className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors"
                >
                  ACTIVITY
                </Link>
                <Link 
                  to="/tickets"
                  className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors"
                >
                  TICKETS
                </Link>
                <Link 
                  to="/wall"
                  className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors"
                >
                  WALL
                </Link>
                <Link 
                  to="/vault"
                  className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors"
                >
                  VAULT
                </Link>
                <Link 
                  to="/leaderboard"
                  className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors"
                >
                  LEADERBOARD
                </Link>
              </>
            )}
          </div>
          
          {!isLandingPage && (
            <div className="text-xs text-gray-500 font-mono">
              DEMO MODE
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;