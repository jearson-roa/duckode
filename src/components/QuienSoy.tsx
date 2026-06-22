const QuienSoy: React.FC = () => {
  return (
    <section className="about-section">
      <div className="container">

        <div className="about-grid">

          {/* TEXTO */}
          <div className="about-text">

            <span className="about-badge">
              👋 Conóceme
            </span>

            <h2>
              Transformo ideas en
              <span> soluciones digitales</span>
            </h2>

            <p>
              Soy desarrollador en formación, actualmente estudiando Analista Programador en Duoc UC, con una base sólida en desarrollo web y sistemas digitales.</p>

            <p>
              Cuento con aproximadamente 1 año y medio de experiencia práctica, trabajando en proyectos personales y soluciones orientadas a clientes reales, lo que me ha permitido fortalecer habilidades en diseño y desarrollo de aplicaciones web modernas.
            </p>

            <p>
              Actualmente me enfoco en el desarrollo de sitios web, aplicaciones y sistemas a medida para pymes, con el objetivo de ayudar a las empresas a digitalizar sus procesos, mejorar su presencia online y aumentar sus oportunidades de venta.
            </p>

            <p>
              Me motiva construir soluciones que no solo sean visualmente atractivas, sino que también resuelvan problemas reales, aportando valor tanto al negocio como a sus clientes.
            </p>

            <p>
              Trabajo con tecnologías modernas del ecosistema web, priorizando la eficiencia, escalabilidad y una buena experiencia de usuario en cada proyecto.
            </p>

            {/* MINI STATS */}
            <div className="about-stats">

              <div className="about-stat">
                <strong>+1 años</strong>
                <span>Experiencia</span>
              </div>

              <div className="about-stat">
                <strong>+10</strong>
                <span>Proyectos</span>
              </div>

              <div className="about-stat">
                <strong>Full Stack</strong>
                <span>Especialidad</span>
              </div>

            </div>

            <div className="about-buttons">
              <a href="#" className="btn-primary">
                📅 Hablemos de tu proyecto
              </a>

              <a href="#" className="btn-secondary">
                💬 Contactar
              </a>
            </div>

          </div>

          {/* VISUAL */}
          <div className="about-card">

            <div className="about-glass">

              <div className="avatar-circle">
                👨‍💻
              </div>

              <h3>Desarrollador Web</h3>

              <p>
                Especializado en React, Node.js, Express y sistemas empresariales.
              </p>

              <div className="tech-tags">

                <span>React</span>
                <span>Node.js</span>
                <span>MySQL</span>
                <span>Bootstrap</span>
                <span>Wordpress</span>
                <span>Shopify</span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default QuienSoy;