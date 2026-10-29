import React from 'react';
//import { Code, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projectList = [
    {
      title: "Azure AI Document Intelligence Pipeline",
      tech: "Python, Azure OCR, JSON, REST API",
      desc: "Extracts key-value invoice pairs, handles noisy scans, and transforms them into JSON payloads for automatic accounting."
    },
    {
      title: "Talend Open Studio ETL Engine",
      tech: "Talend, MariaDB, MySQL, XML",
      desc: "Automated ETL routines ingesting multi-format legacy records into centralized enterprise schemas on scheduled cycles."
    },
    {
      title: "Enterprise Product Web Catalog",
      tech: "React.js, Vite, CSS Grid",
      desc: "Responsive web application built for Raga Tex showcases, featuring fast rendering and high-performance asset delivery."
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h3 className="section-title">Featured Projects</h3>
      <div className="cards-grid">
        {projectList.map((p, i) => (
          <div key={i} className="card project-card">
            <span className="tech-badge">{p.tech}</span>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}