// "use client"; // This directive marks the component as a Client Component

// import React from 'react';

// // Placeholder for team member images. Replace with actual image paths.
// const TeamMemberCard = ({ imageSrc, name, title }) => (
//     <div className="text-center">
//         <img 
//             className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover shadow-lg" 
//             src={imageSrc} 
//             alt={`Photo of ${name}`}
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/160x160/e2e8f0/4a5568?text=Member'; }}
//         />
//         <h4 className="mt-4 text-xl font-semibold text-gray-800">{name}</h4>
//         <p className="text-gray-600">{title}</p>
//     </div>
// );

// // Component for Core Values
// const ValueCard = ({ icon, title, description }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2">
//         <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
//             {icon}
//         </div>
//         <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{title}</h3>
//         <p className="text-center text-gray-600 text-sm leading-relaxed">{description}</p>
//     </div>
// );

// export default function AboutPage() {
//     return (
//         <div className="bg-gray-50">
//             {/* Hero Section */}
//             <section className="relative bg-gray-800 text-white py-20 md:py-32">
//                 <div 
//                     className="absolute inset-0 bg-cover bg-center opacity-30" 
//                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555526242-a3a8a05f314c?q=80&w=1920&auto=format&fit=crop')" }}
//                 ></div>
//                 <div className="container mx-auto px-4 text-center relative z-10">
//                     <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">About Meceleon</h1>
//                     <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
//                         Pioneering excellence in hydraulic engineering since our inception. Discover our story, our mission, and the people who make it all happen.
//                     </p>
//                 </div>
//             </section>

//             {/* Our Story Section */}
//             <section className="py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
//                             <p className="text-gray-600 mb-4">
//                                 Founded with a vision to revolutionize the hydraulic industry, Meceleon began as a small workshop with a big dream. Our commitment to quality and innovation quickly set us apart, allowing us to grow into a trusted partner for industries worldwide.
//                             </p>
//                             <p className="text-gray-600">
//                                 From our first custom-designed pump to our current state-of-the-art product line, our journey has been driven by a passion for solving complex challenges and a relentless pursuit of engineering perfection.
//                             </p>
//                         </div>
//                         <div>
//                             <img 
//                                 src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop" 
//                                 alt="Team collaborating in a modern office" 
//                                 className="rounded-lg shadow-xl w-full h-auto"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Mission and Vision Section */}
//             <section className="bg-white py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="grid md:grid-cols-2 gap-10">
//                         <div className="bg-gray-50 p-8 rounded-lg">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 To design, manufacture, and deliver the most reliable and efficient hydraulic pumps, empowering our clients to achieve new heights of productivity and performance. We are dedicated to providing exceptional customer service and technical support.
//                             </p>
//                         </div>
//                         <div className="bg-gray-50 p-8 rounded-lg">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 To be the global leader in hydraulic solutions, recognized for our innovative technology, sustainable practices, and unwavering commitment to quality. We aim to shape the future of the industry through continuous research and development.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Core Values Section */}
//             <section className="py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                          <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
//                          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
//                     </div>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                         <ValueCard
//                             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}
//                             title="Integrity"
//                             description="We operate with honesty and uphold the highest ethical standards in all our actions."
//                         />
//                         <ValueCard
//                             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>}
//                             title="Quality"
//                             description="From materials to manufacturing, we are committed to delivering unparalleled quality."
//                         />
//                         <ValueCard
//                             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>}
//                             title="Innovation"
//                             description="We constantly explore new technologies to push the boundaries of what's possible."
//                         />
//                         <ValueCard
//                             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
//                             title="Partnership"
//                             description="We build lasting relationships with our clients, working together to achieve success."
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Team Section */}
//             <section className="bg-white py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-800">Meet Our Leadership</h2>
//                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">The experienced team dedicated to driving our company forward.</p>
//                     </div>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
//                         <TeamMemberCard imageSrc="https://placehold.co/160x160/2d3748/ffffff?text=CEO" name="Alex Johnson" title="Founder & CEO" />
//                         <TeamMemberCard imageSrc="https://placehold.co/160x160/4a5568/ffffff?text=CTO" name="Jane Doe" title="Chief Technology Officer" />
//                         <TeamMemberCard imageSrc="https://placehold.co/160x160/718096/ffffff?text=COO" name="Samuel Lee" title="Chief Operating Officer" />
//                         <TeamMemberCard imageSrc="https://placehold.co/160x160/a0aec0/ffffff?text=CSO" name="Emily White" title="Head of Sales" />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }





















