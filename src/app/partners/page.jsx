// "use client";

// import React from 'react';

// // --- DUMMY DATA for Partners ---
// // To add a new partner, add a new object to this array.
// const partners = [
//     {
//         name: 'Global Industrial Co.',
//         logoSrc: 'https://placehold.co/200x100/1e40af/ffffff?text=Global+Industrial',
//         description: 'A leading distributor of industrial equipment, providing our pumps to a vast network of manufacturers.'
//     },
//     {
//         name: 'Heavy-Duty Machines Inc.',
//         logoSrc: 'https://placehold.co/200x100/4f46e5/ffffff?text=Heavy-Duty+Machines',
//         description: 'Integrating our hydraulic systems into their next-generation construction and mining machinery.'
//     },
//     {
//         name: 'Agro-Tech Solutions',
//         logoSrc: 'https://placehold.co/200x100/166534/ffffff?text=Agro-Tech',
//         description: 'Empowering modern agriculture with our reliable and efficient pumps for irrigation and farm equipment.'
//     },
//     {
//         name: 'Marine Dynamics',
//         logoSrc: 'https://placehold.co/200x100/0c4a6e/ffffff?text=Marine+Dynamics',
//         description: 'Our trusted partner for supplying high-performance hydraulic components for maritime applications.'
//     },
//     {
//         name: 'Automate Forward',
//         logoSrc: 'https://placehold.co/200x100/7c2d12/ffffff?text=Automate',
//         description: 'Pioneering factory automation solutions with the precision and power of our hydraulic systems.'
//     },
//     {
//         name: 'Logistics Prime',
//         logoSrc: 'https://placehold.co/200x100/7f1d1d/ffffff?text=Logistics+Prime',
//         description: 'Enhancing warehouse efficiency and material handling with our robust and durable pump technologies.'
//     }
// ];

// // Component for individual partner cards
// const PartnerCard = ({ logoSrc, name, description }) => (
//     <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
//         <img 
//             src={logoSrc} 
//             alt={`${name} logo`}
//             className="h-16 mb-4 object-contain"
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x100/e2e8f0/4a5568?text=Logo'; }}
//         />
//         <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
//         <p className="text-gray-600 text-sm flex-grow">{description}</p>
//     </div>
// );

// export default function PartnersPage() {
//     return (
//         <div className="bg-gray-50">
//             {/* Hero Section */}
//             <section className="relative bg-red-800 text-white py-20 md:py-32">
//                 <div 
//                     className="absolute inset-0 bg-cover bg-center opacity-30" 
//                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop')" }}
//                 ></div>
//                 <div className="container mx-auto px-4 text-center relative z-10">
//                     <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Our Valued Partners</h1>
//                     <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
//                         Collaboration is at the heart of our success. We are proud to work with industry leaders to deliver exceptional value.
//                     </p>
//                 </div>
//             </section>

//             {/* Partners Grid Section */}
//             <section className="py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-800">A Network of Excellence</h2>
//                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We partner with companies that share our commitment to quality, innovation, and customer satisfaction.</p>
//                     </div>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {partners.map((partner, index) => (
//                             <PartnerCard key={index} {...partner} />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* "Become a Partner" CTA Section */}
//             <section className="bg-white py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="grid md:grid-cols-2 gap-12 items-center bg-red-600 text-white rounded-lg p-8 md:p-12">
//                         <div className="order-2 md:order-1">
//                             <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
//                             <p className="mb-6 opacity-90">
//                                 Join our growing network of distributors and integrators. We offer competitive advantages, dedicated support, and a partnership program designed for mutual growth. Let's build the future of hydraulic technology together.
//                             </p>
//                              <ul className="space-y-3 mb-8">
//                                 <li className="flex items-center"><span className="bg-white text-blue-600 rounded-full mr-3 p-1">&#10003;</span> Access to our full product catalog</li>
//                                 <li className="flex items-center"><span className="bg-white text-blue-600 rounded-full mr-3 p-1">&#10003;</span> Comprehensive technical and sales training</li>
//                                 <li className="flex items-center"><span className="bg-white text-blue-600 rounded-full mr-3 p-1">&#10003;</span> Joint marketing and co-branding opportunities</li>
//                             </ul>
//                             <a href="/contact" className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
//                                 Enquire Now
//                             </a>
//                         </div>
//                         <div className="order-1 md:order-2 flex justify-center">
//                            <svg className="w-48 h-48 opacity-80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.962 0L14.25 6h5.25M12 3v5.25m0 0l-3.75 3.75M12 8.25l3.75 3.75M3 3h3.75v3.75H3V3z" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v-3.75h3.75v3.75H3zM16.5 3h3.75v3.75h-3.75V3zM16.5 16.5v-3.75h3.75v3.75h-3.75z" />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
















