import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="modern-nav">
        <div className="nav-container">

          <div className="brand">
            MiProyecto
          </div>

          {/* LINKS DESKTOP */}
          <div className="nav-links">
            <a href="#">Inicio</a>
            <a href="#">Servicios</a>
            <a href="#">Contacto</a>

            <a className="cta" href="#">
              Cotizar
            </a>
          </div>

          {/* BOTÓN TOGGLE */}
          <button
            className={`nav-toggle ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a href="#" onClick={() => setOpen(false)}>Inicio</a>
        <a href="#" onClick={() => setOpen(false)}>Servicios</a>
        <a href="#" onClick={() => setOpen(false)}>Contacto</a>

        <a href="#" className="cta-mobile" onClick={() => setOpen(false)}>
          Cotizar
        </a>
      </div>
    </>
  );
};

export default Navbar;