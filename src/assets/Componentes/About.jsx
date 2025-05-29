import { useState } from 'react';
import './About.css';

const About = () => {
  const developers = [
    {
      id: 1,
      name: "Ricardo Cidoncha",
      role: "Lead Developer",
      speciality: "Unity 3D & Architecture",
      description: "Especialista en arquitectura de sistemas y optimización de rendimiento en Unity. Más de 5 años liderando proyectos de videojuegos.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      skills: ["Unity 3D", "C#", "Performance Optimization", "Team Leadership"]
    },
    {
      id: 2,
      name: "Pedro Correas",
      role: "UI/UX Developer",
      description: "Experta en interfaces de usuario e interacción. Crea experiencias visuales intuitivas y atractivas para nuestros juegos.",
      speciality: "Interface Design & UX",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      skills: ["UI Design", "UX Research", "Unity UI", "Figma"]
    },
    {
      id: 3,
      name: "Eva Gomez",
      role: "Gameplay Developer",
      description: "Desarrollador enfocado en mecánicas de juego y sistemas de gameplay. Experto en crear experiencias de juego fluidas y divertidas.",
      speciality: "Game Mechanics & Systems",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      skills: ["C#", "Game Design", "Physics", "AI Programming"]
    },
    {
      id: 4,
      name: "Manu Lopez",
      role: "Mobile Developer",
      description: "Especialista en desarrollo móvil y optimización multiplataforma. Asegura que nuestros juegos funcionen perfectamente en todos los dispositivos.",
      speciality: "Mobile & Cross-platform",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      skills: ["Mobile Development", "Cross-platform", "Performance", "Unity Cloud Build"]
    },
    {
      id: 5,
      name: "Sergio Roldan",
      role: "Graphics Developer",
      description: "Experto en shaders, iluminación y efectos visuales. Responsable de que nuestros juegos tengan el mejor aspecto visual posible.",
      speciality: "Shaders & Visual Effects",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      skills: ["HLSL", "Shaders", "VFX", "Lighting"]
    },
    {
      id: 6,
      name: "Miguel Rubio",
      role: "Backend Developer",
      description: "Desarrolladora de sistemas backend y networking. Maneja toda la infraestructura servidor y conectividad multijugador.",
      speciality: "Backend & Networking",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      skills: ["C#", "Networking", "Database", "Cloud Services"]
    },
    {
      id: 7,
      name: "Carlos Ruiz",
      role: "Audio Developer",
      description: "Especialista en sistemas de audio y sonido interactivo. Crea experiencias sonoras inmersivas para nuestros proyectos.",
      speciality: "Audio Systems & Design",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=300&fit=crop&crop=face",
      skills: ["Unity Audio", "Wwise", "Sound Design", "Music Integration"]
    },
    {
      id: 8,
      name: "Jesus Sanchez",
      role: "Quality Assurance",
      description: "Responsable de testing y control de calidad. Se asegura de que cada juego que desarrollamos cumpla con los más altos estándares.",
      speciality: "Testing & Quality Control",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      skills: ["Manual Testing", "Automated Testing", "Bug Tracking", "Quality Standards"]
    }
  ];

  const [currentDeveloper, setCurrentDeveloper] = useState(0);

  const nextDeveloper = () => {
    setCurrentDeveloper((prev) => (prev + 1) % developers.length);
  };

  const prevDeveloper = () => {
    setCurrentDeveloper((prev) => (prev - 1 + developers.length) % developers.length);
  };

  const developer = developers[currentDeveloper];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Sobre nosotros</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="developer-carousel">
              <button className="nav-arrow nav-arrow-left" onClick={prevDeveloper}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              
              <div className="developer-card">
                <div className="developer-image">
                  <img src={developer.image} alt={developer.name} />
                </div>
                <div className="developer-info">
                  <h3 className="developer-name">{developer.name}</h3>
                  <p className="developer-role">{developer.role}</p>
                  <p className="developer-speciality">{developer.speciality}</p>
                  <p className="developer-description">{developer.description}</p>
                  <div className="developer-skills">
                    {developer.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="nav-arrow nav-arrow-right" onClick={nextDeveloper}>
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
                />
              ))}
            </div>
          </div>

          <div className="about-text">
            <p className="description">
              Somos un equipo de <strong>8 desarrolladores apasionados</strong> por la creación de videojuegos y experiencias interactivas. 
              Especializados en <strong>Unity y C#</strong>, combinamos creatividad técnica con innovación para dar vida a proyectos únicos 
              que desafían los límites de lo posible en el mundo digital.
            </p>
            <div className="team-stats">
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-label">Desarrolladores</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Unity</span>
                <span className="stat-label">Motor Principal</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">C#</span>
                <span className="stat-label">Lenguaje Core</span>
              </div>
            </div>
            <div className="skills-section">
              <h3 className="skills-title">Stack tecnológico:</h3>
              <div className="skills-container">
                {[
                  'Unity 3D', 
                  'C#', 
                  'UI/UX', 
                  'Git',  
                  'Mobile Dev'
                ].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default About;