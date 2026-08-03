import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import "./Footer.css";

function Footer() {
    return (
        <footer className="bg-slate-900 text-white">

            <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">

                {/* Empresa */}
                <div>
                    <Link to="/">
                        <img 
                            src={logo}
                            alt="Logo"
                            className="h-12 w-auto"
                        />
                    </Link>

                    <p className="mt-4 text-sm text-slate-300">
                        Soluciones profesionales para nuestros clientes,
                        entregando calidad y compromiso en cada proyecto.
                    </p>
                </div>


                {/* Links */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">
                        Navegación
                    </h3>

                    <ul className="space-y-2 text-slate-300">

                        <li>
                            <Link 
                                to="/"
                                className="transition hover:text-amber-400"
                            >
                                Inicio
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/servicios"
                                className="transition hover:text-amber-400"
                            >
                                Servicios
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/contacto"
                                className="transition hover:text-amber-400"
                            >
                                Contacto
                            </Link>
                        </li>

                    </ul>
                </div>


                {/* Contacto */}
                <div>

                    <p className="text-slate-300">
                        📞 +56 9 2035 8939
                    </p>

                    <p className="text-slate-300">
                        ✉ contacto@duckode.cl
                    </p>

                    <p className="text-slate-300">
                        📍 Santiago, Chile
                    </p>

                </div>

            </div>


            {/* Copyright */}
            <div className="border-t border-slate-700 py-4 text-center text-sm text-slate-400">

                © 2026 Duckode CL. Todos los derechos reservados.

            </div>

        </footer>
    );
}

export default Footer;