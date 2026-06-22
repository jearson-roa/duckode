import "../App.css";

const Contacto = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-white">Contacto</h2>
        <p className="text-secondary">
          ¿Tienes un proyecto en mente? Contáctame.
        </p>
      </div>

      <div className="row g-4">

        {/* TARJETAS CONTACTO */}
        <div className="col-lg-5">
          <div className="d-grid gap-3">

            <a
              href="https://wa.me/56920358939"
              className="contact-card text-decoration-none"
            >
              <i className="bi bi-whatsapp fs-1 text-success"></i>
              <div>
                <h5 className="text-white mb-1">WhatsApp</h5>
                <span className="text-secondary">
                  +56 9 2035 8939
                </span>
              </div>
            </a>

            <a
              href="mailto:ventas@duckode.cl"
              className="contact-card text-decoration-none"
            >
              <i className="bi bi-envelope-fill fs-1 text-primary"></i>
              <div>
                <h5 className="text-white mb-1">Email</h5>
                <span className="text-secondary">
                  ventas@duckode.cl
                </span>
              </div>
            </a>

            <a
              href="#"
              className="contact-card text-decoration-none"
            >
              <i className="bi bi-instagram fs-1 text-danger"></i>
              <div>
                <h5 className="text-white mb-1">Instagram</h5>
                <span className="text-secondary">
                  @duckodecl
                </span>
              </div>
            </a>

          </div>
        </div>

        {/* FORMULARIO */}
        <div className="col-lg-7">
          <div className="glass-card p-4">

            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Nombre"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Correo"
              />
            </div>

            <div className="mb-3">
              <textarea
                rows={5}
                className="form-control bg-dark text-white border-secondary"
                placeholder="Escribe tu mensaje..."
              />
            </div>

            <button className="btn btn-primary w-100">
              <i className="bi bi-send-fill me-2"></i>
              Enviar Mensaje
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contacto;