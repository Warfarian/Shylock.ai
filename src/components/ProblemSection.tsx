import React, { useEffect, useRef, useState } from 'react';

const ProblemSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsTyping(true), 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-black relative">
      <div className="section-padding container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              FRIENDS FORGET.
              <br />
              <span className="font-serif italic text-gray-400">Ledgers don't.</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Debts between friends get awkward. Shylock makes it <em className="font-serif">artistic</em> — 
              with persuasive, theatrical calls that preserve relationships while recovering what's rightfully yours.
            </p>
            
            <div className={`border-l-2 border-white/30 pl-6 transition-all duration-1000 delay-500 ${
              isTyping ? 'opacity-100' : 'opacity-0'
            }`}>
              <p className="text-lg font-serif italic text-gray-200 typewriter">
                "Time doesn't erase debt. It just adds interest."
              </p>
            </div>
          </div>
          
          {/* Right side - Call Interface */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white text-black p-8 rounded-lg shadow-2xl max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">CALL IN PROGRESS</span>
                <div className="ml-auto">
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-gray-300"></div>
                    <div className="w-1 h-6 bg-gray-400"></div>
                    <div className="w-1 h-3 bg-gray-300"></div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-800 leading-relaxed">
                  "Hello, Sarah. This is regarding the <strong>$35</strong> from lunch at SS Hyderbadi Biryani... 
                  It's been a <strong>year</strong> now, and while time has passed gently, the debt remains, 
                  waiting patiently like an <em>old friend at your door...</em>"
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <span>DURATION: 1:23</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;