import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Sobre nosotros</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <span>Foto aquí</span>
            </div>
          </div>
          <div className="about-text">
            <p className="description">
                Somos un equipo apasionado por la tecnología y el desarrollo web, especializados en crear experiencias digitales únicas. 
            </p>
            <div className="skills-section">
              <h3 className="skills-title">Habilidades principales:</h3>
              <div className="skills-container">
                {/*Poned aqui las habilidades que veais convenientes*/}
                {['React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Git'].map((skill) => (
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