// "use client";

// import React from 'react';

// // Updated Partners Data with Indian Companies
// const partners = [
//     {
//         name: 'Aditya Birla Group',
//         logoSrc: '/images/adityabirla.jpeg',
//         description: 'A leading diversified conglomerate partnering with us for advanced hydraulic solutions in metals, cement, and textiles industries.'
//     },
//     {
//         name: 'BHEL',
//         logoSrc: '/images/bhel.jpeg',
//         description: 'Bharat Heavy Electricals Limited integrates our precision hydraulic systems into power generation and transmission equipment.'
//     },
//     {
//         name: 'Coal India',
//         logoSrc: '/images/coal.jpeg',
//         description: 'Empowering coal mining operations with our durable hydraulic pumps designed for heavy-duty extraction and handling.'
//     },
//     {
//         name: 'G Industries',
//         logoSrc: '/images/g.jpeg',
//         description: 'Collaborating on innovative hydraulic technologies for industrial applications across various sectors.'
//     },
//     {
//         name: 'GAIL',
//         logoSrc: '/images/gail.jpeg',
//         description: 'Gas Authority of India Limited utilizes our efficient hydraulic components in natural gas infrastructure and pipeline systems.'
//     },
//     {
//         name: 'HAL',
//         logoSrc: '/images/hal.jpeg',
//         description: 'Hindustan Aeronautics Limited relies on our high-performance hydraulics for aerospace manufacturing and aircraft systems.'
//     },
//     {
//         name: 'Hindalco',
//         logoSrc: '/images/hindalco.jpeg',
//         description: 'A premier aluminum producer incorporating our robust hydraulic solutions in smelting and extrusion processes.'
//     },
//     {
//         name: 'IFFCO',
//         logoSrc: '/images/iffco.jpeg',
//         description: 'Indian Farmers Fertiliser Cooperative enhances fertilizer production with our reliable hydraulic equipment for agriculture.'
//     },
//     {
//         name: 'Indian Railways',
//         logoSrc: '/images/indianrailway.jpeg',
//         description: 'Powering rail infrastructure with our specialized hydraulic systems for locomotives and maintenance operations.'
//     },
//     {
//         name: 'KRIBHCO',
//         logoSrc: '/images/kribhco.jpeg',
//         description: 'Krishak Bharati Cooperative deploys our hydraulic pumps in urea and fertilizer manufacturing plants.'
//     },
//     {
//         name: 'L&T',
//         logoSrc: '/images/lt.jpeg',
//         description: 'Larsen & Toubro partners for engineering projects, integrating our hydraulics in construction and heavy machinery.'
//     },
//     {
//         name: 'NTPC',
//         logoSrc: '/images/ntpc.jpeg',
//         description: 'National Thermal Power Corporation uses our energy-efficient hydraulic solutions in thermal power plants.'
//     },
//     {
//         name: 'Reliance Industries',
//         logoSrc: '/images/reliance.jpeg',
//         description: 'A global leader in petrochemicals, leveraging our hydraulic technologies for refining and petrochemical processes.'
//     },
//     {
//         name: 'SAIL',
//         logoSrc: '/images/sse.jpeg',
//         description: 'Steel Authority of India Limited incorporates our durable hydraulics in steel production and rolling mills.'
//     },
//     {
//         name: 'Tata Group',
//         logoSrc: '/images/tata.jpeg',
//         description: 'The iconic Tata conglomerate collaborates on hydraulic innovations across automotive, steel, and chemicals.'
//     },
//     {
//         name: 'Tata Motors',
//         logoSrc: '/images/tatamotors.jpeg',
//         description: 'Driving commercial vehicles with our advanced hydraulic braking and suspension systems.'
//     },
//     {
//         name: 'UPRVUNL',
//         logoSrc: '/images/uprvunl.jpeg',
//         description: 'Uttar Pradesh Rajya Vidyut Utpadan Nigam Limited powers thermal stations with our reliable hydraulic turbines.'
//     }
// ];

