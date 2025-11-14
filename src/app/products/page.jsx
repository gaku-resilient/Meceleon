// "use client";
// import Image from 'next/image';
// import React, { useState, useEffect, useMemo } from 'react';
// import { products } from '../lib/products'; // From /app/products/page.jsx -> ../../lib/products.js // Adjust path if your lib folder is elsewhere (e.g., '../../lib/products')
// import { Wrench, Download, XCircle, ChevronLeft, Filter, Search } from 'lucide-react';

// // Themed Logo component with gear + lightning icons (Heroicons solid) (unchanged)
// const Logo = () => (
//   <a href="/" className="text-2xl font-bold text-gray-900 flex items-center">
//     <div className="mr-2 flex items-center">
//       {/* Gear icon (solid cog from Heroicons) */}
//       <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//         <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
//         <path fillRule="evenodd" d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z" clipRule="evenodd" />
//       </svg>
//       {/* Lightning bolt icon (solid from Heroicons) */}
//       <svg className="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//         <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
//       </svg>
//     </div>
//     Meceleon
//   </a>
// );

// // Full-Page PDF Viewer (unchanged)
// const FullPdfViewer = ({ product, onBack }) => {
//   useEffect(() => {
//     // Auto-trigger fullscreen on mount
//     const element = document.documentElement;
//     if (element.requestFullscreen) {
//       element.requestFullscreen().catch((err) => console.error('Fullscreen error:', err));
//     }
//     // Exit fullscreen on unmount
//     return () => {
//       if (document.exitFullscreen) {
//         document.exitFullscreen().catch((err) => console.error('Exit fullscreen error:', err));
//       }
//     };
//   }, []);
//   if (!product) return null;
//   return (
//     <div className="fixed inset-0 bg-white flex flex-col z-50 overflow-hidden">
//       {/* Minimal Header - Sticky top, hidden in fullscreen if needed */}
//       <header className="bg-white shadow-md border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
//         <button
//           onClick={onBack}
//           className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
//         >
//           <ChevronLeft size={24} className="mr-2" />
//           <span className="font-semibold">Back to Products</span>
//         </button>
//         <div className="flex items-center space-x-4">
//           <span className="text-gray-700 font-medium">{product.title}</span>
//           <a
//             href={product.pdf}
//             download
//             className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
//           >
//             <Download size={16} className="mr-2" />
//             Download
//           </a>
//         </div>
//       </header>
     
//       {/* Full-Height PDF Iframe */}
//       <div className="flex-1 w-full overflow-hidden">
//         <iframe
//           src={product.pdf}
//           className="w-full h-screen border-0"
//           title={`${product.title} PDF Viewer`}
//           style={{ height: '100vh', width: '100vw' }}
//         />
//       </div>
//     </div>
//   );
// };

// // Product Category Card (unchanged)
// const ProductCategoryCard = ({ imgSrc, title, category, description, keyFeatures, onClick }) => (
//   <div
//     className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:border-red-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white"
//     onClick={onClick}
//   >
//     {/* Image on Top */}
//     <img
//       src={imgSrc}
//       alt={title}
//       className="w-full h-54 object-contain bg-gray-100"
//       onError={(e) => { e.target.src = 'https://placehold.co/400x300/e2e8f0/4a5568?text=Image+Not+Found'; }}
//     />
//     {/* Content Below Image */}
//     <div className="p-6">
//       {/* Wrench icon per theme */}
//       <Wrench className="h-8 w-8 text-gray-600 mb-2 mx-auto" />
//       <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{title}</h3>
//       <p className="text-gray-600 text-sm text-center mb-1">{category}</p>
//       <p className="text-gray-600 text-sm mb-4">{description}</p>
//       {/* Key Features - abbreviated */}
//       <ul className="text-l text-gray-500 font-bold space-y-1 mb-4">
//         {keyFeatures.slice(0, 2).map((feature, index) => (
//           <li key={index} className="flex items-center justify-center">
//             <svg className="w-3 h-3 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//             {feature}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );

