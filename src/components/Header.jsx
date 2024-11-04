import React, { useState, useRef } from "react";
import { Typewriter } from "react-simple-typewriter"; // Importamos react-simple-typewriter
import "./Header.css";

const Header = () => {
  return (
    <header id="inicio" className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-r from-green-500 via-purple-500 to-pink-500">
      <div className="absolute top-0 left-0 right-0 bottom-0opacity-30 z-10"></div>
      <div className="relative z-30 p-5 text-center text-white">
        <h1 className="text-6xl font-raleway font-thin tracking-tight mb-4 animate__animated animate__fadeInDown">
          Hola, soy{" "}
          <span className="text-green-400">
            <Typewriter
              words={[
                "Arturo Estrada",
                "Un Desarrollador Frontend",
                "Un Freelancer de Confianza",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-xl font-fira tracking-tight font-light mb-4 animate__animated animate__fadeInUp animate__delay-1s">
          Con 3 años de experiencia.
        </p>

        <div className="mt-8 animate__animated animate__fadeIn animate__delay-2s">
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full mx-2 transition duration-300 transform hover:scale-110"
            onClick={() => scrollToSection("contacto")}
          >
            Conéctate Conmigo
          </button>
          <button
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full mx-2 transition duration-300 transform hover:scale-110"
            onClick={() => scrollToSection("proyectos")}
          >
            Ver Mi Trabajo
          </button>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-20">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              'url("https://source.unsplash.com/random/1600x900")',
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
