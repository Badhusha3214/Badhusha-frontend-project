import React from 'react';

const FeaturedWorks = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <h2 className="text-center text-4xl font-bold mb-12">Take a look at our projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* Project Cards */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Roboto Landing Page</h3>
          <p>Development | UI/UX | Illustration</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Poppin App Design</h3>
          <p>UI/UX | Illustration</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Groteck Website</h3>
          <p>Development | UI/UX | Illustration</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default FeaturedWorks;
