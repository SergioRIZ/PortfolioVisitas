import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detectar si hemos hecho scroll (más de 100px para activar el header fijo)
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Lógica de visibilidad del header cuando está en modo fijo
      if (isScrolled) {
        // Si estamos en la parte superior (primeros 200px), mostrar header
        if (currentScrollY < 200) {
          setIsVisible(true);
        } 
        // Si scrolleamos hacia abajo más de 200px, ocultar header
        else if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setIsVisible(false);
        }
        // Si scrolleamos hacia arriba, mostrar header
        else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      } else {
        // Cuando estamos en el header original, siempre visible
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Añadir el event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup: remover el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isScrolled]);

  return (
    <>
      {/* Header original */}
      <header className="header">
        <div className="container">
          <h1 className="main-title">
            <span className="typing" data-text="Visitas Virtuales 360º">
              Visitas Virtuales 360º
            </span>
          </h1>

          <div className="header-buttons">
          </div>
        </div>
      </header>

      {/* Header fijo que aparece al hacer scroll */}
      <div className={`fixed-header ${isScrolled ? 'active' : ''} ${!isVisible ? 'hidden' : ''}`}>
        <div className="fixed-header-container">
          <div className="fixed-header-content">
            <h2 className="fixed-title">Visitas Virtuales 360º</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;