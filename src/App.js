import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import ErpWorks from './components/ErpWorks';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <ErpWorks />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}