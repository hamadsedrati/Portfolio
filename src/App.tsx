import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixRain from './components/MatrixRain';
import ParticleField from './components/ParticleField';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-white">
      <MatrixRain />
      <ParticleField />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;