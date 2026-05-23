import { ExternalLink, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      name: "Saba Jogja (Web Dev)",
      description: "An interactive application containing comprehensive information about Yogyakarta, built natively with Flutter.",
      github: "https://github.com/Enricko/Saba-Jogja-Lomba-Web-Dev-Competition-Feb-2024",
      tags: ["Flutter", "Dart", "Mobile App"],
      stars: 3
    },
    {
      name: "Realtime Chatting App",
      description: "A multi-platform real-time messaging application created using the robust Flutter Framework.",
      github: "https://github.com/Enricko/Flutter-Realtime-ChattingApp",
      tags: ["Flutter", "Realtime", "Chat"],
      stars: 4
    },
    {
      name: "Dino Run with Flutter",
      description: "A multi-platform endless runner game inspired by the classic Dino Game, built using the Flutter Flame engine.",
      github: "https://github.com/Enricko/Dino-Run-with-Flutter",
      tags: ["Flutter", "Flame", "Game Dev"],
      stars: 4
    },
    {
      name: "Flask-Restx-Template",
      description: "A versatile and beginner-friendly repository designed to streamline API development using Python and Flask Rest-X.",
      github: "https://github.com/Enricko/Flask-Restx-Template",
      tags: ["Python", "Flask", "Backend API"],
      stars: 3
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">Our Portfolio</h2>
        <p className="projects-desc text-muted reveal-on-scroll delay-100">
          A selection of projects built by our team — open source work and client contributions.
        </p>

        <div className="projects-grid">
          {projects.map((project, idx) => (
             <div key={idx} className="glass-card project-card reveal-on-scroll" style={{ transitionDelay: `${(idx % 4) * 100}ms` }}>
              <div className="project-header">
                <h3>{project.name}</h3>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              <p className="project-desc text-muted">{project.description}</p>
              
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-stars text-muted">
                  <Star size={14} className="star-icon" /> {project.stars}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta reveal-on-scroll delay-300">
          <a href="https://github.com/Enricko" target="_blank" rel="noreferrer" className="btn btn-outline">
            View More on GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
