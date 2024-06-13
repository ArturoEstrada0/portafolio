import React from 'react';
import * as DevIcons from 'devicons-react';

const Skills = () => {
    const skills = {
        'Lenguajes de Programación': [
            { name: 'JS', logo: 'JavascriptOriginal' },
            { name: 'C++', logo: 'CplusplusOriginal' },
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
        'Otras Herramientas': [
            { name: 'JIRA', logo: 'JiraOriginal' },
            { name: 'TRELLO', logo: 'TrelloPlain' }
        ]
    };

    return (
        <section id='tecnologias' className="py-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 animate__animated animate__fadeIn">
                    <span className="block text-purple-700">Conocimientos y</span> 
                    <span className="block text-purple-900">Tecnologías</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.keys(skills).map((category, index) => (
                        <div key={index} className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500 animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                            <h3 className="text-2xl font-semibold mb-4 text-purple-700 group-hover:text-purple-900 transition duration-300">{category}</h3>
                            <ul className="list-none">
                                {skills[category].map((skill, skillIndex) => {
                                    const IconComponent = DevIcons[skill.logo];
                                    return (
                                        <li key={skillIndex} className="flex items-center text-gray-700 text-lg mb-2">
                                            <div className="w-8 h-8 mr-4 rounded-full shadow-md flex items-center justify-center bg-gray-200">
                                                {IconComponent && <IconComponent size="2rem" />}
                                            </div>
                                            {skill.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
