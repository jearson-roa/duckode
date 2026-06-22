import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero-conversion">
      <div className="container">
        <div className="hero-grid">

          {/* TEXTO */}
          <div className="hero-text">

            <span className="badge">
              ⚡ Disponible para nuevos proyectos
            </span>

            <h1>
              Hacemos que tu negocio
              <span> venda en internet</span>
            </h1>

            <p>
              Diseñamos sitios web, ecommerce y sistemas que generan clientes reales
              y hacen crecer tu negocio.
            </p>

            {/* BOTONES */}
            <div className="hero-buttons">

              <a href="#" className="btn-primary">
                📅 Agendar reunión
              </a>

              <a href="#" className="btn-secondary">
                💬 WhatsApp
              </a>

            </div>

            {/* STATS */}
            <div className="hero-stats">

              <div className="stat-card">
                <strong>+20</strong>
                <span>Proyectos</span>
              </div>

              <div className="stat-card">
                <strong>100%</strong>
                <span>Satisfacción</span>
              </div>

              <div className="stat-card">
                <strong>24h</strong>
                <span>Respuesta</span>
              </div>

            </div>

          </div>

          {/* VISUAL */}
          <div className="hero-card">

            <div className="mock">

              <div className="mock-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>

              <div className="mock-content">
                <h3>Panel de negocio</h3>
                <p>Web + Ecommerce + CRM</p>

                <div className="mock-bar"></div>
                <div className="mock-bar"></div>
                <div className="mock-bar short"></div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;