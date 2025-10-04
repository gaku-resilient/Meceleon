import React from 'react';
import { Mail, MapPin, Clock, Phone, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Meceleon</h3>
            <p className="text-gray-300 text-sm">
              Enhancing industrial performance with world-class hydraulic tools and dedicated support since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-300 hover:text-white transition">About</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition">Products</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-white transition">Partners</a></li>
              <li><a href="#customers" className="text-gray-300 hover:text-white transition">Customers</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
              <li><a href="#privacy" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-white transition">Terms of Use</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Apex Athena, Prayagraj, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+918882008583" className="hover:text-white transition">
                  +91 88820 08583
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:sales@meceleon.com" className="hover:text-white transition">
                  sales@meceleon.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>Mon-Fri 09:00-17:00</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="bg-gray-600 p-2 rounded hover:bg-blue-600 transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-600 p-2 rounded hover:bg-blue-400 transition" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-600 p-2 rounded hover:bg-blue-700 transition" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-600 p-2 rounded hover:bg-green-600 transition" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-300">Connect with us on social media for updates and support</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
          © 2025 Meceleon Solutions Private Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;