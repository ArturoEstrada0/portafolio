import React from 'react'
import * as DevIcons from "devicons-react"

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
}

const QuadrantSection = ({ title, skills, className }) => (
  <div className={`p-4 ${className}`}>
    <h2 className="text-xl font-bold mb-4 text-green-800">{title}</h2>
    <div className="grid grid-cols-3 gap-4">
      {skills.map((skill) => {
        const Icon = DevIcons[skill.logo]
        return (
          <div key={skill.name} className="flex flex-col items-center group">
            <div className="bg-white p-2 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
              {Icon && <Icon size={36} />}
            </div>
            <span className="mt-2 text-xs text-center text-gray-200 font-medium">{skill.name}</span>
          </div>
        )
      })}
    </div>
  </div>
)
export default function Skills() {
  return (
    <div id='habilidades' className="max-h-screen z-10 bg-gradient-to-br from-black via-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gray-900/20 to-transparent -z-10"></div>
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-gray-800/20 to-transparent -z-10"></div>
      <h1 className="text-4xl font-bold text-center text-gray-200 mb-8 relative">
        Mis Habilidades
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-900"></span>
      </h1>
      <div className="w-full max-w-5xl aspect-square bg-white0 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        <div className="w-full h-full grid grid-cols-2 grid-rows-2">
          <QuadrantSection
            title="Frontend"
            skills={skills.Frontend}
            className="border-b border-r border-gray-200"
          />
          <QuadrantSection
            title="Backend"
            skills={skills.Backend}
            className="border-b border-gray-200"
          />
          <QuadrantSection
            title="Lenguajes de Programación"
            skills={skills["Lenguajes de Programación"]}
            className="border-r border-gray-200"
          />
          <div className="grid grid-rows-3">
            <QuadrantSection
              title="DevOps"
              skills={skills.DevOps}
              className="border-b border-gray-200 -mb-5"
            />
            <QuadrantSection
              title="Diseño"
              skills={skills.Diseño}
              className="border-b border-gray-200 -mb-5"
            />
            <QuadrantSection
              title="Otras Herramientas"
              skills={skills["Otras Herramientas"]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}