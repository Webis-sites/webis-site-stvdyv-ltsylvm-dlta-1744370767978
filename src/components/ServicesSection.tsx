'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaPortrait, FaShoppingBag, FaUserTie, FaBuilding, FaRegHeart } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

const ServicesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: ServiceCardProps[] = [
    {
      title: 'צילום אופנה',
      description: 'צילומי אופנה מקצועיים לקטלוגים, מגזינים ומדיה חברתית. אנו מתמחים ביצירת תמונות שמדגישות את הבגדים והאביזרים בצורה הטובה ביותר.',
      imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <FaCamera />
    },
    {
      title: 'צילום מוצרים',
      description: 'צילומי מוצרים באיכות גבוהה לחנויות אונליין, קטלוגים ופרסום. אנו מבטיחים שהמוצרים שלך יראו מושלמים מכל זווית.',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <FaShoppingBag />
    },
    {
      title: 'צילומי פורטרט',
      description: 'צילומי פורטרט אישיים ומקצועיים שמשקפים את האישיות והאופי הייחודי שלך. מושלם לפרופילים עסקיים ואישיים.',
      imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <FaPortrait />
    },
    {
      title: 'צילומי תדמית',
      description: 'צילומי תדמית מקצועיים לעסקים וארגונים. אנו יוצרים תמונות שמשקפות את הערכים והחזון של העסק שלך.',
      imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <FaUserTie />
    },
    {
      title: 'צילום אדריכלי',
      description: 'צילומי אדריכלות ועיצוב פנים שמדגישים את היופי והפונקציונליות של המבנים והחללים. מושלם לאדריכלים ומעצבי פנים.',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <FaBuilding />
    },
    {
      title: 'צילומי אירועים',
      description: 'צילום אירועים מקצועי שמנציח את הרגעים המיוחדים בחיים. אנו מתמחים בצילום חתונות, ימי הולדת, אירועים עסקיים ועוד.',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <FaRegHeart />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="services-section" dir="rtl" className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-right" style={{ color: '#9B786F' }}>
            השירותים שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right">
            סטודיו לצילום דלתא מציע מגוון רחב של שירותי צילום מקצועיים המותאמים לצרכים הייחודיים של כל לקוח
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className="h-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: hoveredCard === index 
                    ? '20px 20px 60px rgba(0, 0, 0, 0.1), -20px -20px 60px rgba(255, 255, 255, 0.8), inset 0 0 0 rgba(255, 255, 255, 0.4), inset 0 0 0 rgba(0, 0, 0, 0.1)'
                    : '10px 10px 30px rgba(0, 0, 0, 0.1), -10px -10px 30px rgba(255, 255, 255, 0.8), inset 0 0 0 rgba(255, 255, 255, 0.4), inset 0 0 0 rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                  transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)'
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
                    style={{ 
                      backgroundImage: `url(${service.imageUrl})`,
                      transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  <motion.div 
                    className="absolute top-4 right-4 bg-white/90 p-3 rounded-full text-2xl"
                    style={{ color: '#9B786F' }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                
                <div className="p-6 text-right">
                  <h3 
                    className="text-2xl font-bold mb-3 transition-all duration-300"
                    style={{ 
                      color: hoveredCard === index ? '#9B786F' : '#333',
                      fontFamily: '"Rubik", sans-serif'
                    }}
                  >
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <motion.button
                    className="mt-6 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 flex items-center justify-center mr-auto"
                    style={{ 
                      backgroundColor: '#9B786F',
                      boxShadow: '5px 5px 15px rgba(155, 120, 111, 0.3)'
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: '#8a6a62',
                      boxShadow: '8px 8px 20px rgba(155, 120, 111, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    לפרטים נוספים
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;