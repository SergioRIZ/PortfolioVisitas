import React, { useState, lazy, Suspense } from 'react';
import './Project.css';

// Lazy loading del componente Unity para mejor rendimiento
const UnityProject = lazy(() => import('./Project360'));

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Tour Virtual 360º",
      description: "Aplicación interactiva desarrollada para realizar un tour virtual inmersivo en 360 grados. Permite explorar espacios de forma intuitiva con controles táctiles y de mouse.",
      tech: ["Unity", "C#", "WebGL", "360º VR"],
      features: [
        "Navegación 360º fluida",
        "Controles intuitivos",
        "Optimizado para web",
        "Compatible con dispositivos móviles"
      ]
    }
  ];

  const handleProjectToggle = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <Suspense fallback={
                  <div className="unity-loading-placeholder">
                    <div className="loading-spinner"></div>
                    <p>Cargando experiencia Unity...</p>
                  </div>
                }>
                  <UnityProject />
                </Suspense>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <button 
                  className="project-details-btn"
                  onClick={() => handleProjectToggle(project.id)}
                >
                  {activeProject === project.id ? 'Ocultar detalles' : 'Ver detalles'}
                </button>

                {activeProject === project.id && (
                  <div className="project-details">
                    <h4>Características principales:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;