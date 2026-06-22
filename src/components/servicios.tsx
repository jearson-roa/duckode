import React, { useState } from "react";
import "../App.css";

const Servicios = () => {
  const servicios = [
    {
      titulo: "Diseño Web",
      descripcion: "Sitios modernos, rápidos y responsivos.",
      icono: "bi-laptop",
    },
    {
      titulo: "Ecommerce",
      descripcion: "Shopify y WooCommerce listos para vender.",
      icono: "bi-cart3",
    },
    {
      titulo: "Landing Pages",
      descripcion: "Diseñadas para conversión y marketing.",
      icono: "bi-rocket",
    },
    {
      titulo: "Sistemas Web",
      descripcion: "CRM, ERP y plataformas a medida.",
      icono: "bi-code-slash",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="services-mini py-5">
      <div className="container">

        <div className="text-center mb-4">
          <span className="badge text-bg-primary px-3 py-2">
            Servicios
          </span>
          <h2 className="fw-bold mt-3">
            Lo que hacemos
          </h2>
        </div>

        <div className="services-mini-layout">

          <div className="services-list-mini">
            {servicios.map((s, i) => (
              <div
                key={i}
                className={`service-item-mini ${active === i ? "active" : ""}`}
                onMouseEnter={() => setActive(i)}
              >
                <i className={`bi ${s.icono}`}></i>
                <span>{s.titulo}</span>
                <i className="bi bi-arrow-up-right arrow"></i>
              </div>
            ))}
          </div>

          <div className="service-preview">
            <i className={`bi ${servicios[active].icono}`}></i>
            <h3>{servicios[active].titulo}</h3>
            <p>{servicios[active].descripcion}</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Servicios;