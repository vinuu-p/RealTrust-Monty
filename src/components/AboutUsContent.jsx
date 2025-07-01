import React from 'react';

const AboutUsContent = () => {
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
        About Us
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
      
      <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
        With over 15+ years of experience in the real estate market, we pride ourselves on 
        commitment to excellent customer service and building strong relationships with clients. 
        We provide quality services to build relationships with clients and, more importantly, 
        maintain those relationships by communicating effectively.
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-md border-2 border-blue-600 hover:border-blue-700">
        LEARN MORE
      </button>
    </div>
  );
};

export default AboutUsContent;