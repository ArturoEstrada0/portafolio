import React from "react";
import * as DevIcons from "devicons-react";

const skills = {
  "Lenguajes de Programación": [
    { name: "JS", logo: "JavascriptOriginal", color: "#F7DF1E" },
    { name: "C++", logo: "CplusplusOriginal", color: "#00599C" },
    { name: "Python", logo: "PythonOriginal", color: "#3776AB" },
    { name: "PHP", logo: "PhpPlain", color: "#777BB4" },
  ],
  Frontend: [
    { name: "HTML", logo: "Html5Original", color: "#E44D26" },
    { name: "CSS", logo: "Css3Original", color: "#1572B6" },
    { name: "TAILWIND CSS", logo: "TailwindcssOriginal", color: "#06B6D4" },
    { name: "BOOTSTRAP 5", logo: "BootstrapPlain", color: "#7952B3" },
    { name: "REACT", logo: "ReactOriginal", color: "#61DAFB" },
    { name: "NEXT", logo: "NextjsOriginal", color: "#FFFFFF" },
    { name: "MaterialUI", logo: "MaterialuiOriginal", color: "#0081CB" },
    { name: "AntDesign", logo: "AntdesignOriginal", color: "#0170FE" },
  ],
  Backend: [
    { name: "LARAVEL", logo: "LaravelOriginal", color: "#FF2D20" },
    { name: "NODE.JS", logo: "NodejsOriginal", color: "#539E43" },
    { name: "MONGO ATLAS", logo: "MongodbOriginal", color: "#47A248" },
    { name: "POSTGRES SQL", logo: "PostgresqlPlain", color: "#336791" },
    { name: "EXPRESS.JS", logo: "ExpressOriginal", color: "#000000" },
    {
      name: "AWS",
      logo: "AmazonwebservicesOriginalWordmark",
      color: "#232F3E",
    },
    { name: "FIREBASE", logo: "FirebaseOriginal", color: "#FFCA28" },
  ],
  DevOps: [
    { name: "GITHUB", logo: "GithubOriginal", color: "#181717" },
    { name: "GITLAB", logo: "GitlabOriginal", color: "#FCA121" },
  ],
  Diseño: [
    { name: "FIGMA", logo: "FigmaPlain", color: "#F24E1E" },
    { name: "CANVA", logo: "CanvaOriginal", color: "#00C4CC" },
    { name: "Adobe Illustrator", logo: "IllustratorPlain", color: "#FF9A00" },
  ],
  "Otras Herramientas": [
    { name: "JIRA", logo: "JiraOriginal", color: "#0052CC" },
    { name: "TRELLO", logo: "TrelloPlain", color: "#0052CC" },
  ],
};

const SkillCard = ({ name, logo, color }) => {
  const IconComponent = DevIcons[logo];

  return (
    <div className="relative group">
      <div className="flex items-center justify-center bg-[#1a1f2e] rounded-xl p-6 aspect-square w-36 transition-all duration-300 hover:scale-105 hover:bg-[#252b3d] border-2 border-gray-800">
        {IconComponent && (
          <IconComponent
            size={48}
            className="transition-transform duration-300 group-hover:scale-110"
            color={color}
          />
        )}
      </div>
    </div>
  );
};

const ScrollingRow = ({ skills, direction = "left", speed = 30 }) => {
  return (
    <div className="relative flex overflow-hidden py-2 z-20">
      <div
        className={`flex gap-4 animate-scroll-${direction}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {/* Original set */}
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
        {/* Duplicate set for seamless scrolling */}
        {skills.map((skill, index) => (
          <SkillCard key={`duplicate-${index}`} {...skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsPage = () => {
  // Flatten all skills into a single array and duplicate for each row
  const allSkills = Object.values(skills).flat();
  const rowCount = 3;
  const skillsPerRow = Math.ceil(allSkills.length / rowCount);
  const rows = Array.from({ length: rowCount }, (_, i) =>
    allSkills.slice(i * skillsPerRow, (i + 1) * skillsPerRow)
  );

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white p-12 overflow-hidden">
      {/* Título */}
      <h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#e9ff70] to-[#c0ff70] bg-clip-text text-transparent">
        MY SKILLS
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto h-full">
        {/* Columna de habilidades con scroll */}
        <div className="lg:w-2/3 relative flex-1 h-full">
          {/* Gradientes para efecto fade */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0a0d14] to-transparent z-30"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0a0d14] to-transparent z-30"></div>

          <div className="flex flex-col gap-8 h-full">
            {rows.map((rowSkills, index) => (
              <ScrollingRow
                key={index}
                skills={rowSkills}
                direction={index % 2 === 0 ? "left" : "right"}
                speed={30 + index * 5}
              />
            ))}
          </div>
        </div>

        {/* Sección de experiencia */}
        <div className="lg:w-1/3 bg-[#1a1f2e] rounded-xl p-8 text-center border-2 border-gray-800 flex flex-col justify-center h-auto z-50">
          <h2 className="text-9xl font-bold mb-2">3</h2>
          <p className="text-4xl font-medium mb-6 leading-tight">
            Años de
            <br />
            Experiencia
            <br />
            Desarrollando Proyectos
          </p>
          <button
            onClick={() =>
              window.open(
                "/Arturo Adrian Estrada De La Torre Curriculm.pdf",
                "_blank"
              )
            }
            className="bg-[#4cdd58] text-black font-medium py-3 px-6 rounded-full hover:bg-[#c0ff70] transition-colors duration-300"
          >
            DOWNLOAD MY CV
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;
