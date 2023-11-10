import React from 'react';
import SidebarItem from './SidebarItem';

const sidebarItems = [
    {name: 'All Apps', icon: '/assets/images/app.svg', isActive: false},
    // ... other items
    {name: 'CRM', icon: '/assets/images/sascrm.svg', isActive: true},
];

const Sidebar = () => {
    return (
        <div className="min-h-screen">
            {sidebarItems.map((item) => (
                <SidebarItem key={item.name} name={item.name} icon={item.icon} isActive={item.isActive}/>
            ))}
        </div>
    );
};

export default Sidebar;
