// "use client";

// import React, { useState } from 'react';

// // --- UPDATED DUMMY DATA ---
// // To add a new product, just add a new object to this array.
// const productData = [
//     {
//         id: 'gear-pumps',
//         title: 'Gear Pumps',
//         imgSrc: 'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=1920&auto=format&fit=crop',
//         description: 'Robust and reliable, ideal for a wide range of fluid transfer applications in industrial and mobile settings.',
//         keyFeatures: ['High Efficiency', 'Durable Cast Iron Body', 'Compact Design'],
//         details: 'Our gear pumps are engineered for high performance and long service life. They operate efficiently under various pressures and are suitable for handling oils, fuels, and other hydraulic fluids. The simple construction with few moving parts ensures minimal maintenance and maximum uptime.',
//         gallery: [
//             'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=800&auto=format&fit=crop',
//             'https://placehold.co/800x600/334155/ffffff?text=Gear+Pump+View+2',
//             'https://placehold.co/800x600/475569/ffffff?text=Gear+Pump+View+3'
//         ],
//         specifications: [
//             { name: 'Displacement', value: '5-150 cm³/rev' },
//             { name: 'Max Pressure', value: 'Up to 250 bar' },
//             { name: 'Speed Range', value: '500-4000 rpm' },
//             { name: 'Fluid Viscosity', value: '10-500 cSt' },
//         ],
//     },
//     {
//         id: 'piston-pumps',
//         title: 'Piston Pumps',
//         imgSrc: 'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=1920&auto=format&fit=crop',
//         description: 'High-pressure capabilities and precision control for the most demanding hydraulic systems.',
//         keyFeatures: ['Variable Displacement', 'High Pressure Tolerance', 'Low Noise Operation'],
//         details: 'The AXP series of piston pumps provides exceptional power density and precision. Featuring a variable displacement swashplate design, they are perfect for closed and open-loop circuits. Their robust construction ensures reliability in heavy-duty applications like construction and mining.',
//         gallery: [
//             'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=800&auto=format&fit=crop',
//             'https://placehold.co/800x600/334155/ffffff?text=Piston+Pump+View+2',
//             'https://placehold.co/800x600/475569/ffffff?text=Piston+Pump+View+3'
//         ],
//         specifications: [
//             { name: 'Displacement', value: '20-500 cm³/rev' },
//             { name: 'Max Pressure', value: 'Up to 450 bar' },
//             { name: 'Control Options', value: 'Pressure, Flow, Power' },
//             { name: 'Mounting', value: 'ISO, SAE' },
//         ],
//     },
//     {
//         id: 'vane-pumps',
//         title: 'Vane Pumps',
//         imgSrc: 'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=1920&auto=format&fit=crop',
//         description: 'Known for their low noise operation and excellent performance in medium-pressure applications.',
//         keyFeatures: ['Low Pulsation Flow', 'Quiet Operation', 'Replaceable Cartridge'],
//         details: 'Vane pumps are the ideal choice for applications requiring a smooth, low-pulsation flow and quiet operation. Their unique design minimizes pressure ripples, making them suitable for industrial machinery, power steering systems, and automation. They are available in fixed and variable displacement models.',
//         gallery: [
//             'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=800&auto=format&fit=crop',
//             'https://placehold.co/800x600/334155/ffffff?text=Vane+Pump+View+2',
//             'https://placehold.co/800x600/475569/ffffff?text=Vane+Pump+View+3'
//         ],
//         specifications: [
//             { name: 'Displacement', value: '10-200 cm³/rev' },
//             { name: 'Max Pressure', value: 'Up to 210 bar' },
//             { name: 'Noise Level', value: '< 70 dBA' },
//             { name: 'Cartridge Kit', value: 'Replaceable for easy service' },
//         ],
//     },
//     {
//         id: 'hydraulic-motors',
//         title: 'Hydraulic Motors',
//         imgSrc: 'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=1920&auto=format&fit=crop',
//         description: 'Efficiently convert hydraulic energy into mechanical power for various industrial uses.',
//         keyFeatures: ['High Starting Torque', 'Wide Speed Range', 'Bi-directional Rotation'],
//         details: 'Our hydraulic motors offer high torque and excellent efficiency across a wide speed range. Designed for durability, they perform reliably in the toughest conditions. We offer a variety of motor types, including gear, vane, and piston motors, to suit applications from conveyors to vehicle propulsion.',
//         gallery: [
//             'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=800&auto=format&fit=crop',
//             'https://placehold.co/800x600/334155/ffffff?text=Motor+View+2',
//             'https://placehold.co/800x600/475569/ffffff?text=Motor+View+3'
//         ],
//         specifications: [
//             { name: 'Torque Range', value: '50-2000 Nm' },
//             { name: 'Speed', value: 'Up to 3000 rpm' },
//             { name: 'Type', value: 'Gerotor, Orbital, Piston' },
//             { name: 'Shaft Options', value: 'Splined, Keyed, Tapered' },
//         ],
//     },
//       {
//         id: 'gea-pumps',
//         title: 'Gear Pumps',
//         imgSrc: 'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=1920&auto=format&fit=crop',
//         description: 'Robust and reliable, ideal for a wide range of fluid transfer applications in industrial and mobile settings.',
//         keyFeatures: ['High Efficiency', 'Durable Cast Iron Body', 'Compact Design'],
//         details: 'Our gear pumps are engineered for high performance and long service life. They operate efficiently under various pressures and are suitable for handling oils, fuels, and other hydraulic fluids. The simple construction with few moving parts ensures minimal maintenance and maximum uptime.',
//         gallery: [
//             'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=800&auto=format&fit=crop',
//             'https://placehold.co/800x600/334155/ffffff?text=Gear+Pump+View+2',
//             'https://placehold.co/800x600/475569/ffffff?text=Gear+Pump+View+3'
//         ],
//         specifications: [
//             { name: 'Displacement', value: '5-150 cm³/rev' },
//             { name: 'Max Pressure', value: 'Up to 250 bar' },
//             { name: 'Speed Range', value: '500-4000 rpm' },
//             { name: 'Fluid Viscosity', value: '10-500 cSt' },
//         ],
//     },
//     {
//         id: 'piston-pups',
//         title: 'Piston Pumps',
//         imgSrc: 'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=1920&auto=format&fit=crop',
//         description: 'High-pressure capabilities and precision control for the most demanding hydraulic systems.',
//         keyFeatures: ['Variable Displacement', 'High Pressure Tolerance', 'Low Noise Operation'],
//         details: 'The AXP series of piston pumps provides exceptional power density and precision. Featuring a variable displacement swashplate design, they are perfect for closed and open-loop circuits. Their robust construction ensures reliability in heavy-duty applications like construction and mining.',
//         gallery: [
//             'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=800&auto=format&fit=crop',
//             'https://placehold.co/800x600/334155/ffffff?text=Piston+Pump+View+2',
//             'https://placehold.co/800x600/475569/ffffff?text=Piston+Pump+View+3'
//         ],
//         specifications: [
//             { name: 'Displacement', value: '20-500 cm³/rev' },
//             { name: 'Max Pressure', value: 'Up to 450 bar' },
//             { name: 'Control Options', value: 'Pressure, Flow, Power' },
//             { name: 'Mounting', value: 'ISO, SAE' },
//         ],
//     },
//     {
//         id: 'vae-pumps',
//         title: 'Vane Pumps',
//         imgSrc: 'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=1920&auto=format&fit=crop',
//         description: 'Known for their low noise operation and excellent performance in medium-pressure applications.',
//         keyFeatures: ['Low Pulsation Flow', 'Quiet Operation', 'Replaceable Cartridge'],
//         details: 'Vane pumps are the ideal choice for applications requiring a smooth, low-pulsation flow and quiet operation. Their unique design minimizes pressure ripples, making them suitable for industrial machinery, power steering systems, and automation. They are available in fixed and variable displacement models.',
//         gallery: [
//             'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=800&auto=format&fit=crop',
//             'https://placehold.co/800x600/334155/ffffff?text=Vane+Pump+View+2',
//             'https://placehold.co/800x600/475569/ffffff?text=Vane+Pump+View+3'
//         ],
//         specifications: [
//             { name: 'Displacement', value: '10-200 cm³/rev' },
//             { name: 'Max Pressure', value: 'Up to 210 bar' },
//             { name: 'Noise Level', value: '< 70 dBA' },
//             { name: 'Cartridge Kit', value: 'Replaceable for easy service' },
//         ],
//     },
//     {
//         id: 'hydralic-motors',
//         title: 'Hydraulic Motors',
//         imgSrc: 'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=1920&auto=format&fit=crop',
//         description: 'Efficiently convert hydraulic energy into mechanical power for various industrial uses.',
//         keyFeatures: ['High Starting Torque', 'Wide Speed Range', 'Bi-directional Rotation'],
//         details: 'Our hydraulic motors offer high torque and excellent efficiency across a wide speed range. Designed for durability, they perform reliably in the toughest conditions. We offer a variety of motor types, including gear, vane, and piston motors, to suit applications from conveyors to vehicle propulsion.',
//         gallery: [
//             'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=800&auto=format&fit=crop',
//             'https://placehold.co/800x600/334155/ffffff?text=Motor+View+2',
//             'https://placehold.co/800x600/475569/ffffff?text=Motor+View+3'
//         ],
//         specifications: [
//             { name: 'Torque Range', value: '50-2000 Nm' },
//             { name: 'Speed', value: 'Up to 3000 rpm' },
//             { name: 'Type', value: 'Gerotor, Orbital, Piston' },
//             { name: 'Shaft Options', value: 'Splined, Keyed, Tapered' },
//         ],
//     },
//       {
//         id: 'gear-umps',
//         title: 'Gear Pumps',
//         imgSrc: 'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=1920&auto=format&fit=crop',
//         description: 'Robust and reliable, ideal for a wide range of fluid transfer applications in industrial and mobile settings.',
//         keyFeatures: ['High Efficiency', 'Durable Cast Iron Body', 'Compact Design'],
//         details: 'Our gear pumps are engineered for high performance and long service life. They operate efficiently under various pressures and are suitable for handling oils, fuels, and other hydraulic fluids. The simple construction with few moving parts ensures minimal maintenance and maximum uptime.',
//         gallery: [
//             'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=800&auto=format&fit=crop',
//             'https://placehold.co/800x600/334155/ffffff?text=Gear+Pump+View+2',
//             'https://placehold.co/800x600/475569/ffffff?text=Gear+Pump+View+3'
//         ],
//         specifications: [
//             { name: 'Displacement', value: '5-150 cm³/rev' },
//             { name: 'Max Pressure', value: 'Up to 250 bar' },
//             { name: 'Speed Range', value: '500-4000 rpm' },
//             { name: 'Fluid Viscosity', value: '10-500 cSt' },
//         ],
//     },
//     {
//         id: 'piston-pump',
//         title: 'Piston Pumps',
//         imgSrc: 'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=1920&auto=format&fit=crop',
//         description: 'High-pressure capabilities and precision control for the most demanding hydraulic systems.',
//         keyFeatures: ['Variable Displacement', 'High Pressure Tolerance', 'Low Noise Operation'],
//         details: 'The AXP series of piston pumps provides exceptional power density and precision. Featuring a variable displacement swashplate design, they are perfect for closed and open-loop circuits. Their robust construction ensures reliability in heavy-duty applications like construction and mining.',
//         gallery: [
//             'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=800&auto=format&fit=crop',
//             'https://placehold.co/800x600/334155/ffffff?text=Piston+Pump+View+2',
//             'https://placehold.co/800x600/475569/ffffff?text=Piston+Pump+View+3'
//         ],
//         specifications: [
//             { name: 'Displacement', value: '20-500 cm³/rev' },
//             { name: 'Max Pressure', value: 'Up to 450 bar' },
//             { name: 'Control Options', value: 'Pressure, Flow, Power' },
//             { name: 'Mounting', value: 'ISO, SAE' },
//         ],
//     },
//     {
//         id: 'vane-pum',
//         title: 'Vane Pumps',
//         imgSrc: 'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=1920&auto=format&fit=crop',
//         description: 'Known for their low noise operation and excellent performance in medium-pressure applications.',
//         keyFeatures: ['Low Pulsation Flow', 'Quiet Operation', 'Replaceable Cartridge'],
//         details: 'Vane pumps are the ideal choice for applications requiring a smooth, low-pulsation flow and quiet operation. Their unique design minimizes pressure ripples, making them suitable for industrial machinery, power steering systems, and automation. They are available in fixed and variable displacement models.',
//         gallery: [
//             'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=800&auto=format&fit=crop',
//             'https://placehold.co/800x600/334155/ffffff?text=Vane+Pump+View+2',
//             'https://placehold.co/800x600/475569/ffffff?text=Vane+Pump+View+3'
//         ],
//         specifications: [
//             { name: 'Displacement', value: '10-200 cm³/rev' },
//             { name: 'Max Pressure', value: 'Up to 210 bar' },
//             { name: 'Noise Level', value: '< 70 dBA' },
//             { name: 'Cartridge Kit', value: 'Replaceable for easy service' },
//         ],
//     },
//     {
//         id: 'hydraulic-motor',
//         title: 'Hydraulic Motors',
//         imgSrc: 'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=1920&auto=format&fit=crop',
//         description: 'Efficiently convert hydraulic energy into mechanical power for various industrial uses.',
//         keyFeatures: ['High Starting Torque', 'Wide Speed Range', 'Bi-directional Rotation'],
//         details: 'Our hydraulic motors offer high torque and excellent efficiency across a wide speed range. Designed for durability, they perform reliably in the toughest conditions. We offer a variety of motor types, including gear, vane, and piston motors, to suit applications from conveyors to vehicle propulsion.',
//         gallery: [
//             'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=800&auto=format&fit=crop',
//             'https://placehold.co/800x600/334155/ffffff?text=Motor+View+2',
//             'https://placehold.co/800x600/475569/ffffff?text=Motor+View+3'
//         ],
//         specifications: [
//             { name: 'Torque Range', value: '50-2000 Nm' },
//             { name: 'Speed', value: 'Up to 3000 rpm' },
//             { name: 'Type', value: 'Gerotor, Orbital, Piston' },
//             { name: 'Shaft Options', value: 'Splined, Keyed, Tapered' },
//         ],
//     },
// ];

