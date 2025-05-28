import './Contact.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Información de contacto</h3>
            <div className="contact-item">
              <Mail size={20} />
              <span>tu.email@ejemplo.com</span>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <span>+34 123 456 789</span>
            </div>
            <div className="contact-item">
              <MapPin size={20} />
              <span>Jerez, Andalucia</span>
            </div>
            <div className="social-links">
            </div>
          </div>
          <div className="contact-form">
            <h3 className="contact-subtitle">Envía un mensaje</h3>
            <div className="form-group">
              <input
                type="text"
                placeholder="Tu nombre"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Tu email"
                className="form-input"
              />
              <textarea
                placeholder="Tu mensaje"
                rows="4"
                className="form-textarea"
              ></textarea>
              <button
                onClick={() => alert('Funcionalidad de envío por implementar')}
                className="form-button"
              >
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;