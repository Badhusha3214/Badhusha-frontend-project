import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "A studio filled with passion, professionalism, and boundless creativity. They exceeded my expectations with their excellent services, high-quality products, and affordable prices. I'm extremely satisfied!",
    name: "Kathryn Murphy",
    position: "Senior Marketing, Spotify",
  },
  {
    quote: "The team was fantastic! They took the time to understand our needs and delivered beyond our expectations. Highly recommend their services!",
    name: "John Doe",
    position: "Creative Director, ABC Corp",
  },
  {
    quote: "A great experience from start to finish. Their attention to detail and customer service is unmatched!",
    name: "Emily Johnson",
    position: "Product Manager, XYZ Inc",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gradient-to-b from-black to-blue-900 text-white min-h-screen p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:mt-32">
        <h2 className="text-2xl md:text-xl font-normal mb-4 md:mb-0">• Testimonials</h2>
        <div className="w-full max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="flex-grow">
              <p className="text-4xl md:text-6xl font-normal mb-6">
                {testimonials[currentIndex].quote}
              </p>
              <div className='flex items-center'>
                <div className="p-2 w-12 h-12 rounded-full bg-blue-900 transition-colors mr-5"></div>
                <div>
                  <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-blue-300">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <button onClick={handlePrev} className="p-3 md:p-5 rounded-full border border-blue-400 hover:bg-blue-700 transition-colors">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button onClick={handleNext} className="p-3 md:p-5 rounded-full border border-blue-400 hover:bg-blue-700 transition-colors">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
