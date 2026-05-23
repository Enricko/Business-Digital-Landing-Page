import './Skills.css';

export default function Skills() {
  const allSkills = [
    { name: "React", icon: "/logos/react.svg" },
    { name: "Vite", icon: "/logos/vite.svg" },
    { name: "JavaScript", icon: "/logos/javascript.svg" },
    { name: "TypeScript", icon: "/logos/typescript.svg" },
    { name: "CSS3", icon: "/logos/css3.svg" },
    { name: "Tailwind CSS", icon: "/logos/tailwindcss.svg" },
    { name: "Vue.js", icon: "/logos/vuedotjs.svg" },
    { name: "Laravel", icon: "/logos/laravel.svg" },
    { name: "PHP", icon: "/logos/php.svg" },
    { name: "Python", icon: "/logos/python.svg" },
    { name: "Go", icon: "/logos/go.svg" },
    { name: "MySQL", icon: "/logos/mysql.svg" },
    { name: "PostgreSQL", icon: "/logos/postgresql.svg" },
    { name: "Node.js", icon: "/logos/nodedotjs.svg" },
    { name: "React Native", icon: "/logos/react.svg" },
    { name: "Flutter", icon: "/logos/flutter.svg" },
    { name: "Electron", icon: "/logos/electron.svg" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">Our Tech Stack</h2>
        <p className="skills-desc text-muted reveal-on-scroll delay-100">
          The combined toolkit our team brings to every project — spanning frontend, backend, mobile, design, and data.
        </p>

        <div className="skills-grid">
          {allSkills.map((skill, idx) => (
            <div key={idx} className="logo-card reveal-on-scroll" style={{ transitionDelay: `${(idx % 10) * 50}ms` }} title={skill.name}>
              <img src={skill.icon} alt={skill.name} className="skill-logo" />
              <div className="skill-name-overlay">
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
