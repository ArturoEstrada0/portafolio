import React, { useEffect } from "react";
import "./App.css";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import FloatingBubble from "./components/FloatingBubble";
import BackToTopButton from "./components/BackToTop";
import useCursorEffect from "./components/UseCursorEffect";
import Squares from "./components/Squares";
import ProjectShowcase from "./components/ProjectShowcase";

export default function App() {
  const { isHovered, bubblePosition, isStretching, bubbleColor, isRippling } =
    useCursorEffect();

  useEffect(() => {
    const handleTabVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        document.title = "¡Arturo Estrada!";
      } else {
        document.title = "¡Vuelve :( !";
      }
    };

    document.addEventListener("visibilitychange", handleTabVisibilityChange);

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleTabVisibilityChange
      );
    };
  }, []);
  const projects = [
    {
      title: "Notaría 64",
      description:
        "Estuve involucrado en el desarrollo de un sistema administrativo para una firma notarial en donde se manejan procesos de diferentes trámites que se llevan a cabo. En donde se puede registrar avances, notificar, incluye inteleligencia de negocios y mensajeria.",
      year: 2024,
      technologies: [
        "React",
        "Diseño Web",
        "Firebase",
        "TailwindCSS",
        "Ant Design",
      ],
      isPublic: true,
      images: [
        "/notaria64_5.jpeg", // Ruta a ajustar si es local
        "/notaria64.jpeg", // Ruta a ajustar si es local
        "/notaria64_2.jpeg", // Ruta a ajustar si es local
        "/notaria64_3.jpeg", // Ruta a ajustar si es local
        "/notaria64_4.png", // Ruta a ajustar si es local
        "/notaria2.jpeg",
        "/notaria3.jpeg",
      ],
      link: "https://notaria-64.vercel.app/",
    },
    {
      title: "SISOGEM - Sistema de Órganos de Gobierno del Estado de Michoacán",
      description:
        "En 2023, lideré un proyecto que me otorgó el primer lugar. El sistema que desarrollé incorpora características como firmas digitales, un editor de documentos en tiempo real y un repositorio de archivos.",
      year: 2023,
      technologies: [
        "React",
        "MongoDB",
        "AWS",
        "Node.js",
        "Express",
        "Socket.io",
        "Ant Design",
        "TailwindCSS",
        "Cognito",
        "Materialui",
      ],
      isPublic: false,
      images: [
        "/sisogem.png", // Ruta a ajustar si es local
      ],
      link: "#", // Agrega el enlace correspondiente
    },
    {
      title: "Sandar Inmuebles - Página Inmobiliaria",
      description:
        "Desarrollé una plataforma inmobiliaria integral que incluye servicios de administración, análisis avanzado, un buzón de mensajería y una funcionalidad de gestión de propiedades.",
      year: 2024,
      technologies: [
        "React",
        "TailwindCSS",
        "Firebase",
        "Ant Design",
        "Materialui",
      ],
      isPublic: true,
      images: [
        "https://sandarinmuebles.com/assets/sandarNegativoo-bN0_grYC.png",
        "./sandar4.jpeg",
        "./sandar6.jpeg",
        "./sandar7.jpeg",
        "./sandar8.jpeg",
        "./sandar9.png",
      ],
      link: "https://sandarinmuebles.com/",
    },
    {
      title: "Foxpel - Lading Page",
      description:
        "Sistema de reservas para alojamiento en el centro histórico de Morelia. Diseñé toda la marca y presencia web de esta empresa.",
      year: "Actualidad",
      technologies: [
        "React",
        "TailwindCSS",
        "Firebase",
        "Node.js",
        "Diseño Web",
      ],
      isPublic: true,
      images: [
        "/foxpel.jpeg", // Ruta a ajustar si es local
        "/foxpel2.png", // Ruta a ajustar si es local
        "/foxpel3.png", // Ruta a ajustar si es local
        "/foxpel4.jpeg", // Ruta a ajustar si es local
        "/foxpel5.jpeg", // Ruta a ajustar si es local
        "/foxpel6.jpeg", // Ruta a ajustar si es local
      ],
      link: "https://foxpel.mx/", // Agrega el enlace correspondiente
    },
    {
      title: "Box Monitor - Plataforma de Traking",
      description:
        "Estoy en proceso de desarrollo de un proyecto de seguimiento vehicular, el cual incluye dispositivos integrados en automóviles que transmiten datos a una plataforma web.",
      year: "Actualidad",
      technologies: [
        "Next.js",
        "Express",
        "Firebase",
        "TailwindCSS",
        "Ant Design",
        "MongoDB",
        "Materialui",
      ],
      isPublic: false,
      images: [
        "/boxmonitor2.png", // Ruta a ajustar si es local
        "/boxmonitor.jpeg", // Ruta a ajustar si es local
        "/boxmonitor3.jpeg", // Ruta a ajustar si es local
        "/boxmonitor2.jpeg", // Ruta a ajustar si es local
      ],
      link: "https://boxmonitor-85da4.web.app/",
    },
    {
      title: "Casa De Los Remedios - Hotel",
      description:
        "Diseñé un sistema de reservas para alojamiento ubicado en el centro histórico de Morelia. Este proyecto incluyó la creación de toda la identidad de marca y la presencia web de la empresa.",
      year: "Actualidad",
      technologies: ["Wix", "Diseño Web", "Redes Sociales"],
      isPublic: true,
      images: [
        "/casaremedios.png", // Ruta a ajustar si es local
        "/casa.jpeg", // Ruta a ajustar si es local
        "/casa2.jpeg", // Ruta a ajustar si es local
        "/casa3.jpeg", // Ruta a ajustar si es local
      ],
      link: "https://casadelosremediosmorelia.com/", // Agrega el enlace correspondiente
    },
    {
      title: "VIVEL Academia de Emprendimiento",
      description:
        "Obtuve el primer lugar en este proyecto, en el cual desarrollé una plataforma integral de cursos en línea. Esta plataforma incluye características como un panel de administración, una pasarela de pagos y la capacidad de realizar sesiones virtuales en vivo.",
      year: 2022,
      technologies: [
        "CodeIgniter",
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
      isPublic: true,
      images: [
        "/vivel.png", // Ruta a ajustar si es local
      ],
      link: "#", // Agrega el enlace correspondiente
    },
    {
      title: "Laboratorios Mafra - Tienda en Línea",
      description:
        "Desarrollé una plataforma de comercio electrónico integrada con redes sociales para optimizar la afluencia de visitantes. Además, participé en la creación de logotipos y diseños corporativos, mejorando la identidad visual de diversas empresas.",
      year: 2021,
      technologies: ["Wix", "Diseño Web", "Redes Sociales"],
      isPublic: true,
      images: [
        "https://static.wixstatic.com/media/5619da_6a9e3f66d7a44ab781aff0e5275f5ebe~mv2.png/v1/fill/w_340,h_109,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Mafra%20logo.png",
        "./mafra.jpeg",
        "./mafra2.jpeg",
        "./mafra3.jpeg",
        "./mafra4.png",
        "./mafra5.png",
      ],
      link: "https://labmafra.wixsite.com/laboratorios-mafra/shop",
    },
  ];

  return (
    <div>
      <Squares />
      <Nav />
      <FloatingBubble />
      <Header />
      <Skills />
      <ProjectShowcase projects={projects} />
      {/* <Projects /> */}
      <Bio />
      {/* <Education /> */}
      <Contact />
      <BackToTopButton />
      {/* <Feature />
      <Blog />
      <Footer /> */}
      {isHovered && (
        <div
          className={`bubble-effect ${isStretching ? "stretch" : ""} ${
            isRippling ? "ripple" : ""
          }`}
          style={{
            top: bubblePosition.y,
            left: bubblePosition.x,
            backgroundColor: bubbleColor, // Aplicar el color dinámico
          }}
        />
      )}
    </div>
  );
}
