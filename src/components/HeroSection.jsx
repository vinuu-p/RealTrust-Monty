import React from 'react';
import ContactForm from './ContactForm';
// import backgroundImage from '../assets/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg';


const HeroSection = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751351598/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home_1_bqynkx.svg)` }}
>
  <div className="absolute inset-0 bg-black/20"></div>
</div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
          <div className="flex items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Consultation,<br />
                Design,<br />
                <span className="text-white">& Marketing</span>
              </h1>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;