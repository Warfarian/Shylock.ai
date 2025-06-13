import React, { useEffect, useRef, useState } from 'react';

const ExamplesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExample, setActiveExample] = useState(0);
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

  const examples = [
    {
      type: 'Poetic',
      title: 'The Gentle Reminder',
      script: `"Dear friend, like autumn leaves that fall and wait for spring's return, 
      your debt of $150 rests quietly in the ledger of our friendship. 
      The seasons have turned twice since our dinner at Chez Laurent, 
      and while memories fade, numbers remain eternal..."`,
      tone: 'Elegant, metaphorical, non-confrontational',
    },
    {
      type: 'Firm',
      title: 'The Business Call',
      script: `"This is regarding the outstanding amount of $75 from March 15th. 
      Professional courtesy suggests a 30-day payment window, which has now 
      extended to 120 days. I trust we can resolve this matter with the same 
      efficiency you'd expect in your own business dealings..."`,
      tone: 'Direct, professional, appeals to business sense',
    },
    {
      type: 'Humorous',
      title: 'The Light Touch',
      script: `"Hello! Your friendly neighborhood debt collector here - though I prefer 
      'Financial Relationship Counselor.' That $45 from our pizza adventure has been 
      practicing social distancing from your wallet for quite some time now. 
      Perhaps it's time for a reunion?"`,
      tone: 'Playful, light-hearted, maintains friendship',
    },
  ];

  return (
    <section id="examples" ref={sectionRef} className="py-16 md:py-32 bg-gray-50 text-black">
      <div className="section-padding container-max">
        <div className="text-center mb-12 md:mb-20">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            STUFF WE'VE
            <br />
            <span className="font-serif italic text-gray-600">SAID</span>
          </h2>
        </div>
        
        {/* Toggle buttons */}
        <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto">
          <div className="flex bg-white border border-gray-200 rounded-none overflow-hidden min-w-max">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => setActiveExample(index)}
                className={`px-4 md:px-8 py-3 md:py-4 font-semibold tracking-wide transition-all text-sm md:text-base ${
                  activeExample === index
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {example.type.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active example */}
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white p-6 md:p-12 border border-gray-200 shadow-lg">
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {examples[activeExample].title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm font-mono tracking-wide">
                  {examples[activeExample].tone.toUpperCase()}
                </p>
              </div>
              
              <blockquote className="text-base md:text-lg leading-relaxed font-serif text-gray-800 mb-6 md:mb-8">
                "{examples[activeExample].script}"
              </blockquote>
              
              {/* Audio player simulation */}
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-100 rounded">
                <button className="w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors text-sm md:text-base">
                  ▶
                </button>
                <div className="flex-1 flex items-center gap-1 md:gap-2">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-0.5 md:w-1 bg-gray-400 rounded"
                      style={{
                        height: `${Math.random() * 20 + 8}px`,
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-gray-600 font-mono">2:34</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;