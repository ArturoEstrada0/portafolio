import * as DevIcons from "devicons-react";
import { motion } from "framer-motion";


const Skills = () => {
  const skills = {
    "Lenguajes de Programación": [
      { name: "JS", logo: "JavascriptOriginal" },
      { name: "C++", logo: "CplusplusOriginal" },
      { name: "Python", logo: "PythonOriginal" },
      { name: "PHP", logo: "PhpPlain" },
    ],
    Frontend: [
      { name: "HTML", logo: "Html5Original" },
      { name: "CSS", logo: "Css3Original" },
      { name: "TAILWIND CSS", logo: "TailwindcssOriginal" },
      { name: "BOOTSTRAP 5", logo: "BootstrapPlain" },
      { name: "REACT", logo: "ReactOriginal" },
      { name: "NEXT", logo: "NextjsOriginal" },
      { name: "MaterialUI", logo: "MaterialuiOriginal" },
      { name: "AntDesign", logo: "AntdesignOriginal" },
    ],
    Backend: [
      { name: "LARAVEL", logo: "LaravelOriginal" },
      { name: "NODE.JS", logo: "NodejsOriginal" },
      { name: "MONGO ATLAS", logo: "MongodbOriginal" },
      { name: "POSTGRES SQL", logo: "PostgresqlPlain" },
      { name: "EXPRESS.JS", logo: "ExpressOriginal" },
      { name: "AWS", logo: "AmazonwebservicesOriginalWordmark" },
      { name: "FIREBASE", logo: "FirebaseOriginal" },
    ],
    DevOps: [
      { name: "GITHUB", logo: "GithubOriginal" },
      { name: "GITLAB", logo: "GitlabOriginal" },
    ],
    Diseño: [
      { name: "FIGMA", logo: "FigmaPlain" },
      { name: "CANVA", logo: "CanvaOriginal" },
      { name: "Adobe Illustrator", logo: "IllustratorPlain" },
    ],
    "Otras Herramientas": [
      { name: "JIRA", logo: "JiraOriginal" },
      { name: "TRELLO", logo: "TrelloPlain" },
    ],
  };

  const colors = {
    "Lenguajes de Programación": "blue-500",
    Frontend: "green-500",
    Backend: "red-700",
    DevOps: "yellow-500",
    Diseño: "purple-700",
    "Otras Herramientas": "indigo-700",
  };

  return (
    <section id="tecnologias" className="relative z-10 py-5">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 animate__animated animate__fadeIn">
          <span className="block text-green-700">Conocimientos y</span>
          <span className="block text-green-900">Tecnologías</span>
        </h2>
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-4xl font-fira font-bold text-center mb-4 text-gray-200 animate__animated animate__fadeIn">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center">
              {skills[category].map((skill, skillIndex) => {
                const IconComponent = DevIcons[skill.logo];
                return (
                  <div
                    key={`${index}-${skillIndex}`}
                    className="m-4 relative group"
                  >
                    <div className="w-16 h-16 text-center">
                      <div
                        className={`flex justify-center items-center w-16 h-16 rounded-full border-2 border-${colors[category]} transition-all duration-300 absolute top-0 group-hover:scale-[0.8] group-hover:origin-top text-${colors[category]} bg-transparent group-hover:rotate-360`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.7, rotate: 360, cursor: "pointer" }}
                          whileTap={{
                            scale: 1.2,
                            rotate: -0,
                            borderRadius: "100%",
                          }}
                        >
                        {IconComponent && (
                          <IconComponent size="2.5rem" color="currentColor" />
                        )}
                        </motion.div>
                      </div>
                    </div>
                    {/* Tooltip ajustado */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-5 ml-8 opacity-0 group-hover:opacity-100 font-bold bottom-full text-sm text-center text-white whitespace-nowrap transition-all duration-300 translate-y-full group-hover:translate-y-0">
                      {skill.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