// // Component for individual partner cards
// const PartnerCard = ({ logoSrc, name, description }) => (
//     <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
//         <img 
//             src={logoSrc} 
//             alt={`${name} logo`}
//             className="h-16 mb-4 object-contain"
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x100/e2e8f0/4a5568?text=Logo'; }}
//         />
//         <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
//         <p className="text-gray-600 text-sm flex-grow">{description}</p>
//     </div>
// );

// export default function PartnersPage() {
//     return (
//         <div className="bg-gray-50">
//             {/* Hero Section */}
//             <section className="relative bg-red-800 text-white py-20 md:py-32">
//                 <div 
//                     className="absolute inset-0 bg-cover bg-center opacity-30" 
//                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop')" }}
//                 ></div>
//                 <div className="container mx-auto px-4 text-center relative z-10">
//                     <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Our Valued Partners</h1>
//                     <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
//                         Collaboration is at the heart of our success. We are proud to work with industry leaders to deliver exceptional value.
//                     </p>
//                 </div>
//             </section>

//             {/* Partners Grid Section */}
//             <section className="py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-800">A Network of Excellence</h2>
//                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We partner with companies that share our commitment to quality, innovation, and customer satisfaction.</p>
//                     </div>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {partners.map((partner, index) => (
//                             <PartnerCard key={index} {...partner} />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* "Become a Partner" CTA Section */}
//             <section className="bg-white py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="grid md:grid-cols-2 gap-12 items-center bg-blue-600 text-white rounded-lg p-8 md:p-12">
//                         <div className="order-2 md:order-1">
//                             <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
//                             <p className="mb-6 opacity-90">
//                                 Join our growing network of distributors and integrators. We offer competitive advantages, dedicated support, and a partnership program designed for mutual growth. Let's build the future of hydraulic technology together.
//                             </p>
//                              <ul className="space-y-3 mb-8">
//                                 <li className="flex items-center"><span className="bg-white text-blue-600 rounded-full mr-3 p-1">&#10003;</span> Access to our full product catalog</li>
//                                 <li className="flex items-center"><span className="bg-white text-blue-600 rounded-full mr-3 p-1">&#10003;</span> Comprehensive technical and sales training</li>
//                                 <li className="flex items-center"><span className="bg-white text-blue-600 rounded-full mr-3 p-1">&#10003;</span> Joint marketing and co-branding opportunities</li>
//                             </ul>
//                             <a href="/contact" className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
//                                 Enquire Now
//                             </a>
//                         </div>
//                         <div className="order-1 md:order-2 flex justify-center">
//                            <svg className="w-48 h-48 opacity-80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.962 0L14.25 6h5.25M12 3v5.25m0 0l-3.75 3.75M12 8.25l3.75 3.75M3 3h3.75v3.75H3V3z" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v-3.75h3.75v3.75H3zM16.5 3h3.75v3.75h-3.75V3zM16.5 16.5v-3.75h3.75v3.75h-3.75z" />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
























// "use client";

// import React, { useState, useEffect } from 'react';

