import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detectar si hemos pasado del header original (umbral de scroll)
      const scrollThreshold = 50; // Ajusta este valor según necesites
      
      if (currentScrollY > scrollThreshold) {
        setIsScrolled(true);
        setIsNavVisible(true);
      } else {
        setIsScrolled(false);
        setIsNavVisible(false);
      }
      
      // Lógica para ocultar/mostrar el nav fijo cuando scrolleamos hacia abajo/arriba
      // Solo aplicamos esta lógica cuando ya estamos en modo scrolled
      if (currentScrollY > scrollThreshold) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolleando hacia abajo - ocultar nav
          setIsNavVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolleando hacia arriba - mostrar nav
          setIsNavVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    // Añadir el event listener con throttling para mejor performance
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

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Header original - se oculta completamente cuando isScrolled es true */}
      <header className={`header ${isScrolled ? 'header-hidden' : ''}`}>
        <div className="container">
          <h1 className="main-title">
            <span className="typing" data-text="Visitas Virtuales 360º">
              Visitas Virtuales 360º
            </span>
          </h1>

          <div className="header-buttons">
            {/* Aquí puedes añadir tus botones */}
          </div>
        </div>
      </header>

      {/* Header fijo - aparece cuando hacemos scroll */}
      <div className={`fixed-header ${isScrolled && isNavVisible ? 'active' : ''}`}>
        <div className="fixed-header-container">
          <div className="fixed-header-content">
            <h2 className="fixed-title">Visitas Virtuales 360º</h2>
            <nav className="fixed-nav">
              <a href="#inicio" className="nav-link">Inicio</a>
              <a href="#servicios" className="nav-link">Servicios</a>
              <a href="#galeria" className="nav-link">Galería</a>
              <a href="#contacto" className="nav-link">Contacto</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;