// // Why Choose Us Section (unchanged)
// const WhyChooseUs = () => (
//   <section className="py-16 bg-white">
//     <div className="container mx-auto px-4">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Pumps?</h2>
//         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We deliver more than just parts; we provide comprehensive hydraulic solutions.</p>
//       </div>
//       <div className="grid md:grid-cols-3 gap-8 text-center">
//         <div className="p-6">
//           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 text-gray-700 mx-auto mb-4">
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Unmatched Quality</h3>
//           <p className="text-gray-600">Every component is manufactured with precision and tested rigorously to ensure peak performance and longevity.</p>
//         </div>
//         <div className="p-6">
//           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 text-gray-700 mx-auto mb-4">
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
//           <p className="text-gray-600">Our team of hydraulic specialists is ready to assist you in selecting the perfect product for your application.</p>
//         </div>
//         <div className="p-6">
//           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 text-gray-700 mx-auto mb-4">
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//             </svg>
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
//           <p className="text-gray-600">We can engineer and manufacture custom hydraulic components to meet your unique specifications.</p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // Stats Section (unchanged)
// const StatsSection = () => (
//   <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
//     <div className="container mx-auto px-4 text-center">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div>
//           <h3 className="text-5xl font-bold mb-2">25+</h3>
//           <p className="text-xl">Years of Expertise</p>
//         </div>
//         <div>
//           <h3 className="text-5xl font-bold mb-2">500+</h3>
//           <p className="text-xl">Products in Catalog</p>
//         </div>
//         <div>
//           <h3 className="text-5xl font-bold mb-2">1000+</h3>
//           <p className="text-xl">Satisfied Clients</p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // CTA Section (unchanged)
// const CtaSection = () => (
//   <section className="py-16 bg-gray-800 text-white">
//     <div className="container mx-auto px-4 text-center">
//       <h2 className="text-3xl font-bold">Have a Custom Requirement?</h2>
//       <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
//         Our engineering team is ready to collaborate with you to design a hydraulic solution that meets your exact specifications.
//       </p>
//       <a href="/contact" className="mt-6 inline-block bg-red-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors">
//         Get in Touch
//       </a>
//     </div>
//   </section>
// );

// // Main ProductsPage - Updated to group by company
// export default function ProductsPage() {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedCompany, setSelectedCompany] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');

//   const allCompanies = ['All', ...new Set(products.map(p => p.company))]; // Dynamically derive from data

//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       const matchesCompany = selectedCompany === 'All' || product.company === selectedCompany;
//       const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                             product.description.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesCompany && matchesSearch;
//     });
//   }, [selectedCompany, searchQuery]);

//   // Group filtered products by company
//   const groupedProducts = useMemo(() => {
//     const groups = {};
//     filteredProducts.forEach(product => {
//       if (!groups[product.company]) {
//         groups[product.company] = [];
//       }
//       groups[product.company].push(product);
//     });
//     // Limit to top 5 groups (companies) for the requested UI
//     return Object.entries(groups).slice(0, 5);
//   }, [filteredProducts]);

//   const openPdfView = (product) => {
//     setSelectedProduct(product);
//   };

//   const backToGrid = () => {
//     setSelectedProduct(null);
//   };

//   // Show full PDF page if selected, else grouped grid
//   if (selectedProduct) {
//     return <FullPdfViewer product={selectedProduct} onBack={backToGrid} />;
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Hero Section (unchanged) */}
//       <section className="relative bg-red-700 text-white py-20 md:py-32">
//         <div className="absolute inset-0 opacity-30">
//           <Image
//             src="https://images.unsplash.com/photo-1661078483043-6a586b684f17?q=80&w=2233&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Abstract background image of factory floor"
//             fill
//             style={{ objectFit: 'cover' }}
//             priority
//           />
//         </div>
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Our Products</h1>
//           <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
//             Engineered for durability and performance, our hydraulic pumps are the cornerstone of reliable machinery.
//           </p>
//         </div>
//       </section>