// // --- NEW COMPONENT for Product Detail View ---
// const ProductDetailView = ({ category, onBack }) => {
//     const [mainImage, setMainImage] = useState(category.gallery[0]);

//     return (
//         <section className="bg-white py-16 md:py-24">
//             <div className="container mx-auto px-4">
//                 <button
//                     onClick={onBack}
//                     className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     Back to All Products
//                 </button>
//                 <div className="grid md:grid-cols-2 gap-12 items-start">
//                     {/* Image Gallery */}
//                     <div>
//                         <img 
//                             src={mainImage} 
//                             alt={category.title} 
//                             className="w-full h-auto rounded-lg shadow-lg mb-4 object-cover aspect-video"
//                             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x600/e2e8f0/4a5568?text=Image+Not+Found'; }}
//                         />
//                         <div className="grid grid-cols-4 gap-2">
//                             {category.gallery.map((img, index) => (
//                                 <img
//                                     key={index}
//                                     src={img}
//                                     alt={`${category.title} view ${index + 1}`}
//                                     className={`w-full h-auto rounded-md cursor-pointer object-cover aspect-video transition-all ${mainImage === img ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'}`}
//                                     onClick={() => setMainImage(img)}
//                                     onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x150/e2e8f0/4a5568?text=Thumb'; }}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                     {/* Product Details */}
//                     <div>
//                         <h2 className="text-4xl font-bold text-gray-800 mb-4">{category.title}</h2>
//                         <p className="text-gray-600 mb-6 leading-relaxed">{category.details}</p>

