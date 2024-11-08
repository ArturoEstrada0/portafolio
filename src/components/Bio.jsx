import React from "react";
import "../assets/card.css";
const Bio = () => {
  return (
    <section id="bio" className="py-12 ml-20 relative z-10 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-6 md:mb-0 animate__animated animate__fadeInLeft">
          <img
            src="../../perfil1.jpeg"
            alt="Tu Foto"
            className="w-auto rounded-lg shadow-lg object-cover"
            style={{ height: "80vh" }}
          />
        </div>
        <div className="md:w-3/4 md:pl-10 animate__animated animate__fadeInRight mr-14">
          <h2 className="text-3xl font-semibold mb-4 text-white">Sobre mí</h2>
          <p className="post-title text-lg text-white mb-6">
            Graduado como técnico informático, realicé prácticas profesionales
            en{" "}
            <a href="https://www.grupofame.com/inicio" target="_blank">
              <span className="text-green-700 font-bold underline">
                Grupo FAME
              </span>{" "}
            </a>
            , gestionando y manteniendo equipos informáticos para marcas como
            Nissan y Toyota. Exploré el diseño web y gráfico, desarrollando
            sitios web y logotipos para empresas locales.
          </p>
          <p className="post-title text-lg text-white mb-6">
            Ganador de reconocimiento en proyectos de sistema DUAL, desarrollé
            plataformas de cursos en línea y sistemas innovadores para el
            gobierno. También contribuí al desarrollo de una plataforma
            inmobiliaria y actualmente trabajo en un proyecto de rastreo de
            vehículos.
          </p>
          <p className="post-title text-lg text-white mb-6">
            Además, me dedico a la creación de contenido digital para redes
            sociales, brindando visibilidad a consultorios médicos y
            corporativos jurídicos.
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-green-600">
              Habilidades
            </h3>
            <div className="flex flex-wrap">
              <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Gestión de proyectos
              </span>
              <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Resolucion de Problemas
              </span>
              <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Comunicación efectiva
              </span>
              <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Gestión de Tiempo
              </span>
              <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Aprendizaje Continuo
              </span>
              <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Trabajo bajo presión
              </span>
              <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Diseñador
              </span>
              <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Pro-Activo
              </span>
              <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Trabajo en equipo
              </span>
              <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Autodidacta
              </span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;