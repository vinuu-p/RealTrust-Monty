import React, { useState } from 'react';

const FooterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribe email:', email);
    // Handle newsletter subscription
  };

  return (
    <section className="relative">
      {/* Call-to-Action Section with Background Image */}
      <div className="relative min-h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751357434/Rectangle_xarke9.svg)` 
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
            Learn more about our listing process, as well as our<br />
            additional staging and design work.
          </h2>
          
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              {['Home', 'Services', 'Projects', 'Testimonials', 'Contact'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-white hover:text-blue-200 transition-colors font-medium"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Subscribe to</h3>
              <form onSubmit={handleSubscribe} className="flex max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
                <button 
                  type="submit"
                  className="bg-blue-800 hover:bg-blue-900 px-6 py-2 rounded-r-lg font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-end gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751357153/Group-1_e9yrjl.svg" 
                  alt="Twitter" 
                  className="w-8 h-8"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751357151/Group_wbvhuc.svg" 
                  alt="Instagram" 
                  className="w-8 h-8"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751357150/Frame_ipj7od.svg" 
                  alt="Facebook" 
                  className="w-8 h-8"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751357156/Linkedin_ijkwp5.svg" 
                  alt="LinkedIn" 
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-900 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © All Rights Reserved 2025
              </div>

              {/* Logo/Brand */}
              <div className="flex items-center space-x-2">
                <div className="text-white font-bold text-lg">
                  <span className="text-blue-400">Real</span> Trust
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;