import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault();
    
    // Scroll al top
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    
    // Ocultar el navbar y resetear estados
    setTimeout(() => {
      setIsVisible(false);
      setHasScrolled(false);
      
      // Disparar un evento personalizado para que el Header se resetee
      window.dispatchEvent(new CustomEvent('resetHeader'));
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Marcar que el usuario ha hecho scroll al menos una vez
      if (currentScrollY > 0 && !hasScrolled) {
        setHasScrolled(true);
        setIsVisible(true); // Una vez que aparece, permanece visible
      }
      
      // Una vez que hasScrolled es true, el navbar permanece siempre visible
      // No importa la posición del scroll
    };

    // Throttling para mejor performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Ejecutar una vez al cargar para establecer estado inicial
    handleScroll();

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [hasScrolled]);

  return (
    <div className={`navbar ${isVisible ? 'navbar-active' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <h2 className="navbar-title">Visitas Virtuales 360º</h2>
          <nav className="navbar-nav">
            <a href="#header" className="nav-link" onClick={handleHomeClick}>Inicio</a>
            <a href="#about" className="nav-link">Acerca de</a>
            <a href="#projects" className="nav-link">Proyectos</a>
            <a href="#contact" className="nav-link">Contacto</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;