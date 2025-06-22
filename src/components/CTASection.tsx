import React, { useEffect, useRef, useState } from 'react';
import { useForm } from '../context/FormContext';

const CTASection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const { setIsFormOpen } = useForm();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsFormOpen(true);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-32 bg-white text-black">
      <div className="section-padding container-max">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            LET THE SILENCE
            <br />
            <span className="font-serif italic text-gray-600">END.</span>
          </h2>
          
          <p className={`text-lg md:text-2xl text-gray-600 mb-8 md:mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Start your first voice reminder — free.
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className={`flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 md:px-6 py-3 md:py-4 border-2 border-black text-base md:text-lg focus:outline-none focus:border-gray-600"
              required
            />
            <button
              type="submit"
              className="btn-primary text-base md:text-lg px-8 md:px-12 py-3 md:py-4 whitespace-nowrap"
            >
              JOIN THE WAITLIST
            </button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4 md:mt-6">
            No credit card required. First call is on us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;