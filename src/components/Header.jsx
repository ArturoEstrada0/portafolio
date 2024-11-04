import React, { useState, useEffect } from 'react';
import { Coffee, Briefcase, Code, Star } from 'lucide-react';
import './Header.css'

const TypewriterEffect = ({ words, speed = 100, deleteSpeed = 50, delayBetweenWords = 2000 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        if (text.length > 0) {
          setText(currentWord.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, delayBetweenWords]);

  return <span className="text-emerald-400">{text}<span className="animate-pulse">|</span></span>;
};

const StatusIndicator = () => {
  const [status, setStatus] = useState(0);
  const statuses = [
    { text: "Disponible para proyectos", icon: Coffee, color: "text-green-400" },
    { text: "Buscando nuevas oportunidades", icon: Briefcase, color: "text-blue-400" },
    { text: "Desarrollando ideas increíbles", icon: Code, color: "text-purple-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) => (prev + 1) % statuses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = statuses[status].icon;

  return (
    <div className="flex items-center justify-center space-x-2 bg-gray-800/50 backdrop-blur-sm py-2 px-4 rounded-full animate-bounce-slow">
      <CurrentIcon className={`w-4 h-4 ${statuses[status].color}`} />
      <span className={`text-sm ${statuses[status].color}`}>
        {statuses[status].text}
      </span>
    </div>
  );
};

const Particles = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles-container');
    if (particlesContainer && particlesContainer.children.length === 0) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-white rounded-full animate-twinkle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return <div id="particles-container" className="absolute inset-0 z-50 pointer-events-none"></div>;
};

const StatBox = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
    <Icon className="w-6 h-6 text-emerald-400 mb-2" />
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br z-20 from-slate-900 via-gray-900 to-slate-900">
      <Particles />

      <div 
        className={`relative z-20 text-center px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Indicador de estado */}
        <div className="mb-6">
          <StatusIndicator />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Hola, soy{' '}
          <TypewriterEffect
            words={[
              'Arturo Estrada',
              'Desarrollador Frontend',
              'Freelancer Creativo',
            ]}
          />
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
          Transformando ideas en experiencias digitales excepcionales
          <span className="block mt-2 text-sm md:text-base">
            Con 3 años construyendo soluciones web innovadoras
          </span>
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
          <StatBox icon={Code} value="8+" label="Proyectos Completados" />
          <StatBox icon={Star} value="100%" label="Satisfacción" />
          <StatBox icon={Coffee} value="3+" label="Años de Experiencia" />
          <StatBox icon={Briefcase} value="16+" label="Clientes Felices" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('proyectos')}
            className="group relative px-6 py-3 w-48 overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-400 text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Ver Proyectos</span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
          </button>
          
          <button
            onClick={() => scrollToSection('contacto')}
            className="group relative px-6 py-3 w-48 overflow-hidden rounded-lg bg-transparent text-white border-2 border-purple-500 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Contactar</span>
            <div className="absolute inset-0 z-0 bg-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20"/>
          </button>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 z-10 pointer-events-none"/>
    </header>
  );
};

export default Header;