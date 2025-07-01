import React from 'react';

const OurProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: "https://ik.imagekit.io/n38fvcqly/pexels-brett-sayles-2881232.svg?updatedAt=1751355683726",
      title: "Consultation",
      description: "Proin ac lorem consectetur, consectetur adipiscing elit."
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751356054/pexels-brett-sayles-2881232-1_xgr92a.svg",
      title: "Design",
      description: "Proin ac lorem consectetur, consectetur adipiscing elit."
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751355998/pexels-brett-sayles-2881232-2_xb7hgp.svg",
      title: "Marketing & Design",
      description: "Proin ac lorem consectetur, consectetur adipiscing elit."
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751356021/pexels-brett-sayles-2881232-3_tef1iv.svg",
      title: "Consultation & Marketing",
      description: "Proin ac lorem consectetur, consectetur adipiscing elit."
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/ds9gbuqrv/image/upload/v1751353205/pexels-fauxels-3182834_ucvxty.svg",
      title: "Consultation",
      description: "Proin ac lorem consectetur, consectetur adipiscing elit."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 right-20 w-6 h-6 bg-blue-400 rounded-full opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
            Our Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We know what buyers are looking for and suggest projects that will bring 
            clients top dollar for the sale of their homes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all transform hover:scale-105 text-sm">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default OurProjectsSection;