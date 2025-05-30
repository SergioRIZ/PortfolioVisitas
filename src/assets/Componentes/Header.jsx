import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  useEffect(() => {
    // Escuchar el evento de reset desde el Navbar
    const handleReset = () => {
      setIsVisible(true);
      setHasScrolled(false);
      setIsAutoScrolling(false);
    };

    window.addEventListener('resetHeader', handleReset);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // No hacer nada si estamos en un auto-scroll
      if (isAutoScrolling) return;
      
      // Detectar el primer scroll manual
      if (currentScrollY > 0 && !hasScrolled) {
        setHasScrolled(true);
        setIsVisible(false);
        setIsAutoScrolling(true);
        
        // Hacer scroll automático a la sección "About" después de que el header desaparezca
        setTimeout(() => {
          // Buscar específicamente la sección about
          const aboutSection = document.querySelector('#about');
          
          if (aboutSection) {
            // Calcular la posición exacta del título "Sobre nosotros"
            const rect = aboutSection.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetPosition = rect.top + scrollTop;
            
            window.scrollTo({ 
              top: targetPosition,
              behavior: 'smooth' 
            });
            
            // Después del auto-scroll, permitir scroll manual de nuevo
            setTimeout(() => {
              setIsAutoScrolling(false);
            }, 1000);
          } else {
            setIsAutoScrolling(false);
          }
        }, 600);
      }
      
      // Una vez que el usuario ha hecho scroll, el header permanece oculto
      // Solo se reactiva si refrescas la página o recargas el componente
      // O si le das al boton de inicio en el Navbar
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

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resetHeader', handleReset);
    };
  }, [hasScrolled, isAutoScrolling]);

  return (
    <header className={`header ${!isVisible ? 'header-hidden' : ''}`}>
      <div className="container">
        <h1 className="main-title">
          <span className="typing" data-text="Visitas Virtuales 360º">
            Visitas Virtuales 360º
          </span>
        </h1>

        <p className="subtitle">
          Explora espacios como nunca antes con nuestra tecnología de vanguardia
        </p>
      </div>
    </header>
  );
};

export default Header;