// // Updated Partners Data with Indian Companies
// const partners = [
//     {
//         name: 'Aditya Birla Group',
//         logoSrc: '/images/adityabirla.jpeg',
//         description: 'A leading diversified conglomerate partnering with us for advanced hydraulic solutions in metals, cement, and textiles industries.'
//     },
//     {
//         name: 'BHEL',
//         logoSrc: '/images/bhel.jpeg',
//         description: 'Bharat Heavy Electricals Limited integrates our precision hydraulic systems into power generation and transmission equipment.'
//     },
//     {
//         name: 'Coal India',
//         logoSrc: '/images/coal.jpeg',
//         description: 'Empowering coal mining operations with our durable hydraulic pumps designed for heavy-duty extraction and handling.'
//     },
//     {
//         name: 'G Industries',
//         logoSrc: '/images/g.jpeg',
//         description: 'Collaborating on innovative hydraulic technologies for industrial applications across various sectors.'
//     },
//     {
//         name: 'GAIL',
//         logoSrc: '/images/gail.jpeg',
//         description: 'Gas Authority of India Limited utilizes our efficient hydraulic components in natural gas infrastructure and pipeline systems.'
//     },
//     {
//         name: 'HAL',
//         logoSrc: '/images/hal.jpeg',
//         description: 'Hindustan Aeronautics Limited relies on our high-performance hydraulics for aerospace manufacturing and aircraft systems.'
//     },
//     {
//         name: 'Hindalco',
//         logoSrc: '/images/hindalco.jpeg',
//         description: 'A premier aluminum producer incorporating our robust hydraulic solutions in smelting and extrusion processes.'
//     },
//     {
//         name: 'IFFCO',
//         logoSrc: '/images/iffco.jpeg',
//         description: 'Indian Farmers Fertiliser Cooperative enhances fertilizer production with our reliable hydraulic equipment for agriculture.'
//     },
//     {
//         name: 'Indian Railways',
//         logoSrc: '/images/indianrailway.jpeg',
//         description: 'Powering rail infrastructure with our specialized hydraulic systems for locomotives and maintenance operations.'
//     },
//     {
//         name: 'KRIBHCO',
//         logoSrc: '/images/kribhco.jpeg',
//         description: 'Krishak Bharati Cooperative deploys our hydraulic pumps in urea and fertilizer manufacturing plants.'
//     },
//     {
//         name: 'L&T',
//         logoSrc: '/images/lt.jpeg',
//         description: 'Larsen & Toubro partners for engineering projects, integrating our hydraulics in construction and heavy machinery.'
//     },
//     {
//         name: 'NTPC',
//         logoSrc: '/images/ntpc.jpeg',
//         description: 'National Thermal Power Corporation uses our energy-efficient hydraulic solutions in thermal power plants.'
//     },
//     {
//         name: 'Reliance Industries',
//         logoSrc: '/images/reliance.jpeg',
//         description: 'A global leader in petrochemicals, leveraging our hydraulic technologies for refining and petrochemical processes.'
//     },
//     {
//         name: 'SAIL',
//         logoSrc: '/images/sse.jpeg',
//         description: 'Steel Authority of India Limited incorporates our durable hydraulics in steel production and rolling mills.'
//     },
//     {
//         name: 'Tata Group',
//         logoSrc: '/images/tata.jpeg',
//         description: 'The iconic Tata conglomerate collaborates on hydraulic innovations across automotive, steel, and chemicals.'
//     },
//     {
//         name: 'Tata Motors',
//         logoSrc: '/images/tatamotors.jpeg',
//         description: 'Driving commercial vehicles with our advanced hydraulic braking and suspension systems.'
//     },
//     {
//         name: 'UPRVUNL',
//         logoSrc: '/images/uprvunl.jpeg',
//         description: 'Uttar Pradesh Rajya Vidyut Utpadan Nigam Limited powers thermal stations with our reliable hydraulic turbines.'
//     }
// ];

// // Component for individual partner cards
// const PartnerCard = ({ logoSrc, name, description }) => (
//     <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
//         <img 
//             src={logoSrc} 
//             alt={`${name} logo`}
//             className="h-16 mb-4 object-contain"
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x100/e2e8f0/4a5568?text=Logo'; }}
//         />
//         <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
//         <p className="text-gray-600 text-sm flex-grow">{description}</p>
//     </div>
// );

// // Simple Slider Component for Customers (using partners as customers, logos only)
// const CustomerSlider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const itemsPerSlide = 4; // Show 4 logos per slide
//     const totalSlides = Math.ceil(partners.length / itemsPerSlide);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//         }, 4000); // Auto-slide every 4 seconds

