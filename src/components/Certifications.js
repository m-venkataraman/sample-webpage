import React from 'react';
import { Award, GraduationCap } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <h3 className="section-title">Education & Certifications</h3>
      <div className="dual-grid">
        <div className="card">
          <div className="card-header-icon"><GraduationCap size={28} /></div>
          <h4>B.E. — Computer Science & Engineering</h4>
          <p className="subtext">Arasu Engineering College (Anna University)</p>
          <span className="badge">2016 – 2020 | Kumbakonam</span>
        </div>
        <div className="card">
          <div className="card-header-icon"><Award size={28} /></div>
          <h4>Certifications & Internships</h4>
          <ul className="cert-list">
            <li><strong>CCNA Certification Training</strong> — Cisco Networking Academy</li>
            <li><strong>Android App Development</strong> — NIT Trichy (Merit Award)</li>
            <li><strong>Web Development Internship</strong> — Irarity India Pvt. Ltd.</li>
            <li><strong>Android Engineering Internship</strong> — Infogro Technologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
}