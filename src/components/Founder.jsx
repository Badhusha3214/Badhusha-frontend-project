import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const TeamMember = ({ name, role, highlighted }) => (
  <div className={`rounded-full flex items-center w-full max-w-md overflow-hidden`}>
    <div className={`w-1/4 h-24 ${highlighted ? 'bg-indigo-800' : 'bg-gray-700'}`} >
    </div>
    <div className={`flex-grow p-4 ${highlighted ? 'bg-indigo-600' : 'bg-gray-800'}`}>
      <h3 className={`font-bold ${highlighted ? 'text-white' : 'text-gray-200'}`}>{name}</h3>
      <p className={`text-sm ${highlighted ? 'text-gray-200' : 'text-gray-400'}`}>{role}</p>
      <div className="flex space-x-2 mt-2">
        <Twitter size={16} className={`${highlighted ? 'text-white' : 'text-gray-400'}`} />
        <Instagram size={16} className={`${highlighted ? 'text-white' : 'text-gray-400'}`} />
        <Linkedin size={16} className={`${highlighted ? 'text-white' : 'text-gray-400'}`} />
      </div>
    </div>
  </div>
);

const TeamMembers = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h2 className="text-xl font-bold mb-2">• Our leader</h2>
      <h1 className="text-4xl font-bold mb-8 max-w-xl">Each product is crafted with passion and dedication. Meet our leader!</h1>
      
      <div className="space-y-4">
        <TeamMember name="Cody Fisher" role="CEO Founder" highlighted={true} />
        <TeamMember name="Kristin Watson" role="Manager" highlighted={false} />
        <TeamMember name="Leslie Alexander" role="Design Leader" highlighted={false} />
      </div>
    </div>
  );
};

export default TeamMembers;