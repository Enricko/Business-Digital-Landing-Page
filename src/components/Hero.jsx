import { useRef, useState } from 'react';
import { ArrowRight, Users } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: yPct * -25, y: xPct * 25 });
  };

  const interactiveStyle = isHovering
    ? { transform: `rotateX(${mousePos.x}deg) rotateY(${mousePos.y}deg) scale(1.05)` }
    : {};

  return (
    <section id="home" className="hero">
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>

      <div className="container hero-container">
        <div className="hero-content animate-up">
          <div className="hero-badge delay-100 animate-up">
            <span className="pulse-dot"></span> Open for New Projects &amp; Collaborations
          </div>

          <h1 className="hero-title delay-200 animate-up">
            We Build.<br />
            We Design.<br />
            <span className="text-gradient">We Deliver.</span>
          </h1>

          <p className="hero-description delay-300 animate-up">
            HexTech is a 3-person freelance team crafting premium web apps, mobile solutions, stunning designs, and data-driven insights. One team, full-stack coverage.
          </p>

          <div className="hero-actions delay-400 animate-up">
            <a href="#contact" className="btn btn-primary">
              Hire Us <ArrowRight size={18} />
            </a>
            <a href="#team" className="btn btn-outline">
              <Users size={18} /> Meet the Team
            </a>
          </div>
        </div>

        <div className="hero-visual animate-up delay-300">
          <div
            ref={cardRef}
            className="glass-card visual-card"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            style={interactiveStyle}
          >
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-body">
              <code>
                <span className="keyword">const</span> <span className="entity">hextech</span> <span className="operator">=</span> {'{'}
                <br />  name: <span className="string">'HexTech'</span>,
                <br />  team: [<span className="string">'Enricko'</span>, <span className="string">'Zhafif'</span>, <span className="string">'Fathir'</span>],
                <br />  build: [<span className="string">'Web'</span>, <span className="string">'Mobile'</span>, <span className="string">'Desktop'</span>],
                <br />  create: [<span className="string">'Design'</span>, <span className="string">'3D'</span>, <span className="string">'Data'</span>],
                <br />  status: <span className="string">'open_for_work'</span>
                <br />{'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