//                         {/* KEY FEATURES SECTION - ADDED */}
//                         <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-t pt-6">Key Features</h3>
//                         <ul className="space-y-2 mb-6">
//                             {category.keyFeatures.map((feature, index) => (
//                                 <li key={index} className="flex items-center text-gray-700">
//                                     <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
//                                     {feature}
//                                 </li>
//                             ))}
//                         </ul>
                        
//                         <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-t pt-6">Specifications</h3>
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full bg-white border">
//                                 <tbody>
//                                     {category.specifications.map((spec, index) => (
//                                         <tr key={index} className="border-b">
//                                             <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">{spec.name}</td>
//                                             <td className="py-3 px-4 text-gray-600">{spec.value}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                          <a href="/contact" className="mt-8 inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
//                             Request a Quote
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // --- MODIFIED Component for individual product category cards ---
// const ProductCategoryCard = ({ imgSrc, title, description, keyFeatures, onClick }) => (
//     <div 
//         className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 group cursor-pointer flex flex-col"
//         onClick={onClick}
//     >
//         <div className="relative h-56">
//             <img 
//                 src={imgSrc} 
//                 alt={title} 
//                 className="w-full h-full object-cover" 
//                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/e2e8f0/4a5568?text=Pump'; }}
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
//         </div>
//         <div className="p-6 flex-grow flex flex-col">
//             <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
//             <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
//             {/* KEY FEATURES on card - ADDED */}
//             <div className="border-t pt-3 mt-auto">
//                  <ul className="text-xs text-gray-500 space-y-1">
//                     {keyFeatures.slice(0, 2).map((feature, index) => (
//                        <li key={index} className="flex items-center">
//                            <svg className="w-3 h-3 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
//                            {feature}
//                        </li>
//                     ))}
//                  </ul>
//             </div>
//             <span className="font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-4 block">
//                 View Details &rarr;
//             </span>
//         </div>
//     </div>
// );


