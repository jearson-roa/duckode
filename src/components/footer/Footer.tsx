import { Link } from "react-router-dom";
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaArrowRight
} from "react-icons/fa";
import logo from "../../assets/logo.webp";
import "./Footer.css";

function Footer() {

    return (

        <footer className="bg-slate-100 text-slate-800">

            <div className="
                mx-auto
                max-w-7xl
                px-6
                py-12
                md:py-14
            ">

                <div className="
                    grid
                    gap-10
                    md:grid-cols-2
                    lg:grid-cols-4
                ">


                    {/* =========================
                        EMPRESA
                    ========================== */}

                    <div className="lg:col-span-2">

                        <Link
                            to="/"
                            className="inline-block"
                        >
                            <img
                                src={logo}
                                alt="Duckode"
                                className="h-11 w-auto"
                            />
                        </Link>

                        <p className="
                            mt-4
                            max-w-md
                            text-sm
                            leading-6
                            text-slate-500
                        ">
                            Desarrollo web y software a medida
                            para pequeñas empresas y negocios que
                            buscan crecer en el mundo digital.
                        </p>


                        {/* Redes */}

                        <div className="
                            mt-6
                            flex
                            gap-2
                        ">

                            <a
                                href="https://www.instagram.com/duckode.cl"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-slate-200
                                    bg-white
                                    text-slate-500
                                    shadow-sm
                                    transition
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-pink-400
                                    hover:bg-pink-500
                                    hover:text-white
                                "
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.facebook.com/share/1CMX163cki/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-slate-200
                                    bg-white
                                    text-slate-500
                                    shadow-sm
                                    transition
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-blue-500
                                    hover:bg-blue-600
                                    hover:text-white
                                "
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jearson-roa-leiva-885aa22b4"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-slate-200
                                    bg-white
                                    text-slate-500
                                    shadow-sm
                                    transition
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-blue-600
                                    hover:bg-blue-600
                                    hover:text-white
                                "
                            >
                                <FaLinkedin />
                            </a>

                        </div>

                    </div>


                    {/* =========================
                        NAVEGACIÓN
                    ========================== */}

                    <div>

                        <h3 className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-wider
                            text-slate-900
                        ">
                            Navegación
                        </h3>

                        <ul className="
                            mt-4
                            space-y-3
                            text-sm
                        ">

                            <li>
                                <Link
                                    to="/"
                                    className="
                                        text-slate-500
                                        transition
                                        hover:text-blue-600
                                    "
                                >
                                    Inicio
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/nosotros"
                                    className="
                                        text-slate-500
                                        transition
                                        hover:text-blue-600
                                    "
                                >
                                    Nosotros
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/servicios"
                                    className="
                                        text-slate-500
                                        transition
                                        hover:text-blue-600
                                    "
                                >
                                    Servicios
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contacto"
                                    className="
                                        text-slate-500
                                        transition
                                        hover:text-blue-600
                                    "
                                >
                                    Contacto
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* =========================
                        CONTACTO
                    ========================== */}

                    <div>

                        <h3 className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-wider
                            text-slate-900
                        ">
                            Hablemos
                        </h3>

                        <p className="
                            mt-4
                            text-sm
                            leading-6
                            text-slate-500
                        ">
                            ¿Tienes un proyecto en mente?
                            Estamos disponibles para ayudarte.
                        </p>

                        <a
                            href="https://wa.me/56920358939"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                mt-5
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                font-semibold
                                text-slate-700
                                transition
                                hover:text-green-600
                            "
                        >

                            <FaWhatsapp className="text-green-500" />

                            +56 9 2035 8939

                        </a>

                        <p className="
                            mt-2
                            text-sm
                            text-slate-500
                        ">
                            Santiago, Chile
                        </p>

                    </div>

                </div>


                {/* =========================
                    BARRA INFERIOR
                ========================== */}

                <div className="
                    mt-10
                    flex
                    flex-col
                    gap-3
                    border-t
                    border-slate-200
                    pt-6
                    text-sm
                    text-slate-400
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                ">

                    <p>
                        © 2026 DUCKODE. Todos los derechos reservados.
                    </p>

                    <Link
                        to="/contacto"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            font-medium
                            text-slate-600
                            transition
                            hover:text-blue-600
                        "
                    >
                        Solicita una consulta

                        <FaArrowRight
                            className="text-xs"
                        />
                    </Link>

                </div>

            </div>

        </footer>
    );
}

export default Footer;

