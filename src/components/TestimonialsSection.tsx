'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { IoMdCamera } from 'react-icons/io';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image?: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "רונית כהן",
      quote: "סטודיו דלתא הפך את יום החתונה שלי לחוויה בלתי נשכחת. הצילומים מדהימים ומשקפים את הרגעים המיוחדים בדיוק כפי שרציתי.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      name: "דוד לוי",
      quote: "הצילומים שקיבלתי מסטודיו דלתא עלו על כל הציפיות שלי. המקצועיות והיצירתיות שלהם הפכו את הצילומים העסקיים שלי למושלמים.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      name: "מיכל אברהם",
      quote: "הצוות בסטודיו דלתא ידע בדיוק איך לגרום לי להרגיש בנוח מול המצלמה. התוצאות היו מעבר למה שיכולתי לדמיין.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 4,
      name: "יוסי גולדברג",
      quote: "אני עובד עם סטודיו דלתא כבר שנים רבות לכל צרכי הצילום של העסק שלי. הם תמיד מספקים תוצאות מעולות ושירות מקצועי.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 5,
      name: "שירה אדלר",
      quote: "הצילומי משפחה שלנו יצאו מושלמים! סטודיו דלתא הצליח לתפוס את הרגעים הקטנים והמיוחדים בין בני המשפחה בצורה מדהימה.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextTestimonial();
    } else if (diff < -50) {
      prevTestimonial();
    }

    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section 
      id="testimonials-section" 
      dir="rtl" 
      className="py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-[#f8f4f2] to-[#fff8e6]"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 text-[#9B786F] opacity-20">
        <IoMdCamera className="text-8xl" />
      </div>
      <div className="absolute bottom-10 left-10 text-[#9B786F] opacity-20">
        <IoMdCamera className="text-8xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#9B786F] font-display">
            מה לקוחותינו אומרים
          </h2>
          <div className="w-24 h-1 bg-[#FFEEAD] mx-auto rounded-full"></div>
        </div>

        <div 
          className="relative glassmorphism-card mx-auto max-w-4xl rounded-2xl p-8 md:p-12 mb-12"
          style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(155, 120, 111, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.18)'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute top-6 right-8 text-[#9B786F] opacity-50">
            <FaQuoteRight className="text-4xl md:text-5xl" />
          </div>

          <div className="testimonial-carousel relative h-[300px] md:h-[250px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 }
                }}
                className="absolute w-full h-full flex flex-col items-center justify-center text-center"
              >
                <div className="mb-6">
                  {testimonials[currentIndex].image && (
                    <div className="neumorphic-image mx-auto mb-4" style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      boxShadow: '8px 8px 16px rgba(155, 120, 111, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.7)'
                    }}>
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                    {testimonials[currentIndex].quote}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-[#9B786F]">
                    {testimonials[currentIndex].name}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4">
            <button
              onClick={prevTestimonial}
              className="neumorphic-button h-12 w-12 rounded-full flex items-center justify-center text-[#9B786F] focus:outline-none"
              style={{
                boxShadow: '5px 5px 10px rgba(155, 120, 111, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.7)',
                background: 'linear-gradient(145deg, #f8f4f2, #fff8e6)'
              }}
              aria-label="הקודם"
            >
              <FaChevronRight className="text-xl" />
            </button>
            <button
              onClick={nextTestimonial}
              className="neumorphic-button h-12 w-12 rounded-full flex items-center justify-center text-[#9B786F] focus:outline-none"
              style={{
                boxShadow: '5px 5px 10px rgba(155, 120, 111, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.7)',
                background: 'linear-gradient(145deg, #f8f4f2, #fff8e6)'
              }}
              aria-label="הבא"
            >
              <FaChevronLeft className="text-xl" />
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 space-x-reverse">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#9B786F] w-6' 
                  : 'bg-[#FFEEAD]'
              }`}
              aria-label={`עבור לעדות ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;