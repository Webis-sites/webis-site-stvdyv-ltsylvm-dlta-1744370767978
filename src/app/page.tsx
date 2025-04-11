'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Components generated by the builder will be added here */}
        <CTASection />
        <ContactForm />
        <TestimonialsSection />
        <ProcessSection />
        <ServicesSection />
        <AboutSection />
        <HeroSection />
      </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 סטודיו לצילום דלתא. webis
        </div>
      </footer>
    </div>
  );
}