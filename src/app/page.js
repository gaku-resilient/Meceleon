

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { products } from './lib/products';  // From /app/page.jsx -> ./lib/products.js // Adjust path if your lib folder is elsewhere (e.g., '../../lib/products')

// SVG Icons as components (unchanged)
const Gear = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Zap = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ArrowRight = ({ size, className }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ChevronLeft = ({ size }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = ({ size }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Grid = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const List = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export default function HydraulicLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const [viewMode, setViewMode] = useState('slider'); // 'slider' or 'grid'
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, message: '' });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map shared products to the simple format needed for home page (name, desc, img)
  const homeProducts = products.map((product) => ({
    name: product.title,
    desc: product.description,
    img: product.imgSrc,
  }));

  const testimonials = [
    { quote: "The reliability of these hydraulic pumps has significantly reduced our downtime. Outstanding quality!", author: "John Martinez", company: "Global Construction Ltd." },
    { quote: "Exceptional performance under extreme conditions. These pumps exceed industry standards.", author: "Sarah Chen", company: "AeroTech Industries" },
    { quote: "The technical support team is knowledgeable and responsive. A true partnership.", author: "Michael Brown", company: "Marine Solutions Inc." }
  ];

  const industries = [
    { name: "Construction", icon: "🏗️" },
    { name: "Aerospace", icon: "✈️" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Agriculture", icon: "🚜" },
    { name: "Marine", icon: "⚓" },
    { name: "Mining", icon: "⛏️" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, message: 'Thank you! We will contact you shortly.' });
    setFormData({ name: '', company: '', email: '', message: '' });
    setTimeout(() => setFormStatus({ submitted: false, message: '' }), 5000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Hero Section (unchanged) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=1080&fit=crop"
            alt="Hydraulic pump machinery"
            layout="fill"
            objectFit="cover"
            priority
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-grey-600/70 to-red-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Powering Industries with <span className="text-red-600">Precision</span> Hydraulic Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Reliable, efficient, and engineered for the most demanding applications.
          </p>
          <button 
            onClick={() => scrollToSection('products')}
            className="bg-red-600 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2"
          >
            Explore Our Pumps <ArrowRight size={20} />
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Value Propositions (unchanged) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: Gear, title: "Unmatched Durability", text: "Robust engineering with high-quality materials ensures long service life even in the harshest conditions." },
            { icon: Zap, title: "High-Efficiency Performance", text: "Optimized for energy savings with superior flow rates and consistent performance under pressure." },
            { icon: Shield, title: "Expert Technical Support", text: "Our experienced team provides comprehensive support from selection to installation and beyond." }
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <item.icon className="w-16 h-16 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories - Now uses shared data */}
      <section id="products" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">Our <span className="text-red-600">Product Range</span></h2>
            <div className="flex gap-2 bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setViewMode('slider')}
                className={`p-2 rounded transition-all ${viewMode === 'slider' ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="w-6 h-6" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="w-6 h-6" />
              </button>
            </div>
          </div>

          {viewMode === 'slider' ? (
            <div className="relative p-2">
              <div className="overflow-hidden rounded-2xl mb-2">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${productIndex * 100}%)` }}
                >
                  {homeProducts.map((product, i) => (
                <div key={i} className="w-1/4 flex-shrink-0 px-2"> 
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="relative w-full h-96">
                          <Image 
                            src={product.img} 
                            alt={product.name}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className="p-8">
                          <h3 className="text-xl font-bold mb-3 text-gray-900">{product.name}</h3>
                          <p className="text-gray-600 text-l mb-6">{product.desc}</p>
                          <button className="text-red-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all text-lg">
                            View Details <ArrowRight size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setProductIndex((productIndex - 1 + homeProducts.length) % homeProducts.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-red-600 text-gray-900 hover:text-white p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setProductIndex((productIndex + 1) % homeProducts.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-red-600 text-gray-900 hover:text-white p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronRight size={24} />
              </button>
              <div className="flex justify-center gap-2 mt-6">
                {homeProducts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setProductIndex(i)}
                    className={`h-2 rounded-full transition-all ${i === productIndex ? 'w-8 bg-red-600' : 'w-2 bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {homeProducts.map((product, i) => (
                <div 
                  key={i}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image 
                      src={product.img} 
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.desc}</p>
                    <button className="text-red-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                      View Details <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Industries Section (unchanged) */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Serving a Wide Range of <span className="text-red-600">Industries</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, i) => (
              <div 
                key={i}
                className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <div className="text-5xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (unchanged) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What Our <span className="text-red-600">Clients Say</span></h2>
          <div className="relative bg-gray-50 border border-gray-200 p-10 rounded-2xl shadow-lg">
            <div className="text-6xl text-red-600 mb-4">{'"'}</div>
            <p className="text-xl md:text-2xl mb-6 italic text-gray-800">{testimonials[testimonialIndex].quote}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg text-gray-900">{testimonials[testimonialIndex].author}</p>
                <p className="text-gray-600">{testimonials[testimonialIndex].company}</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}
                  className="bg-red-600 hover:bg-red-600 text-white p-2 rounded-full transition"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}
                  className="bg-red-600 hover:bg-red-600 text-white p-2 rounded-full transition"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (unchanged) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Get a Custom <span className="text-red-600">Solution</span> for Your Project</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200 transition"
                  required
                />
                <input 
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200 transition"
                />
                <input 
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200 transition"
                  required
                />
                <textarea 
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200 transition"
                  required
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Inquiry
                </button>
                 {formStatus.submitted && <p className="text-center text-green-600 mt-4">{formStatus.message}</p>}
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Phone</h3>
                  <a href="tel:+91 8882008583" className="text-gray-600 hover:text-red-600 transition">+91 8882008583</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Email</h3>
                  <a href="mailto:info@hydraulicsolutions.com" className="text-gray-600 hover:text-red-600 transition">sales@meceleon.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Address</h3>
                  <p className="text-gray-600">B-2504, Apex Athena,<br/>Plot No. 12A<br/>Noida, UP-201304 </p>
                </div>
              </div>
              <div className="mt-8 bg-white rounded-lg overflow-hidden h-64 border border-gray-200 shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841979681316!2d-73.98823492346678!3d40.748817735420695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1704115289394!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}