import React from "react";

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
              Soy desarrollador enfocado en crear sitios web, ecommerce y sistemas
              a medida que ayudan a empresas a digitalizarse y vender más.
            </p>

            <p>
              Trabajo con tecnologías modernas para entregar soluciones rápidas,
              escalables y enfocadas en resultados reales.
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