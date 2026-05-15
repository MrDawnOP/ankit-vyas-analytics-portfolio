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
    <div className="font-sans">
      <Navbar />
      <main className="mt-16">
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