// "use client"; // This directive marks the component as a Client Component

// import React from 'react';
// import Image from 'next/image'; // Import the Next.js Image component

// // Placeholder for team member images. Replace with actual image paths.
// const TeamMemberCard = ({ imageSrc, name, title }) => (
//     <div className="text-center">
//         <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg">
//             <Image 
//                 src={imageSrc} 
//                 alt={`Photo of ${name}`}
//                 layout="fill"
//                 objectFit="cover"
//             />
//         </div>
//         <h4 className="mt-4 text-xl font-semibold text-gray-800">{name}</h4>
//         <p className="text-gray-600">{title}</p>
//     </div>
// );

// // Component for Core Values
// const ValueCard = ({ icon, title, description }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2">
//         <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
//             {icon}
//         </div>
//         <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{title}</h3>
//         <p className="text-center text-gray-600 text-sm leading-relaxed">{description}</p>
//     </div>
// );

// export default function AboutPage() {
//     return (
//         <div className="bg-gray-50">
//             {/* Hero Section */}
//             <section className="relative bg-gray-800 text-white py-20 md:py-32">
//                 <div className="absolute inset-0 opacity-30">
//                     <Image 
//                         src="https://images.unsplash.com/photo-1555526242-a3a8a05f314c?q=80&w=1920&auto=format&fit=crop"
//                         alt="Abstract background image"
//                         layout="fill"
//                         objectFit="cover"
//                         priority
//                     />
//                 </div>
//                 <div className="container mx-auto px-4 text-center relative z-10">
//                     <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">About Meceleon</h1>
//                     <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
//                         Pioneering excellence in hydraulic engineering since our inception. Discover our story, our mission, and the people who make it all happen.
//                     </p>
//                 </div>
//             </section>

//             {/* Our Story Section */}
//             <section className="py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
//                             <p className="text-gray-600 mb-4">
//                                 Founded with a vision to revolutionize the hydraulic industry, Meceleon began as a small workshop with a big dream. Our commitment to quality and innovation quickly set us apart, allowing us to grow into a trusted partner for industries worldwide.
//                             </p>
//                             <p className="text-gray-600">
//                                 From our first custom-designed pump to our current state-of-the-art product line, our journey has been driven by a passion for solving complex challenges and a relentless pursuit of engineering perfection.
//                             </p>
//                         </div>
//                         <div className="relative w-full h-80 rounded-lg shadow-xl overflow-hidden">
//                              <Image 
//                                 src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop" 
//                                 alt="Team collaborating in a modern office" 
//                                 layout="fill"
//                                 objectFit="cover"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Mission and Vision Section */}
//             <section className="bg-white py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="grid md:grid-cols-2 gap-10">
//                         <div className="bg-gray-50 p-8 rounded-lg">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 To design, manufacture, and deliver the most reliable and efficient hydraulic pumps, empowering our clients to achieve new heights of productivity and performance. We are dedicated to providing exceptional customer service and technical support.
//                             </p>
//                         </div>
//                         <div className="bg-gray-50 p-8 rounded-lg">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 To be the global leader in hydraulic solutions, recognized for our innovative technology, sustainable practices, and unwavering commitment to quality. We aim to shape the future of the industry through continuous research and development.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Core Values Section */}
//             <section className="py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                          <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
//                          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
//                     </div>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                         <ValueCard
//                             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}
//                             title="Integrity"
//                             description="We operate with honesty and uphold the highest ethical standards in all our actions."
//                         />
//                         <ValueCard
//                             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>}
//                             title="Quality"
//                             description="From materials to manufacturing, we are committed to delivering unparalleled quality."
//                         />
//                         <ValueCard
//                             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>}
//                             title="Innovation"
//                             description="We constantly explore new technologies to push the boundaries of what's possible."
//                         />
//                         <ValueCard
//                             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
//                             title="Partnership"
//                             description="We build lasting relationships with our clients, working together to achieve success."
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Team Section */}
//             <section className="bg-white py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-800">Meet Our Leadership</h2>
//                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">The experienced team dedicated to driving our company forward.</p>
//                     </div>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
//                         <TeamMemberCard imageSrc="https://placehold.co/160x160/2d3748/ffffff?text=CEO" name="Alex Johnson" title="Founder & CEO" />
//                         <TeamMemberCard imageSrc="https://placehold.co/160x160/4a5568/ffffff?text=CTO" name="Jane Doe" title="Chief Technology Officer" />
//                         <TeamMemberCard imageSrc="https://placehold.co/160x160/718096/ffffff?text=COO" name="Samuel Lee" title="Chief Operating Officer" />
//                         <TeamMemberCard imageSrc="https://placehold.co/160x160/a0aec0/ffffff?text=CSO" name="Emily White" title="Head of Sales" />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }












