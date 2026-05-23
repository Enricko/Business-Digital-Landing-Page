import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    const subject = encodeURIComponent(`HexTech Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:enricko.putra028@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">Let's Work Together</h2>
        <p className="contact-desc text-muted reveal-on-scroll delay-100">
          Have a project in mind? Tell us what you need — we'll get back to you quickly to discuss how HexTech can help.
        </p>

        <div className="contact-container">
          <div className="contact-info reveal-on-scroll delay-200">
            <div className="glass-card info-card">
              <Mail className="info-icon" size={32} />
              <h4>Email Us</h4>
              <p className="text-muted mb-2">We respond quickly to project inquiries.</p>
              <a href="mailto:enricko.putra028@gmail.com" className="contact-link text-gradient">enricko.putra028@gmail.com</a>
            </div>
            
            <div className="glass-card info-card">
              <MapPin className="info-icon" size={32} />
              <h4>Location</h4>
              <p className="text-muted mb-2">Indonesia</p>
              <span className="contact-link text-gradient">Available Remotely, Worldwide</span>
            </div>
          </div>

          <form className="glass-card contact-form reveal-on-scroll delay-300" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
