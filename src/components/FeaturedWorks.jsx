import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const WEFOStudioHero = () => {
  return (
    <div className="bg-black text-white  flex flex-col justify-between">
      {/* Main content */}
      <div className="  md:mx-20 px-4 py-20">
        <h1 className="text-2xl font-bold mb-6">• Who are we?</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image placeholder */}
          <div className="w-full md:w-1/3 md:h-40 bg-blue-900 rounded-full aspect-video flex items-center justify-center">
            <span className="text-white text-lg"></span>
          </div>
          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-2xl md:text-3xl font-semibold mb-4">
              We create mind-blowing visuals, brands,
              websites and products <span className="text-gray-500">that help startups
              and innovative companies gain more
              exposure.</span>
            </p>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-full flex items-center mt-8 w-fit">
              Learn more
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Flowing banner */}
      <div className="relative w-full h-40 overflow-hidden bg-black">
  {/* Top Banner */}
  <div className="absolute inset-0 transform -skew-y-2 z-10">
    <div className="animate-marquee whitespace-nowrap flex items-center h-full">
    <div className='bg-gray-900'>
      {[...Array(10)].map((_, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-600  text-2xl mx-4">WEFO STUDIO</span>
          <span className="text-gray-600 text-2xl mx-4">◆</span>
        </React.Fragment>
      ))}
      </div>
    </div>
  </div>

  {/* Bottom Banner */}
  <div className="absolute inset-0 transform skew-y-2 z-20">
    <div className="animate-marquee2 whitespace-nowrap flex items-center h-full">
      <div className='bg-blue-600'>
      {[...Array(10)].map((_, index) => (
        <React.Fragment key={index}>
          <span className="text-white  text-2xl mx-4">WEFO STUDIO</span>
          <span className="text-white text-2xl mx-4">◆</span>
        </React.Fragment>
      ))}
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default WEFOStudioHero;