import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Links from './components/Links';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Links/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
