import React from 'react';

const HappyClientsSection = () => {
  const clients = [
    {
      id: 1,
      image: "https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751356682/Ellipse_33_u24ffl.svg",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Jaxman Smith",
      designation: "Web Developer"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751356682/Ellipse_35_hioufv.svg",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Shigure Kayak",
      designation: "Web Developer"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751356680/Ellipse_28_cg1mj5.svg",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "John Lapere",
      designation: "Web Developer"
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751356680/Ellipse_31_dk72aq.svg",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Marry Freeman",
      designation: "Managing Director"
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751356679/Ellipse_29_gkwq0j.svg",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Lucy",
      designation: "Software Engineer"
    }
  ];

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-20 w-8 h-8 bg-blue-500 rounded-full opacity-60"></div>
      <div className="absolute bottom-20 right-16 w-6 h-6 bg-orange-400 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
            Happy Clients
          </h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div 
              key={client.id} 
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              } rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100`}
            >
              {/* Client Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                />
              </div>
              
              {/* Feedback */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                {client.feedback}
              </p>
              
              {/* Client Info */}
              <div className="text-center">
                <h4 className="font-semibold text-blue-600 text-sm mb-1">
                  {client.name}
                </h4>
                <p className="text-gray-500 text-xs">
                  {client.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClientsSection;