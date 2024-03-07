import React from 'react';

interface NavItem {
  title: string;
  link: string;
}

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className="bg-gray-800 p-4">
        <span className='font-bold text-[#59D5E0] text-4xl pl-32'>TRT</span><span className='font-bold text-[white] text-4xl'>AFRİKA</span>
      <ul className="flex justify-end">
        {items.map((item, index) => (
          <li key={index} className="mr-6">
            <a href={item.link} className="text-white hover:text-gray-300">{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;