// "use client"; // This directive marks the component as a Client Component

// import React from 'react';
// import Image from 'next/image'; // Import the Next.js Image component
// import { Award, Lightbulb, Handshake, ShieldCheck } from 'lucide-react'; // Importing specific icons

// // Placeholder for team member images. Replace with actual image paths.
// const TeamMemberCard = ({ imageSrc, name, title }) => (
//     <div className="text-center">
//         <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg">
//             <Image 
//                 src={imageSrc} 
//                 alt={`Photo of ${name}`}
//                 layout="fill"
//                 objectFit="cover"
//             />
//         </div>
//         <h4 className="mt-4 text-xl font-semibold text-gray-800">{name}</h4>
//         <p className="text-gray-600">{title}</p>
//     </div>
// );

// // Component for Core Values
// const ValueCard = ({ icon, title, description }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2">
//         <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
//             {icon}
//         </div>
//         <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{title}</h3>
//         <p className="text-center text-gray-600 text-sm leading-relaxed">{description}</p>
//     </div>
// );

// export default function AboutPage() {
//     return (
//         <div className="bg-gray-50">
//             {/* Hero Section */}
//             <section className="relative bg-gray-800 text-white py-20 md:py-32">
//                 <div className="absolute inset-0 opacity-30">
//                     <Image 
//                         src="https://images.unsplash.com/photo-1555526242-a3a8a05f314c?q=80&w=1920&auto=format&fit=crop"
//                         alt="Abstract background image of factory floor"
//                         layout="fill"
//                         objectFit="cover"
//                         priority
//                     />
//                 </div>
//                 <div className="container mx-auto px-4 text-center relative z-10">
//                     <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">About Meceleon</h1>
//                     <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
//                         Pioneering excellence in hydraulic engineering since our inception. Discover our story, our mission, and the people who make it all happen.
//                     </p>
//                 </div>
//             </section>

