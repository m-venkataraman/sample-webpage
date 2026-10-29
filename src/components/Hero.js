import React from 'react';
import { Download, MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <header id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-avatar-wrap">
          <img src="/profile.jpg" alt="Venkataramanan M" className="hero-avatar" />
        </div>
        <h1>VENKATARAMANAN M</h1>
        <h2 className="hero-subtitle">Software Developer — Enterprise Solutions & Integrations</h2>
        <p className="hero-desc">
          Specializing in Frappe / ERPNext architectures, Python backend systems,
          bidirectional TallyPrime XML synchronizations, and Azure AI document pipelines.
        </p>

        <div className="hero-meta">
          <span><MapPin size={16} /> Kumbakonam / Coimbatore, Tamil Nadu</span>
          <span><Mail size={16} /> divavenkat1359@gmail.com</span>
        </div>

        <div className="hero-buttons">
          <a href="/Venkataramanan_M_Resume.pdf" download className="btn-primary">
            <Download size={18} /> Download CV (PDF)
          </a>
          <a
            href="https://wa.me/918825584574?text=Hi%20Venkat,%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <MessageCircle size={18} /> WhatsApp Direct
          </a>
        </div>
      </div>
    </header>
  );
}