// // --- MAIN PAGE COMPONENT ---
// export default function ProductsPage() {
//     const [selectedCategory, setSelectedCategory] = useState(null);

//     // Handler to set the selected category
//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category);
//     };

//     // Handler to go back to the list
//     const handleBack = () => {
//         setSelectedCategory(null);
//     };

//     return (
//         <div className="bg-gray-50">
//             {/* Hero Section */}
//             <section className="relative bg-gray-800 text-white py-20 md:py-32">
//                 <div 
//                     className="absolute inset-0 bg-cover bg-center opacity-30" 
//                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594499468121-f45e83e0e4c8?q=80&w=1920&auto=format&fit=crop')" }}
//                 ></div>
//                 <div className="container mx-auto px-4 text-center relative z-10">
//                     <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Our Products</h1>
//                     <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
//                         Engineered for durability and performance, our hydraulic pumps are the cornerstone of reliable machinery.
//                     </p>
//                 </div>
//             </section>

//             {/* Conditional Rendering: Show grid or detail view */}
//             {selectedCategory ? (
//                 <ProductDetailView category={selectedCategory} onBack={handleBack} />
//             ) : (
//                 <>
//                     {/* Product Categories Section */}
//                     <section className="py-16 md:py-24">
//                         <div className="container mx-auto px-4">
//                             <div className="text-center mb-12">
//                                 <h2 className="text-3xl font-bold text-gray-800">Product Categories</h2>
//                                 <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Explore our extensive range of hydraulic solutions tailored to your needs.</p>
//                             </div>
//                             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                                 {productData.map((category) => (
//                                     <ProductCategoryCard 
//                                         key={category.id} 
//                                         {...category} 
//                                         onClick={() => handleCategoryClick(category)} 
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     </section>
                    
//                     {/* WHY CHOOSE US SECTION - ADDED */}
//                     <section className="bg-white py-16 md:py-24">
//                         <div className="container mx-auto px-4">
//                             <div className="text-center mb-12">
//                                 <h2 className="text-3xl font-bold text-gray-800">Why Choose Our Pumps?</h2>
//                                 <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We deliver more than just parts; we provide comprehensive hydraulic solutions.</p>
//                             </div>
//                             <div className="grid md:grid-cols-3 gap-8 text-center">
//                                 <div className="p-6">
//                                     <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
//                                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
//                                     </div>
//                                     <h3 className="text-xl font-semibold mb-2">Unmatched Quality</h3>
//                                     <p className="text-gray-600">Every component is manufactured with precision and tested rigorously to ensure peak performance and longevity.</p>
//                                 </div>
//                                 <div className="p-6">
//                                     <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
//                                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
//                                     </div>
//                                     <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
//                                     <p className="text-gray-600">Our team of hydraulic specialists is ready to assist you in selecting the perfect product for your application.</p>
//                                 </div>
//                                 <div className="p-6">
//                                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
//                                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
//                                     </div>
//                                     <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
//                                     <p className="text-gray-600">We can engineer and manufacture custom hydraulic components to meet your unique specifications.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                      {/* CTA Section */}
//                     <section className="bg-gray-800 text-white">
//                         <div className="container mx-auto px-4 py-16 text-center">
//                             <h2 className="text-3xl font-bold">Have a Custom Requirement?</h2>
//                             <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
//                                 Our engineering team is ready to collaborate with you to design a hydraulic solution that meets your exact specifications.
//                             </p>
//                             <a href="/contact" className="mt-6 inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
//                                 Get in Touch
//                             </a>
//                         </div>
//                     </section>
//                 </>
//             )}
//         </div>
//     );
// }











// "use client";

// import React, { useState } from 'react';
// import { Wrench, Download, XCircle, ChevronLeft, Filter, Search } from 'lucide-react';

// // Themed Logo component with gear + lightning icons (Heroicons solid)
// // const Logo = () => (
// //   <a href="/" className="text-2xl font-bold text-gray-900 flex items-center">
// //     <div className="mr-2 flex items-center">
// //       {/* Gear icon (solid cog from Heroicons) */}
// //       <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //         <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
// //         <path fillRule="evenodd" d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z" clipRule="evenodd" />
// //       </svg>
// //       {/* Lightning bolt icon (solid from Heroicons) */}
// //       <svg className="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //         <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
// //       </svg>
// //     </div>
// //     Meceleon
// //   </a>
// // );

