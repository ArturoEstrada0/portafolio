import { motion } from "framer-motion";
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
} from "devicons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faMeta, faWix } from "@fortawesome/free-brands-svg-icons";

export const ProjectCard = ({ project }) => {
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

  return (
    <div className="bg-black text-white px-6 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center mb-2">
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

        <div className="w-2/5 h-80 overflow-hidden rounded-r-lg z-20">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain bg-white"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 flex-1 z-20">
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
            className="mt-4 inline-flex items-center text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};
