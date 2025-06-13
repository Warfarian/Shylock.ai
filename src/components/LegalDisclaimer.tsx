import React, { useEffect, useRef, useState } from 'react';
import { Scale, Heart, Shield } from 'lucide-react';

const LegalDisclaimer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="section-padding container-max">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center mb-6">
            <Scale size={48} className="text-gray-400" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            LEGAL
            <br />
            <span className="font-serif italic text-gray-400">DISCLAIMER</span>
          </h2>
          
          <div className="bg-white/5 border border-white/10 p-6 md:p-8 mb-8">
            <p className="text-lg md:text-xl leading-relaxed font-serif italic text-gray-300">
              "Shylock does not threaten, harass, or extort. We're a polite, persistent AI agent 
              that just won't hang up until you say yes. Use responsibly. 
              <span className="text-white font-bold"> Friendship sold separately.</span>"
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Shield size={16} />
              <span>Ethically Persistent</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Heart size={16} />
              <span>Friendship Preserving</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Scale size={16} />
              <span>Legally Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;