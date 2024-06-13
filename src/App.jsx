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

export default function App() {
  return (
    <div>
      <Nav />
      <FloatingBubble />
      <Header />
      <Skills />
      <Bio />
      <Education />
      <Projects />
      <Contact />
      <BackToTopButton />
      {/* <Feature />
      <Blog />
      <Footer /> */}
    </div>
  )
}
