
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";
import logo from "../../assets/logo.webp";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const menuItems = [
        { name: "Inicio", path: "/" },
        { name: "Nosotros", path: "/nosotros" },
        { name: "Portafolio", path: "/portafolio" },
        { name: "Servicios", path: "/servicios" },
        { name: "Contacto", path: "/contacto" },
    ];

    return (

        <header
            className={`
                fixed
                left-0
                top-0
                z-50
                w-full
                px-4
                pt-3
                transition-all
                duration-500
                sm:px-6
                lg:px-8
            `}
        >

            <nav
                className={`
                    mx-auto
                    max-w-7xl
                    rounded-2xl
                    border
                    transition-all
                    duration-500

                    ${
                        scrolled
                            ? `
                                border-white/10
                                bg-slate-950/90
                                shadow-xl
                                shadow-black/10
                                backdrop-blur-xl
                              `
                            : `
                                border-white/10
                                bg-slate-900/70
                                backdrop-blur-md
                              `
                    }
                `}
            >

                {/* CONTENEDOR */}

                <div className="
                    flex
                    h-[68px]
                    items-center
                    justify-between
                    px-4
                    sm:px-6
                ">


                    {/* LOGO */}

                    <Link
                        to="/"
                        className="
                            group
                            flex
                            shrink-0
                            items-center
                        "
                    >

                        <img
                            src={logo}
                            alt="Duckode"
                            className="
                                h-10
                                w-auto
                                object-contain
                                transition
                                duration-300
                                group-hover:scale-105
                            "
                        />

                    </Link>


                    {/* MENU DESKTOP */}

                    <div className="
                        hidden
                        items-center
                        gap-1
                        rounded-xl
                        bg-white/5
                        p-1
                        md:flex
                    ">

                        {menuItems.map((item) => {

                            const active =
                                location.pathname === item.path;

                            return (

                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`
                                        relative
                                        rounded-lg
                                        px-4
                                        py-2
                                        text-sm
                                        font-medium
                                        transition-all
                                        duration-300

                                        ${
                                            active
                                                ? `
                                                    bg-white/10
                                                    text-white
                                                  `
                                                : `
                                                    text-slate-300
                                                    hover:bg-white/5
                                                    hover:text-white
                                                  `
                                        }
                                    `}
                                >

                                    {item.name}

                                    {/* Indicador */}

                                    <span
                                        className={`
                                            absolute
                                            bottom-1
                                            left-1/2
                                            h-0.5
                                            -translate-x-1/2
                                            rounded-full
                                            bg-amber-300
                                            transition-all
                                            duration-300

                                            ${
                                                active
                                                    ? "w-4"
                                                    : "w-0"
                                            }
                                        `}
                                    />

                                </Link>

                            );

                        })}

                    </div>


                    {/* CTA */}

                    <a
                        href="https://wa.me/56920358939"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            hidden
                            items-center
                            gap-2
                            rounded-xl
                            bg-amber-300
                            px-4
                            py-2.5
                            text-sm
                            font-bold
                            text-slate-900
                            shadow-lg
                            shadow-amber-300/10
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-amber-400
                            hover:shadow-amber-300/20
                            md:flex
                        "
                    >

                        Hablemos

                        <FaArrowRight
                            className="
                                text-xs
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />

                    </a>


                    {/* BOTÓN MOBILE */}

                    <button
                        type="button"
                        aria-label={
                            menuOpen
                                ? "Cerrar menú"
                                : "Abrir menú"
                        }
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            text-white
                            transition
                            duration-300
                            hover:bg-white/10
                            md:hidden
                        "
                    >

                        {menuOpen ? (
                            <FaXmark className="text-lg" />
                        ) : (
                            <FaBars className="text-lg" />
                        )}

                    </button>

                </div>


                {/* MENU MOBILE */}

                <div
                    className={`
                        overflow-hidden
                        transition-all
                        duration-500
                        md:hidden

                        ${
                            menuOpen
                                ? "max-h-[500px] opacity-100"
                                : "max-h-0 opacity-0"
                        }
                    `}
                >

                    <div className="
                        border-t
                        border-white/10
                        px-4
                        pb-4
                        pt-3
                    ">

                        <div className="
                            flex
                            flex-col
                            gap-1
                        ">

                            {menuItems.map((item) => {

                                const active =
                                    location.pathname === item.path;

                                return (

                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() =>
                                            setMenuOpen(false)
                                        }
                                        className={`
                                            rounded-xl
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            transition

                                            ${
                                                active
                                                    ? `
                                                        bg-white/10
                                                        text-amber-300
                                                      `
                                                    : `
                                                        text-slate-300
                                                        hover:bg-white/5
                                                        hover:text-white
                                                      `
                                            }
                                        `}
                                    >
                                        {item.name}
                                    </Link>

                                );

                            })}

                        </div>


                        {/* CTA MOBILE */}

                        <a
                            href="https://wa.me/56920358939"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className="
                                group
                                mt-3
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-amber-300
                                px-5
                                py-3
                                font-bold
                                text-slate-900
                                transition
                                hover:bg-amber-400
                            "
                        >

                            Hablemos de tu proyecto

                            <FaArrowRight
                                className="
                                    text-xs
                                    transition
                                    group-hover:translate-x-1
                                "
                            />

                        </a>

                    </div>

                </div>

            </nav>

        </header>
    );
}

export default Navbar;
