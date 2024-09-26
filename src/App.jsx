import React from 'react'
import './App.css'

import { Feature } from './components/Feature'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import Nav from './components/Nav'
import Header from './components/Header'
import Skills from './components/Skills'
import Bio from './components/Bio'
import Education from './components/Education'
import Projects from './components/Proyects'
import Contact from './components/Contact'
import FloatingBubble from './components/FloatingBubble'
import BackToTopButton from './components/BackToTop'
import useCursorEffect from './components/UseCursorEffect'
import Squares from './components/Squares'

export default function App() {
  const {
    isHovered,
    bubblePosition,
    isStretching,
    bubbleColor,
    isRippling,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
    handleButtonHover, // Cambiar el color de la burbuja y activar el efecto de onda
  } = useCursorEffect();
  return (
    <div>
      <Squares />
      <Nav />
      <FloatingBubble />
      <Header />
      <Skills />
      <Bio />
      {/* <Education /> */}
      <Projects />
      <Contact />
      <BackToTopButton />
      {/* <Feature />
      <Blog />
      <Footer /> */}
      {isHovered && (
        <div
          className={`bubble-effect ${isStretching ? 'stretch' : ''} ${isRippling ? 'ripple' : ''}`}
          style={{
            top: bubblePosition.y,
            left: bubblePosition.x,
            backgroundColor: bubbleColor, // Aplicar el color dinámico
          }}
        />
      )}
    </div>
  )
}
