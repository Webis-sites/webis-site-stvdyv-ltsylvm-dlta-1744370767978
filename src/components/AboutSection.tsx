'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaCamera, FaUserTie, FaAward, FaHeart } from 'react-icons/fa';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const AboutUsSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stats: StatItem[] = [
    { icon: <FaCamera className="text-3xl mb-2" />, value: "+15", label: "שנות ניסיון" },
    { icon: <FaUserTie className="text-3xl mb-2" />, value: "+500", label: "לקוחות מרוצים" },
    { icon: <FaAward className="text-3xl mb-2" />, value: "+50", label: "פרסים" },
    { icon: <FaHeart className="text-3xl mb-2" />, value: "+1000", label: "פרויקטים" }
  ];

  return (
    <section 
      id="about-us" 
      dir="rtl" 
      className="py-16 md:py-24 overflow-hidden relative"
      style={{
        background: `linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)`,
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#9B786F] to-[#FFEEAD]"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-[#FFEEAD] to-[#9B786F]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-right text-[#9B786F]" style={{ fontFamily: 'var(--font-playful, sans-serif)' }}>
              אודות סטודיו דלתא
            </h2>
            <div className="h-1 w-32 bg-[#FFEEAD] rounded-full mx-auto mb-6 mr-auto ml-0"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={staggerChildren}
              className="text-right"
            >
              <motion.div 
                variants={fadeInUp}
                className="mb-8 p-8 rounded-2xl text-right bg-white bg-opacity-70 backdrop-blur-md border border-white border-opacity-20 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)]"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#9B786F]" style={{ fontFamily: 'var(--font-playful, sans-serif)' }}>
                  הסיפור שלנו
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  סטודיו לצילום דלתא הוא סטודיו מוביל בתחום האופנה עם ניסיון של למעלה מ-15 שנים. אנחנו מתמחים במתן שירותי צילום מקצועיים ואיכותיים ללקוחותינו, תוך שימת דגש על חדשנות, יצירתיות ותשומת לב לפרטים הקטנים.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  הצוות המקצועי שלנו מורכב מצלמים מנוסים ומוכשרים, שיודעים כיצד להפיק את המיטב מכל סיטואציית צילום ולהעניק ללקוחותינו תוצאות מרהיבות שעולות על כל ציפיותיהם.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="p-8 rounded-2xl text-right bg-white bg-opacity-70 backdrop-blur-md border border-white border-opacity-20 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)]"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#9B786F]" style={{ fontFamily: 'var(--font-playful, sans-serif)' }}>
                  הגישה שלנו
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  אנו מאמינים שכל פרויקט צילום הוא ייחודי ודורש גישה מותאמת אישית. אנו עובדים בשיתוף פעולה הדוק עם לקוחותינו כדי להבין את החזון שלהם ולהפוך אותו למציאות מצולמת מרהיבה.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  בסטודיו דלתא, אנו משלבים טכניקות צילום מסורתיות עם טכנולוגיות חדשניות כדי ליצור תמונות שלא רק מספרות סיפור, אלא גם מעוררות רגש ומשאירות רושם בלתי נשכח.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Image and Stats */}
            <div>
              {/* Image with glassmorphism effect */}
              <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-[10px_10px_30px_rgba(0,0,0,0.1),-10px_-10px_30px_rgba(255,255,255,0.7)]"
              >
                <div className="aspect-w-4 aspect-h-3 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="סטודיו צילום מקצועי" 
                    className="object-cover w-full h-full rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9B786F] to-transparent opacity-30 rounded-2xl"></div>
                </div>
                <div className="absolute bottom-0 right-0 left-0 p-6 bg-white bg-opacity-20 backdrop-blur-md border-t border-white border-opacity-30">
                  <p className="text-white font-bold text-lg text-right">
                    הסטודיו שלנו במרכז תל אביב
                  </p>
                </div>
              </motion.div>

              {/* Stats with neumorphic design */}
              <motion.div
                initial="hidden"
                animate={controls}
                variants={staggerChildren}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="p-6 rounded-2xl text-center bg-white bg-opacity-70 backdrop-blur-sm border border-white border-opacity-20 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.05),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all duration-300"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-[#9B786F]">
                        {stat.icon}
                      </div>
                      <span className="text-3xl font-bold text-[#9B786F]" style={{ fontFamily: 'var(--font-playful, sans-serif)' }}>
                        {stat.value}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {stat.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Testimonial with glassmorphism */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-[#9B786F]/10 to-[#FFEEAD]/10 backdrop-blur-md border border-white border-opacity-20 shadow-lg relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#FFEEAD] opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#9B786F] opacity-20 blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#9B786F]" style={{ fontFamily: 'var(--font-playful, sans-serif)' }}>
                מה הלקוחות שלנו אומרים
              </h3>
              
              <div className="text-center">
                <p className="text-gray-700 text-lg italic mb-6">
                  "סטודיו דלתא הפך את החזון שלנו למציאות מצולמת מדהימה. הצוות המקצועי והיצירתי ידע בדיוק איך להוציא את המיטב מהקולקציה החדשה שלנו. התוצאות עלו על כל ציפיותינו!"
                </p>
                <div className="flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                    alt="לקוחה מרוצה" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#9B786F]"
                  />
                  <div className="mr-4 text-right">
                    <p className="font-bold text-[#9B786F]">מיכל לוי</p>
                    <p className="text-sm text-gray-600">מנהלת שיווק, אופנת "אלגנט"</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;