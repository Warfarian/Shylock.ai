import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 border border-white/20 rotate-45 animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 border border-white/10 animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/10 rotate-45 animate-float"></div>
      <div className="absolute top-1/2 right-1/4 w-5 h-5 border border-white/15 rotate-12 animate-float-delayed"></div>
      <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-white/20 animate-float"></div>
      
      {/* Lines */}
      <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent via-white/15 to-transparent animate-pulse-slow"></div>
    </div>
  );
};

export default FloatingElements;