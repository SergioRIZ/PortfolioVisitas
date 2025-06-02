import React, { useEffect, useState, useCallback, useRef } from 'react';
import './Header.css';

// Constantes de configuración
const ANIMATION_CONFIG = {
  HIDE_DELAY: 600,
  AUTO_SCROLL_DURATION: 1000,
  SCROLL_BEHAVIOR: 'smooth'
};

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  
  // Ref para la sección about (mejor que querySelector)
  const aboutSectionRef = useRef(null);
  
  // Ref para el throttling del scroll
  const scrollTickingRef = useRef(false);

  const resetHeader = useCallback(() => {
    setIsVisible(true);
    setHasScrolled(false);
    setIsAutoScrolling(false);
  }, []);

  const performAutoScroll = useCallback(() => {
    // Buscar la sección about si no tenemos la ref
    const aboutSection = aboutSectionRef.current || document.querySelector('#about');
    
    if (aboutSection) {
      // Guardar ref para próximas veces
      if (!aboutSectionRef.current) {
        aboutSectionRef.current = aboutSection;
      }
      
      const rect = aboutSection.getBoundingClientRect();
      const targetPosition = rect.top + window.pageYOffset;
      
      window.scrollTo({ 
        top: targetPosition,
        behavior: ANIMATION_CONFIG.SCROLL_BEHAVIOR
      });
      
      // Usar la constante para el timeout
      setTimeout(() => {
        setIsAutoScrolling(false);
      }, ANIMATION_CONFIG.AUTO_SCROLL_DURATION);
    } else {
      console.warn('Sección #about no encontrada');
      setIsAutoScrolling(false);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Early return para evitar procesamiento innecesario
    if (isAutoScrolling || currentScrollY === 0) return;
    
    if (!hasScrolled) {
      setHasScrolled(true);
      setIsVisible(false);
      setIsAutoScrolling(true);
      
      // Usar la constante para el delay
      setTimeout(performAutoScroll, ANIMATION_CONFIG.HIDE_DELAY);
    }
  }, [hasScrolled, isAutoScrolling, performAutoScroll]);

  // Función throttled optimizada
  const throttledScroll = useCallback(() => {
    if (!scrollTickingRef.current) {
      requestAnimationFrame(() => {
        handleScroll();
        scrollTickingRef.current = false;
      });
      scrollTickingRef.current = true;
    }
  }, [handleScroll]);

  useEffect(() => {
    // Encontrar y cachear la sección about al montar
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSectionRef.current = aboutSection;
    }

    // Event listeners
    window.addEventListener('resetHeader', resetHeader);
    window.addEventListener('scroll', throttledScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resetHeader', resetHeader);
    };
  }, [resetHeader, throttledScroll]);

  // Limpiar refs al desmontar
  useEffect(() => {
    return () => {
      aboutSectionRef.current = null;
      scrollTickingRef.current = false;
    };
  }, []);

  return (
    <header 
      className={`header ${!isVisible ? 'header-hidden' : ''}`}
      role="banner"
      aria-label="Encabezado principal con título de visitas virtuales 360º"
    >
      <div className="container">
        <h1 className="main-title">
          <span 
            className="typing gradient-text" 
            data-text="Visitas Virtuales 360º"
            aria-label="Visitas Virtuales 360 grados"
          >
            Visitas Virtuales 360º
          </span>
        </h1>
        <p className="subtitle">
          <span className="subtitle-line1">Explora espacios como nunca antes</span>
          <span className="subtitle-line2">con nuestra tecnología de vanguardia</span>
        </p>
      </div>
    </header>
  );
};

export default Header;