//             {/* Our Story Section */}
//             <section className="py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey: From Vision to Industry Leader</h2>
//                             <p className="text-gray-600 mb-4">
//                                 Founded in 1998 by a group of visionary engineers, Meceleon started with a singular goal: to redefine hydraulic performance. What began as a modest workshop focused on custom solutions for local industries quickly grew, driven by our relentless pursuit of innovation and unwavering commitment to quality.
//                             </p>
//                             <p className="text-gray-600">
//                                 Over the past two decades, we've evolved from a specialized manufacturer into a global leader in hydraulic systems. Our journey is marked by continuous investment in R&D, strategic partnerships, and a deep understanding of our clients' evolving needs. Today, Meceleon stands as a beacon of reliability and advanced engineering, powering critical operations across diverse sectors worldwide.
//                             </p>
//                         </div>
//                         <div className="relative w-full h-80 rounded-lg shadow-xl overflow-hidden">
//                              <Image 
//                                 src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop" 
//                                 alt="Engineers collaborating in a modern industrial design office, looking at blueprints." 
//                                 layout="fill"
//                                 objectFit="cover"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Mission and Vision Section */}
//             <section className="bg-white py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-800">Our Purpose & Future</h2>
//                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Guiding principles and aspirations that drive Meceleon forward.</p>
//                     </div>
//                     <div className="grid md:grid-cols-2 gap-10">
//                         <div className="bg-gray-50 p-8 rounded-lg">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center"><Award className="mr-2 text-blue-600" />Our Mission</h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 To engineer and deliver the most advanced, reliable, and efficient hydraulic pump solutions globally. We commit to empowering our clients with superior performance, unparalleled durability, and expert support, ensuring their operational success and driving sustainable industrial progress.
//                             </p>
//                         </div>
//                         <div className="bg-gray-50 p-8 rounded-lg">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center"><Lightbulb className="mr-2 text-blue-600" />Our Vision</h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 To be the undisputed global benchmark in hydraulic technology, renowned for our innovation, commitment to environmental sustainability, and a customer-centric approach that anticipates and shapes the future of the industry. We envision a world powered by Meceleon's precision.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Core Values Section */}
//             <section className="py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                          <h2 className="text-3xl font-bold text-gray-800">The Pillars of Meceleon: Our Core Values</h2>
//                          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">These principles define who we are, how we operate, and what we aspire to achieve.</p>
//                     </div>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                         <ValueCard
//                             icon={<ShieldCheck size={32} />}
//                             title="Integrity & Trust"
//                             description="We conduct business with unwavering honesty, transparency, and ethical standards, building lasting trust with our clients and partners."
//                         />
//                         <ValueCard
//                             icon={<Award size={32} />}
//                             title="Excellence in Quality"
//                             description="Our commitment to superior craftsmanship, rigorous testing, and continuous improvement ensures every product delivers peak performance and reliability."
//                         />
//                         <ValueCard
//                             icon={<Lightbulb size={32} />}
//                             title="Innovation & Adaptability"
//                             description="We foster a culture of creative problem-solving and embrace new technologies to drive progress and meet the evolving demands of the hydraulic industry."
//                         />
//                         <ValueCard
//                             icon={<Handshake size={32} />}
//                             title="Customer Partnership"
//                             description="We prioritize deep collaboration with our customers, understanding their unique challenges to deliver tailored solutions and exceptional service."
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Team Section */}
//             <section className="bg-white py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-800">Meet Our Visionary Leadership</h2>
//                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">The dedicated individuals steering Meceleon towards a future of hydraulic innovation and global impact.</p>
//                     </div>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
//                         <TeamMemberCard 
//                             imageSrc="https://images.unsplash.com/photo-1544723795-3fb6469e377f?q=80&w=320&auto=format&fit=crop" 
//                             name="Nandini Pandey" 
//                             title=" Director" 
//                         />
//                         <TeamMemberCard 
//                             imageSrc="https://images.unsplash.com/photo-1599566150163-29194d6b4a0a?q=80&w=320&auto=format&fit=crop" 
//                             name="Mithilesh Pandey" 
//                             title=" Director" 
//                         />
//                         <TeamMemberCard 
//                             imageSrc="https://images.unsplash.com/photo-1560250097-0b759685743b?q=80&w=320&auto=format&fit=crop" 
//                             name="Kushal Singh" 
//                             title="General Manager, Sales & Marketing" 
//                         />
//                         <TeamMemberCard 
//                             imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=320&auto=format&fit=crop" 
//                             name="Shweta Singh" 
//                             title=" Finance Manager" 
//                         />
//                         <TeamMemberCard 
//                             imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=320&auto=format&fit=crop" 
//                             name="Mithilesh" 
//                             title=" Sales & Service Manager" 
//                         />
//                         <TeamMemberCard 
//                             imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=320&auto=format&fit=crop" 
//                             name="Rajeev Ranjan Yadav" 
//                             title=" Sales & Service Executive" 
//                         />
//                         <TeamMemberCard 
//                             imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=320&auto=format&fit=crop" 
//                             name="Praveen Pandey  " 
//                             title=" Sales Engineer, MP" 
//                         />
//                         <TeamMemberCard 
//                             imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=320&auto=format&fit=crop" 
//                             name="Shweta Singh" 
//                             title=" Finance Manager" 
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Manufacturing Excellence Section */}
//             <section className="py-16 md:py-24 bg-gray-100">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-800">Our Manufacturing Excellence</h2>
//                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Where precision engineering meets state-of-the-art production.</p>
//                     </div>
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="relative w-full h-80 rounded-lg shadow-xl overflow-hidden">
//                             <Image
//                                 src="https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1920&auto=format&fit=crop"
//                                 alt="Modern factory floor with advanced machinery"
//                                 layout="fill"
//                                 objectFit="cover"
//                             />
//                         </div>
//                         <div>
//                             <p className="text-gray-600 mb-4">
//                                 At Meceleon, our manufacturing facilities are a testament to our commitment to excellence. We utilize advanced robotics, CNC machining, and rigorous quality control processes to ensure every hydraulic component meets the highest industry standards. Our integrated production cycle allows for maximum efficiency, precision, and scalability.
//                             </p>
//                             <p className="text-gray-600">
//                                 We believe that superior products start with superior processes. From raw material inspection to final assembly and testing, every step is meticulously managed. Our investment in cutting-edge technology and skilled technicians guarantees products that are not only powerful but also incredibly durable and reliable in the most demanding environments.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
            
