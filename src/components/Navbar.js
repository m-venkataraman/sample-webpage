import React from 'react';
import { Download, MessageCircle, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">VENKATARAMANAN</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#erpnext">ERPNext</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
        </div>
        <div className="nav-actions">
          <a href="/Venkataramanan_M_Resume.pdf" download className="btn-resume">
            <Download size={16} /> Resume
          </a>
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