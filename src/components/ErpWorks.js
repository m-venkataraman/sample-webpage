import React from 'react';
import { Database, Server, RefreshCw, FileText } from 'lucide-react';

export default function ErpWorks() {
  const erpCapabilities = [
    {
      title: "DocType Architecture & Custom Apps",
      icon: <Server size={24} />,
      desc: "Designed custom DocTypes for HR, Payroll, Material Requests, and Inspection Sampling with dynamic client/server validation hooks."
    },
    {
      title: "TallyPrime XML Synchronization",
      icon: <RefreshCw size={24} />,
      desc: "Bidirectional middleware pipeline synchronizing thousands of financial vouchers, ledgers, and payment entries automatically."
    },
    {
      title: "Database Administration & Tuning",
      icon: <Database size={24} />,
      desc: "Optimized MariaDB relational backends, automated index maintenance, schema migrations, and high-performance querying."
    },
    {
      title: "Automated OCR & Data Ingestion",
      icon: <FileText size={24} />,
      desc: "Azure AI layout and table extraction parsing scanned supplier invoices directly into structured ERPNext records."
    }
  ];

  return (
    <section id="erpnext" className="section-container">
      <h3 className="section-title">Frappe & ERPNext Specialization</h3>
      <div className="cards-grid">
        {erpCapabilities.map((item, idx) => (
          <div key={idx} className="card">
            <div className="card-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}