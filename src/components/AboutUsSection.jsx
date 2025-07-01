import React from 'react';
import AboutUsImageSection from './AboutUsImageSection';
import AboutUsContent from './AboutUsContent';

const AboutUsSection = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutUsImageSection />
        <AboutUsContent />
      </div>
    </section>
  );
};

export default AboutUsSection;