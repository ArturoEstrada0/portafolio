import React, { useState, useRef } from 'react';
import { scroller } from 'react-scroll';
import  './Header.css';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [bubblePosition, setBubblePosition] = useState({ x: -100, y: -100 });
  const [isStretching, setIsStretching] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsStretching(false); // Reiniciar el estiramiento cuando el cursor sale
    clearTimeout(timeoutRef.current); // Limpiar el timeout
  };

  const handleMouseMove = (e) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - boundingRect.left;
    const offsetY = e.clientY - boundingRect.top;

    // Establecer posición de la burbuja
    setBubblePosition({ x: offsetX - 30, y: offsetY - 30 });

    // Detectar dirección del movimiento del cursor
    if (!isStretching) {
      setIsStretching(true); // Activar el estiramiento inicial
    }

    // Reiniciar el timeout para volver a la forma original después de 100ms
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsStretching(false);
    }, 100);
  };

  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <header
      className="relative flex items-center justify-center h-screen mb-12 overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      onMouseEnter={handleMouseEnter} // Cuando el cursor entra al encabezado
      onMouseLeave={handleMouseLeave} // Cuando el cursor sale del encabezado
      onMouseMove={handleMouseMove} // Maneja movimiento del ratón
      style={{ cursor: 'none' }} // Hacer que el cursor del mouse sea invisible

    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 z-10"></div>
      <div className="relative z-30 p-5 text-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
          Hola, soy <span className='text-blue-400'>Arturo Estrada</span>
        </h1>
        <p className="text-xl font-light mb-4 animate__animated animate__fadeInUp animate__delay-1s">
          Desarrollador Full Stack Freelancer con 3 años de experiencia.
        </p>

        <div className="mt-8 animate__animated animate__fadeIn animate__delay-2s">
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full mx-2 transition duration-300 transform hover:scale-110"
            onClick={() => scrollToSection('contacto')}
          >
            Conéctate Conmigo
          </button>
          <button
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full mx-2 transition duration-300 transform hover:scale-110"
            onClick={() => scrollToSection('proyectos')}
          >
            Ver Mi Trabajo
          </button>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-20">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("https://source.unsplash.com/random/1600x900")' }}
        ></div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-gradient-to-b from-transparent to-black opacity-70"></div>

      {/* Elemento de iluminación */}
      {isHovered && (
        <div
          className={`bubble-effect ${isStretching ? 'stretch' : ''}`}
          style={{ left: bubblePosition.x, top: bubblePosition.y }}
        ></div>
      )}
    </header>
  );
};

export default Header;
