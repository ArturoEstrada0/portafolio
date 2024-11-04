import { AnimatePresence, motion } from "framer-motion";
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
  MysqlPlainWordmark,
  Html5Original,
  Css3Original,
  JavaOriginal,
  JavaOriginalWordmark,
  JavascriptOriginal,
  MysqlOriginal,
  MysqlOriginalWordmark,
  MaterialuiOriginal,
} from "devicons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faMeta, faWix } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Drawer from "./Drawer";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectCard = ({ project }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const getIcon = (tech) => {
    switch (tech) {
      case "React":
        return (
          <ReactOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "MongoDB":
        return (
          <MongodbOriginal
            size={40}
            style={{
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
              background: "#fff",
              padding: "1px",
              borderRadius: "5px",
            }}
          />
        );
      case "AWS":
        return (
          <AmazonwebservicesOriginalWordmark
            size={40}
            style={{
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
              background: "#fff",
              padding: "5px",
              borderRadius: "5px",
            }}
          />
        );
      case "Node.js":
        return (
          <NodejsPlain
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "Express":
        return (
          <ExpressOriginal
            size={40}
            style={{
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
              background: "#fff",
              padding: "5px",
              borderRadius: "5px",
            }}
          />
        );
      case "Socket.io":
        return (
          <SocketioOriginal
            size={40}
            style={{
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
              background: "#fff",
              padding: "5px",
              borderRadius: "5px",
            }}
          />
        );
      case "TailwindCSS":
        return (
          <TailwindcssOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "Firebase":
        return (
          <FirebaseOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "Ant Design":
        return (
          <AntdesignOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "Next.js":
        return (
          <NextjsOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "Materialui":
        return (
          <MaterialuiOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "Bootstrap":
        return (
          <BootstrapPlain
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "C++":
        return (
          <CplusplusOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "Python":
        return (
          <PythonOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "PHP":
        return (
          <PhpPlain
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "MySQL":
        return (
          <MysqlOriginalWordmark
            size={40}
            style={{
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
              background: "#fff",
              padding: "2px",
              borderRadius: "5px",
            }}
          />
        );
      case "JavaScript":
        return (
          <JavascriptOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "HTML":
        return (
          <Html5Original
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "CSS":
        return (
          <Css3Original
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "CodeIgniter":
        return (
          <CodeigniterPlain
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "Laravel":
        return (
          <LaravelOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "MONGO ATLAS":
        return (
          <MongodbOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "POSTGRES SQL":
        return (
          <PostgresqlPlain
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "FIREBASE":
        return (
          <FirebaseOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "GITHUB":
        return (
          <GithubOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "GITLAB":
        return (
          <GitlabOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "FIGMA":
        return (
          <FigmaPlain
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "CANVA":
        return (
          <CanvaOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "Adobe Illustrator":
        return (
          <IllustratorPlain
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "JIRA":
        return (
          <JiraOriginal
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "TRELLO":
        return (
          <TrelloPlain
            size={40}
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          />
        );
      case "Wix":
        return (
          <FontAwesomeIcon
            icon={faWix}
            style={{
              fontSize: "34px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            }}
          />
        );
      case "Redes Sociales":
        return (
          <FontAwesomeIcon
            icon={faMeta}
            style={{
              fontSize: "34px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            }}
          />
        );
      case "Diseño Web":
        return (
          <FontAwesomeIcon
            icon={faFigma}
            style={{
              fontSize: "34px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            }}
          />
        );
      default:
        return null;
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (Array.isArray(project.images) && project.images.length > 1) {
      setCurrentImageIndex((prev) => {
        if (newDirection === 1) {
          return prev === project.images.length - 1 ? 0 : prev + 1;
        }
        return prev === 0 ? project.images.length - 1 : prev - 1;
      });
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    paginate(1);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    paginate(-1);
  };

  return (
    <div
      className="bg-black text-white px-6 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center mb-2 cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        setDrawerOpen(true);
      }}
    >
      <div
        className=" bg-gray-900 border-2 border-gray-800 rounded-md mb-2 pr-2 flex flex-row z-20"
        style={{ background: "linear-gradient(to right, #000000, #1a1a1a)" }}
      >
        <div
          className={`px-2 rounded-l-md border-r-4 border-gray-800 flex items-center justify-center`}
          style={{ background: "linear-gradient(to right, #000000, #1a1a1a)" }}
        >
          <p
            className={`text-lg font-fira ${
              project.isPublic ? "text-green-700" : "text-red-700"
            }`}
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            {project.isPublic ? "Público" : "Privado"}
          </p>
        </div>

        <div className="w-[500px] min-w-[300px] h-80 overflow-hidden rounded-r-lg relative group">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentImageIndex}
              src={
                Array.isArray(project.images) && project.images.length > 0
                  ? project.images[currentImageIndex]
                  : "ruta/a/imagen/por/defecto.jpg"
              }
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="w-full h-full object-contain bg-white absolute top-0 left-0"
              style={{
                maxWidth: "100%",
                margin: "0 auto",
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "ruta/a/imagen/por/defecto.jpg";
              }}
            />
          </AnimatePresence>

          {Array.isArray(project.images) && project.images.length > 1 && (
            <>
              <motion.button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 p-2 rounded-full text-white z-30 transition-colors duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 p-2 rounded-full text-white z-30 transition-colors duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {project.images.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setDirection(index > currentImageIndex ? 1 : -1);
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index
                        ? "bg-white w-4"
                        : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mt-4 md:mt-2 md:ml-6 flex-1 z-20">
          <h2 className="text-2xl font-fira font-medium">{project.title}</h2>{" "}
          <p className="mt-2 text-gray-400">{project.description}</p>
          <p className="mt-2 text-gray-500">Año: {project.year}</p>
          <p className="mt-2 text-gray-500">
            Tipo: {project.isPrivate ? "Privado" : "Público"}
          </p>
          <div className="flex space-x-4 mt-4">
            {project.technologies.map((tech) => (
              <div key={tech} className="text-white">
                {getIcon(tech)}
              </div>
            ))}
          </div>
          <a
            href={project.link}
            className="mt-4 inline-flex items-center text-green-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              setDrawerOpen(true);
            }}
          >
            Ver Proyecto
          </a>
        </div>
      </div>
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title={project.title}
        link={project.link}
      >
        {/* Contenido del cajón */}
      </Drawer>
    </div>
  );
};
