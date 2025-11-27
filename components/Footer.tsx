import React from 'react';
import { Leaf, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Leaf className="h-6 w-6 text-nature-500" />
              <span className="font-bold text-xl">Greener Grass & Artificial Lawns</span>
            </div>
            <p className="max-w-xs mb-6 text-stone-400">
              Creating peaceful, low-maintenance outdoor sanctuaries for your home. Expert landscaping, paving, and artificial turf specialists.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-nature-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-nature-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-nature-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-nature-400 transition-colors">Paving</a></li>
              <li><a href="#services" className="hover:text-nature-400 transition-colors">Artificial Grass</a></li>
              <li><a href="#services" className="hover:text-nature-400 transition-colors">Timber Beds</a></li>
              <li><a href="#services" className="hover:text-nature-400 transition-colors">Driveways</a></li>
              <li><a href="#services" className="hover:text-nature-400 transition-colors">Fencing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-nature-400 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-nature-400 transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-nature-400 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-nature-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-nature-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Greener Grass & Artificial Lawns. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with nature in mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
