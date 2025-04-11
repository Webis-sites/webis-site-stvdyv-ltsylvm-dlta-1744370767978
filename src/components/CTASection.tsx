'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

const CallToActionSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 10));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="cta-section" 
      dir="rtl" 
      className="relative w-full overflow-hidden py-16 md:py-24"
      aria-labelledby="cta-heading"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="סטודיו צילום מקצועי"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#9B786F]/90 to-[#000000]/70 z-1"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-white/20 rounded-2xl p-8 md:p-12 border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
          >
            {/* Headline */}
            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-right text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#FFEEAD] leading-tight"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              הפכו את הרגעים שלכם לזכרונות נצחיים
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-right text-lg md:text-xl text-white mb-8"
            >
              בסטודיו לצילום דלתא, אנחנו מתמחים בלתפוס את הרגעים המיוחדים שלכם בצורה אומנותית ומקצועית. הצוות המיומן שלנו מחכה לכם!
            </motion.p>

            {/* Urgency Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mb-8 bg-[#9B786F]/80 backdrop-blur-sm p-4 rounded-lg border border-[#FFEEAD]/30 text-right"
            >
              <p className="text-[#FFEEAD] font-bold">
                מבצע מיוחד! הנחה של 20% על כל הזמנה בשבוע הקרוב
              </p>
              <div className="flex items-center justify-end mt-2">
                <span className="text-white ml-2">מסתיים בעוד:</span>
                <div className="bg-[#FFEEAD] text-[#9B786F] font-bold rounded-full h-8 w-8 flex items-center justify-center">
                  {countdown}
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-end">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <button
                  className="relative overflow-hidden neumorphic-button bg-[#9B786F] hover:bg-[#8a6a62] text-[#FFEEAD] font-bold py-4 px-8 md:px-10 rounded-full text-lg md:text-xl shadow-[6px_6px_12px_#7e615a,-6px_-6px_12px_#b88f84] hover:shadow-[4px_4px_8px_#7e615a,-4px_-4px_8px_#b88f84] active:shadow-[inset_4px_4px_8px_#7e615a,inset_-4px_-4px_8px_#b88f84] transition-all duration-300 flex items-center"
                  aria-label="קבע תור עכשיו לצילום מקצועי"
                >
                  <FaCamera className="ml-2" />
                  <span>קבע תור עכשיו</span>
                  <motion.span
                    className="absolute left-4"
                    animate={{ x: isHovered ? -5 : 0, opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaArrowLeft />
                  </motion.span>
                </button>

                {/* Animated Pulse Effect */}
                <AnimatePresence>
                  {!isHovered && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.5, 0.7] }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute inset-0 rounded-full bg-[#FFEEAD]/30 -z-10"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-right"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h3 className="font-bold text-[#FFEEAD] mb-2">צילומי אופנה</h3>
                <p className="text-white text-sm">צילומים מקצועיים לדוגמנים ומעצבים</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h3 className="font-bold text-[#FFEEAD] mb-2">צילומי משפחה</h3>
                <p className="text-white text-sm">זכרונות משפחתיים שיישארו לנצח</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h3 className="font-bold text-[#FFEEAD] mb-2">צילומי מוצר</h3>
                <p className="text-white text-sm">הצגת המוצרים שלכם בצורה מקצועית</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .neumorphic-button {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default CallToActionSection;