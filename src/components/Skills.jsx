import * as DevIcons from 'devicons-react';

const Skills = () => {
    const skills = {
        'Lenguajes de Programación': [
            { name: 'JS', logo: 'JavascriptOriginal' },
            { name: 'C++', logo: 'CplusplusOriginal' },
            { name: 'Python', logo: 'PythonOriginal' },
            { name: 'PHP', logo: 'PhpPlain' }
        ],
        'Frontend': [
            { name: 'HTML', logo: 'Html5Original' },
            { name: 'CSS', logo: 'Css3Original' },
            { name: 'TAILWIND CSS', logo: 'TailwindcssOriginal' },
            { name: 'BOOTSTRAP 5', logo: 'BootstrapPlain' },
            { name: 'REACT', logo: 'ReactOriginal' },
            { name: 'NEXT', logo: 'NextjsOriginal' },
            { name: 'MaterialUI', logo: 'MaterialuiOriginal' },
            { name: 'AntDesign', logo: 'AntdesignOriginal' }
        ],
        'Backend': [
            { name: 'LARAVEL', logo: 'LaravelOriginal' },
            { name: 'NODE.JS', logo: 'NodejsOriginal' },
            { name: 'MONGO ATLAS', logo: 'MongodbOriginal' },
            { name: 'POSTGRES SQL', logo: 'PostgresqlPlain' },
            { name: 'EXPRESS.JS', logo: 'ExpressOriginal' },
            { name: 'AWS', logo: 'AmazonwebservicesOriginalWordmark' },
            { name: 'FIREBASE', logo: 'FirebaseOriginal' }
        ],
        'DevOps': [
            { name: 'GITHUB', logo: 'GithubOriginal' },
            { name: 'GITLAB', logo: 'GitlabOriginal' }
        ],
        'Diseño': [
            { name: 'FIGMA', logo: 'FigmaPlain' },
            { name: 'CANVA', logo: 'CanvaOriginal' },
            { name: 'Adobe Illustrator', logo: 'IllustratorPlain' }
        ],
        'Gestor de Base de Datos': [
            { name: 'FIGMA', logo: 'FigmaPlain' },
            { name: 'CANVA', logo: 'CanvaOriginal' },
            { name: 'Adobe Illustrator', logo: 'IllustratorPlain' }
        ],
        'Otras Herramientas': [
            { name: 'JIRA', logo: 'JiraOriginal' },
            { name: 'TRELLO', logo: 'TrelloPlain' }
        ]
    };

    const colors = {
        'Lenguajes de Programación': 'bg-blue-00',
        'Frontend': 'bg-black',
        'Backend': 'bg-red-700',
        'DevOps': 'bg-yellow-700',
        'Diseño': 'bg-purple-700',
        'Otras Herramientas': 'bg-indigo-700'
    };

    return (
        <section id='tecnologias' className="relative z-10 py-5">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 animate__animated animate__fadeIn">
                    <span className="block text-green-700">Conocimientos y</span> 
                    <span className="block text-green-900">Tecnologías</span>
                </h2>
                {Object.keys(skills).map((category, index) => (
                    <div key={index}>
                        <h3 className="text-4xl font-bold text-center mb-6 text-gray-200 animate__animated animate__fadeIn">{category}</h3>
                        <div className="flex flex-wrap justify-center">
                            {skills[category].map((skill, skillIndex) => {
                                const IconComponent = DevIcons[skill.logo];
                                return (
                                    <div key={`${index}-${skillIndex}`} className="m-4 w-64 shadow-lg rounded-lg overflow-hidden animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                                        <div className={`flex items-center justify-center h-20 ${colors[category]}`}>
                                            {IconComponent && <IconComponent size="2rem" color="white" />}
                                        </div>
                                        <div className="px-6 py-4">
                                            <h4 className="font-bold text-xl mb-2 text-green-700">{skill.name}</h4>
                                            <p className="text-gray-400 text-base">{category}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );};

export default Skills;
