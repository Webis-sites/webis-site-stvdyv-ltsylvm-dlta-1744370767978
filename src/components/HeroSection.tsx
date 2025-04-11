'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaImage, FaPortrait, FaRegCalendarAlt } from 'react-icons/fa';

interface HeroProps {}

const HeroSection: React.FC<HeroProps> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);
  
  const icons = [
    { icon: <FaCamera size={24} />, label: 'צילום מקצועי' },
    { icon: <FaImage size={24} />, label: 'עריכת תמונות' },
    { icon: <FaPortrait size={24} />, label: 'צילומי פורטרט' },
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative min-h-screen w-full overflow-hidden text-right"
      aria-label="סטודיו לצילום דלתא - סטודיו לצילום מוביל בישראל"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1520549233664-03f65c1d1327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="סטודיו צילום מקצועי" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glass Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 h-screen flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto md:mr-0 backdrop-blur-md bg-white/10 p-8 md:p-12 rounded-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
        >
          {/* Floating Photography Elements */}
          <div className="absolute -left-4 -top-4 md:-left-8 md:-top-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, 0] }}
              transition={{ 
                delay: 0.5, 
                duration: 0.8, 
                ease: "easeOut",
                rotate: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 5
                }
              }}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#9B786F]/80 backdrop-blur-sm flex items-center justify-center text-white shadow-lg"
            >
              <FaCamera size={32} />
            </motion.div>
          </div>
          
          <div className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, -10, 0] }}
              transition={{ 
                delay: 0.7, 
                duration: 0.8, 
                ease: "easeOut",
                rotate: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 6
                }
              }}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#FFEEAD]/80 backdrop-blur-sm flex items-center justify-center text-[#9B786F] shadow-lg"
            >
              <FaImage size={32} />
            </motion.div>
          </div>
          
          {/* Main Content */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            סטודיו לצילום מוביל בישראל
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          {/* Animated Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {icons.map((item, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: activeIcon === index ? 1.1 : 1,
                  backgroundColor: activeIcon === index ? 'rgba(255, 238, 173, 0.9)' : 'rgba(255, 255, 255, 0.2)'
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20"
                style={{
                  color: activeIcon === index ? '#9B786F' : 'white',
                  boxShadow: activeIcon === index 
                    ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 -2px 5px rgba(0,0,0,0.1)' 
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden px-8 py-4 rounded-full text-lg font-bold bg-[#9B786F] text-white transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
            style={{
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1), inset 0 -2px 5px rgba(0,0,0,0.2)'
            }}
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <FaRegCalendarAlt />
              קבע תור עכשיו
            </span>
            <motion.span 
              className="absolute inset-0 bg-[#FFEEAD]"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-[#9B786F]/80 to-[#FFEEAD]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ mixBlendMode: 'overlay' }}
            />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <AnimatePresence>
        {isLoaded && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -100, y: -100 }}
              animate={{ opacity: 0.7, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute top-[15%] left-[10%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#9B786F]/30 backdrop-blur-sm z-5"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 100, y: 100 }}
              animate={{ opacity: 0.7, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="absolute bottom-[15%] right-[10%] w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#FFEEAD]/30 backdrop-blur-sm z-5"
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;