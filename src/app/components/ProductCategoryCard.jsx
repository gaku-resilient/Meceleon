import Image from 'next/image';
import { Wrench } from 'lucide-react';

export const ProductCategoryCard = ({ imgSrc, title, category, description, keyFeatures, onClick }) => (
  <div 
    className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:border-red-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white"
    onClick={onClick}
  >
    {/* Image on Top */}
    <div className="w-full h-48 relative">
      <Image 
        src={imgSrc} 
        alt={title} 
        fill
        className="object-contain bg-gray-100" // Use object-contain as in your code
        onError={(e) => { 
          e.target.src = 'https://placehold.co/400x300/e2e8f0/4a5568?text=Image+Not+Found'; 
        }}
      />
    </div>
    {/* Content Below Image */}
    <div className="p-6">
      <Wrench className="h-8 w-8 text-gray-600 mb-2 mx-auto" />
      <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{title}</h3>
      <p className="text-gray-600 text-sm text-center mb-1">{category}</p>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
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