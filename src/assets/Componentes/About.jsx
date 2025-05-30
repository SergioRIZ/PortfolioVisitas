import React, { useState, useMemo } from 'react';
import './About.css';

const About = () => {
  const developers = useMemo(() => [
    {
      id: 1,
      name: "Ricardo Cidoncha",
      role: "Lead Developer",
      speciality: "Unity 3D & Architecture",
      description: "Especialista en arquitectura de sistemas y optimización de rendimiento en Unity. Más de 5 años liderando proyectos de videojuegos.",
      image: "/src/assets/Imagenes/Ricardo.jpg",
      linkedin: "https://www.linkedin.com/in/ricardo-cidoncha-morejon-469532364/", // Añade la URL real
      skills: ["Unity 3D", "C#", "Performance Optimization", "Team Leadership"]
    },
    {
      id: 2,
      name: "Pedro Correas",
      role: "UI/UX Developer",
      description: "Experta en interfaces de usuario e interacción. Crea experiencias visuales intuitivas y atractivas para nuestros juegos.",
      speciality: "Interface Design & UX",
      image: "/src/assets/Imagenes/Pedro.png",
      linkedin: "https://www.linkedin.com/in/pedro-correas/", // Añade la URL real
      skills: ["UI Design", "UX Research", "Unity UI", "Figma"]
    },
    {
      id: 3,
      name: "Eva Gomez",
      role: "Gameplay Developer",
      description: "Desarrollador enfocado en mecánicas de juego y sistemas de gameplay. Experto en crear experiencias de juego fluidas y divertidas.",
      speciality: "Game Mechanics & Systems",
      image: "/src/assets/Imagenes/Eva.JPG",
      linkedin: "https://www.linkedin.com/in/evaglop/", // Añade la URL real
      skills: ["C#", "Game Design", "Physics", "AI Programming"]
    },
    {
      id: 4,
      name: "Manu Lopez",
      role: "Mobile Developer",
      description: "Especialista en desarrollo móvil y optimización multiplataforma. Asegura que nuestros juegos funcionen perfectamente en todos los dispositivos.",
      speciality: "Mobile & Cross-platform",
      image: "/src/assets/Imagenes/Manu.jpg",
      linkedin: "https://www.linkedin.com/in/manuel-l%C3%B3pez-de-la-cruz-24a17066/", // Añade la URL real
      skills: ["Mobile Development", "Cross-platform", "Performance", "Unity Cloud Build"]
    },
    {
      id: 5,
      name: "Sergio Roldan",
      role: "Developer",
      description: "Desarrollador con experiencia en React y Unity. Crear interfaces web interactivas y sistemas de visitas virtuales 360º.",
      speciality: "React & Unity",
      image: "/src/assets/Imagenes/Sergi.jpg",
      linkedin: "https://www.linkedin.com/in/sergio-roldan-iba%C3%B1ez-147287220/", // Añade la URL real
      skills: ["React", "JavaScript", "HTML5", "CSS", "Github", "Unity", "C#"]
    },
    {
      id: 6,
      name: "Miguel Rubio",
      role: "Backend Developer",
      description: "Desarrolladora de sistemas backend y networking. Maneja toda la infraestructura servidor y conectividad multijugador.",
      speciality: "Backend & Networking",
      image: "/src/assets/Imagenes/Miguel.jpg",
      linkedin: "https://www.linkedin.com/in/miguel-rubio-villena-7aa02313a/", // Añade la URL real
      skills: ["C#", "Networking", "Database", "Cloud Services"]
    },
    {
      id: 7,
      name: "Carlos Ruiz",
      role: "Audio Developer",
      description: "Especialista en sistemas de audio y sonido interactivo. Crea experiencias sonoras inmersivas para nuestros proyectos.",
      speciality: "Audio Systems & Design",
      image: "/src/assets/Imagenes/Carlos.png",
      linkedin: "https://www.linkedin.com/in/carlos-ruiz-b59010319/", // Añade la URL real
      skills: ["Unity Audio", "Wwise", "Sound Design", "Music Integration"]
    },
    {
      id: 8,
      name: "Jesus Sanchez",
      role: "Quality Assurance",
      description: "Responsable de testing y control de calidad. Se asegura de que cada juego que desarrollamos cumpla con los más altos estándares.",
      speciality: "Testing & Quality Control",
      image: "/src/assets/Imagenes/Jesus.jpg",
      linkedin: "https://www.linkedin.com/in/jesus-sanchez-noriega/", // Añade la URL real
      skills: ["Manual Testing", "Automated Testing", "Bug Tracking", "Quality Standards"]
    }
  ], []);

  const [currentDeveloper, setCurrentDeveloper] = useState(0);
  
  const nextDeveloper = () => {
    setCurrentDeveloper((prev) => (prev + 1) % developers.length);
  };

  const prevDeveloper = () => {
    setCurrentDeveloper((prev) => (prev - 1 + developers.length) % developers.length);
  };

  const handleLinkedInClick = (linkedinUrl) => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  const developer = developers[currentDeveloper];
  const stackTechnologies = useMemo(() => [
    'Unity 3D', 'C#', 'HLSL Shaders', 'UI/UX Design', 
    'Git', 'Mobile Dev', 'Audio Systems'
  ], []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Sobre nosotros</h2>
        <div className="about-content">
          {/* Carousel Section */}
          <div className="about-image">
            <div className="developer-carousel glass-card">
              <button className="nav-arrow" onClick={prevDeveloper} aria-label="Desarrollador anterior">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              
              <div className="developer-card">
                <div className="developer-image" onClick={() => handleLinkedInClick(developer.linkedin)}>
                  <img src={developer.image} alt={developer.name} />
                </div>
                <div className="developer-info">
                  <h3 className="developer-name">{developer.name}</h3>
                  <p className="developer-role gradient-text--primary">{developer.role}</p>
                  <p className="developer-speciality">{developer.speciality}</p>
                  <p className="developer-description">{developer.description}</p>
                  <div className="developer-skills">
                    {developer.skills.map((skill) => (
                      <span key={skill} className="skill-tag skill-tag--purple">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="nav-arrow" onClick={nextDeveloper} aria-label="Siguiente desarrollador">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                </svg>
              </button>
            </div>

            <div className="carousel-indicators">
              {developers.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentDeveloper ? 'active' : ''}`}
                  onClick={() => setCurrentDeveloper(index)}
                  aria-label={`Ver desarrollador ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* About Text Section */}
          <div className="about-text">
            <div className="about-card glass-card">
              <p className="description">
                Somos un equipo encargado en la creación de experiencias inmersivas y visitas virtuales 360º. 
                Transformamos espacios reales en recorridos digitales interactivos, combinando tecnología de vanguardia 
                con diseño intuitivo para ofrecer experiencias únicas que conectan a las personas con lugares increíbles desde cualquier parte del mundo.
              </p>
              
              <div className="team-stats">
                <div className="stat-item">
                  <span className="stat-number">8</span>
                  <span className="stat-label">Desarrolladores</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Años Experiencia</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Proyectos</span>
                </div>
              </div>
              
              <div className="skills-section">
                <h3 className="skills-title">Stack tecnológico:</h3>
                <div className="skills-container">
                  {stackTechnologies.map((skill) => (
                    <span key={skill} className="skill-tag skill-tag--cyan">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;