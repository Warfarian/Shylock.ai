import React from 'react';

const BoltBadge: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className="relative group">
        <a 
          href="https://bolt.new" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <img 
            src="/white_circle_360x360.png" 
            alt="Powered by Bolt.new" 
            className="w-16 h-16 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          />
        </a>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-white text-black text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Powered by Bolt.new
        </div>
      </div>
    </div>
  );
};

export default BoltBadge;