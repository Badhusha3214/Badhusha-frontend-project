import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ title, description, isActive, onClick }) => (
  <div 
    onClick={onClick} 
    className={`p-10 rounded-lg w-full h-96 flex flex-col justify-between cursor-pointer ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-950 text-gray-300'}`}>
    <div className="flex justify-between items-center">
      <h3 className="text-5xl font-normal ">{title}</h3>
      <ArrowUpRight size={20} />
    </div>
    <p className="text-lg mt-2">{description}</p>   
  </div>
);

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0); // Track active service index

  const services = [
    {
      title: 'BRAND IDENTITY',
      description: 'We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company\'s values',
    },
    {
      title: 'UX/UI DESIGN',
      description: 'We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company\'s values',
    },
    {
      title: 'WEBFLOW DEVELOPER',
      description: 'We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company\'s values',
    }
  ];

  return (
    <div className="bg-black text-white flex justify-center items-center ">
      <div className="p-10 bg-gray-950 rounded-lg w-full m-10  flex flex-col">
        <div className="flex flex-col md:flex-row justify-between mb-20 mt-10">
          <h2 className="text-xl font-normal mb-4 md:mb-0">• Our Services</h2>
          <p className="text-3xl font-bold max-w-2xl">
            We are a close-knit team of experts dedicated to crafting memorable and{' '}
            <span className="text-gray-500">
              emotionally engaging websites, digital experiences, and native apps.
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow mb-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              isActive={index === activeService} 
              onClick={() => setActiveService(index)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
