import React from 'react';
import { Home, Palette, DollarSign } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-orange-500 rounded-full opacity-60"></div>
      <div className="absolute bottom-40 right-10 w-3 h-3 bg-blue-500 rounded-full opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Not Your Average Realtor Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
              Not Your Average Realtor
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Real estate success lies in personalized consultation, 
              expert marketing design, and effective marketing to get 
              the most out of your dollar at the end of the day.
            </p>
          </div>

          {/* Right Images */}
          <div className="relative">
            {/* Large center image */}
            <div className="relative z-10 w-80 h-80 mx-auto">
              <img
                src="https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751352815/Ellipse_11_buatwt.svg"
                alt="Professional Realtor"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
            
            {/* Top right image */}
            <div className="absolute -top-8 -right-8 w-48 h-48 z-20">
              <img
                src="https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751352796/Ellipse_12_duvfgd.svg"
                alt="Happy Couple"
                className="w-full h-full object-cover rounded-full shadow-xl"
              />
            </div>
            
            {/* Bottom right image */}
            <div className="absolute -bottom-8 -right-4 w-40 h-40 z-20">
              <img
                src="https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751352796/Ellipse_13_mcshh9.svg"
                alt="Satisfied Client"
                className="w-full h-full object-cover rounded-full shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
            Why Choose Us?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-16"></div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Potential ROI */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Potential ROI</h3>
              <p className="text-gray-600 leading-relaxed">
                We strategically view and design your home to get the 
                maximum value out of your current home for sale, so we can work your 
                budget to get the best value for your money.
              </p>
            </div>

            {/* Design */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Palette className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Our strategic, and creative design approach helps position 
                your property for design excellence and expert marketing 
                techniques to be marketable to the target buyer demographic.
              </p>
            </div>

            {/* Marketing */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Marketing</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic marketing, analytics, and social media management and 
                implementation of a great marketing plan to consistently 
                work your home to reach today's buyer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;