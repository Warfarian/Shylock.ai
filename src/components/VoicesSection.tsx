import React, { useEffect, useRef, useState } from 'react';

const VoicesSection: React.FC = () => {
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

  const voices = [
    {
      name: 'The Poet',
      style: 'Shakespearean',
      sample: '"Gentle friend, the scales of justice tip not with time, but with honor..."',
      personality: 'Eloquent, theatrical, persuasive through beauty of language',
    },
    {
      name: 'The Merchant',
      style: 'Business-like',
      sample: '"This is a matter of simple arithmetic and mutual respect..."',
      personality: 'Professional, direct, appeals to logic and fairness',
    },
    {
      name: 'The Storyteller',
      style: 'Narrative',
      sample: '"Once upon a time, there was a debt that grew lonely waiting..."',
      personality: 'Engaging, metaphorical, makes debt collection feel like art',
    },
    {
      name: 'The Philosopher',
      style: 'Contemplative',
      sample: '"What is money but a promise? And what is a promise but our word?"',
      personality: 'Thoughtful, deep, appeals to conscience and values',
    },
  ];

  return (
    <section id="voices" ref={sectionRef} className="py-16 md:py-32 bg-black">
      <div className="section-padding container-max">
        <div className="text-center mb-12 md:mb-20">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            VOICES WITH
            <br />
            <span className="font-serif italic text-gray-400">PERSONALITY</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {voices.map((voice, index) => (
            <div
              key={index}
              className={`bg-white/5 p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 group cursor-pointer ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{voice.name}</h3>
                <p className="text-gray-400 text-xs md:text-sm font-mono tracking-wide">
                  {voice.style.toUpperCase()}
                </p>
              </div>
              
              <blockquote className="text-gray-300 font-serif italic mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                {voice.sample}
              </blockquote>
              
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                {voice.personality}
              </p>
              
              {/* Waveform visualization */}
              <div className="mt-4 md:mt-6 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-white/30 animate-pulse"
                    style={{
                      height: `${Math.random() * 20 + 10}px`,
                      animationDelay: `${i * 100}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;