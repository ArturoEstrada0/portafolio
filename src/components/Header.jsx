// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 z-10"></div>
      <div className="relative z-30 p-5 text-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">Hola, soy <span className='text-blue-400'>Arturo Estrada</span></h1>
        {/* <p className="text-2xl font-light mb-4 animate__animated animate__fadeInUp animate__delay-1s">
          Estudiante de Ingeniería en Sistemas Computacionales.
        </p> */}
        <p className="text-xl font-light mb-4 animate__animated animate__fadeInUp animate__delay-2s">
          Desarrollador Full Stack Freelancer con 3 años de experiencia.
        </p>
      
        <div className="mt-8 animate__animated animate__fadeIn animate__delay-4s">
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full mx-2 transition duration-300 transform hover:scale-110">
            Conéctate Conmigo
          </button>
        
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full mx-2 transition duration-300 transform hover:scale-110">
            Ver Mi Trabajo
          </button>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-20">
        <div className="w-full h-full bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://source.unsplash.com/random/1600x900")' }}></div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-gradient-to-b from-transparent to-black opacity-70"></div>
    </header>
  );
};

export default Header;
