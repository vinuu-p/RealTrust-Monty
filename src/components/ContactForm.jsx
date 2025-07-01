import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="bg-blue-800/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl max-w-md w-full border border-white/10">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Get a Free</h2>
        <h2 className="text-2xl lg:text-3xl font-bold text-white">Consultation</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          { field: 'fullName', placeholder: 'Full Name', type: 'text' },
          { field: 'email', placeholder: 'Enter Email', type: 'email' },
          { field: 'mobile', placeholder: 'Enter Mobile', type: 'tel' },
          { field: 'city', placeholder: 'Select City', type: 'text' }
        ].map(({ field, placeholder, type }) => (
          <div className="relative" key={field}>
            <input
              type={type}
              name={field}
              placeholder={placeholder}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/15 border border-white/25 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all backdrop-blur-sm"
              required
            />
          </div>
        ))}

        <button 
          type="submit" 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Get Quote Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;