//       {/* Filter Bar (updated to use dynamic companies; now filters groups) */}
//       <section className="py-8 bg-white border-b border-gray-200">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             <div className="flex items-center">
//               <Filter className="h-5 w-5 text-gray-600 mr-2" />
//               <select
//                 value={selectedCompany}
//                 onChange={(e) => setSelectedCompany(e.target.value)}
//                 className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
//               >
//                 {allCompanies.map((comp) => (
//                   <option key={comp} value={comp}>{comp}</option>
//                 ))}
//               </select>
//             </div>
           
//             <div className="relative flex-1 max-w-md">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
//               />
//             </div>
//           </div>
         
//           {groupedProducts.length > 0 ? (
//             <p className="text-gray-600 text-sm mt-2 text-right">Showing {groupedProducts.flatMap(([_, prods]) => prods).length} products across {groupedProducts.length} companies</p>
//           ) : (
//             <p className="text-gray-600 text-sm mt-2 text-center">No products found.</p>
//           )}
//         </div>
//       </section>

//       {/* Grouped Products Sections - One per company with grid below */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">Featured Companies & Products</h2>
//             <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Explore products from our top mentioned companies, grouped for easy browsing.</p>
//           </div>
//           {groupedProducts.map(([company, companyProducts]) => (
//             <div key={company} className="mb-16">
//               {/* Company Header */}
//               <div className="text-center mb-8">
//                 <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-red-600 inline-block pb-2">
//                   ------ {company.toUpperCase()} ------
//                 </h3>
//                 <p className="text-gray-600 mt-2">Their Products</p>
//               </div>
             
//               {/* Products Grid for this Company */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//                 {companyProducts.map((product) => (
//                   <ProductCategoryCard
//                     key={product.id}
//                     {...product}
//                     onClick={() => openPdfView(product)}
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <WhyChooseUs />

//       {/* Stats */}
//       {/* <StatsSection /> */}

//       {/* CTA */}
//       <CtaSection />
//     </div>
//   );
// }











"use client";
import Image from 'next/image';
import React, { useState, useEffect, useMemo } from 'react';
import { products } from '../lib/products'; // Adjust path as needed
import { Wrench, Download, XCircle, ChevronLeft, Filter, Search } from 'lucide-react';
import Head from 'next/head'; // For dynamic meta tags (use generateMetadata in app router for static)

// Themed Logo component (optimized: no changes needed)
const Logo = () => (
  <a href="/" className="text-2xl font-bold text-gray-900 flex items-center">
    <div className="mr-2 flex items-center">
      <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
        <path fillRule="evenodd" d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z" clipRule="evenodd" />
      </svg>
      <svg className="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
      </svg>
    </div>
    Meceleon
  </a>
);

// Full-Page PDF Viewer (optimized: removed redundant styles, improved accessibility)
const FullPdfViewer = ({ product, onBack }) => {
  useEffect(() => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen().catch((err) => console.error('Fullscreen error:', err));
    }
    return () => {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => console.error('Exit fullscreen error:', err));
      }
    };
  }, []);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col z-50 overflow-hidden">
      <header className="bg-white shadow-md border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10 sm:p-2">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-red-600 transition-colors text-sm sm:text-base"
          aria-label="Back to products"
        >
          <ChevronLeft size={20} className="mr-2 sm:size-24" />
          <span className="font-semibold">Back to Products</span>
        </button>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <span className="text-gray-700 font-medium text-sm sm:text-base truncate max-w-xs sm:max-w-none">{product.title}</span>
          <a
            href={product.pdf}
            download={product.title}
            className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center text-xs sm:text-sm"
            aria-label={`Download ${product.title} PDF`}
          >
            <Download size={14} className="mr-1.5 sm:mr-2" />
            Download
          </a>
        </div>
      </header>
      <div className="flex-1 w-full overflow-hidden">
        <iframe
          src={product.pdf}
          className="w-full h-full border-0"
          title={`${product.title} - Hydraulic Product Specification PDF`}
          aria-label={`Full specification document for ${product.title}`}
        />
      </div>
    </div>
  );
};

