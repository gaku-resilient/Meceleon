"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Download, ChevronRight, XCircle } from 'lucide-react';

// Updated Logo to incorporate industrial theme: gear + lightning icon with correct Heroicons solid SVGs
const Logo = () => (
    <Link href="/" className="text-2xl font-bold text-gray-900 flex items-center">
        <div className="mr-2 flex items-center">
            {/* Correct solid cog/gear icon from Heroicons */}
            <img src="/logo.png" alt="Meceleon Logo" className="h-12 w-auto mr-2"/>
        </div>
        <span className='text-4xl'> Meceleon</span>
       
    </Link>
);

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' },
        { name: 'Resources', href: '/resources' },
    
    ];

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
            {/* Main Navigation Bar */}
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex-shrink-0">
                    <Logo />
                </div>
                
                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-gray-600 font-medium hover:text-red-600 transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA & Mobile Menu Button */}
                <div className="flex items-center">
                    <Link href="/contact" className="hidden lg:inline-block bg-red-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-red-700 transition-all transform hover:scale-105">
                        Get in touch
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden ml-4 p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 flex justify-between items-center transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span>{link.name}</span>
                                <ChevronRight size={20} className="text-gray-400" />
                            </Link>
                        ))}
                        {/* Mobile brochure preview trigger */}
                        <button 
                            onClick={() => {
                                setIsMenuOpen(false);
                                openModal();
                            }}
                            className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 flex justify-between items-center transition-colors"
                        >
                            <span>Latest Brochure</span>
                            <Download size={20} className="text-gray-400" />
                        </button>
                        <Link 
                            href="/contact" 
                            className="block w-full text-center bg-red-600 text-white font-semibold mt-4 px-5 py-3 rounded-lg hover:bg-red-700 transition-all"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            )}

            {/* Brochure Preview Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col border border-gray-200">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900">Meceleon Brochure Preview</h3>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-red-600 transition-colors"
                            >
                                <XCircle size={24} />
                            </button>
                        </div>
                        
                        {/* PDF Preview */}
                        <div className="flex-1 overflow-hidden">
                            <iframe
                                src="pdfs/meceleon_broscher.pdf"
                                className="w-full h-[70vh] border-0"
                                title="Brochure Preview"
                            />
                        </div>
                        
                        {/* Modal Footer */}
                        <div className="flex justify-end p-4 border-t border-gray-200 space-x-3">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Close
                            </button>
                            <a
                                href="pdfs/meceleon_broscher.pdf"
                                download
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}