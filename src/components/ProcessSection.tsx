'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaCamera, FaEdit, FaImages, FaCheckCircle } from 'react-icons/fa';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const PhotographyProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "פגישת ייעוץ ראשונית",
      description: "נפגש לשיחה אישית כדי להבין את החזון שלך, הסגנון המועדף עליך והצרכים הספציפיים שלך. נתאים את הצילום בדיוק לפי הטעם שלך.",
      icon: <FaEdit className="text-3xl" />,
      imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "הכנה לצילומים",
      description: "נעזור לך להתכונן לצילומים עם טיפים לגבי לבוש, איפור ואביזרים. נתכנן את הלוקיישן והתאורה המושלמים לצילום.",
      icon: <FaCamera className="text-3xl" />,
      imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "יום הצילומים",
      description: "חוויית צילום מקצועית ומהנה בסטודיו או בלוקיישן שבחרת. נדאג שתרגישו בנוח ושהתוצאות יהיו מושלמות.",
      icon: <FaImages className="text-3xl" />,
      imageUrl: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "עריכה ומסירת התמונות",
      description: "עריכה מקצועית של התמונות הנבחרות והעברתן אליך בפורמט דיגיטלי איכותי או כהדפסות מקצועיות, בהתאם להעדפותיך.",
      icon: <FaCheckCircle className="text-3xl" />,
      imageUrl: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Intersection Observer for each step
  const StepCard: React.FC<{ step: ProcessStep; index: number }> = ({ step, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });
    const controls = useAnimation();

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
        setActiveStep(index);
      }
    }, [isInView, controls, index]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
        }}
        className={`relative mb-12 ${index === steps.length - 1 ? '' : 'pb-8'}`}
      >
        <div className="flex items-start">
          {/* Step Number with Icon */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white z-10 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.7)]"
            style={{ 
              background: `linear-gradient(135deg, #9B786F 0%, #8A675E 100%)`,
              backdropFilter: 'blur(10px)'
            }}
          >
            {step.icon}
          </motion.div>
          
          {/* Step Content */}
          <div className="mr-6 flex-grow">
            <motion.div
              className="rounded-2xl p-6 h-full backdrop-blur-md bg-opacity-20 border border-white/20 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.5)]"
              style={{ 
                background: `linear-gradient(135deg, rgba(255, 238, 173, 0.3) 0%, rgba(255, 238, 173, 0.1) 100%)`,
              }}
              whileHover={{ 
                boxShadow: "8px 8px 20px rgba(0,0,0,0.1), -8px -8px 20px rgba(255,255,255,0.7)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-3 text-right" style={{ color: '#9B786F' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-right leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="md:w-1/2 h-48 md:h-auto overflow-hidden rounded-lg">
                  <img 
                    src={step.imageUrl} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Connecting Line */}
        {index < steps.length - 1 && (
          <div 
            className="absolute right-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#9B786F] to-[#FFEEAD]"
            style={{ transform: 'translateX(50%)' }}
          ></div>
        )}
      </motion.div>
    );
  };

  return (
    <div id="photography-process" dir="rtl" className="py-16 px-4 md:px-8 bg-gray-50" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#9B786F' }}>
            תהליך העבודה שלנו
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #9B786F, #FFEEAD)' }}></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            בסטודיו לצילום דלתא, אנחנו מאמינים בתהליך מובנה שמבטיח תוצאות מושלמות בכל פרויקט
          </p>
        </motion.div>

        {/* Progress Indicator - Mobile */}
        <div className="md:hidden mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2 space-x-reverse">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => {
                  const element = document.getElementById(`step-${step.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-[#9B786F] text-white' 
                    : 'bg-[#FFEEAD]/30 text-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {step.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {steps.map((step, index) => (
            <div id={`step-${step.id}`} key={step.id}>
              <StepCard step={step} index={index} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(155, 120, 111, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full text-white font-medium text-lg shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.7)]"
            style={{ 
              background: `linear-gradient(135deg, #9B786F 0%, #8A675E 100%)`,
            }}
          >
            קבע פגישת ייעוץ עכשיו
          </motion.button>
          <p className="mt-4 text-gray-600">
            מוכנים להתחיל? אנחנו כאן כדי להפוך את החזון שלך למציאות
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PhotographyProcess;