// Product Category Card (optimized: Use Next/Image for lazy loading/optimization, improved responsive heights, SEO-friendly alt/description)
const ProductCategoryCard = ({ id, imgSrc, title, category, description, keyFeatures, pdf, onClick }) => (
  <article
    className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:border-red-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white group"
    onClick={onClick}
    itemScope
    itemType="https://schema.org/Product"
    itemID={`product-${id}`}
  >
    {/* Image on Top - Optimized with Next/Image */}
    <div className="relative h-48 sm:h-56 md:h-64 bg-gray-100">
      <Image
        src={imgSrc}
        alt={`${title} - ${category} hydraulic pump`}
        fill
        className="object-contain p-4"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={(e) => { e.target.src = 'https://placehold.co/400x300/e2e8f0/4a5568?text=Image+Not+Found'; }}
        priority={false} // Lazy by default
      />
    </div>
    {/* Content Below Image */}
    <div className="p-4 sm:p-6">
      <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 mb-2 mx-auto" aria-hidden="true" />
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 text-center group-hover:text-red-600 transition-colors" itemProp="name">
        {title}
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm text-center mb-1" itemProp="category">{category}</p>
      <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2" itemProp="description">{description}</p>
      {/* Key Features - abbreviated, responsive text */}
      <ul className="text-xs sm:text-sm text-gray-500 font-bold space-y-1 mb-4" itemProp="featureList">
        {keyFeatures.slice(0, 2).map((feature, index) => (
          <li key={index} className="flex items-center justify-center">
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-2 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="line-clamp-1">{feature}</span>
          </li>
        ))}
      </ul>
      <meta itemProp="url" content={pdf} />
      <link itemProp="image" href={imgSrc} />
    </div>
  </article>
);

// Why Choose Us Section (optimized: added responsive text sizes, ARIA labels)
const WhyChooseUs = () => (
  <section className="py-12 sm:py-16 bg-white" aria-labelledby="why-choose-heading">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h2 id="why-choose-heading" className="text-2xl sm:text-3xl font-bold text-gray-900">Why Choose Our Pumps?</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">We deliver more than just parts; we provide comprehensive hydraulic solutions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gray-100 text-gray-700 mx-auto mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Unmatched Quality</h3>
          <p className="text-gray-600 text-sm">Every component is manufactured with precision and tested rigorously to ensure peak performance and longevity.</p>
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gray-100 text-gray-700 mx-auto mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
          <p className="text-gray-600 text-sm">Our team of hydraulic specialists is ready to assist you in selecting the perfect product for your application.</p>
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gray-100 text-gray-700 mx-auto mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
          <p className="text-gray-600 text-sm">We can engineer and manufacture custom hydraulic components to meet your unique specifications.</p>
        </div>
      </div>
    </div>
  </section>
);

// Stats Section (optimized: responsive text, added ARIA)
const StatsSection = () => (
  <section className="py-12 sm:py-16 bg-gradient-to-r from-red-600 to-red-700 text-white" aria-labelledby="stats-heading">
    <div className="container mx-auto px-4 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div>
          <h3 className="text-4xl sm:text-5xl font-bold mb-2">25+</h3>
          <p className="text-lg sm:text-xl">Years of Expertise</p>
        </div>
        <div>
          <h3 className="text-4xl sm:text-5xl font-bold mb-2">500+</h3>
          <p className="text-lg sm:text-xl">Products in Catalog</p>
        </div>
        <div>
          <h3 className="text-4xl sm:text-5xl font-bold mb-2">1000+</h3>
          <p className="text-lg sm:text-xl">Satisfied Clients</p>
        </div>
      </div>
    </div>
  </section>
);

// CTA Section (optimized: responsive padding, ARIA)
const CtaSection = () => (
  <section className="py-12 sm:py-16 bg-gray-800 text-white" aria-labelledby="cta-heading">
    <div className="container mx-auto px-4 text-center">
      <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold">Have a Custom Requirement?</h2>
      <p className="mt-2 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
        Our engineering team is ready to collaborate with you to design a hydraulic solution that meets your exact specifications.
      </p>
      <a 
        href="/contact" 
        className="mt-4 sm:mt-6 inline-block bg-red-600 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
        aria-label="Contact us for custom hydraulic solutions"
      >
        Get in Touch
      </a>
    </div>
  </section>
);

