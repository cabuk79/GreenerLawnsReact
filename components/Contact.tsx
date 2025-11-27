import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Facebook } from 'lucide-react';
import { SERVICES } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-nature-600 font-semibold tracking-wide uppercase text-sm mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Ready to Transform Your Space?</h3>
            <p className="text-lg text-stone-600 mb-8">
              Fill out the form to request a free, no-obligation quote. 
              We'll get back to you within 24 hours to discuss your project.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-nature-50 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-nature-600" />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium">Call Us</p>
                  <p className="text-lg font-bold text-stone-800 hover:text-nature-600 transition-colors">
                    <a href="tel:+1234567890">(555) 123-4567</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-nature-50 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-nature-600" />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium">Email Us</p>
                  <p className="text-lg font-bold text-stone-800 hover:text-nature-600 transition-colors">
                    <a href="mailto:info@greenergrass.com">info@greenergrass.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-nature-50 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-nature-600" />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium">Service Area</p>
                  <p className="text-lg font-bold text-stone-800">
                    Greater London & Surrounding Counties
                  </p>
                </div>
              </div>

              <div className="pt-8">
                 <a 
                    href="https://m.me/placeholder" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                 >
                   <Facebook className="w-5 h-5" />
                   Chat with us on Messenger
                 </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-stone-50 rounded-3xl p-8 lg:p-10 shadow-lg border border-stone-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="bg-green-100 p-4 rounded-full mb-6">
                  <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-stone-800 mb-2">Message Sent!</h4>
                <p className="text-stone-600 mb-8">
                  Thank you for contacting Greener Grass. <br/> We will be in touch shortly.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', phone: '', service: '', message: '' }); }}
                  className="text-nature-600 font-medium hover:text-nature-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-xl font-bold text-stone-800 mb-2">Request a Quote</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-nature-500 focus:border-transparent outline-none transition-shadow bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-nature-500 focus:border-transparent outline-none transition-shadow bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-nature-500 focus:border-transparent outline-none transition-shadow bg-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-1">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-nature-500 focus:border-transparent outline-none transition-shadow bg-white"
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-nature-500 focus:border-transparent outline-none transition-shadow bg-white resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-nature-600 text-white font-bold py-4 rounded-lg hover:bg-nature-700 focus:ring-4 focus:ring-nature-200 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
