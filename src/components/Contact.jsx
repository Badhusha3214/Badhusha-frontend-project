// mr

import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, tags, size, image, className = '' }) => (
  <div className={`bg-black rounded-lg p-6 flex flex-col justify-between ${size === 'large' ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'} ${className}`}>
    <div>
      {/* Image at the top of the card */}
      <img src={image} alt={title} className="w-full h-72 object-cover rounded-lg mb-4" />
      
      <div className="flex gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    </div>
    <button className="self-end flex items-center text-sm text-zinc-300 hover:text-white transition-colors">
      View project <ArrowRight className="ml-1 w-4 h-4" />
    </button>
  </div>
);

const FeaturedProjectsGrid = () => {
  const projects = [
    { title: 'Roboto Landing page', tags: ['Development', 'UI/UX', 'Illustration'], size: 'large', image: 'https://via.placeholder.com/500', className: 'md:mt-10' },
    { title: 'Poppin App Design', tags: ['UI/UX', 'Illustration'], size: 'medium', image: 'https://via.placeholder.com/500' },
    { title: 'Groteck Website', tags: ['Development', 'UI/UX', 'Illustration'], size: 'large', image: 'https://via.placeholder.com/500' },
    { title: 'Helvetica Branding', tags: ['Branding', 'UI/UX'], size: 'large', image: 'https://via.placeholder.com/500', className: 'md:-mt-96' },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile view: grid-cols-1, larger view: grid-cols-4 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 md:row-span-2">
            <ProjectCard {...projects[0]} />
          </div>

          <div className="space-y-6 md:col-span-2">
            <div className="mb-12 md:py-10 md:pl-10">
              <p className="text-zinc-400 text-sm mb-2">• Featured Works</p>
              <h2 className="text-4xl font-bold">Take a look at our projects</h2>
            </div>
            {/* Poppin App Design */}
            <ProjectCard {...projects[1]} />
          </div>

          {/* Groteck Website */}
          <div className="md:col-span-2 md:row-span-2">
            <ProjectCard {...projects[2]} />
          </div>

          {/* Helvetica Branding */}
          <div className="md:col-span-2 md:row-span-2">
            <ProjectCard {...projects[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsGrid;
