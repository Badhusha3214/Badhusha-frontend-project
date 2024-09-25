//mr

import React, { useState } from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const TeamMember = ({ name, role, position, isSelected, onClick }) => {
  const isEven = position % 2 === 0;
  
  return (
    <div 
      onClick={onClick} 
      className={`hidden md:flex items-center justify-center w-full cursor-pointer ${position !== 0 ? '-mt-24' : ''}`}
    >
      <div className={`h-48 rounded-r-full border-t border-b border-r border-gray-700 bg-black ${isEven ? 'w-1/4' : 'w-2/3'}`}></div>
      
      <div className="w-2/4 m-3 h-48 rounded-full flex items-center overflow-hidden">
        <div className={`w-1/2 h-full ${isSelected ? 'bg-indigo-800' : 'bg-gray-700'}`}>
        </div>
        <div className={`w-1/2 h-full ${isSelected ? 'bg-indigo-600' : 'bg-gray-800'}`}>
          <div className="p-4">
            <h3 className={`font-bold ${isSelected ? 'text-white' : 'text-gray-200'}`}>{name}</h3>
            <p className={`text-sm ${isSelected ? 'text-gray-200' : 'text-gray-400'}`}>{role}</p>
            <div className="flex space-x-2 mt-2">
              <Twitter size={16} className={`${isSelected ? 'text-white' : 'text-gray-400'}`} />
              <Instagram size={16} className={`${isSelected ? 'text-white' : 'text-gray-400'}`} />
              <Linkedin size={16} className={`${isSelected ? 'text-white' : 'text-gray-400'}`} />
            </div>
          </div>
        </div>
      </div>
     
      <div className={`h-48 rounded-l-full border-t border-b border-l border-gray-700 bg-black ${isEven ? 'w-2/3' : 'w-1/4'}`}></div>
    </div>
  );
};

const MobileTeamMember = ({ name, role, isSelected, onClick }) => (
  <div 
    onClick={onClick} 
    className={`md:hidden rounded-full flex items-center w-full max-w-full overflow-hidden mb-4 cursor-pointer`}
  >
    <div className={`w-1/2 h-24 ${isSelected ? 'bg-indigo-800' : 'bg-gray-700'}`}>
    </div>
    <div className={`flex-grow h-24 ${isSelected ? 'bg-indigo-600' : 'bg-gray-800'}`}>
      <div className="p-2">
        <h3 className={`font-bold ${isSelected ? 'text-white' : 'text-gray-200'}`}>{name}</h3>
        <p className={`text-sm ${isSelected ? 'text-gray-200' : 'text-gray-400'}`}>{role}</p>
        <div className="flex space-x-2 mt-1">
          <Twitter size={12} className={`${isSelected ? 'text-white' : 'text-gray-400'}`} />
          <Instagram size={12} className={`${isSelected ? 'text-white' : 'text-gray-400'}`} />
          <Linkedin size={12} className={`${isSelected ? 'text-white' : 'text-gray-400'}`} />
        </div>
      </div>
    </div>
  </div>
);

const TeamMembers = () => {
  const teamMembers = [
    { name: "Cody Fisher", role: "CEO Founder" },
    { name: "Kristin Watson", role: "Manager" },
    { name: "Leslie Alexander", role: "Design Leader" },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const handleSelectMember = (name) => {
    setSelectedMember((prevSelected) => (prevSelected === name ? null : name));
  };

  return (
    <div className="bg-black text-white min-h-screen p-8 overflow-hidden">
      <div className="flex m-4 md:m-20 flex-col md:flex-row justify-between mb-20 mt-10">
        <h2 className="text-xl font-normal mb-4 md:mb-0">• Our leader</h2>
        <p className="text-3xl font-bold max-w-2xl">
          Each product is crafted with passion and dedication. Meet our leader!
        </p>
      </div>
      
      <div className="md:space-y-0">
        {teamMembers.map((member, index) => (
          <React.Fragment key={member.name}>
            <TeamMember
              {...member}
              position={index}
              isSelected={selectedMember === member.name}
              onClick={() => handleSelectMember(member.name)}
            />
            <MobileTeamMember
              {...member}
              isSelected={selectedMember === member.name}
              onClick={() => handleSelectMember(member.name)}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;