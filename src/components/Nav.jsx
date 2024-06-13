// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { scroller } from 'react-scroll';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const underlineRef = useRef(null);

  const menuItems = [
    { name: 'Logo', href: '#', isLogo: true },
    { name: 'Sobre mí', href: '#bio' },
    { name: 'Educación', href: '#educacion' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleItemClick = (e, index) => {
    e.preventDefault();
    scroller.scrollTo(menuItems[index].href.slice(1), {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const underline = underlineRef.current;
    if (underline && hoveredIndex !== null) {
      const activeItem = document.querySelector(`.nav-item-${hoveredIndex}`);
      if (activeItem) {
        underline.style.width = `${activeItem.offsetWidth}px`;
        underline.style.left = `${activeItem.offsetLeft}px`;
      }
    } else if (underline && activeIndex !== null) {
      const activeItem = document.querySelector(`.nav-item-${activeIndex}`);
      if (activeItem) {
        underline.style.width = `${activeItem.offsetWidth}px`;
        underline.style.left = `${activeItem.offsetLeft}px`;
      }
    } else if (underline) {
      underline.style.width = `0px`;
    }
  }, [hoveredIndex, activeIndex]);

  return (
    <nav className="bg-black p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-white text-xl font-bold">Arturo Adrián Estrada De La Torre</div>
        <div className="relative">
          <div className="relative flex space-x-4">
            {menuItems.slice(1).map((item, index) => (
             <a
             key={index}
             href={item.href}
             className={`relative nav-item-${index} px-3 py-2 text-gray-300 hover:text-blue-300 transition-colors duration-300 ${
               activeIndex === index ? 'text-blue-300' : ''
             }`}
             onClick={(e) => handleItemClick(e, index)}
             onMouseEnter={() => handleMouseEnter(index)}
             onMouseLeave={handleMouseLeave}
           >
             {item.name}
           </a>
            ))}
          </div>
          <span
            ref={underlineRef}
            className="absolute bottom-0 left-0 h-1 bg-gray-300 transition-all duration-300"
            style={{ width: 0, height: '2px' }}
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
