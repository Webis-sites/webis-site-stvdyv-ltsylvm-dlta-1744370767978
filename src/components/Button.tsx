'use client';

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';

// Define button variants and sizes
type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

// Define props interface with TypeScript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text,
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      icon,
      iconPosition = 'left',
      className = '',
      ...props
    },
    ref
  ) => {
    // Base styles for all buttons
    const baseStyles = 'relative font-medium rounded-xl focus:outline-none transition-all duration-300 flex items-center justify-center';
    
    // Size-specific styles
    const sizeStyles = {
      small: 'text-sm py-2 px-4',
      medium: 'text-base py-3 px-6',
      large: 'text-lg py-4 px-8',
    };
    
    // Variant-specific styles (neumorphic + glassmorphism)
    const variantStyles = {
      primary: `bg-opacity-80 backdrop-filter backdrop-blur-md bg-[#9B786F] text-white 
                border border-[#ffffff33] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_16px_rgba(155,120,111,0.2)]
                hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_12px_20px_rgba(155,120,111,0.3)]
                active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)]
                active:translate-y-0.5`,
      secondary: `bg-opacity-80 backdrop-filter backdrop-blur-md bg-[#FFEEAD] text-[#9B786F]
                  border border-[#ffffff33] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_16px_rgba(255,238,173,0.2)]
                  hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_12px_20px_rgba(255,238,173,0.3)]
                  active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)]
                  active:translate-y-0.5`,
    };
    
    // Width style
    const widthStyle = fullWidth ? 'w-full' : '';
    
    // Icon spacing based on position
    const iconSpacing = icon ? (iconPosition === 'left' ? 'space-x-2 rtl:space-x-reverse' : 'space-x-2 rtl:space-x-reverse flex-row-reverse') : '';

    return (
      <motion.button
        id="studio-button"
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${iconSpacing} ${className}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        dir="rtl"
        aria-label={text}
        role="button"
        {...props}
      >
        {icon && <span className="flex items-center">{icon}</span>}
        <span>{text}</span>
        
        {/* Animated highlight effect */}
        <motion.span
          className="absolute inset-0 rounded-xl bg-white opacity-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

// Usage example:
/*
import { FaCamera } from 'react-icons/fa';

// Primary button
<Button 
  text="הזמן צילום" 
  variant="primary" 
  size="medium" 
  onClick={() => console.log('Button clicked')} 
/>

// Secondary button with icon
<Button 
  text="צור קשר" 
  variant="secondary" 
  size="large" 
  icon={<FaCamera />} 
  iconPosition="right"
  onClick={() => console.log('Contact button clicked')} 
/>

// Full width button
<Button 
  text="הירשם לניוזלטר" 
  variant="primary" 
  fullWidth 
  onClick={() => console.log('Newsletter signup')} 
/>
*/