import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faMeta, faWix } from '@fortawesome/free-brands-svg-icons';
import {
  CodeigniterPlain,
  PhpPlain,
  MysqlPlain,
  JavascriptPlain,
  NodejsPlain,
  ExpressOriginal,
  SocketioOriginal,
  ReactOriginal,
  MongodbOriginal,
  AmazonwebservicesOriginalWordmark,
  FirebaseOriginal,
  BootstrapPlain,
  NextjsOriginal,
  TailwindcssOriginal,
  AntdesignOriginal,
} from 'devicons-react';
import Drawer from './Drawer'; // Ajusta la ruta según la ubicación de tu Drawer

const Projects = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState({ title: '', link: '' });

  const projects = [
    {
      title: 'Laboratorios Mafra - Tienda en Línea',
      description:
        'Desarrollé una tienda en línea ligada a redes sociales para aumentar el tráfico. También trabajé en el diseño de logotipos y diseños para empresas.',
      year: 2021,
      technologies: ['Wix', 'Diseño Web', 'Redes Sociales'],
      isPublic: true,
      image:
        'https://static.wixstatic.com/media/5619da_6a9e3f66d7a44ab781aff0e5275f5ebe~mv2.png/v1/fill/w_340,h_109,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Mafra%20logo.png',
      link: 'https://labmafra.wixsite.com/laboratorios-mafra',
    },
    {
      title: 'VIVEL Academia de Emprendimiento',
      description:
        'Gané el primer lugar en este proyecto, desarrollando una plataforma completa de cursos en línea con características como administrador, pasarela de pagos, y sesiones virtuales en vivo.',
      year: 2022,
      technologies: ['CodeIgniter', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      isPublic: true,
      image: '/vivel.png', // Ruta a ajustar si es local
      link: '#', // Agrega el enlace correspondiente
    },
    {
      title: 'SISOGEM - Sistema de Órganos de Gobierno del Estado de Michoacán',
      description:
        'Primer lugar en 2023 con este proyecto. Desarrollé un sistema que incluye firmas digitales, editor de documentos en tiempo real, y repositorio de archivos.',
      year: 2023,
      technologies: ['React', 'MongoDB', 'AWS', 'Node.js', 'Express', 'Socket.io'],
      isPublic: false,
      image: '/sisogem.png', // Ruta a ajustar si es local
      link: '#', // Agrega el enlace correspondiente
    },
    {
      title: 'Sandar Inmuebles - Página Inmobiliaria',
      description:
        'Desarrollé una página inmobiliaria con servicios de administración, analíticas, buzón de mensajería y gestión de propiedades.',
      year: 2024,
      technologies: ['React', 'TailwindCSS', 'Firebase', 'Ant Design'],
      isPublic: true,
      image:
        'https://sandarinmuebles.com/assets/sandarNegativoo-bN0_grYC.png',
      link: 'https://sandarinmuebles.com/',
    },
    {
      title: 'Box Monitor - Plataforma de Traking',
      description:
        'Actualmente estoy desarrollando un proyecto de traking que incluye dispositivos incorporados en automóviles que envían datos a una plataforma web.',
      year: 'Actualidad',
      technologies: ['Next.js', 'Express', 'Firebase'],
      isPublic: false,
      image: '/boxmonitor2.png', // Ruta a ajustar si es local
      link: 'https://boxmonitor-85da4.web.app/',
    },
    {
      title: 'Casa De Los Remedios - Hotel',
      description:
        'Sistema de reservas para alojamiento en el centro histórico de Morelia. Diseñé toda la marca y presencia web de esta empresa.',
      year: 'Actualidad',
      technologies: ['Wix', 'Diseño Web', 'Redes Sociales'],
      isPublic: true,
      image: '/casaremedios.png', // Ruta a ajustar si es local
      link: 'https://casadelosremediosmorelia.com/', // Agrega el enlace correspondiente
    },
  ];

  const openDrawer = (title, link) => {
    setDrawerContent({ title, link });
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setDrawerContent({ title: '', link: '' });
  };

  return (
    <section id="proyectos" className="py-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-10">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 animate__animated animate__fadeIn">
          <span className=" text-purple-700">Pro</span>
          <span className="text-purple-800">yec</span>
          <span className="text-purple-900">tos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-contain w-full h-64 sm:h-56 md:h-72 lg:h-80 xl:h-96 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => openDrawer(project.title, project.link)}
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`bg-${project.isPublic ? 'green' : 'red'}-500 text-white text-xs font-semibold px-2 py-1 rounded-lg`}
                  >
                    {project.isPublic ? 'Público' : 'Privado'}
                  </span>
                  <div className="flex flex-wrap space-x-2">
                    {project.technologies.map((tech, index) => {
                      let IconComponent = null;
                      switch (tech) {
                        case 'Wix':
                          IconComponent = () => <FontAwesomeIcon icon={faWix} />;
                          break;
                        case 'Redes Sociales':
                          IconComponent = () => <FontAwesomeIcon icon={faMeta} />;
                          break;
                        case 'Diseño Web':
                          IconComponent = () => <FontAwesomeIcon icon={faFigma} />;
                          break;
                        case 'CodeIgniter':
                          IconComponent = CodeigniterPlain;
                          break;
                        case 'PHP':
                          IconComponent = PhpPlain;
                          break;
                        case 'MySQL':
                          IconComponent = MysqlPlain;
                          break;
                        case 'JavaScript':
                          IconComponent = JavascriptPlain;
                          break;
                        case 'Node.js':
                          IconComponent = NodejsPlain;
                          break;
                        case 'Express':
                          IconComponent = ExpressOriginal;
                          break;
                        case 'Socket.io':
                          IconComponent = SocketioOriginal;
                          break;
                        case 'React':
                          IconComponent = ReactOriginal;
                          break;
                        case 'MongoDB':
                          IconComponent = MongodbOriginal;
                          break;
                        case 'AWS':
                          IconComponent = AmazonwebservicesOriginalWordmark;
                          break;
                        case 'Firebase':
                          IconComponent = FirebaseOriginal;
                          break;
                        case 'Bootstrap':
                          IconComponent = BootstrapPlain;
                          break;
                        case 'Next.js':
                          IconComponent = NextjsOriginal;
                          break;
                        case 'TailwindCSS':
                          IconComponent = TailwindcssOriginal;
                          break;
                        case 'Ant Design':
                          IconComponent = AntdesignOriginal;
                          break;
                        default:
                          IconComponent = null;
                          break;
                      }
                      return IconComponent ? (
                        <IconComponent key={index} size="1.5rem" className="mx-1" />
                      ) : null;
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <p className="text-gray-700 mt-2">Año: {project.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Drawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        title={drawerContent.title}
        link={drawerContent.link}
      />
    </section>
  );
};

export default Projects;