//         return () => clearInterval(interval);
//     }, [totalSlides]);

//     const goToSlide = (index) => setCurrentIndex(index);

//     return (
//         <div className="relative bg-gray-100 py-12">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Trusted Customers</h2>
//                 <div className="relative overflow-hidden rounded-lg">
//                     <div 
//                         className="flex transition-transform duration-500 ease-in-out"
//                         style={{ transform: `translateX(-${currentIndex * (100 / totalSlides)}%)` }}
//                     >
//                         {Array.from({ length: totalSlides }, (_, slideIndex) => (
//                             <div 
//                                 key={slideIndex}
//                                 className="flex-shrink-0 w-full px-4"
//                                 style={{ width: `${100 / totalSlides}%` }}
//                             >
//                                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                                     {/* Render up to itemsPerSlide partners per slide */}
//                                     {Array.from({ length: itemsPerSlide }, (_, i) => {
//                                         const partnerIndex = (currentIndex * itemsPerSlide) + i;
//                                         if (partnerIndex >= partners.length) return null;
//                                         const p = partners[partnerIndex];
//                                         return (
//                                             <div key={partnerIndex} className="flex justify-center">
//                                                 <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xs">
//                                                     <img 
//                                                         src={p.logoSrc} 
//                                                         alt={`${p.name} logo`}
//                                                         className="h-12 mx-auto object-contain"
//                                                         onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x100/e2e8f0/4a5568?text=Logo'; }}
//                                                     />
//                                                 </div>
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     {/* Navigation Dots */}
//                     <div className="flex justify-center mt-6 space-x-2">
//                         {Array.from({ length: totalSlides }, (_, i) => (
//                             <button
//                                 key={i}
//                                 onClick={() => goToSlide(i)}
//                                 className={`w-3 h-3 rounded-full transition-all ${
//                                     i === currentIndex ? 'bg-red-600 w-6' : 'bg-gray-300'
//                                 }`}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default function PartnersPage() {
//     return (
//         <div className="bg-gray-50">
//             {/* Hero Section */}
//             <section className="relative bg-red-800 text-white py-20 md:py-32">
//                 <div 
//                     className="absolute inset-0 bg-cover bg-center opacity-30" 
//                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop')" }}
//                 ></div>
//                 <div className="container mx-auto px-4 text-center relative z-10">
//                     <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Our Valued Partners</h1>
//                     <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
//                         Collaboration is at the heart of our success. We are proud to work with industry leaders to deliver exceptional value.
//                     </p>
//                 </div>
//             </section>

//             {/* Partners Grid Section */}
//             <section className="py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-800">A Network of Excellence</h2>
//                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We partner with companies that share our commitment to quality, innovation, and customer satisfaction.</p>
//                     </div>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {partners.map((partner, index) => (
//                             <PartnerCard key={index} {...partner} />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Customer Slider Section (logos only, no names to avoid duplication) */}
//             <CustomerSlider />

//             {/* "Become a Partner" CTA Section */}
//             <section className="bg-white py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="grid md:grid-cols-2 gap-12 items-center bg-blue-600 text-white rounded-lg p-8 md:p-12">
//                         <div className="order-2 md:order-1">
//                             <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
//                             <p className="mb-6 opacity-90">
//                                 Join our growing network of distributors and integrators. We offer competitive advantages, dedicated support, and a partnership program designed for mutual growth. Let's build the future of hydraulic technology together.
//                             </p>
//                              <ul className="space-y-3 mb-8">
//                                 <li className="flex items-center"><span className="bg-white text-blue-600 rounded-full mr-3 p-1">&#10003;</span> Access to our full product catalog</li>
//                                 <li className="flex items-center"><span className="bg-white text-blue-600 rounded-full mr-3 p-1">&#10003;</span> Comprehensive technical and sales training</li>
//                                 <li className="flex items-center"><span className="bg-white text-blue-600 rounded-full mr-3 p-1">&#10003;</span> Joint marketing and co-branding opportunities</li>
//                             </ul>
//                             <a href="/contact" className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
//                                 Enquire Now
//                             </a>
//                         </div>
//                         <div className="order-1 md:order-2 flex justify-center">
//                            <svg className="w-48 h-48 opacity-80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.962 0L14.25 6h5.25M12 3v5.25m0 0l-3.75 3.75M12 8.25l3.75 3.75M3 3h3.75v3.75H3V3z" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v-3.75h3.75v3.75H3zM16.5 3h3.75v3.75h-3.75V3zM16.5 16.5v-3.75h3.75v3.75h-3.75z" />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
























