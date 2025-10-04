import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-800 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>Welcome to Meceleon — check our latest brochure in Downloads</span>
          <div className="flex items-center gap-4">
            <a href="tel:+918882008583" className="flex items-center gap-1 hover:text-blue-200">
              <Phone size={14} />
              +91 88820 08583
            </a>
            <a href="#downloads" className="hover:text-blue-200">Downloads</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-800">
              MECELEON
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-blue-800 transition">About</a>
              <a href="#products" className="text-gray-700 hover:text-blue-800 transition">Products</a>
              <a href="#partners" className="text-gray-700 hover:text-blue-800 transition">Partners</a>
              <a href="#customers" className="text-gray-700 hover:text-blue-800 transition">Customers</a>
              <a href="#downloads" className="text-gray-700 hover:text-blue-800 transition">Downloads</a>
              <a href="#videos" className="text-gray-700 hover:text-blue-800 transition">Videos</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 transition">Contact</a>
            </nav>

            {/* CTA Button */}
            <button className="hidden lg:block bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition">
              Get in Touch
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3">
              <a href="#about" className="text-gray-700 hover:text-blue-800 py-2">About</a>
              <a href="#products" className="text-gray-700 hover:text-blue-800 py-2">Products</a>
              <a href="#partners" className="text-gray-700 hover:text-blue-800 py-2">Partners</a>
              <a href="#customers" className="text-gray-700 hover:text-blue-800 py-2">Customers</a>
              <a href="#downloads" className="text-gray-700 hover:text-blue-800 py-2">Downloads</a>
              <a href="#videos" className="text-gray-700 hover:text-blue-800 py-2">Videos</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 py-2">Contact</a>
              <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition mt-2">
                Get in Touch
              </button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;