// // Sample product data with category and PDF fields (add your actual PDFs to /public/products/)
// const productData = [
//   {
//     id: 'gear-pumps',
//     title: 'Gear Pumps',
//     category: 'Pumps',
//     imgSrc: 'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=1920&auto=format&fit=crop',
//     description: 'Robust and reliable, ideal for a wide range of fluid transfer applications in industrial and mobile settings.',
//     keyFeatures: ['High Efficiency', 'Durable Cast Iron Body', 'Compact Design'],
//     details: 'Our gear pumps are engineered for high performance and long service life. They operate efficiently under various pressures and are suitable for handling oils, fuels, and other hydraulic fluids. The simple construction with few moving parts ensures minimal maintenance and maximum uptime.',
//     gallery: [
//       'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=800&auto=format&fit=crop',
//       'https://placehold.co/800x600/334155/ffffff?text=Gear+Pump+View+2',
//       'https://placehold.co/800x600/475569/ffffff?text=Gear+Pump+View+3'
//     ],
//     specifications: [
//       { name: 'Displacement', value: '5-150 cm³/rev' },
//       { name: 'Max Pressure', value: 'Up to 250 bar' },
//       { name: 'Speed Range', value: '500-4000 rpm' },
//       { name: 'Fluid Viscosity', value: '10-500 cSt' },
//     ],
//     pdf: '/meceleon_broscher.pdf' // Add your PDF here
//   },
//   {
//     id: 'piston-pumps',
//     title: 'Piston Pumps',
//     category: 'Pumps',
//     imgSrc: 'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=1920&auto=format&fit=crop',
//     description: 'High-pressure capabilities and precision control for the most demanding hydraulic systems.',
//     keyFeatures: ['Variable Displacement', 'High Pressure Tolerance', 'Low Noise Operation'],
//     details: 'The AXP series of piston pumps provides exceptional power density and precision. Featuring a variable displacement swashplate design, they are perfect for closed and open-loop circuits. Their robust construction ensures reliability in heavy-duty applications like construction and mining.',
//     gallery: [
//       'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=800&auto=format&fit=crop',
//       'https://placehold.co/800x600/334155/ffffff?text=Piston+Pump+View+2',
//       'https://placehold.co/800x600/475569/ffffff?text=Piston+Pump+View+3'
//     ],
//     specifications: [
//       { name: 'Displacement', value: '20-500 cm³/rev' },
//       { name: 'Max Pressure', value: 'Up to 450 bar' },
//       { name: 'Control Options', value: 'Pressure, Flow, Power' },
//       { name: 'Mounting', value: 'ISO, SAE' },
//     ],
//     pdf: '/products/piston-pumps.pdf'
//   },
//   {
//     id: 'vane-pumps',
//     title: 'Vane Pumps',
//     category: 'Pumps',
//     imgSrc: 'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=1920&auto=format&fit=crop',
//     description: 'Known for their low noise operation and excellent performance in medium-pressure applications.',
//     keyFeatures: ['Low Pulsation Flow', 'Quiet Operation', 'Replaceable Cartridge'],
//     details: 'Vane pumps are the ideal choice for applications requiring a smooth, low-pulsation flow and quiet operation. Their unique design minimizes pressure ripples, making them suitable for industrial machinery, power steering systems, and automation. They are available in fixed and variable displacement models.',
//     gallery: [
//       'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=800&auto=format&fit=crop',
//       'https://placehold.co/800x600/334155/ffffff?text=Vane+Pump+View+2',
//       'https://placehold.co/800x600/475569/ffffff?text=Vane+Pump+View+3'
//     ],
//     specifications: [
//       { name: 'Displacement', value: '10-200 cm³/rev' },
//       { name: 'Max Pressure', value: 'Up to 210 bar' },
//       { name: 'Noise Level', value: '< 70 dBA' },
//       { name: 'Cartridge Kit', value: 'Replaceable for easy service' },
//     ],
//     pdf: '/products/vane-pumps.pdf'
//   },
//   {
//     id: 'hydraulic-motors',
//     title: 'Hydraulic Motors',
//     category: 'Motors',
//     imgSrc: 'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=1920&auto=format&fit=crop',
//     description: 'Efficiently convert hydraulic energy into mechanical power for various industrial uses.',
//     keyFeatures: ['High Starting Torque', 'Wide Speed Range', 'Bi-directional Rotation'],
//     details: 'Our hydraulic motors offer high torque and excellent efficiency across a wide speed range. Designed for durability, they perform reliably in the toughest conditions. We offer a variety of motor types, including gear, vane, and piston motors, to suit applications from conveyors to vehicle propulsion.',
//     gallery: [
//       'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=800&auto=format&fit=crop',
//       'https://placehold.co/800x600/334155/ffffff?text=Motor+View+2',
//       'https://placehold.co/800x600/475569/ffffff?text=Motor+View+3'
//     ],
//     specifications: [
//       { name: 'Torque Range', value: '50-2000 Nm' },
//       { name: 'Speed', value: 'Up to 3000 rpm' },
//       { name: 'Type', value: 'Gerotor, Orbital, Piston' },
//       { name: 'Shaft Options', value: 'Splined, Keyed, Tapered' },
//     ],
//     pdf: '/products/hydraulic-motors.pdf'
//   },
//   // Add more products as needed
// ];

// // Full-Page PDF Viewer
// const FullPdfViewer = ({ product, onBack }) => {
//   if (!product) return null;

//   return (
//     <div className=" bg-white flex flex-col">
//       {/* Header with Back Button */}
//       <header className="bg-white shadow-md border-b border-gray-200 p-4 flex items-center justify-between">
//         <button
//           onClick={onBack}
//           className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
//         >
//           <ChevronLeft size={24} className="mr-2" />
//           <span className="font-semibold">Back to Products</span>
//         </button>
//         <a
//           href={product.pdf}
//           download
//           className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
//         >
//           <Download size={16} className="mr-2" />
//           Download PDF
//         </a>
//       </header>
      
//       {/* Full PDF Iframe */}
//       <div className="flex-1 overflow-hidden min-h-fullscreen">
//         <iframe
//           src={product.pdf}
//           className="w-full h-full border-0"
//           title={`${product.title} PDF Viewer`}
//         />
//       </div>
//     </div>
//   );
// };

