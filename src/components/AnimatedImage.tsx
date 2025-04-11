'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define animation variants
const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  },
  slideIn: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
  },
  scaleIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } }
  },
  revealFromBottom: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  }
};

// Define hover effects
const hoverEffects = {
  grow: { scale: 1.05, transition: { duration: 0.3 } },
  glow: { 
    boxShadow: '0 0 15px rgba(255, 238, 173, 0.7)',
    transition: { duration: 0.3 } 
  },
  tilt: { 
    rotate: 2, 
    scale: 1.03,
    transition: { duration: 0.3 } 
  },
  colorize: {
    filter: 'saturate(1.2) contrast(1.1)',
    transition: { duration: 0.3 }
  }
};

// Define types for component props
interface AnimatedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  animationType?: 'fadeIn' | 'slideIn' | 'scaleIn' | 'revealFromBottom';
  hoverEffect?: 'grow' | 'glow' | 'tilt' | 'colorize';
  className?: string;
  priority?: boolean;
  quality?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  objectPosition?: string;
  onClick?: () => void;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  width = 500,
  height = 350,
  animationType = 'fadeIn',
  hoverEffect = 'grow',
  className = '',
  priority = false,
  quality = 85,
  objectFit = 'cover',
  objectPosition = 'center',
  onClick
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Select the animation variant based on the prop
  const selectedAnimation = animationVariants[animationType];
  
  // Select the hover effect based on the prop
  const selectedHoverEffect = hoverEffects[hoverEffect];

  return (
    <div 
      id="animated-image-container" 
      dir="rtl" 
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{
        boxShadow: '8px 8px 16px rgba(155, 120, 111, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.7)',
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '16px',
      }}
    >
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={selectedAnimation}
        whileHover={selectedHoverEffect}
        className="relative w-full h-full"
        onClick={onClick}
      >
        {/* Loading animation */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-10">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut" 
              }}
              className="w-12 h-12 rounded-full border-4 border-t-[#9B786F] border-r-[#FFEEAD] border-b-[#9B786F] border-l-[#FFEEAD]"
            />
          </div>
        )}
        
        {/* Glass overlay for hover effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-[#9B786F]/10 to-[#FFEEAD]/10 opacity-0 z-10 pointer-events-none"
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={quality}
            priority={priority}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full transition-all duration-300 ${objectFit === 'cover' ? 'object-cover' : objectFit === 'contain' ? 'object-contain' : objectFit === 'fill' ? 'object-fill' : 'object-none'}`}
            style={{ objectPosition }}
          />
        </div>
      </motion.div>
      
      {/* Caption overlay (optional) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#9B786F]/80 to-transparent p-4 text-right"
      >
        <p className="text-white font-medium text-sm md:text-base">{alt}</p>
      </motion.div>
    </div>
  );
};

// Usage example component
const AnimatedImageGallery: React.FC = () => {
  return (
    <div dir="rtl" className="container mx-auto p-4 md:p-8">
      <h2 className="text-right text-2xl md:text-3xl font-bold mb-6 text-[#9B786F]">גלריית תמונות - סטודיו לצילום דלתא</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedImage 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
          alt="צילום אופנה - קולקציית קיץ" 
          animationType="fadeIn"
          hoverEffect="grow"
        />
        
        <AnimatedImage 
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
          alt="צילומי סטודיו - פורטרט" 
          animationType="slideIn"
          hoverEffect="tilt"
        />
        
        <AnimatedImage 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
          alt="צילומי אופנה - אביזרים" 
          animationType="scaleIn"
          hoverEffect="colorize"
        />
        
        <AnimatedImage 
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
          alt="צילומי חוץ - קולקציית סתיו" 
          animationType="revealFromBottom"
          hoverEffect="glow"
        />
        
        <AnimatedImage 
          src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
          alt="צילומי תכשיטים - קולקציה חדשה" 
          animationType="fadeIn"
          hoverEffect="grow"
        />
        
        <AnimatedImage 
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
          alt="צילומי אופנה - קולקציית חורף" 
          animationType="slideIn"
          hoverEffect="tilt"
        />
      </div>
    </div>
  );
};

export default AnimatedImage;