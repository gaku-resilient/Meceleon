
// "use client";
// import React, { useState } from "react";
// import { Phone, Mail, MapPin } from "lucide-react";

// export default function ContactPage() {
//   const [state, setState] = useState({
//     submitting: false,
//     succeeded: false,
//     error: null,
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setState({ ...state, submitting: true });

//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData.entries());

//     try {
//       const response = await fetch("/api/sendMail", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setState({ submitting: false, succeeded: true, error: null });
//         event.target.reset();
//       } else {
//         setState({
//           submitting: false,
//           succeeded: false,
//           error: result.error || "Failed to send message.",
//         });
//       }
//     } catch (error) {
//       setState({
//         submitting: false,
//         succeeded: false,
//         error: "An unexpected error occurred.",
//       });
//     }
//   };

//   return (
//     <div className="bg-gray-50">
//       {/* Contact form only section for brevity */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-lg">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
//               <p className="text-gray-600">
//                 Fill out the form, and we'll get back to you promptly.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                 <input type="text" name="name" required className="w-full px-4 py-2 border rounded-md" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input type="email" name="email" required className="w-full px-4 py-2 border rounded-md" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
//                 <input type="text" name="company" className="w-full px-4 py-2 border rounded-md" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
//                 <input type="tel" name="contact" required pattern="[0-9]{10}" className="w-full px-4 py-2 border rounded-md" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                 <textarea name="message" rows="4" required className="w-full px-4 py-2 border rounded-md"></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={state.submitting || state.succeeded}
//                 className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
//               >
//                 {state.submitting ? "Sending..." : state.succeeded ? "Message Sent!" : "Send Message"}
//               </button>

//               {state.succeeded && <p className="text-green-600 text-center">Message sent successfully!</p>}
//               {state.error && <p className="text-red-600 text-center">{state.error}</p>}
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



















"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

// --- MAIN PAGE COMPONENT ---
export default function ContactPage() {
    const [state, setState] = useState({
        submitting: false,
        succeeded: false,
        error: null,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setState({ ...state, submitting: true });

        const formData = new FormData(event.target);
        try {
            // IMPORTANT: Replace "YOUR_UNIQUE_ID" with your actual Formspree form ID
            const response = await fetch("https://formspree.io/f/your_unique_id", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setState({ submitting: false, succeeded: true, error: null });
                event.target.reset(); // Clear the form
            } else {
                const data = await response.json();
                const errorMessage = data.errors?.map(error => error.message).join(', ') || "Oops! There was a problem submitting your form";
                setState({ submitting: false, succeeded: false, error: errorMessage });
            }
        } catch (error) {
            setState({ submitting: false, succeeded: false, error: "An unexpected error occurred." });
        }
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gray-800 text-white py-20 md:py-32">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1920&auto-format&fit=crop')" }}
                ></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Contact Us</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                        We're here to help. Reach out to us with any questions or for a quote on your next project.
                    </p>
                </div>
            </section>

            {/* Contact Form and Info Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-lg">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                                <p className="text-gray-600">
                                    Our team is available to discuss your hydraulic needs. Fill out the form, and we'll get back to you promptly.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
                                        <p className="text-gray-600">123 Industrial Park, Sultanpur, Uttar Pradesh, 228001, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                                        <a href="mailto:sales@meceleon.com" className="text-blue-600 hover:underline">sales@meceleon.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                                        <a href="tel:+918882008583" className="text-blue-600 hover:underline">+91 88820 08583</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" id="name" name="name" required className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" id="email" name="email" required className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" name="message" rows={5} required className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={state.submitting || state.succeeded} className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                    {state.submitting ? 'Sending...' : state.succeeded ? 'Message Sent!' : 'Send Message'}
                                </button>
                            </div>
                            {state.succeeded && (
                                <p className="text-green-600 text-center">Thank you for your message! We will get back to you soon.</p>
                            )}
                            {state.error && (
                                <p className="text-red-600 text-center">{state.error}</p>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section>
                <div className="container mx-auto px-4 pb-16 md:pb-24">
                     <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57254.60157929447!2d82.04690382346702!3d26.25555474661073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7c83b8b1a57b%3A0xac2f2ab5f8ed6a38!2sSultanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1668512345678!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}