//             {/* Sustainability Commitment Section */}
//             <section className="py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-800">Commitment to Sustainability</h2>
//                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Powering industry responsibly for a greener future.</p>
//                     </div>
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <p className="text-gray-600 mb-4">
//                                 Meceleon is dedicated to sustainable practices throughout our operations. We integrate eco-friendly materials, optimize energy consumption in our manufacturing, and design products with extended lifespans to minimize environmental impact. Our commitment extends to waste reduction and responsible resource management.
//                             </p>
//                             <p className="text-gray-600">
//                                 We constantly seek innovative ways to reduce our carbon footprint, from energy-efficient hydraulic systems to advanced recycling programs. Our goal is to not only provide leading hydraulic solutions but to do so in a way that contributes positively to the planet and future generations.
//                             </p>
//                         </div>
//                         <div className="relative w-full h-80 rounded-lg shadow-xl overflow-hidden">
//                             <Image
//                                 src="https://images.unsplash.com/photo-1582234032549-c124e39b23b8?q=80&w=1920&auto=format&fit=crop"
//                                 alt="Green factory with solar panels and lush surroundings"
//                                 layout="fill"
//                                 objectFit="cover"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </div>
//     );
// }
















"use client"; // This directive marks the component as a Client Component

import React from 'react';
import Image from 'next/image';
import { Award, Lightbulb, Handshake, ShieldCheck, HardHat, Factory, Wind, Zap, Anchor, Wrench } from 'lucide-react';

// Placeholder for team member images. Replace with actual image paths.
const TeamMemberCard = ({ imageSrc, name, title }) => (
    <div className="text-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg">
            <Image 
                src={imageSrc} 
                alt={`Photo of ${name}`}
                layout="fill"
                objectFit="cover"
            />
        </div>
        <h4 className="mt-4 text-xl font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-600">{title}</p>
    </div>
);

// Component for Core Values
const ValueCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{title}</h3>
        <p className="text-center text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const IndustryCard = ({ icon, name }) => (
    <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110 text-center">
        <div className="flex justify-center text-red-600 mb-3">{icon}</div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
    </div>
);


