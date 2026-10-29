import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <h3 className="section-title">Professional Experience</h3>
      <div className="timeline-card">
        <div className="timeline-header">
          <div>
            <h4>Software Associate</h4>
            <span className="company">Raga Tex India Private Limited</span>
          </div>
          <div className="timeline-meta">
            <span><Calendar size={14} /> Sept 2021 – Present</span>
            <span><MapPin size={14} /> Coimbatore, India</span>
          </div>
        </div>
        <ul className="experience-list">
          <li>Architected custom HR, Payroll, and reporting DocTypes with batch validations, cutting manual overhead by 40%.</li>
          <li>Constructed bidirectional integration engines between TallyPrime and ERPNext via Python & XML middleware.</li>
          <li>Engineered automated ETL workflows in Talend Open Studio across RDBMS, Excel, and legacy accounting data.</li>
          <li>Managed MariaDB enterprise databases with 99.9% availability, custom query optimization, and schema migrations.</li>
        </ul>
      </div>
    </section>
  );
}