import React, { useEffect, useState, useCallback } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleHomeClick = useCallback((e) => {
    e.preventDefault();
    
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    
    setTimeout(() => {
      setIsVisible(false);
      setHasScrolled(false);
      window.dispatchEvent(new CustomEvent('resetHeader'));
    }, 500);
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 0 && !hasScrolled) {
      setHasScrolled(true);
      setIsVisible(true);
    }
  }, [hasScrolled]);

  useEffect(() => {
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

    handleScroll(); // Estado inicial
    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`navbar ${isVisible ? 'navbar-active' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <h2 className="navbar-title gradient-text navbar-title-clickable" onClick={handleHomeClick}>
            Visitas Virtuales 360º
          </h2>
          <nav className="navbar-nav">
            <a href="#about" className="nav-link">
              Acerca de
            </a>
            <a href="#projects" className="nav-link">
              Proyectos
            </a>
            <a href="#contact" className="nav-link">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;