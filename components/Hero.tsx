import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=10"
          alt="Beautiful landscaped garden"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-nature-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          Transform Your <br className="hidden md:block" />
          <span className="text-nature-300">Outdoor Space</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-stone-100 max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
          Peaceful, calming landscapes designed for your lifestyle. 
          Expert paving, artificial grass, and garden design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact"
            className="group flex items-center justify-center gap-2 bg-nature-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-nature-500 hover:shadow-xl transition-all w-full sm:w-auto transform hover:-translate-y-0.5"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="https://m.me/placeholder_id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white/20 transition-all w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Message Us
          </a>
        </div>
      </div>
      
      {/* Decorative curve at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-stone-50 fill-current">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
