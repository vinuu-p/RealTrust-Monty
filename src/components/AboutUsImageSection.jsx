import React from 'react';

const AboutUsImageSection = () => {
  return (
    <div className="relative w-full h-96 mb-16">
      {/* Background decorative shapes */}
      {/* Large light blue circle - bottom left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-60 -translate-x-16 translate-y-16"></div>
      
      {/* Medium light blue circle - top right area */}
      <div className="absolute top-16 right-32 w-32 h-32 bg-blue-100 rounded-full opacity-60"></div>
      
      {/* Light blue wave shape - right side */}
      <div className="absolute top-0 right-0 w-80 h-full bg-blue-50 opacity-70" 
           style={{
             clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)'
           }}>
      </div>

      {/* Blue rectangles and shapes */}
      <div className="absolute top-20 left-1/3 w-12 h-8 bg-blue-500 rounded"></div>
      <div className="absolute top-32 right-1/4 w-16 h-4 bg-blue-500 rounded"></div>
      
      {/* Orange accent rectangles */}
      <div className="absolute bottom-32 left-1/4 w-8 h-12 bg-orange-500 rounded"></div>
      <div className="absolute bottom-20 right-1/3 w-12 h-6 bg-orange-500 rounded"></div>

      {/* Image 1 - Top left */}
      <div className="absolute top-8 left-1/4 w-40 h-32 transform -rotate-3">
        <div className="w-full h-full bg-white rounded-lg shadow-lg p-2">
          <img
            src="https://ik.imagekit.io/n38fvcqly/pexels-brett-sayles-2881232.svg?updatedAt=1751355683726"
            alt="Realtor with clients"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      {/* Image 2 - Center */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-48 h-36 rotate-2">
        <div className="w-full h-full bg-white rounded-lg shadow-lg p-2">
          <img
            src="https://ik.imagekit.io/n38fvcqly/pexels-andres-ayrton-6578391.svg?updatedAt=1751355714062"
            alt="Real estate consultation"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      {/* Image 3 - Bottom right */}
      <div className="absolute bottom-8 right-1/4 w-40 h-32 transform rotate-3">
        <div className="w-full h-full bg-white rounded-lg shadow-lg p-2">
          <img
            src="https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751353205/pexels-fauxels-3182834_ucvxty.svg"
            alt="Happy clients"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      {/* Additional decorative dots */}
      <div className="absolute top-12 right-12 w-3 h-3 bg-blue-400 rounded-full"></div>
      <div className="absolute bottom-24 left-12 w-2 h-2 bg-orange-400 rounded-full"></div>
      <div className="absolute top-1/2 left-8 w-4 h-4 bg-blue-300 rounded-full opacity-70"></div>
    </div>
  );
};

export default AboutUsImageSection;