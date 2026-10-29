import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import ErpWorks from './components/ErpWorks';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  // Read persisted theme from localStorage, default to 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-theme') || 'dark';
  });

  useEffect(() => {
    // Apply data-theme attribute on <html> element
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-layout">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
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