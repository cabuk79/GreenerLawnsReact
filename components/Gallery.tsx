import React from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-nature-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Recent Transformations</h3>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Browse through our latest projects and find inspiration for your own peaceful retreat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-nature-300 text-sm font-medium mb-1">{item.category}</span>
                <h4 className="text-white text-xl font-bold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
