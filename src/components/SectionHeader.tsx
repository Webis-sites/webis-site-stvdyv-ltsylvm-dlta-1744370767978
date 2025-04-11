'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaCamera, FaImage } from 'react-icons/fa';

interface SectionHeaderProps {
  /**
   * The main title of the section
   */
  title: string;
  /**
   * Optional subtitle text
   */
  subtitle?: string;
  /**
   * Alignment of the header content
   * @default 'right'
   */
  alignment?: 'right' | 'center' | 'left';
  /**
   * Optional ID for the section
   * @default generated unique ID
   */
  id?: string;
}

/**
 * A decorative section header component for a Hebrew photography studio website
 * with RTL support, animations, and photography-themed decorative elements.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  alignment = 'right',
  id = `section-header-${Math.random().toString(36).substr(2, 9)}`,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Alignment classes based on the alignment prop
  const alignmentClasses = {
    right: 'text-right',
    center: 'text-center',
    left: 'text-left',
  };

  // Animation when component enters viewport
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      id={id}
      ref={ref}
      dir="rtl"
      className={`relative py-8 px-4 md:px-8 ${alignmentClasses[alignment]}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {/* Decorative camera icon */}
      <motion.div
        className="absolute top-0 right-0 text-primary-200 opacity-10"
        variants={{
          hidden: { rotate: -10, scale: 0.8, opacity: 0 },
          visible: {
            rotate: 0,
            scale: 1,
            opacity: 0.1,
            transition: { delay: 0.3, duration: 0.5 },
          },
        }}
      >
        <FaCamera size={60} />
      </motion.div>

      {/* Decorative frame element */}
      <div className="relative z-10">
        {/* Glassmorphism container */}
        <div className="relative mx-auto max-w-4xl rounded-2xl bg-white/10 p-6 backdrop-blur-sm shadow-[0_8px_32px_0_rgba(155,120,111,0.1)] border border-white/20">
          {/* Neumorphic decorative element */}
          <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-gradient-to-br from-[#9B786F]/80 to-[#FFEEAD]/80 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)] backdrop-blur-md flex items-center justify-center">
            <FaImage className="text-white text-xl" />
          </div>

          {/* Title with animation */}
          <motion.div
            className="relative"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#9B786F] mb-2 font-display">
              {title}
            </h2>
            
            {/* Decorative underline */}
            <motion.div
              className="h-1 bg-gradient-to-l from-[#9B786F] to-[#FFEEAD] rounded-full mt-2 mb-4"
              style={{ width: alignment === 'center' ? '80%' : '60%', marginRight: alignment === 'center' ? 'auto' : '0', marginLeft: alignment === 'center' ? 'auto' : 'auto' }}
              variants={{
                hidden: { width: '0%', opacity: 0 },
                visible: { 
                  width: alignment === 'center' ? '80%' : '60%', 
                  opacity: 1, 
                  transition: { delay: 0.4, duration: 0.8 } 
                },
              }}
            />
          </motion.div>

          {/* Subtitle with animation */}
          {subtitle && (
            <motion.p
              className="text-lg md:text-xl text-[#9B786F]/80 mt-2 font-light"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Decorative elements */}
          <div className="absolute bottom-2 left-2 flex space-x-2 opacity-30">
            <motion.div
              className="h-3 w-3 rounded-full bg-[#9B786F]"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1, transition: { delay: 0.6, duration: 0.3 } },
              }}
            />
            <motion.div
              className="h-3 w-3 rounded-full bg-[#FFEEAD]"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1, transition: { delay: 0.7, duration: 0.3 } },
              }}
            />
            <motion.div
              className="h-3 w-3 rounded-full bg-[#9B786F]"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1, transition: { delay: 0.8, duration: 0.3 } },
              }}
            />
          </div>
        </div>
      </div>

      {/* Background decorative image */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-5">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default SectionHeader;