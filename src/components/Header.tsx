import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
  };

  const dashboardPages = [
    { path: '/dashboard', label: 'OVERVIEW' },
    { path: '/ledger', label: 'DEBT LEDGER' },
    { path: '/activity', label: 'ACTIVITY FEED' },
    { path: '/tickets', label: 'TICKET GENERATOR' },
    { path: '/wall', label: 'DEBT WALL' },
    { path: '/vault', label: 'MEMORY VAULT' },
    { path: '/leaderboard', label: 'LEADERBOARD' },
  ];

  // Handle dropdown with delay for better UX
  let hoverTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setIsDashboardOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsDashboardOpen(false);
    }, 150); // Small delay to allow moving to dropdown
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isLandingPage ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="section-padding container-max">
        <nav className="flex items-center justify-between py-4 md:py-6">
          <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight">
            SHYLOCK<span className="text-gray-400">.ai</span>
          </Link>
          
          {/* Desktop Navigation */}
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
                
                {/* Dashboard Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors flex items-center gap-1">
                    DASHBOARD
                    <ChevronDown size={16} className={`transition-transform ${isDashboardOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDashboardOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-black/95 backdrop-blur-sm border border-white/10 py-2 shadow-xl">
                      {dashboardPages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className="block px-4 py-3 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                          onClick={() => setIsDashboardOpen(false)}
                        >
                          {page.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Dashboard Dropdown for non-landing pages */}
                <div 
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors flex items-center gap-1">
                    DASHBOARD
                    <ChevronDown size={16} className={`transition-transform ${isDashboardOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDashboardOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-black/95 backdrop-blur-sm border border-white/10 py-2 shadow-xl">
                      {dashboardPages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className={`block px-4 py-3 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors ${
                            location.pathname === page.path ? 'bg-white/20' : ''
                          }`}
                          onClick={() => setIsDashboardOpen(false)}
                        >
                          {page.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link 
                  to="/"
                  className="text-sm font-medium tracking-wide hover:text-gray-300 transition-colors"
                >
                  BACK TO HOME
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {!isLandingPage && (
            <div className="hidden md:block text-xs text-gray-500 font-mono">
              DEMO MODE
            </div>
          )}
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10 py-4">
            {isLandingPage ? (
              <div className="space-y-4">
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="block w-full text-left px-4 py-2 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                >
                  HOW IT WORKS
                </button>
                <button 
                  onClick={() => scrollToSection('voices')}
                  className="block w-full text-left px-4 py-2 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                >
                  VOICES
                </button>
                <button 
                  onClick={() => scrollToSection('examples')}
                  className="block w-full text-left px-4 py-2 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                >
                  EXAMPLES
                </button>
                
                {/* Mobile Dashboard Links */}
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="px-4 py-2 text-xs font-bold tracking-wide text-gray-400">
                    DASHBOARD PAGES
                  </div>
                  {dashboardPages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className="block px-4 py-2 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {dashboardPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className={`block px-4 py-2 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors ${
                      location.pathname === page.path ? 'bg-white/20' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {page.label}
                  </Link>
                ))}
                
                <div className="border-t border-white/10 pt-4 mt-4">
                  <Link 
                    to="/"
                    className="block px-4 py-2 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    BACK TO HOME
                  </Link>
                </div>
                
                <div className="px-4 py-2 text-xs text-gray-500 font-mono">
                  DEMO MODE
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;