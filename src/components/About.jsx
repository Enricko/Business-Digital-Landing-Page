import { Code, MonitorSmartphone, Database, Palette } from 'lucide-react';
import './About.css';

export default function About() {
  const services = [
    {
      icon: <Code size={32} />,
      iconClass: 'icon-cyan',
      title: "Web Development",
      description: "Full-stack web apps built with React, Vue, Laravel, and Node.js — responsive, performant, and production-ready."
    },
    {
      icon: <MonitorSmartphone size={32} />,
      iconClass: 'icon-blue',
      title: "Mobile & Desktop",
      description: "Cross-platform mobile apps with Flutter & React Native, and robust desktop solutions powered by Electron."
    },
    {
      icon: <Palette size={32} />,
      iconClass: 'icon-pink',
      title: "UI/UX & 3D Design",
      description: "Pixel-perfect interfaces, brand visuals, and immersive 3D assets crafted with attention to detail and aesthetics."
    },
    {
      icon: <Database size={32} />,
      iconClass: 'icon-cyan',
      title: "Data Analysis",
      description: "Turning raw data into actionable insights — dashboards, reports, and analytical pipelines tailored to your needs."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">What We Offer</h2>

        <div className="about-grid">
          <div className="about-content reveal-on-scroll delay-100">
            <h3 className="about-subtitle">One team. Full-stack coverage.</h3>
            <p>
              HexTech is a tight-knit Indonesian freelance team combining development, design, and data expertise. We take projects from concept to deployment across web, mobile, desktop, and beyond.
            </p>
            <p>
              Whether you need a high-performance web app, a polished mobile experience, stunning 3D visuals, or data-driven dashboards — we bring the right skills together under one roof to deliver clean, maintainable, and scalable solutions.
            </p>

            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number text-gradient">3</span>
                <span className="stat-label">Expert Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-gradient">20+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-gradient">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="features-grid services-grid">
            {services.map((service, index) => (
              <div key={index} className="glass-card feature-card reveal-on-scroll" style={{ transitionDelay: `${(index % 4) * 100 + 200}ms` }}>
                <div className={`feature-icon ${service.iconClass}`}>{service.icon}</div>
                <h4>{service.title}</h4>
                <p className="text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
