import React from 'react';

const Services = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold mb-4">Brand Identity</h3>
          <p>We provide...</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold mb-4">UX/UI Design</h3>
          <p>We provide...</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold mb-4">Webflow Developer</h3>
          <p>We provide...</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
