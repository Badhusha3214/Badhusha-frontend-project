import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ title, description, isActive }) => (
  <div className={`p-4 rounded-lg w-96 h-96  flex flex-col justify-between ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-300'}`}>
    <div className="flex justify-between items-center ">
      <h3 className="text-lg font-bold ">{title}</h3>
      <ArrowUpRight size={20} />
    </div>
    <p className="text-sm mt-2">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: 'BRAND IDENTITY',
      description: 'We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company\'s values',
      isActive: true
    },
    {
      title: 'UX/UI DESIGN',
      description: 'We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company\'s values',
      isActive: false
    },
    {
      title: 'WEBFLOW DEVELOPER',
      description: 'We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company\'s values',
      isActive: false
    }
  ];

  return (
    <div className="bg-black text-white flex flex-col justify-end items-center">
      <div className="p-8 m-10 bg-gray-900 rounded-lg ">
        
        <div className='flex' >

        <h2 className="text-xl font-normal mb-4">• Our Services</h2>
        <p className="text-3xl md:ml-96 md:pl-32 font-bold mb-8">
          We are a close-knit team of experts <br />
          dedicated to crafting memorable and <br />
          <span className="text-gray-500">emotionally engaging websites, digital <br />
          experiences, and native apps.</span>
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
