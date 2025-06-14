import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const ExamplesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExample, setActiveExample] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
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

  // Reset audio when switching examples
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [activeExample]);

  const examples = [
    {
      type: 'Standard',
      title: 'The Professional Call',
      script: `"The call involved Shylock representing John Carpenter, who was addressing Arsh about an unpaid debt of thirty-five dollars. The agent used a dramatic tone to emphasize the importance of settling the debt, and the call ended with Arsh acknowledging the situation."`,
      tone: 'Professional, dramatic, emphasizes importance',
      audioSrc: '/usual_sample.mp3',
      duration: '2:34'
    },
    {
      type: 'Firm',
      title: 'The Business Call',
      script: `"The call was initiated by Shylock, representing Mario, who confronted Luigi about an outstanding debt of twenty euros. The agent emphasized the importance of honor and camaraderie, urging Luigi to settle the debt today. The call ended shortly after Luigi acknowledged the agent's message."`,
      tone: 'Direct, appeals to honor and friendship',
      audioSrc: '/firm_sample.mp3',
      duration: '1:58'
    },
    {
      type: 'Aggressive',
      title: 'The Serious Approach',
      script: `"The call involved an agent named Shylock representing Harry, who was seeking repayment of a five-dollar debt from Peter. After some back and forth, Peter initially refused to pay but ultimately agreed to settle the debt, expressing remorse for the situation."`,
      tone: 'Assertive, persistent, gets results',
      audioSrc: '/aggressive_sample.mp3',
      duration: '2:12'
    },
  ];

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

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
              
              {/* Audio player */}
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-100 rounded">
                <button 
                  onClick={toggleAudio}
                  className="w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                
                {/* Audio element */}
                <audio
                  ref={audioRef}
                  src={examples[activeExample].audioSrc}
                  onEnded={handleAudioEnded}
                  preload="metadata"
                />
                
                {/* Progress bar placeholder */}
                <div className="flex-1 flex items-center gap-1 md:gap-2">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-0.5 md:w-1 rounded transition-colors ${
                        isPlaying && i < 8 ? 'bg-black' : 'bg-gray-400'
                      }`}
                      style={{
                        height: `${Math.random() * 20 + 8}px`,
                      }}
                    />
                  ))}
                </div>
                
                <span className="text-xs md:text-sm text-gray-600 font-mono">
                  {examples[activeExample].duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;