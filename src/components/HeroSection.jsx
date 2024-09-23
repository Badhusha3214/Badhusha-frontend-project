import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">We create award-winning websites</h1>
      <p className="text-xl mb-8">
        Based in San Francisco, we're a digital product design & development studio...
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
        Explore
      </button>
    </section>
  );
};

export default HeroSection;