export default function AboutPage() {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gray-800 text-white py-20 md:py-32">
                <div className="absolute inset-0 opacity-30">
                    <Image 
                        src="https://images.unsplash.com/photo-1555526242-a3a8a05f314c?q=80&w=1920&auto=format&fit=crop"
                        alt="Abstract background image of factory floor"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">About Meceleon</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                        Your Problems, Our Solutions. Discover our story, our mission, and the people who make it all happen.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey: From Trader to Solutions Provider</h2>
                            <p className="text-gray-600 mb-4">
                                       Our journey began in 2016 as Toolz Trading Company. While new to the business, we had strong support from industry friends. However, the name
                                        Trading didn&apos;t reflect our true vision — to build a solution-oriented, industry-focused identity.

                            </p>
                            <p className="text-gray-600">
                                With the GST reform in 2017, we seized the opportunity to redefine ourselves and became Meceleon Solutions. This name truly represents the industries we serve and the values we uphold. This transformation laid the foundation for the strong, customer-focused organization we are today, proudly serving as an authorized channel partner for world-renowned brands like Power Team.
                            </p>
                        </div>
                        <div className="relative w-full h-80 rounded-lg shadow-xl overflow-hidden">
                             <Image 
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop" 
                                alt="A timeline infographic showing the evolution of a company from a small workshop to a modern industrial leader." 
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* The Meaning of Meceleon Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">The Denomination: What Meceleon Means</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-10">Our name reflects our vision and commitment to delivering complete, integrated solutions for our customers.</p>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-red-600">MEC</h3>
                            <p className="font-semibold text-gray-800">Mechanical</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-red-600">ELE</h3>
                            <p className="font-semibold text-gray-800">Electrical</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-red-600">ON</h3>
                            <p className="font-semibold text-gray-800">Always ON & Ready</p>
                        </div>
                    </div>
                    <p className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto">
                        Together, <strong>Meceleon</strong> symbolizes our dedication to providing integrated mechanical and electrical solutions while staying always ON and responsive for our customers.
                    </p>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-16 md:py-24 bg-gray-100">
                 <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-gray-800">Industries We Serve</h2>
                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We provide critical hydraulic solutions across a diverse range of sectors.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <IndustryCard icon={<HardHat size={32}/>} name="Mining" />
                        <IndustryCard icon={<Anchor size={32}/>} name="Oil & Gas" />
                        <IndustryCard icon={<Zap size={32}/>} name="Power Generation" />
                        <IndustryCard icon={<Factory size={32}/>} name="Transformer Mfg." />
                        <IndustryCard icon={<Wrench size={32}/>} name="Fertilizers" />
                        <IndustryCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16.5V13a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3.5"/><path d="M10 13V8.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V13"/><path d="M2 13h20"/><path d="M22 13a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2Z"/></svg>} name="Railways" />
                        <IndustryCard icon={<Factory size={32}/>} name="Cement" />
                        <IndustryCard icon={<HardHat size={32}/>} name="Construction" />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Our Team: Together Everyone Achieves More</h2>
                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">The dedicated individuals steering Meceleon towards a future of hydraulic innovation and global impact.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        <TeamMemberCard 
                            imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=320&auto=format&fit=crop" 
                            name="Nandini Pandey" 
                            title="Director" 
                        />
                        <TeamMemberCard 
                            imageSrc="https://images.unsplash.com/photo-1599566150163-29194d6b4a0a?q=80&w=320&auto=format&fit=crop" 
                            name="Mithilesh Pandey" 
                            title="Director" 
                        />
                        <TeamMemberCard 
                            imageSrc="https://images.unsplash.com/photo-1560250097-0b759685743b?q=80&w=320&auto=format&fit=crop" 
                            name="Kushal Singh" 
                            title="General Manager, Sales & Marketing" 
                        />
                        <TeamMemberCard 
                            imageSrc="https://images.unsplash.com/photo-1544723795-3fb6469e377f?q=80&w=320&auto=format&fit=crop" 
                            name="Shweta Singh" 
                            title="Finance Manager" 
                        />
                         <TeamMemberCard 
                            imageSrc="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=320&auto=format&fit=crop" 
                            name="Mithilesh" 
                            title="Sales & Service Manager" 
                        />
                        <TeamMemberCard 
                            imageSrc="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=320&auto=format&fit=crop" 
                            name="Rajeev Ranjan Yadav" 
                            title="Sales & Service Executive" 
                        />
                        <TeamMemberCard 
                            imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=320&auto=format&fit=crop" 
                            name="Praveen Pandey" 
                            title="Sales Engineer, MP" 
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}