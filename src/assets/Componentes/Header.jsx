import React, { useEffect, useState, useCallback } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const resetHeader = useCallback(() => {
    setIsVisible(true);
    setHasScrolled(false);
    setIsAutoScrolling(false);
  }, []);

  const performAutoScroll = useCallback(() => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      const targetPosition = rect.top + window.pageYOffset;
      
      window.scrollTo({ 
        top: targetPosition,
        behavior: 'smooth' 
      });
      
      setTimeout(() => setIsAutoScrolling(false), 1000);
    } else {
      setIsAutoScrolling(false);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (isAutoScrolling || currentScrollY === 0) return;
    
    if (!hasScrolled) {
      setHasScrolled(true);
      setIsVisible(false);
      setIsAutoScrolling(true);
      
      setTimeout(performAutoScroll, 600);
    }
  }, [hasScrolled, isAutoScrolling, performAutoScroll]);

  useEffect(() => {
    window.addEventListener('resetHeader', resetHeader);
    
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
      window.removeEventListener('resetHeader', resetHeader);
    };
  }, [handleScroll, resetHeader]);

  return (
    <header className={`header ${!isVisible ? 'header-hidden' : ''}`}>
      <div className="container">
        <h1 className="main-title">
          <span className="typing gradient-text" data-text="Visitas Virtuales 360º">
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