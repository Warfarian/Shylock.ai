import React, { useEffect, useRef, useState } from 'react';

const GlobalReachSection: React.FC = () => {
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
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      {/* International typography overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-6xl text-white/5 font-light">
          مرحبا
        </div>
        <div className="absolute top-1/2 right-1/4 text-5xl text-white/5 font-light">
          안녕하세요
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-7xl text-white/5 font-light">
          こんにちは
        </div>
      </div>
      
      <div className="section-padding container-max relative z-10">
        <div className="text-center">
          <h2 className={`text-5xl md:text-6xl font-black mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            FROM MUMBAI TO MADRID,
            <br />
            <span className="font-serif italic text-gray-400">voices travel.</span>
          </h2>
          
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Shylock speaks in over 40 languages, understands cultural nuances, 
              and adapts to local customs. Whether it's a gentle reminder in Japanese 
              or a firm request in German, the message is always perfectly calibrated.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-black mb-4">40+</div>
                <p className="text-gray-400">Languages Supported</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-black mb-4">150+</div>
                <p className="text-gray-400">Countries Reached</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-black mb-4">24/7</div>
                <p className="text-gray-400">Global Availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;