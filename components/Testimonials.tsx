import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-nature-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-nature-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-nature-200 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-nature-600 font-semibold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-nature-100 flex flex-col h-full relative">
              <Quote className="absolute top-6 right-6 text-nature-100 w-10 h-10 transform rotate-180" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-stone-300'}`} 
                  />
                ))}
              </div>
              <p className="text-stone-600 mb-6 italic flex-grow">"{testimonial.content}"</p>
              <div className="mt-auto">
                <p className="font-bold text-stone-800">{testimonial.name}</p>
                {testimonial.role && <p className="text-sm text-stone-500">{testimonial.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