// // Product Category Card - Image on top, themed with gray border, red hover, wrench icon below image
// const ProductCategoryCard = ({ imgSrc, title, category, description, keyFeatures, pdf, onClick }) => (
//   <div 
//     className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:border-red-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white"
//     onClick={onClick}
//   >
//     {/* Image on Top */}
//     <img 
//       src={imgSrc} 
//       alt={title} 
//       className="w-full h-48 object-cover"
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
//       <ul className="text-xs text-gray-500 space-y-1 mb-4">
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

// // Why Choose Us Section - Themed
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

// // Stats Section - Red gradient per theme
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

// // CTA Section - Themed with red
// const CtaSection = () => (
//   <section className="py-16 bg-gray-900 text-white">
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

// // Main ProductsPage
// export default function ProductsPage() {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');

//   const categories = ['All', 'Pumps', 'Motors']; // Derived from data

//   const filteredProducts = productData.filter((product) => {
//     const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
//     const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const openPdfView = (product) => {
//     setSelectedProduct(product);
//   };

//   const backToGrid = () => {
//     setSelectedProduct(null);
//   };

//   // Show full PDF page if selected, else grid
//   if (selectedProduct) {
//     return <FullPdfViewer product={selectedProduct} onBack={backToGrid} />;
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Hero Section - Light gradient per theme */}
//       <section className="bg-gradient-to-br from-gray-50 to-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">Engineered for durability and performance, our hydraulic pumps are the cornerstone of reliable machinery.</p>
//         </div>
//       </section>

//       {/* Filter Bar - Category dropdown and search */}
//       <section className="py-8 bg-white border-b border-gray-200">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             <div className="flex items-center">
//               <Filter className="h-5 w-5 text-gray-600 mr-2" />
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
//               >
//                 {categories.map((cat) => (
//                   <option key={cat} value={cat}>{cat}</option>
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
          
//           {filteredProducts.length > 0 ? (
//             <p className="text-gray-600 text-sm mt-2 text-right">Showing {filteredProducts.length} of {productData.length} products</p>
//           ) : (
//             <p className="text-gray-600 text-sm mt-2 text-center">No products found.</p>
//           )}
//         </div>
//       </section>

//       {/* Products Grid - 4-col responsive, themed cards with image on top */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">Product Categories</h2>
//             <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Explore our extensive range of hydraulic solutions tailored to your needs.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCategoryCard 
//                 key={product.id} 
//                 {...product} 
//                 onClick={() => openPdfView(product)} 
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <WhyChooseUs />

//       {/* Stats */}
//       <StatsSection />

//       {/* CTA */}
//       {/* <CtaSection /> */}
//     </div>
//   );
// }


























// "use client";
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import { Wrench, Download, XCircle, ChevronLeft, Filter, Search } from 'lucide-react';

// // Themed Logo component with gear + lightning icons (Heroicons solid)
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

// // Sample product data with category and PDF fields (add your actual PDFs to /public/products/)
// const productData = [
//   {
//     id: 'c-frame-h-frame-mobile-floor-cranes',
//     title: 'C FRAME, H FRAME & MOBILE FLOOR CRANES',
//     category: 'Frame',
//     imgSrc: '/images/img1.jpeg', // Fixed: Absolute path for Next.js public folder
//     description: 'Robust and reliable, ideal for a wide range of fluid transfer applications in industrial and mobile settings.',
//     keyFeatures: ['High Efficiency', 'Durable Cast Iron Body', 'Compact Design'],
//     details: 'Our gear pumps are engineered for high performance and long service life. They operate efficiently under various pressures and are suitable for handling oils, fuels, and other hydraulic fluids. The simple construction with few moving parts ensures minimal maintenance and maximum uptime.',
//     gallery: [
//       'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=800&auto=format&fit=crop',
//       'https://placehold.co/800x600/334155/ffffff?text=Gear+Pump+View+2',
//       'https://placehold.co/800x600/475569/ffffff?text=Gear+Pump+View+3'
//     ],
//     specifications: [
//       { name: 'Displacement', value: '5-150 cm³/rev' },
//       { name: 'Max Pressure', value: 'Up to 250 bar' },
//       { name: 'Speed Range', value: '500-4000 rpm' },
//       { name: 'Fluid Viscosity', value: '10-500 cSt' },
//     ],
//     pdf: '/pdfs/chmframes.pdf' // Fixed: Absolute path for Next.js public folder
//   },
//   {
//     id: 'HEAVY LIFT AND POSITIONING SOLUTIONS',
//     title: 'HEAVY LIFT AND POSITIONING SOLUTIONS',
//     category: 'Pumps',
//     imgSrc: 'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=1920&auto=format&fit=crop',
//     description: 'High-pressure capabilities and precision control for the most demanding hydraulic systems.',
//     keyFeatures: ['Variable Displacement', 'High Pressure Tolerance', 'Low Noise Operation'],
//     details: 'The AXP series of piston pumps provides exceptional power density and precision. Featuring a variable displacement swashplate design, they are perfect for closed and open-loop circuits. Their robust construction ensures reliability in heavy-duty applications like construction and mining.',
//     gallery: [
//       'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=800&auto=format&fit=crop',
//       'https://placehold.co/800x600/334155/ffffff?text=Piston+Pump+View+2',
//       'https://placehold.co/800x600/475569/ffffff?text=Piston+Pump+View+3'
//     ],
//     specifications: [
//       { name: 'Displacement', value: '20-500 cm³/rev' },
//       { name: 'Max Pressure', value: 'Up to 450 bar' },
//       { name: 'Control Options', value: 'Pressure, Flow, Power' },
//       { name: 'Mounting', value: 'ISO, SAE' },
//     ],
//     pdf: '/HPSOLUTIONS.pdf'
//   },
//   {
//     id: 'HYDRAULIC & MECHNICAL PULLERS',
//     title: 'HYDRAULIC & MECHNICAL PULLERS',
//     category: 'Pumps',
//     imgSrc: 'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=1920&auto=format&fit=crop',
//     description: 'Known for their low noise operation and excellent performance in medium-pressure applications.',
//     keyFeatures: ['Low Pulsation Flow', 'Quiet Operation', 'Replaceable Cartridge'],
//     details: 'Vane pumps are the ideal choice for applications requiring a smooth, low-pulsation flow and quiet operation. Their unique design minimizes pressure ripples, making them suitable for industrial machinery, power steering systems, and automation. They are available in fixed and variable displacement models.',
//     gallery: [
//       'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=800&auto=format&fit=crop',
//       'https://placehold.co/800x600/334155/ffffff?text=Vane+Pump+View+2',
//       'https://placehold.co/800x600/475569/ffffff?text=Vane+Pump+View+3'
//     ],
//     specifications: [
//       { name: 'Displacement', value: '10-200 cm³/rev' },
//       { name: 'Max Pressure', value: 'Up to 210 bar' },
//       { name: 'Noise Level', value: '< 70 dBA' },
//       { name: 'Cartridge Kit', value: 'Replaceable for easy service' },
//     ],
//     pdf: '/H&MPULLERS.pdf'
//   },
//   {
//     id: 'HYDRAULIC JACKS',
//     title: 'HYDRAULIC JACKS',
//     category: 'Motors',
//     imgSrc: 'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=1920&auto=format&fit=crop',
//     description: 'Efficiently convert hydraulic energy into mechanical power for various industrial uses.',
//     keyFeatures: ['High Starting Torque', 'Wide Speed Range', 'Bi-directional Rotation'],
//     details: 'Our hydraulic motors offer high torque and excellent efficiency across a wide speed range. Designed for durability, they perform reliably in the toughest conditions. We offer a variety of motor types, including gear, vane, and piston motors, to suit applications from conveyors to vehicle propulsion.',
//     gallery: [
//       'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=800&auto=format&fit=crop',
//       'https://placehold.co/800x600/334155/ffffff?text=Motor+View+2',
//       'https://placehold.co/800x600/475569/ffffff?text=Motor+View+3'
//     ],
//     specifications: [
//       { name: 'Torque Range', value: '50-2000 Nm' },
//       { name: 'Speed', value: 'Up to 3000 rpm' },
//       { name: 'Type', value: 'Gerotor, Orbital, Piston' },
//       { name: 'Shaft Options', value: 'Splined, Keyed, Tapered' },
//     ],
//     pdf: '/products/hydraulic-motors.pdf'
//   },
//   // Add more products as needed
// ];

