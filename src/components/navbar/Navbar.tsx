import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    const menuItems = [
        { name: "Inicio", path: "/" },
        { name: "Nosotros", path: "/nosotros" },
        { name: "Portafolio", path: "/portafolio" },
        { name: "Servicios", path: "#servicios" },
        { name: "Contacto", path: "/contacto" },
    ];

    useEffect(() => {

        let lastScrollY = window.scrollY;

        const handleScroll = () => {

            if (window.scrollY > lastScrollY && window.scrollY > 80) {
                setShowNavbar(false);
                setMenuOpen(false);
            } else {
                setShowNavbar(true);
            }

            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <nav
            className={`
                fixed
                top-0
                left-0
                z-50
                w-full
                bg-color
                shadow-md
                transition-transform
                duration-300
                ${showNavbar ? "translate-y-0" : "-translate-y-full"}
            `}
        >

            {/* CONTENEDOR PRINCIPAL */}
            <div className="
                mx-auto
                flex
                h-20
                max-w-7xl
                items-center
                justify-between
                px-4
                sm:px-6
            ">

                {/* LOGO */}
                <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="
                        shrink-0
                        transition
                        duration-300
                        hover:scale-105
                    "
                >
                    <img
                        className="logo"
                        src={logo}
                        alt="Duckode"
                    />
                </Link>


                {/* MENÚ ESCRITORIO */}
                <ul className="
                    hidden
                    md:flex
                    items-center
                    gap-8
                ">

                    {menuItems.map((item) => (

                        <li key={item.name}>

                            <a
                                href={item.path}
                                className="
                                    link-color
                                    relative
                                    transition-all
                                    duration-300
                                    hover:text-blue-600
                                    after:absolute
                                    after:left-0
                                    after:-bottom-2
                                    after:h-[2px]
                                    after:w-0
                                    after:transition-all
                                    hover:after:w-full
                                "
                            >
                                {item.name}
                            </a>

                        </li>

                    ))}

                </ul>


                {/* BOTÓN ESCRITORIO */}
                <a
                    href="https://wa.me/56920358939"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        hidden
                        md:block
                        rounded-lg
                        bg-amber-300
                        px-5
                        py-2
                        font-semibold
                        text-sky-900
                        shadow-md
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-amber-400
                        hover:shadow-lg
                    "
                >
                    Habla ahora
                </a>


                {/* BOTÓN HAMBURGUESA */}
                <button
                    type="button"
                    aria-label="Abrir menú"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="
                        flex
                        h-10
                        w-10
                        flex-col
                        items-center
                        justify-center
                        gap-1
                        rounded-lg
                        md:hidden
                    "
                >

                    <span
                        className={`
                            h-1
                            w-7
                            rounded-full
                            bg-white
                            transition-all
                            duration-300
                            ${menuOpen ? "translate-y-2 rotate-45" : ""}
                        `}
                    />

                    <span
                        className={`
                            h-1
                            w-7
                            rounded-full
                            bg-white
                            transition-all
                            duration-300
                            ${menuOpen ? "opacity-0" : ""}
                        `}
                    />

                    <span
                        className={`
                            h-1
                            w-7
                            rounded-full
                            bg-white
                            transition-all
                            duration-300
                            ${menuOpen ? "-translate-y-2 -rotate-45" : ""}
                        `}
                    />

                </button>

            </div>


            {/* MENÚ MÓVIL */}
            <div
                className={`
                    md:hidden
                    overflow-hidden
                    border-t
                    border-white/10
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                        menuOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                    }
                `}
            >

                <div className="
                    px-4
                    pb-6
                    pt-4
                    sm:px-6
                ">

                    <ul className="
                        flex
                        flex-col
                        gap-1
                    ">

                        {menuItems.map((item) => (

                            <li key={item.name}>

                                <a
                                    href={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="
                                        block
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:bg-white/10
                                        hover:translate-x-1
                                    "
                                >
                                    {item.name}
                                </a>

                            </li>

                        ))}

                    </ul>


                    {/* BOTÓN WHATSAPP MÓVIL */}
                    <a
                        href="https://wa.me/56920358939"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="
                            mt-4
                            block
                            w-full
                            rounded-lg
                            bg-amber-300
                            px-5
                            py-3
                            text-center
                            font-semibold
                            text-sky-900
                            shadow-md
                            transition-all
                            duration-300
                            hover:bg-amber-400
                        "
                    >
                        Habla ahora
                    </a>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;