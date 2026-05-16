import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import CVDownload from './components/CVDownload.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Root application component composing all sections
const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020617] font-sans text-slate-100">
      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <CVDownload />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;