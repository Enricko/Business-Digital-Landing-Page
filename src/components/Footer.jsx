import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{
      padding: '3rem 0 2rem 0',
      textAlign: 'center',
      borderTop: '1px solid var(--glass-border)',
      marginTop: '4rem',
      background: 'var(--bg-secondary)'
    }}>
      <div className="container flex-center" style={{ flexDirection: 'column', gap: '1.5rem' }}>
        <h2 className="text-gradient" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', fontWeight: '800' }}>HexTech.</h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '420px' }}>
          A freelance team of 3 — building web, mobile, desktop, design, and data solutions from Indonesia.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/Enricko" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FaGithub size={24} />
          </a>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Services', 'Team', 'Stack', 'Portfolio', 'Contact'].map((link, i) => {
            const hrefs = ['#about', '#team', '#skills', '#projects', '#contact'];
            return (
              <a key={link} href={hrefs[i]} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                {link}
              </a>
            );
          })}
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', opacity: 0.6 }}>
          © {new Date().getFullYear()} HexTech. Built with React.
        </p>
      </div>
    </footer>
  );
}