// // Full-Page PDF Viewer - Enhanced for true fullscreen mode
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

// // Product Category Card - Image on top, themed with gray border, red hover, wrench icon below image
// const ProductCategoryCard = ({ imgSrc, title, category, description, keyFeatures, pdf, onClick }) => (
//   <div 
//     className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:border-red-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white"
//     onClick={onClick}
//   >
//     {/* Image on Top */}
//     <img 
//       src={imgSrc} 
//       alt={title} 
//       className="w-full h-54 object-contain  bg-gray-100"
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
//       <ul className="text-xs text-gray-500 space-y-1 mb-4">
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

// // Why Choose Us Section - Themed
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

// // Stats Section - Red gradient per theme
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

// // CTA Section - Themed with red
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

// // Main ProductsPage
// export default function ProductsPage() {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');

//   const categories = ['All', 'Pumps', 'Motors']; // Derived from data

//   const filteredProducts = productData.filter((product) => {
//     const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
//     const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const openPdfView = (product) => {
//     setSelectedProduct(product);
//   };

//   const backToGrid = () => {
//     setSelectedProduct(null);
//   };

//   // Show full PDF page if selected, else grid
//   if (selectedProduct) {
//     return <FullPdfViewer product={selectedProduct} onBack={backToGrid} />;
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Hero Section - Light gradient per theme */}
//         <section className="relative bg-gray-800 text-white py-20 md:py-32">
//                        <div className="absolute inset-0 opacity-30">
//                            <Image 
//                                src="https://images.unsplash.com/photo-1555526242-a3a8a05f314c?q=80&w=1920&auto=format&fit=crop"
//                                alt="Abstract background image of factory floor"
//                                layout="fill"
//                                objectFit="cover"
//                                priority
//                            />
//                        </div>
//                        <div className="container mx-auto px-4 text-center relative z-10">
//                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Our Products</h1>
//                            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
//                               Engineered for durability and performance, our hydraulic pumps are the cornerstone of reliable machinery.
//                            </p>
//                        </div>
//                    </section>


//       {/* Filter Bar - Category dropdown and search */}
//       <section className="py-8 bg-white border-b border-gray-200">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             <div className="flex items-center">
//               <Filter className="h-5 w-5 text-gray-600 mr-2" />
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
//               >
//                 {categories.map((cat) => (
//                   <option key={cat} value={cat}>{cat}</option>
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
          
//           {filteredProducts.length > 0 ? (
//             <p className="text-gray-600 text-sm mt-2 text-right">Showing {filteredProducts.length} of {productData.length} products</p>
//           ) : (
//             <p className="text-gray-600 text-sm mt-2 text-center">No products found.</p>
//           )}
//         </div>
//       </section>

//       {/* Products Grid - 4-col responsive, themed cards with image on top */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">Product Categories</h2>
//             <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Explore our extensive range of hydraulic solutions tailored to your needs.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCategoryCard 
//                 key={product.id} 
//                 {...product} 
//                 onClick={() => openPdfView(product)} 
//               />
//             ))}
//           </div>
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
import React, { useState, useEffect } from 'react';
import { products } from '../lib/products';  // From /app/products/page.jsx -> ../../lib/products.js // Adjust path if your lib folder is elsewhere (e.g., '../../lib/products')
import { Wrench, Download, XCircle, ChevronLeft, Filter, Search } from 'lucide-react';

