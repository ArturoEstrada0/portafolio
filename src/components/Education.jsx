import React from 'react';

const Education = () => {
  return (
    <section id='educacion' className="py-12 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-center">
          <div className="md:w-1/2 md:pr-6 animate__animated animate__fadeInLeft">
            <h2 className="text-3xl mt-5 font-semibold mb-2 text-gray-800 uppercase">Educación</h2>
            <p className="text-lg text-gray-800 mb-6">
              Estudié en una secundaria técnica y pública entre los años 2012 y 2015. Durante este tiempo, adquirí conocimientos en computación, desarrollando mis primeros algoritmos y recibiendo una introducción a la programación de videojuegos con Scratch. También aprendí mecanografía, lo cual fortaleció mis habilidades en el uso de la tecnología.
            </p>
            <h2 className="text-3xl font-semibold mb-2 text-gray-800 uppercase">Preparatoria - CONALEP</h2>
            <p className="text-lg text-gray-800 mb-6">
              En la preparatoria de 2016 a 2019, obtuve el título de Técnico Informático y aprendí HTML y CSS para montar mis primeras páginas web. También aprendí a nivel intermedio avanzado lo que es la paquetería de Office. Obtuve mis residencias en Grupo FAME.
            </p>
            <h2 className="text-3xl font-semibold mb-2 text-gray-800 uppercase">Universidad - Instituto Técnologico de Morelia</h2>
            <p className="text-lg text-gray-800 mb-6">
              Desde el año 2020 hasta la actualidad, estoy completando mi educación universitaria. Estoy a un año de obtener mi título como Ingeniero en Sistemas Computacionales con especialidad en Ingeniería de Software. Durante este tiempo, he adquirido experiencia en diversas tecnologías y participado en proyectos significativos que han marcado mi desarrollo profesional.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-6 relative animate__animated animate__fadeInRight">
            <h2 className="text-5xl font-bold mb-2 text-gray-800 relative overflow-hidden">
              <span className="absolute inset-0 border-b-2 border-gray-800"></span>
              <span className="relative z-10 roboto" style={{ color: 'transparent', webkitTextStroke: '1px black' }}>2012 - 2015</span>
            </h2>
            <div>
              <ul className="text-lg text-gray-800 mb-6">
                <li><strong className='font-semibold mb-1 text-blue-600'>Computación:</strong> Desarrollo de algoritmos y fundamentos de programación.</li>
                <li><strong className='font-semibold mb-1 text-blue-600'>Programación de videojuegos:</strong> Introducción a la programación con Scratch.</li>
                <li><strong className='font-semibold mb-1 text-blue-600'>Mecanografía:</strong> Desarrollo de habilidades en el uso eficiente del teclado.</li>
              </ul>
              <h2 className="text-5xl font-bold mb-2 text-gray-800 relative overflow-hidden">
                <span className="absolute inset-0 border-b-2 border-gray-800"></span>
                <span className="relative z-10 roboto" style={{ color: 'transparent', webkitTextStroke: '1px black' }}>2016 - 2019</span>
              </h2>
              <ul className="text-lg text-gray-800 mb-6">
                <li><strong className='font-semibold mb-1 text-blue-600'>Título:</strong> Técnico Informático</li>
                <li><strong className='font-semibold mb-1 text-blue-600'>Habilidades:</strong> HTML, CSS, Paquetería de Office</li>
                <li><strong className='font-semibold mb-1 text-blue-600'>Residencias:</strong> Grupo FAME</li>
              </ul>
              <h2 className="text-5xl font-bold mb-2 text-gray-800 relative overflow-hidden">
                <span className="absolute inset-0 border-b-2 border-gray-800"></span>
                <span className="relative z-10 roboto" style={{ color: 'transparent', webkitTextStroke: '1px black' }}>2020 - Actualidad</span>
              </h2>
              <ul className="text-lg text-gray-800 mb-6">
                <li><strong className='font-semibold mb-1 text-blue-600'>Próximo Título:</strong> Ingeniero en Sistemas Computacionales con especialidad en Ingeniería de Software</li>
                <li><strong className='font-semibold mb-1 text-blue-600'>Frontend:</strong> HTML, CSS, Tailwind CSS, Bootstrap 5, React, Next.js</li>
                <li><strong className='font-semibold mb-1 text-blue-600'>Backend:</strong> Laravel, PHP, Node.js, MongoDB, PostgreSQL, Express.js</li>
                <li><strong className='font-semibold mb-1 text-blue-600'>DevOps:</strong> AWS (Cognito, S3, DynamoDB, Amplify, IAM), Firebase (Firestore, Storage, Database Realtime), GitHub, GitLab</li>
                <li><strong className='font-semibold mb-1 text-blue-600'>Diseño:</strong> Figma, Canva (Avanzado), Adobe Illustrator</li>
                <li><strong className='font-semibold mb-1 text-blue-600'>Otras Herramientas:</strong> JIRA, Trello, Office (Nivel Intermedio Avanzado)</li>
                <li><strong className='font-semibold mb-1 text-blue-600'>Lenguajes de Programación:</strong> JavaScript (JS), C++</li>
              </ul>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
