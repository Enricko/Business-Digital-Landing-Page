import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Team.css';

const members = [
  {
    initials: 'EP',
    photo: "/team/enricko.png", // swap with '/team/enricko.jpg' when ready
    name: 'Enricko Putra Hartono',
    title: 'Full-Stack & Mobile Engineer',
    quote: "I don't just write code — I craft experiences that work beautifully across every platform.",
    skills: ['React', 'Vue.js', 'Laravel', 'Flutter', 'React Native', 'Electron', 'Go', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/Enricko',
    linkedin: 'https://www.linkedin.com/in/enricko-putra-hartono-744646233/',
    gradient: 'grad-cyan',
  },
  {
    initials: 'ZH',
    photo: "/team/yama.png", // swap with '/team/zhafif.jpg' when ready
    name: 'Zhafif Hylmi Naryama',
    title: 'Designer, Developer & Data Analyst',
    quote: "Good design speaks before words do. I make sure what you see is as powerful as what you build.",
    skills: ['React', 'Laravel', 'Figma', 'Blender', 'Python', 'CSS/HTML', 'Data Analysis'],
    github: 'https://github.com/Ymr76',
    linkedin: null,
    gradient: 'grad-pink',
  },
  {
    initials: 'FA',
    photo: "/team/deo.jpeg", // swap with '/team/fathir.jpg' when ready
    name: 'Fathir Ade Deo',
    title: 'Web Developer & Data Analyst',
    quote: "Every dataset tells a story. I help turn raw numbers into decisions that actually matter.",
    skills: ['React', 'Laravel', 'Python', 'MySQL', 'Data Analysis'],
    github: 'https://github.com/LuxCaspian/',
    linkedin: null,
    gradient: 'grad-blue',
  },
];

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">Meet the Team</h2>
        <p className="team-desc text-muted reveal-on-scroll delay-100">
          Three specialists. One unified team. We combine our strengths to deliver end-to-end digital solutions.
        </p>

        <div className="team-grid">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="glass-card team-card reveal-on-scroll"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className={`member-photo-wrap ${member.gradient}`}>
                <div className="member-photo-inner">
                  {member.photo
                    ? <img src={member.photo} alt={member.name} className="member-photo-img" width="120" height="120" loading="lazy" decoding="async" />
                    : <span className="member-initials">{member.initials}</span>
                  }
                </div>
              </div>

              <h3 className="member-name">{member.name}</h3>
              <p className="member-title text-gradient">{member.title}</p>

              <div className="member-divider" />

              <blockquote className="member-quote">
                <span className="quote-mark">"</span>
                {member.quote}
              </blockquote>

              <div className="member-divider" />

              <div className="member-skills-section">
                <span className="skills-label">Tech Stack</span>
                <div className="member-skills">
                  {member.skills.map((skill) => (
                    <span key={skill} className="skill-chip">{skill}</span>
                  ))}
                </div>
              </div>

              {(member.github || member.linkedin) && (
                <>
                  <div className="member-divider" />
                  <div className="member-socials">
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={20} />
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
