import React from 'react';
import { Download, Play, Mail, Phone, ChevronRight } from 'lucide-react';


export default function MeceleonLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
     

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to Meceleon — The Solution City!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            World-class hydraulic tools and industrial equipment with dedicated support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Explore Products
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Hydraulic Systems', desc: 'Premium Power Team equipment' },
              { title: 'Precision Bolting', desc: 'Advanced torque solutions' },
              { title: 'Industrial Pullers', desc: 'Heavy-duty extraction tools' },
              { title: 'Dedicated After-Sales', desc: '24/7 support and service' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section id="about" className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl text-gray-700 italic border-l-4 border-blue-800 pl-6">
            "We enhance performance across industries with precision hydraulic tools, bolting systems, and industrial pullers for demanding applications."
          </blockquote>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="products" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Power Team', 
                desc: 'Hydraulic pumps, cylinders, presses, and accessories for industrial applications',
                color: 'bg-blue-100'
              },
              { 
                title: 'Bolting Systems', 
                desc: 'Torque wrenches, bolt tensioners, and precision fastening tools',
                color: 'bg-gray-100'
              },
              { 
                title: 'Pullers', 
                desc: 'Mechanical and hydraulic pullers for safe equipment extraction',
                color: 'bg-blue-100'
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className={`${product.color} h-48 flex items-center justify-center`}>
                  <div className="text-6xl text-gray-400">📦</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <button className="text-blue-800 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Customers */}
      <section id="partners" className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Partners</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center h-24 hover:shadow-md transition">
                    <span className="text-gray-400 font-semibold">Partner {i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div id="customers">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Customers</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center h-24 hover:shadow-md transition">
                    <span className="text-gray-400 font-semibold">Client {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Teaser */}
      <section id="downloads" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Downloads</h2>
          <div className="space-y-4">
            {[
              { name: 'Company Brochure', size: '4 MB' },
              { name: 'Power Team Catalog', size: '12 MB' },
              { name: 'Bolting Systems Catalog', size: '9 MB' }
            ].map((file, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <Download className="text-blue-800" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">{file.name}</p>
                    <p className="text-sm text-gray-500">{file.size}</p>
                  </div>
                </div>
                <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Teaser */}
      <section id="videos" className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition">
                <div className="bg-gray-300 h-48 flex items-center justify-center">
                  <Play size={48} className="text-gray-600" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Product Demo {i}</h3>
                  <p className="text-sm text-gray-600">Learn how to use our equipment effectively</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Reach us via email or phone for expert advice and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sales@meceleon.com" className="inline-flex items-center gap-2 bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition">
              <Mail size={20} />
              Email Us
            </a>
            <a href="tel:+918882008583" className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
   
    </div>
  );
}