"use client";

import React, { useState, useEffect } from 'react';

// Updated Partners Data with Indian Companies
const partners = [
    {
        name: 'Aditya Birla Group',
        logoSrc: '/images/adityabirla.jpeg',
        description: 'A leading diversified conglomerate partnering with us for advanced hydraulic solutions in metals, cement, and textiles industries.'
    },
    {
        name: 'BHEL',
        logoSrc: '/images/bhel.jpeg',
        description: 'Bharat Heavy Electricals Limited integrates our precision hydraulic systems into power generation and transmission equipment.'
    },
    {
        name: 'Coal India',
        logoSrc: '/images/coal.jpeg',
        description: 'Empowering coal mining operations with our durable hydraulic pumps designed for heavy-duty extraction and handling.'
    },
    {
        name: 'G Industries',
        logoSrc: '/images/g.jpeg',
        description: 'Collaborating on innovative hydraulic technologies for industrial applications across various sectors.'
    },
    {
        name: 'GAIL',
        logoSrc: '/images/gail.jpeg',
        description: 'Gas Authority of India Limited utilizes our efficient hydraulic components in natural gas infrastructure and pipeline systems.'
    },
    {
        name: 'HAL',
        logoSrc: '/images/hal.jpeg',
        description: 'Hindustan Aeronautics Limited relies on our high-performance hydraulics for aerospace manufacturing and aircraft systems.'
    },
    {
        name: 'Hindalco',
        logoSrc: '/images/hindalco.jpeg',
        description: 'A premier aluminum producer incorporating our robust hydraulic solutions in smelting and extrusion processes.'
    },
    {
        name: 'IFFCO',
        logoSrc: '/images/iffco.jpeg',
        description: 'Indian Farmers Fertiliser Cooperative enhances fertilizer production with our reliable hydraulic equipment for agriculture.'
    },
    {
        name: 'Indian Railways',
        logoSrc: '/images/indianrailway.jpeg',
        description: 'Powering rail infrastructure with our specialized hydraulic systems for locomotives and maintenance operations.'
    },
    {
        name: 'KRIBHCO',
        logoSrc: '/images/kribhco.jpeg',
        description: 'Krishak Bharati Cooperative deploys our hydraulic pumps in urea and fertilizer manufacturing plants.'
    },
    {
        name: 'L&T',
        logoSrc: '/images/lt.jpeg',
        description: 'Larsen & Toubro partners for engineering projects, integrating our hydraulics in construction and heavy machinery.'
    },
    {
        name: 'NTPC',
        logoSrc: '/images/ntpc.jpeg',
        description: 'National Thermal Power Corporation uses our energy-efficient hydraulic solutions in thermal power plants.'
    },
    {
        name: 'Reliance Industries',
        logoSrc: '/images/reliance.jpeg',
        description: 'A global leader in petrochemicals, leveraging our hydraulic technologies for refining and petrochemical processes.'
    },
    {
        name: 'SAIL',
        logoSrc: '/images/sse.jpeg',
        description: 'Steel Authority of India Limited incorporates our durable hydraulics in steel production and rolling mills.'
    },
    {
        name: 'Tata Group',
        logoSrc: '/images/tata.jpeg',
        description: 'The iconic Tata conglomerate collaborates on hydraulic innovations across automotive, steel, and chemicals.'
    },
    {
        name: 'Tata Motors',
        logoSrc: '/images/tatamotors.jpeg',
        description: 'Driving commercial vehicles with our advanced hydraulic braking and suspension systems.'
    },
    {
        name: 'UPRVUNL',
        logoSrc: '/images/uprvunl.jpeg',
        description: 'Uttar Pradesh Rajya Vidyut Utpadan Nigam Limited powers thermal stations with our reliable hydraulic turbines.'
    }
];

