import React from 'react';
import { Download, MessageCircle, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">VENKATARAMANAN</a>

        <div className="nav-links">
          <a href="#home">About</a>
          <a href="#experience">Experience</a>
          <a href="#erpnext">ERPNext</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
        </div>

        <div className="nav-actions">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="btn-theme-toggle"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Resume PDF Download */}
          <a href="/Venkataramanan_M_Resume.pdf" download className="btn-resume">
            <Download size={16} /> Resume
          </a>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/918825584574?text=Hi%20Venkataramanan,%20I%20saw%20your%20portfolio."
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={16} /> Chat
          </a>
        </div>
      </div>
    </nav>
  );
}