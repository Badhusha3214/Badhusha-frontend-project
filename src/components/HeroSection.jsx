import React from 'react';
import bgImg from '../assets/img.svg';


const HeroSection = () => {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-blue-700 opacity-50" />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-20">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-9xl font-normal mb-6 leading-tight lg:mb-20">
            We create award winning website
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-80">
            Based in San Francisco, we're a digital products design& development studio 
            that passionate with the creation high applicability of digital experiences
          </p>
          <button className="bg-transparent hover:bg-white/10 text-white font-semibold py-2 px-4 border border-white rounded-full transition duration-300 flex items-center space-x-2">
            <span>Explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 left-20 w-full h-full">
      <img 
  src={bgImg} 
  alt="Background"
  className="w-full h-full object-cover object-left-top"
/>

        {/* Overlay to blend image with background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent " />
      </div>
    </section>
  );
};

export default HeroSection;