// Component for individual partner cards
const PartnerCard = ({ logoSrc, name, description }) => (
    <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <img 
            src={logoSrc} 
            alt={`${name} logo`}
            className="h-16 mb-4 object-contain"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x100/e2e8f0/4a5568?text=Logo'; }}
        />
        <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </div>
);

// Simple Slider Component for Customers (using partners as customers, 4 logos at a time)
const CustomerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 8; // Show 4 logos per slide
    const totalSlides = Math.ceil(partners.length / itemsPerSlide);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 4000); // Auto-slide every 4 seconds

        return () => clearInterval(interval);
    }, [totalSlides]);

    const goToSlide = (index) => setCurrentIndex(index);

    return (
        <div className="relative bg-gray-100 py-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Trusted Customers</h2>
                <div className="relative overflow-hidden rounded-lg">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }, (_, slideIndex) => (
                            <div 
                                key={slideIndex}
                                className="flex-shrink-0 w-full"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center p-4">
                                    {/* Render up to itemsPerSlide partners per slide */}
                                    {Array.from({ length: itemsPerSlide }, (_, i) => {
                                        const partnerIndex = (currentIndex * itemsPerSlide) + i;
                                        if (partnerIndex >= partners.length) return null;
                                        const p = partners[partnerIndex];
                                        return (
                                            <div key={partnerIndex} className="flex justify-center">
                                                <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xs">
                                                    <img 
                                                        src={p.logoSrc} 
                                                        alt={`${p.name} logo`}
                                                        className="h-12 mx-auto object-contain"
                                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x100/e2e8f0/4a5568?text=Logo'; }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {Array.from({ length: totalSlides }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    i === currentIndex ? 'bg-red-600 w-6' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function PartnersPage() {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-red-800 text-white py-20 md:py-32">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop')" }}
                ></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Our Valued Partners and customers</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                        Collaboration is at the heart of our success. We are proud to work with industry leaders to deliver exceptional value.
                    </p>
                </div>
            </section>

            {/* Partners Grid Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">A Network of Excellence</h2>
                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We partner with companies that share our commitment to quality, innovation, and customer satisfaction.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partners.map((partner, index) => (
                            <PartnerCard key={index} {...partner} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Slider Section (4 logos at a time, no names to avoid duplication) */}
            {/* <CustomerSlider /> */}

            {/* "Become a Partner" CTA Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center bg-red-600 text-white rounded-lg p-8 md:p-12">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
                            <p className="mb-6 opacity-90">
                                Join our growing network of distributors and integrators. We offer competitive advantages, dedicated support, and a partnership program designed for mutual growth. Let's build the future of hydraulic technology together.
                            </p>
                             <ul className="space-y-3 mb-8">
                                <li className="flex items-center"><span className="bg-white text-red-600 rounded-full mr-3 p-1">&#10003;</span> Access to our full product catalog</li>
                                <li className="flex items-center"><span className="bg-white text-red-600 rounded-full mr-3 p-1">&#10003;</span> Comprehensive technical and sales training</li>
                                <li className="flex items-center"><span className="bg-white text-red-600 rounded-full mr-3 p-1">&#10003;</span> Joint marketing and co-branding opportunities</li>
                            </ul>
                            <a href="/contact" className="inline-block bg-gray-300 text-black font-semibold py-3 px-8 rounded-lg hover:bg-white transition-colors">
                                Enquire Now
                            </a>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center">
                           {/* <svg className="w-48 h-48 opacity-80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.962 0L14.25 6h5.25M12 3v5.25m0 0l-3.75 3.75M12 8.25l3.75 3.75M3 3h3.75v3.75H3V3z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v-3.75h3.75v3.75H3zM16.5 3h3.75v3.75h-3.75V3zM16.5 16.5v-3.75h3.75v3.75h-3.75z" />
                            </svg> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}