// Themed Logo component with gear + lightning icons (Heroicons solid) (unchanged)
const Logo = () => (
  <a href="/" className="text-2xl font-bold text-gray-900 flex items-center">
    <div className="mr-2 flex items-center">
      {/* Gear icon (solid cog from Heroicons) */}
      <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
        <path fillRule="evenodd" d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z" clipRule="evenodd" />
      </svg>
      {/* Lightning bolt icon (solid from Heroicons) */}
      <svg className="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
      </svg>
    </div>
    Meceleon
  </a>
);

// Full-Page PDF Viewer (unchanged)
const FullPdfViewer = ({ product, onBack }) => {
  useEffect(() => {
    // Auto-trigger fullscreen on mount
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen().catch((err) => console.error('Fullscreen error:', err));
    }

    // Exit fullscreen on unmount
    return () => {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => console.error('Exit fullscreen error:', err));
      }
    };
  }, []);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col z-50 overflow-hidden">
      {/* Minimal Header - Sticky top, hidden in fullscreen if needed */}
      <header className="bg-white shadow-md border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
        >
          <ChevronLeft size={24} className="mr-2" />
          <span className="font-semibold">Back to Products</span>
        </button>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">{product.title}</span>
          <a
            href={product.pdf}
            download
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
          >
            <Download size={16} className="mr-2" />
            Download
          </a>
        </div>
      </header>
      
      {/* Full-Height PDF Iframe */}
      <div className="flex-1 w-full overflow-hidden">
        <iframe
          src={product.pdf}
          className="w-full h-screen border-0"
          title={`${product.title} PDF Viewer`}
          style={{ height: '100vh', width: '100vw' }}
        />
      </div>
    </div>
  );
};

// Product Category Card (unchanged)
const ProductCategoryCard = ({ imgSrc, title, category, description, keyFeatures, pdf, onClick }) => (
  <div 
    className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:border-red-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white"
    onClick={onClick}
  >
    {/* Image on Top */}
    <img 
      src={imgSrc} 
      alt={title} 
      className="w-full h-54 object-contain  bg-gray-100"
      onError={(e) => { e.target.src = 'https://placehold.co/400x300/e2e8f0/4a5568?text=Image+Not+Found'; }}
    />
    {/* Content Below Image */}
    <div className="p-6">
      {/* Wrench icon per theme */}
      <Wrench className="h-8 w-8 text-gray-600 mb-2 mx-auto" />
      <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{title}</h3>
      <p className="text-gray-600 text-sm text-center mb-1">{category}</p>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {/* Key Features - abbreviated */}
      <ul className="text-xs text-gray-500 space-y-1 mb-4">
        {keyFeatures.slice(0, 2).map((feature, index) => (
          <li key={index} className="flex items-center justify-center">
            <svg className="w-3 h-3 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Why Choose Us Section (unchanged)
const WhyChooseUs = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Pumps?</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We deliver more than just parts; we provide comprehensive hydraulic solutions.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 text-gray-700 mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Unmatched Quality</h3>
          <p className="text-gray-600">Every component is manufactured with precision and tested rigorously to ensure peak performance and longevity.</p>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 text-gray-700 mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
          <p className="text-gray-600">Our team of hydraulic specialists is ready to assist you in selecting the perfect product for your application.</p>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 text-gray-700 mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
          <p className="text-gray-600">We can engineer and manufacture custom hydraulic components to meet your unique specifications.</p>
        </div>
      </div>
    </div>
  </section>
);

// Stats Section (unchanged)
const StatsSection = () => (
  <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
    <div className="container mx-auto px-4 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-5xl font-bold mb-2">25+</h3>
          <p className="text-xl">Years of Expertise</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold mb-2">500+</h3>
          <p className="text-xl">Products in Catalog</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold mb-2">1000+</h3>
          <p className="text-xl">Satisfied Clients</p>
        </div>
      </div>
    </div>
  </section>
);

// CTA Section (unchanged)
const CtaSection = () => (
  <section className="py-16 bg-gray-800 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold">Have a Custom Requirement?</h2>
      <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
        Our engineering team is ready to collaborate with you to design a hydraulic solution that meets your exact specifications.
      </p>
      <a href="/contact" className="mt-6 inline-block bg-red-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors">
        Get in Touch
      </a>
    </div>
  </section>
);

// Main ProductsPage - Now uses shared data
export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(products.map(p => p.category))]; // Dynamically derive from data

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openPdfView = (product) => {
    setSelectedProduct(product);
  };

  const backToGrid = () => {
    setSelectedProduct(null);
  };

  // Show full PDF page if selected, else grid
  if (selectedProduct) {
    return <FullPdfViewer product={selectedProduct} onBack={backToGrid} />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section (unchanged) */}
      <section className="relative bg-gray-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="https://images.unsplash.com/photo-1555526242-a3a8a05f314c?q=80&w=1920&auto=format&fit=crop"
            alt="Abstract background image of factory floor"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Our Products</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Engineered for durability and performance, our hydraulic pumps are the cornerstone of reliable machinery.
          </p>
        </div>
      </section>

      {/* Filter Bar (updated to use dynamic categories) */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-600 mr-2" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <p className="text-gray-600 text-sm mt-2 text-right">Showing {filteredProducts.length} of {products.length} products</p>
          ) : (
            <p className="text-gray-600 text-sm mt-2 text-center">No products found.</p>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Product Categories</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Explore our extensive range of hydraulic solutions tailored to your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCategoryCard 
                key={product.id} 
                {...product} 
                onClick={() => openPdfView(product)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Stats */}
      {/* <StatsSection /> */}

      {/* CTA */}
      <CtaSection />
    </div>
  );
}