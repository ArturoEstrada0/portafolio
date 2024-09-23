import React from "react";
import "../assets/card.css";
import useCursorEffect from "./UseCursorEffect";
const Bio = () => {
  const {
    isHovered,
    bubblePosition,
    isStretching,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  } = useCursorEffect();

  return (
    <section
      id="bio"
      className="post py-12 bg-gray-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
    >
      {" "}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-6 md:mb-0 animate__animated animate__fadeInLeft">
          <img
            src="../../fotoPerfil.jpeg"
            alt="Tu Foto"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-10 animate__animated animate__fadeInRight">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">
            Sobre mí
          </h2>
          <p className="post-title text-lg text-gray-800 mb-6">
            Graduado como técnico informático, realicé prácticas profesionales
            en{" "}
            <a href="https://www.grupofame.com/inicio" target="_blank">
              <span className=" text-blue-800 font-bold underline">
                Grupo FAME
              </span>{" "}
            </a>
            , gestionando y manteniendo equipos informáticos para marcas como
            Nissan y Toyota. Exploré el diseño web y gráfico, desarrollando
            sitios web y logotipos para empresas locales.
          </p>
          <p className="post-title text-lg text-gray-800 mb-6">
            Ganador de reconocimiento en proyectos de sistema DUAL, desarrollé
            plataformas de cursos en línea y sistemas innovadores para el
            gobierno. También contribuí al desarrollo de una plataforma
            inmobiliaria y actualmente trabajo en un proyecto de rastreo de
            vehículos.
          </p>
          <p className="post-title text-lg text-gray-800 mb-6">
            Además, me dedico a la creación de contenido digital para redes
            sociales, brindando visibilidad a consultorios médicos y
            corporativos jurídicos.
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Habilidades
            </h3>
            <div className="flex flex-wrap">
              <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Gestión de proyectos
              </span>
              <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Resolucion de Problemas
              </span>
              <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Comunicación efectiva
              </span>
              <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Gestión de Tiempo
              </span>
              <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Aprendizaje Continuo
              </span>
              <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Trabajo bajo presión
              </span>
              <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Diseñador
              </span>
              <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Pro-Activo
              </span>
              {/* <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Backend</span> */}
              <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Trabajo en equipo
              </span>
              <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Autodidacta
              </span>
              {/* Agrega más habilidades según sea necesario */}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">
              Intereses Personales
            </h3>
            <div className="flex flex-wrap">
              <span className="inline-block bg-purple-800 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Desarrollo Web
              </span>
              <span className="inline-block bg-purple-800 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Frontend
              </span>
              <span className="inline-block bg-purple-800 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Sistemas Administrativos
              </span>
              <span className="inline-block bg-purple-800 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
               Diseño de Interfaces de Usuario
              </span>
              <span className="inline-block bg-purple-800 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                React
              </span>
              <span className="inline-block bg-purple-800 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Next
              </span>
              
              {/* Agrega más intereses personales según sea necesario */}
            </div>
          </div>
        </div>
      </div>
      {/* Elemento de iluminación */}
      {isHovered && (
        <div
          className={`bubble-effect ${isStretching ? "stretch" : ""}`}
          style={{ left: bubblePosition.x, top: bubblePosition.y }}
        ></div>
      )}
    </section>
  );
};

export default Bio;
