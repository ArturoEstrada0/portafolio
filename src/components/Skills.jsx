import React, { useState } from 'react';
import * as DevIcons from 'devicons-react';

const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Estado para almacenar el índice sobre el cual se pasa el cursor

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
            { name: 'MaterialUI', logo: 'MaterialuiOriginal' }, // Agregado MaterialUI
            { name: 'AntDesing', logo: 'AntdesignOriginal' }, // Agregado AntDesing
        ],
        'Backend': [
            { name: 'LARAVEL', logo: 'LaravelOriginal' },
            { name: 'NODE.JS', logo: 'NodejsOriginal' },
            { name: 'MONGO ATLAS', logo: 'MongodbOriginal' },
            { name: 'POSTGRES SQL', logo: 'PostgresqlPlain' },
            { name: 'EXPRESS.JS', logo: 'ExpressOriginal' },
            { name: 'AWS', logo: 'AmazonwebservicesOriginalWordmark' },
            { name: 'FIREBASE', logo: 'FirebaseOriginal' },
        ],
        'DevOps': [
            { name: 'GITHUB', logo: 'GithubOriginal' },
            { name: 'GITLAB', logo: 'GitlabOriginal' }
        ],
        'Diseño': [
            { name: 'FIGMA', logo: 'FigmaPlain' },
            { name: 'CANVA', logo: 'CanvaOriginal' },
            { name: 'Adobe Illustrator', logo: 'IllustratorPlain' },
        ],
        'Otras Herramientas': [
            { name: 'JIRA', logo: 'JiraOriginal' },
            { name: 'TRELLO', logo: 'TrelloPlain' }
        ]
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <section id='tecnologias' className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 animate__animated animate__fadeIn">Tecnologías</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.keys(skills).map((category, index) => (
                        <div key={index}
                            className={`group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl 
                                        transform hover:scale-105 transition duration-500 
                                        ${hoveredIndex === index ? 'hover:bg-gray-900 hover:text-white' : ''}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <h3 className={`text-2xl font-semibold mb-4 text-purple-700 
                                           ${hoveredIndex === index ? 'text-gray-900' : 'text-gray-700'}
                                           group-hover:text-purple-300 transition duration-300`}>
                                {category}
                            </h3>
                            <ul className="list-none">
                                {skills[category].map((skill, skillIndex) => {
                                    const IconComponent = DevIcons[skill.logo];
                                    return (
                                        <li key={skillIndex} className="flex items-center text-gray-700 hover:text-white text-lg mb-2">
                                            <div className="w-8 h-8 mr-4 rounded-full shadow-md">
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
