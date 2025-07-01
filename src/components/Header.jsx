import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/logo.svg" 
                alt="Real Trust Logo" 
                className="h-12 w-auto"
              />
            </div>
          </div>

          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-8">
              {['HOME', 'SERVICES', 'ABOUT', 'PROJECTS', 'TESTIMONIALS'].map((label) => (
                <a 
                  key={label} 
                  href="#" 
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm tracking-wide"
                >
                  {label}
                </a>
              ))}
            </nav>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 ml-8 shadow-md">
              CONTACT
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden ml-4 p-2">
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;