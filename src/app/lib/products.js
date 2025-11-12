export const products = [
  {
    id: 'c-frame-h-frame-mobile-floor-cranes',
    title: 'C FRAME, H FRAME & MOBILE FLOOR CRANES',
    category: 'Frame',
    imgSrc: '/images/img1.jpeg', // Ensure this image is in /public/images/
    description: 'Robust and reliable, ideal for a wide range of fluid transfer applications in industrial and mobile settings.',
    keyFeatures: ['High Efficiency', 'Durable Cast Iron Body', 'Compact Design'],
    details: 'Our gear pumps are engineered for high performance and long service life. They operate efficiently under various pressures and are suitable for handling oils, fuels, and other hydraulic fluids. The simple construction with few moving parts ensures minimal maintenance and maximum uptime.',
    gallery: [
      'https://images.unsplash.com/photo-1616893452202-a6a6a64531f2bb?q=80&w=800&auto=format&fit=crop',
      'https://placehold.co/800x600/334155/ffffff?text=Gear+Pump+View+2',
      'https://placehold.co/800x600/475569/ffffff?text=Gear+Pump+View+3'
    ],
    specifications: [
      { name: 'Displacement', value: '5-150 cm³/rev' },
      { name: 'Max Pressure', value: 'Up to 250 bar' },
      { name: 'Speed Range', value: '500-4000 rpm' },
      { name: 'Fluid Viscosity', value: '10-500 cSt' },
    ],
    pdf: '/pdfs/chmframes.pdf' // Ensure PDFs are in /public/pdfs/
  },
  {
    id: 'HEAVY LIFT AND POSITIONING SOLUTIONS',
    title: 'HEAVY LIFT AND POSITIONING SOLUTIONS',
    category: 'Pumps',
    imgSrc: 'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=1920&auto=format&fit=crop',
    description: 'High-pressure capabilities and precision control for the most demanding hydraulic systems.',
    keyFeatures: ['Variable Displacement', 'High Pressure Tolerance', 'Low Noise Operation'],
    details: 'The AXP series of piston pumps provides exceptional power density and precision. Featuring a variable displacement swashplate design, they are perfect for closed and open-loop circuits. Their robust construction ensures reliability in heavy-duty applications like construction and mining.',
    gallery: [
      'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=800&auto=format&fit=crop',
      'https://placehold.co/800x600/334155/ffffff?text=Piston+Pump+View+2',
      'https://placehold.co/800x600/475569/ffffff?text=Piston+Pump+View+3'
    ],
    specifications: [
      { name: 'Displacement', value: '20-500 cm³/rev' },
      { name: 'Max Pressure', value: 'Up to 450 bar' },
      { name: 'Control Options', value: 'Pressure, Flow, Power' },
      { name: 'Mounting', value: 'ISO, SAE' },
    ],
    pdf: '/HPSOLUTIONS.pdf'
  },
  {
    id: 'HYDRAULIC & MECHNICAL PULLERS',
    title: 'HYDRAULIC & MECHNICAL PULLERS',
    category: 'Pumps',
    imgSrc: 'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=1920&auto=format&fit=crop',
    description: 'Known for their low noise operation and excellent performance in medium-pressure applications.',
    keyFeatures: ['Low Pulsation Flow', 'Quiet Operation', 'Replaceable Cartridge'],
    details: 'Vane pumps are the ideal choice for applications requiring a smooth, low-pulsation flow and quiet operation. Their unique design minimizes pressure ripples, making them suitable for industrial machinery, power steering systems, and automation. They are available in fixed and variable displacement models.',
    gallery: [
      'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=800&auto=format&fit=crop',
      'https://placehold.co/800x600/334155/ffffff?text=Vane+Pump+View+2',
      'https://placehold.co/800x600/475569/ffffff?text=Vane+Pump+View+3'
    ],
    specifications: [
      { name: 'Displacement', value: '10-200 cm³/rev' },
      { name: 'Max Pressure', value: 'Up to 210 bar' },
      { name: 'Noise Level', value: '< 70 dBA' },
      { name: 'Cartridge Kit', value: 'Replaceable for easy service' },
    ],
    pdf: '/H&MPULLERS.pdf'
  },
  {
    id: 'HYDRAULIC JACKS',
    title: 'HYDRAULIC JACKS',
    category: 'Motors',
    imgSrc: 'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=1920&auto=format&fit=crop',
    description: 'Efficiently convert hydraulic energy into mechanical power for various industrial uses.',
    keyFeatures: ['High Starting Torque', 'Wide Speed Range', 'Bi-directional Rotation'],
    details: 'Our hydraulic motors offer high torque and excellent efficiency across a wide speed range. Designed for durability, they perform reliably in the toughest conditions. We offer a variety of motor types, including gear, vane, and piston motors, to suit applications from conveyors to vehicle propulsion.',
    gallery: [
      'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=800&auto=format&fit=crop',
      'https://placehold.co/800x600/334155/ffffff?text=Motor+View+2',
      'https://placehold.co/800x600/475569/ffffff?text=Motor+View+3'
    ],
    specifications: [
      { name: 'Torque Range', value: '50-2000 Nm' },
      { name: 'Speed', value: 'Up to 3000 rpm' },
      { name: 'Type', value: 'Gerotor, Orbital, Piston' },
      { name: 'Shaft Options', value: 'Splined, Keyed, Tapered' },
    ],
    pdf: '/products/hydraulic-motors.pdf'
  },
  // Add more products here in the future to keep both pages in sync
];