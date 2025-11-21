// pages/resources.js

"use client";
import { useState } from 'react';
import { FileText, Download, Search, Filter, ChevronRight } from 'lucide-react';

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample brochure data - Replace with your actual PDF URLs
  const brochures = [
    {
      id: 1,
      title: 'Meceleon Brochures',
      category: 'cylinders',
      description: 'Complete range of industrial hydraulic cylinders with specifications',
      pages: 8,
      size: '3.2 MB',
      thumbnail: '/images/img2.webp',
      pdfUrl: '/pdfs/meceleon_broscher.pdf',
      date: '2025-01-15'
    },
    {
      id: 2,
      title: 'Hydraulic Pumps Technical Guide',
      category: 'pumps',
      description: 'High-pressure pump systems and installation guidelines',
      pages: 18,
      size: '2.8 MB',
      thumbnail: '/images/brochure-pumps.jpg',
      pdfUrl: '/pdfs/cejn.pdf',
      date: '2024-12-10'
    },
    {
      id: 3,
      title: 'Control Valves Product Line',
      category: 'valves',
      description: 'Precision flow control valves for industrial applications',
      pages: 16,
      size: '2.1 MB',
      thumbnail: '/images/brochure-valves.jpg',
      pdfUrl: '/pdfs/meceleon_broscher.pdf',
      date: '2024-11-20'
    },
    {
      id: 4,
      title: 'Industrial Bolts & Fasteners',
      category: 'bolts',
      description: 'High-tensile bolts and fastening solutions',
      pages: 12,
      size: '1.5 MB',
      thumbnail: '/images/brochure-bolts.jpg',
      pdfUrl: '/pdfs/meceleon_broscher.pdf',
      date: '2024-10-05'
    },
    {
      id: 5,
      title: 'Complete Product Portfolio',
      category: 'general',
      description: 'Overview of all hydraulic machinery and components',
      pages: 48,
      size: '6.5 MB',
      thumbnail: '/images/brochure-complete.jpg',
      pdfUrl: '/pdfs/meceleon_broscher.pdf',
      date: '2025-01-01'
    },
    {
      id: 6,
      title: 'Maintenance & Service Guide',
      category: 'service',
      description: 'Best practices for hydraulic equipment maintenance',
      pages: 20,
      size: '2.9 MB',
      thumbnail: '/images/brochure-maintenance.jpg',
      pdfUrl: '/pdfs/meceleon_broscher.pdf',
      date: '2024-09-15'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'cylinders', name: 'Cylinders' },
    { id: 'pumps', name: 'Pumps' },
    { id: 'valves', name: 'Valves' },
    { id: 'bolts', name: 'Bolts' },
    { id: 'general', name: 'General' },
    { id: 'service', name: 'Service' }
  ];

  // Filter brochures based on search and category
  const filteredBrochures = brochures.filter(brochure => {
    const matchesSearch = brochure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brochure.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || brochure.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle PDF opening
  const openPDF = (pdfUrl, title) => {
    // Open PDF in new tab
    window.open(pdfUrl, '_blank');
    
    // Optional: Track download/view analytics
    console.log(`Opening brochure: ${title}`);
  };

  // Handle PDF download
  const downloadPDF = (pdfUrl, title) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title.replace(/\s+/g, '-').toLowerCase() + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     
      {/* Page Title Section */}
        <section className="relative bg-red-800 text-white py-20 md:py-32">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop')" }}
                ></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Resources & Brochures</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                       Download product catalogs, technical guides, and documentation
                    </p>
                </div>
            </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search brochures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
            </div>

            {/* Category Filter */}
            {/* <div className="flex gap-2 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Brochures Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {filteredBrochures.length === 0 ? (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No brochures found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{filteredBrochures.length}</span> brochure{filteredBrochures.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBrochures.map(brochure => (
                  <div
                    key={brochure.id}
                    className="bg-white rounded-lg border-2 border-gray-200 hover:border-red-600 hover:shadow-lg transition-all overflow-hidden group"
                  >
                    {/* Thumbnail */}
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                      <FileText className="w-20 h-20 text-gray-400 group-hover:text-red-600 transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                        {brochure.title}
                      </h3>
                      {/* <p className="text-gray-600 text-sm mb-4">{brochure.description}</p> */}

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        {/* <span>{brochure.pages} pages</span> */}
                        {/* <span>•</span> */}
                        {/* <span>{brochure.size}</span> */}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => openPDF(brochure.pdfUrl, brochure.title)}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                        >
                          View PDF <ChevronRight className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => downloadPDF(brochure.pdfUrl, brochure.title)}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-all"
                          title="Download PDF"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}