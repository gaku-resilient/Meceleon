import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MousePointer, Type, ExternalLink, Hand } from 'lucide-react';

const CustomCursor = () => {
  // Cursor states
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [trail, setTrail] = useState([]);
  
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    let animationFrame;
    
    // Mouse movement handler with smooth trailing effect
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setCursorPosition(newPosition);
      
      // Create trail effect
      setTrail(prevTrail => {
        const newTrail = [newPosition, ...prevTrail.slice(0, 8)];
        return newTrail;
      });
    };

    // Mouse enter handlers for different element types
    const handleMouseEnterText = () => {
      setCursorVariant('text');
      setIsHovering(true);
    };

    const handleMouseEnterHeading = () => {
      setCursorVariant('heading');
      setIsHovering(true);
    };

    const handleMouseEnterButton = () => {
      setCursorVariant('button');
      setIsHovering(true);
    };

    const handleMouseEnterLink = () => {
      setCursorVariant('link');
      setIsHovering(true);
    };

    const handleMouseEnterInput = () => {
      setCursorVariant('input');
      setIsHovering(true);
    };

    const handleMouseEnterClickable = () => {
      setCursorVariant('clickable');
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setCursorVariant('default');
      setIsHovering(false);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeaveWindow = () => setIsVisible(false);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    
    // Auto-detect and add hover effects to elements
    const addHoverEffects = () => {
      // Text elements
      const textElements = document.querySelectorAll('p, span, label, li, td, th');
      const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const buttonElements = document.querySelectorAll('button, input[type="submit"], input[type="button"]');
      const linkElements = document.querySelectorAll('a');
      const inputElements = document.querySelectorAll('input:not([type="submit"]):not([type="button"]), textarea, select');
      const clickableElements = document.querySelectorAll('[role="button"], [data-clickable], .cursor-pointer');

      // Remove existing listeners
      const removeListeners = (elements, enterHandler, leaveHandler) => {
        elements.forEach(el => {
          el.removeEventListener('mouseenter', enterHandler);
          el.removeEventListener('mouseleave', leaveHandler);
        });
      };

      // Add listeners
      const addListeners = (elements, enterHandler, leaveHandler) => {
        elements.forEach(el => {
          el.addEventListener('mouseenter', enterHandler);
          el.addEventListener('mouseleave', leaveHandler);
        });
      };

      addListeners(textElements, handleMouseEnterText, handleMouseLeave);
      addListeners(headingElements, handleMouseEnterHeading, handleMouseLeave);
      addListeners(buttonElements, handleMouseEnterButton, handleMouseLeave);
      addListeners(linkElements, handleMouseEnterLink, handleMouseLeave);
      addListeners(inputElements, handleMouseEnterInput, handleMouseLeave);
      addListeners(clickableElements, handleMouseEnterClickable, handleMouseLeave);

      return () => {
        removeListeners(textElements, handleMouseEnterText, handleMouseLeave);
        removeListeners(headingElements, handleMouseEnterHeading, handleMouseLeave);
        removeListeners(buttonElements, handleMouseEnterButton, handleMouseLeave);
        removeListeners(linkElements, handleMouseEnterLink, handleMouseLeave);
        removeListeners(inputElements, handleMouseEnterInput, handleMouseLeave);
        removeListeners(clickableElements, handleMouseEnterClickable, handleMouseLeave);
      };
    };

    // Initial setup and periodic refresh for dynamic content
    const cleanup = addHoverEffects();
    const interval = setInterval(addHoverEffects, 2000);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      cleanup();
      clearInterval(interval);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Cursor configuration based on variant
  const getCursorConfig = () => {
    switch (cursorVariant) {
      case 'text':
        return {
          size: 'w-14 h-14',
          bg: 'bg-gradient-to-br from-[#2b6777] to-[#52ab98]',
          opacity: 'opacity-30',
          scale: 'scale-100',
          animation: 'animate-pulse'
        };
      case 'heading':
        return {
          size: 'w-20 h-20',
          bg: 'bg-gradient-to-br from-[#52ab98] to-[#2b6777]',
          opacity: 'opacity-40',
          scale: 'scale-100',
          animation: 'animate-pulse'
        };
      case 'button':
        return {
          size: 'w-24 h-24',
          bg: 'bg-gradient-to-br from-[#2b6777] via-[#52ab98] to-[#2b6777]',
          opacity: 'opacity-50',
          scale: 'scale-100',
          animation: 'animate-spin'
        };
      case 'link':
        return {
          size: 'w-16 h-16',
          bg: 'bg-gradient-to-r from-[#52ab98] to-[#2b6777]',
          opacity: 'opacity-60',
          scale: 'scale-100',
          animation: 'animate-bounce'
        };
      case 'input':
        return {
          size: 'w-12 h-12',
          bg: 'bg-gradient-to-br from-[#2b6777] to-[#52ab98]',
          opacity: 'opacity-40',
          scale: 'scale-110',
          animation: 'animate-pulse'
        };
      case 'clickable':
        return {
          size: 'w-18 h-18',
          bg: 'bg-gradient-to-br from-[#52ab98] to-[#2b6777]',
          opacity: 'opacity-50',
          scale: 'scale-105',
          animation: ''
        };
      default:
        return {
          size: 'w-8 h-8',
          bg: 'bg-gradient-to-br from-[#2b6777] to-[#52ab98]',
          opacity: 'opacity-60',
          scale: 'scale-100',
          animation: ''
        };
    }
  };

  const config = getCursorConfig();

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Custom Cursor Main Element */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-300 ease-out ${config.size} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference'
        }}
      >
        {/* Main cursor circle */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ease-out ${config.bg} ${config.opacity} ${config.scale} ${config.animation}`}
          style={{
            animationDuration: cursorVariant === 'button' ? '2s' : cursorVariant === 'link' ? '1s' : '2s',
            filter: 'blur(0.5px)'
          }}
        >
          {/* Inner content based on cursor type */}
          {cursorVariant === 'text' && (
            <div className="absolute inset-2 rounded-full bg-[#ffffff] opacity-90 flex items-center justify-center">
              <div className="w-0.5 h-6 bg-[#2b6777] animate-pulse rounded-full"></div>
            </div>
          )}
          
          {cursorVariant === 'heading' && (
            <div className="absolute inset-3 rounded-full bg-[#ffffff] opacity-90 flex items-center justify-center">
              <Type className="w-5 h-5 text-[#2b6777] animate-pulse" />
            </div>
          )}
          
          {cursorVariant === 'button' && (
            <div className="absolute inset-3 rounded-full bg-[#ffffff] opacity-95 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-[#2b6777] animate-bounce" />
            </div>
          )}
          
          {cursorVariant === 'link' && (
            <div className="absolute inset-2 rounded-full bg-[#ffffff] opacity-90 flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-[#2b6777]" />
            </div>
          )}
          
          {cursorVariant === 'input' && (
            <div className="absolute inset-1 rounded-full bg-[#ffffff] opacity-80 flex items-center justify-center">
              <div className="w-0.5 h-4 bg-[#2b6777] animate-pulse rounded-full"></div>
            </div>
          )}
          
          {cursorVariant === 'clickable' && (
            <div className="absolute inset-2 rounded-full bg-[#ffffff] opacity-85 flex items-center justify-center">
              <Hand className="w-4 h-4 text-[#2b6777]" />
            </div>
          )}
        </div>
        
        {/* Outer ring for enhanced effect */}
        <div
          className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
            cursorVariant === 'default' 
              ? 'border-[#2b6777] opacity-30 scale-150' :
            cursorVariant === 'text' 
              ? 'border-[#52ab98] opacity-50 scale-125' :
            cursorVariant === 'heading'
              ? 'border-[#2b6777] opacity-60 scale-120' :
            cursorVariant === 'button' 
              ? 'border-[#52ab98] opacity-70 scale-110' :
            cursorVariant === 'link' 
              ? 'border-[#2b6777] opacity-50 scale-140' :
            cursorVariant === 'input'
              ? 'border-[#52ab98] opacity-60 scale-130' :
            cursorVariant === 'clickable'
              ? 'border-[#2b6777] opacity-55 scale-125' :
              'border-[#2b6777] opacity-30 scale-150'
          }`}
        ></div>
        
        {/* Magnetic field effect */}
        {isHovering && (
          <div className="absolute inset-0">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#52ab98] rounded-full opacity-60"
                style={{
                  left: `${50 + Math.cos((i * Math.PI) / 2) * 25}%`,
                  top: `${50 + Math.sin((i * Math.PI) / 2) * 25}%`,
                  transform: 'translate(-50%, -50%)',
                  animation: 'orbit 3s linear infinite',
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Trail Effect */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-[9998] w-2 h-2 bg-[#52ab98] rounded-full transition-opacity duration-300"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: Math.max(0, 0.8 - index * 0.1),
            scale: Math.max(0.3, 1 - index * 0.1)
          }}
        ></div>
      ))}

      {/* Center Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-1 h-1 bg-[#2b6777] rounded-full pointer-events-none z-[10000] transition-all duration-100 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: cursorVariant === 'default' ? 1 : 0.3
        }}
      ></div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Hide default cursor */
        @media (min-width: 768px) and (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
          
          body {
            cursor: none !important;
          }
        }
        
        /* Orbit animation for magnetic effect */
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(15px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(15px) rotate(-360deg); }
        }
        
        /* Enhanced spin animation */
        @keyframes enhanced-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        /* Pulse animation with scale */
        @keyframes pulse-scale {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.1); 
          }
        }
        
        /* Smooth bounce */
        @keyframes smooth-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        /* Custom cursor variant animations */
        .cursor-variant-button {
          animation: enhanced-spin 2s linear infinite;
        }
        
        .cursor-variant-text {
          animation: pulse-scale 2s ease-in-out infinite;
        }
        
        .cursor-variant-link {
          animation: smooth-bounce 1s ease-in-out infinite;
        }
        
        /* Text selection with theme colors */
        ::selection {
          background: rgba(43, 103, 119, 0.3);
          color: #2b6777;
        }
        
        ::-moz-selection {
          background: rgba(43, 103, 119, 0.3);
          color: #2b6777;
        }
        
        /* Enhanced interactive feedback */
        button:hover, [role="button"]:hover {
          transform: translateY(-1px);
          transition: transform 0.2s ease;
        }
        
        a:hover {
          transition: all 0.2s ease;
        }
        
        input:focus, textarea:focus, select:focus {
          transform: translateY(-1px);
          transition: transform 0.2s ease;
        }
      `}</style>

      {/* Demo Section for Testing */}
      {/* <div className="min-h-screen bg-gradient-to-br from-[#ffffff] via-[#f2f2f2] to-[#c8d8e4] p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-black text-[#2b6777]">Custom Cursor Demo</h1>
            <p className="text-xl text-neutral-700">Hover over different elements to see cursor variations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#ffffff] p-8 rounded-2xl shadow-lg space-y-6">
              <h2 className="text-3xl font-bold text-[#2b6777]">Text Elements</h2>
              <p className="text-lg text-neutral-700">
                This is regular paragraph text. The cursor shows a text indicator when hovering.
              </p>
              <h3 className="text-2xl font-bold text-[#52ab98]">Heading Elements</h3>
              <span className="text-base text-neutral-600">This is a span element with cursor feedback.</span>
            </div>

            <div className="bg-[#ffffff] p-8 rounded-2xl shadow-lg space-y-6">
              <h2 className="text-3xl font-bold text-[#2b6777]">Interactive Elements</h2>
              <div className="space-y-4">
                <button className="bg-[#2b6777] text-[#ffffff] px-6 py-3 rounded-lg font-bold hover:bg-[#52ab98] transition-colors">
                  Button Element
                </button>
                <div>
                  <a href="#" className="text-[#52ab98] font-bold hover:text-[#2b6777] transition-colors">
                    Link Element
                  </a>
                </div>
                <input 
                  type="text" 
                  placeholder="Input field cursor" 
                  className="w-full p-3 border-2 border-[#c8d8e4] rounded-lg focus:border-[#52ab98] outline-none"
                />
                <div 
                  role="button" 
                  className="bg-[#f2f2f2] p-4 rounded-lg text-center font-bold text-[#2b6777] hover:bg-[#c8d8e4] transition-colors cursor-pointer"
                >
                  Clickable Div
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2b6777] text-[#ffffff] p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Features</h2>
            <ul className="space-y-2 text-lg">
              <li>✨ Dynamic cursor states for different elements</li>
              <li>🎯 Smooth animations and transitions</li>
              <li>📱 Auto-disabled on mobile/touch devices</li>
              <li>🎨 Theme-consistent color scheme</li>
              <li>⚡ Performance optimized with proper cleanup</li>
              <li>🔄 Trail effect with fade-out animation</li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CustomCursor;