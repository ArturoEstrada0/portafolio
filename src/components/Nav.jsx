import React, { useState, useEffect, useRef } from "react";
import { scroller } from "react-scroll";
import "../assets/nav.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú hamburguesa está abierto
  const [isScrolled, setIsScrolled] = useState(false); // Estado para controlar si el usuario ha hecho scroll
  const underlineRef = useRef(null);

  const menuItems = [
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Sobre mí", href: "#bio" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleItemClick = (e, index) => {
    e.preventDefault();
    scroller.scrollTo(menuItems[index].href.slice(1), {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setActiveIndex(index);
    setIsOpen(false); // Cerrar el menú hamburguesa al hacer clic en un elemento
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const sections = menuItems
      .filter((item) => !item.isLogo) // Excluye el logo
      .map((item) => document.querySelector(item.href));

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        setActiveIndex(i); // Ajuste de índice ya que excluimos el logo
        break;
      }
    }

    // Si el usuario ha hecho scroll más de 50px, cambiar el estado a true
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamar a handleScroll para configurar el estado inicial
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const underline = underlineRef.current;
    if (underline && (hoveredIndex !== null || activeIndex !== null)) {
      const index = hoveredIndex !== null ? hoveredIndex : activeIndex;
      const activeItem = document.querySelector(`.nav-item-${index}`);
      if (activeItem) {
        underline.style.width = `${activeItem.offsetWidth}px`;
        underline.style.left = `${activeItem.offsetLeft}px`;
      }
    } else if (underline) {
      underline.style.width = `0px`;
    }
  }, [hoveredIndex, activeIndex]);

  return (
    <nav
      className={`bg-fondo p-4 fixed w-full top-0 z-50 ${
        isScrolled ? "bg-white/90 " : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <a href="#" id="style-2" data-replace="Descaga mi CV">
            <span className=" text-gray-500">Arturo Adrián</span> <span> </span>
            <span>Estrada De La Torre</span>
          </a>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`nav-item-${index} px-3 py-2 text-gray-300 hover:text-green-300 transition-colors duration-300 ${
                  activeIndex === index ? "text-green-300" : ""
                }`}
                onClick={(e) => handleItemClick(e, index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{ transition: "transform .2s" }} // Agrega esta línea
                onMouseOver={(event) => {
                  event.target.style.transform = "scale(1.1)";
                }} // Agrega esta línea
                onMouseOut={(event) => {
                  event.target.style.transform = "";
                }} // Agrega esta línea
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Menú hamburguesa para dispositivos móviles */}
          <button
            className="md:hidden ml-4 text-gray-300 hover:text-green-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Menú hamburguesa desplegable en dispositivos móviles */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center mt-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`block py-2 text-gray-300 hover:text-green-300 transition-colors duration-300 ${
                activeIndex === index ? "text-green-300" : ""
              }`}
              onClick={(e) => handleItemClick(e, index)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div
        ref={underlineRef}
        className="underline absolute bottom-0 h-0.5 bg-green-300 transition-all duration-300"
      ></div>
    </nav>
  );
};

export default Navbar;