// Main ProductsPage (optimized: added SEO Head, JSON-LD structured data for products, improved responsiveness, uncommented Stats)
export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allCompanies = useMemo(() => ['All', ...new Set(products.map(p => p.company))], []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCompany = selectedCompany === 'All' || product.company === selectedCompany;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCompany && matchesSearch;
    });
  }, [selectedCompany, searchQuery]);

  const groupedProducts = useMemo(() => {
    const groups = {};
    filteredProducts.forEach(product => {
      if (!groups[product.company]) {
        groups[product.company] = [];
      }
      groups[product.company].push(product);
    });
    return Object.entries(groups).slice(0, 5);
  }, [filteredProducts]);

  const openPdfView = (product) => setSelectedProduct(product);
  const backToGrid = () => setSelectedProduct(null);

  // SEO: Dynamic Head for page and products
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredProducts.slice(0, 10).map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.title,
        "description": product.description,
        "image": product.imgSrc,
        "url": `/products/${product.id}`, // Assume product detail page slug
        "category": product.category,
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "url": product.pdf
        }
      }
    }))
  };

  if (selectedProduct) {
    return <FullPdfViewer product={selectedProduct} onBack={backToGrid} />;
  }

  return (
    <>
      <Head>
        <title>Hydraulic Pumps & Products | Meceleon - Durable Engineering Solutions</title>
        <meta name="description" content="Discover our range of high-performance hydraulic pumps and components. Engineered for reliability in industrial applications. Browse by company and download specs." />
        <meta name="keywords" content="hydraulic pumps, industrial pumps, Meceleon products, hydraulic components, engineering solutions" />
        <meta property="og:title" content="Our Hydraulic Products | Meceleon" />
        <meta property="og:description" content="Explore durable and high-performance hydraulic pumps from leading companies." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1661078483043-6a586b684f17" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/products" />
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      </Head>
      <div className="bg-white min-h-screen">
        {/* Hero Section (optimized: responsive py, added ARIA) */}
        <section className="relative bg-red-700 text-white py-16 sm:py-20 md:py-32" aria-labelledby="hero-heading">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="https://images.unsplash.com/photo-1661078483043-6a586b684f17?q=80&w=2233&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Industrial factory floor with hydraulic machinery"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">Our Products</h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
              Engineered for durability and performance, our hydraulic pumps are the cornerstone of reliable machinery.
            </p>
          </div>
        </section>

        {/* Filter Bar (optimized: responsive gaps, mobile-first) */}
        <section className="py-6 sm:py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">
              <div className="flex items-center flex-1">
                <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 mr-2 flex-shrink-0" aria-hidden="true" />
                <select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors bg-white"
                  aria-label="Filter products by company"
                >
                  {allCompanies.map((comp) => (
                    <option key={comp} value={comp}>{comp}</option>
                  ))}
                </select>
              </div>
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  aria-label="Search products by name or description"
                />
              </div>
            </div>
            {groupedProducts.length > 0 ? (
              <p className="text-gray-600 text-xs sm:text-sm mt-2 text-right">
                Showing {groupedProducts.flatMap(([_, prods]) => prods).length} products across {groupedProducts.length} companies
              </p>
            ) : (
              <p className="text-gray-600 text-xs sm:text-sm mt-2 text-center">No products found.</p>
            )}
          </div>
        </section>

        {/* Grouped Products Sections (optimized: responsive grid, added ARIA) */}
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="products-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 id="products-heading" className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Companies & Products</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">Explore products from our top mentioned companies, grouped for easy browsing.</p>
            </div>
            {groupedProducts.map(([company, companyProducts]) => (
              <div key={company} className="mb-12 sm:mb-16">
                <div className="text-center mb-6 sm:mb-8" role="heading" aria-level="3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-red-600 inline-block pb-2">
                    ------ {company.toUpperCase()} ------
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">Their Products</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {companyProducts.map((product) => (
                    <ProductCategoryCard
                      key={product.id}
                      {...product}
                      onClick={() => openPdfView(product)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Stats - Uncommented for completeness */}
        <StatsSection />

        {/* CTA */}
        <CtaSection />
      </div>
    </>
  );
}