import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="section-padding container-max">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              SHYLOCK<span className="text-gray-400">.ai</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Theatrical debt collection that preserves relationships while recovering what's rightfully yours.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">PRODUCT</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Voices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">COMPANY</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 Shylock.ai. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;