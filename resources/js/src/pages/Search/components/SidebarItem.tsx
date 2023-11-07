import React from 'react';

interface SidebarItemProps {
  name: string;
  icon?: JSX.Element; // You can replace this with the specific type if you use a specific icon library
  isActive?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ name, icon, isActive }) => {
  return (
    <div className={`p-4 flex items-center ${isActive ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-blue-800 hover:text-white'}`}>
      {icon && <div className="mr-3"><img src={icon} alt={name} className="h-6 w-6 mr-3" /></div>}
      <span>{name}</span>
    </div>
  );
};