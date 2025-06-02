import './Contact.css';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <h2 className="section-title" id="contact-heading">Contacto</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Información de contacto</h3>
            <div className="contact-item">
              <MapPin size={20} aria-hidden="true" />
              <span>España</span>
            </div>
            <div className="social-links" aria-label="Redes sociales">
              <a
                href="https://www.linkedin.com/in/pedro-correas"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <p>Pedro Correas</p>
                <i className="fab fa-linkedin-in"></i>
              </a><a
                href="https://www.linkedin.com/in/sergio-roldan-iba%C3%B1ez-147287220/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <p>Sergio Roldan</p>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-cidoncha-morejon-469532364/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <p>Ricardo Ciconcha</p>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/manuel-l%C3%B3pez-de-la-cruz-24a17066/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <p>Manuel Lopez</p>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jesus-sanchez-noriega/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <p>Jesus Sanchez</p>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/miguel-rubio-villena-7aa02313a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <p>Miguel Rubio</p>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/evaglop/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <p>Eva Gomez</p>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-ruiz-b59010319/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <p>Carlos Ruiz</p>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <h3 className="contact-subtitle">Envía un mensaje</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Funcionalidad de envío por implementar'); }}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  className="form-input"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Tu mensaje"
                  rows="4"
                  className="form-textarea"
                  required
                ></textarea>
                <button type="submit" className="form-button">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
