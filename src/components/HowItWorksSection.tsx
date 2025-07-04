import React, { useEffect, useRef, useState } from 'react';

const HowItWorksSection: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate steps one by one
          [0, 1, 2].forEach((step, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, step]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'ENTER DETAILS',
      description: 'Tell us about the debt: who owes what, when it was due, and the story behind it.',
    },
    {
      number: '02',
      title: 'AI CRAFTS SCRIPT',
      description: 'Our AI generates a hauntingly persuasive script, tailored to your relationship and situation.',
    },
    {
      number: '03',
      title: 'THE CALL IS MADE',
      description: 'Shylock calls in their language and tone, delivering your message with theatrical precision.',
    },
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-16 md:py-32 bg-white text-black">
      <div className="section-padding container-max">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            THREE ACTS
          </h2>
          <p className="text-xl md:text-2xl font-serif italic text-gray-600">
            to resolution
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-800 ${
                visibleSteps.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-16 h-16 md:w-24 md:h-24 border-4 border-black mx-auto mb-6 md:mb-8 flex items-center justify-center">
                <span className="text-lg md:text-2xl font-black">{step.number}</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-wide">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Clock element */}
        <div className="text-center mt-12 md:mt-20">
          <div className="inline-flex items-center gap-4 text-gray-500">
            <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-gray-400 rounded-full relative">
              <div className="absolute top-1 left-1/2 w-0.5 h-1.5 md:h-2 bg-gray-400 origin-bottom transform -translate-x-0.5 animate-pulse"></div>
              <div className="absolute top-1/2 left-1 w-1.5 md:w-2 h-0.5 bg-gray-400 origin-left transform -translate-y-0.5"></div>
            </div>
            <p className="font-serif italic text-sm md:text-base">
              "Time doesn't erase debt. It just adds interest."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;