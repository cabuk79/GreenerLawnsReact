import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-nature-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Services We Offer</h3>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            From low-maintenance artificial lawns to bespoke paving, we create outdoor sanctuaries tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 group"
              >
                <div className="w-14 h-14 bg-nature-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-nature-100 transition-colors">
                  <Icon className="w-8 h-8 text-nature-600" />
                </div>
                <h4 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-nature-700 transition-colors">
                  {service.title}
                </h4>
                <p className="text-stone-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
