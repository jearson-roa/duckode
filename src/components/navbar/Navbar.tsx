import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    const menuItems = [
        { name: "Inicio", path: "/" },
        { name: "Nosotros", path: "/nosotros" },
        { name: "Servicios", path: "/servicios" },
        { name: "Contacto", path: "/contacto" },
    ];

    useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Bajando
            setShowNavbar(false);
        } else {
            // Subiendo
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
        shadow-md
        bg-color
        transition-transform
        duration-300
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
    `}
>

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link 
                    to="/"
                    className="transition duration-300 hover:scale-105"
                >
                    <img 
                        className="logo"
                        src={logo}
                        alt="Logo"
                    />
                </Link>


                {/* Menu escritorio */}
                <ul className="hidden md:flex items-center gap-8">

                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
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
                            </Link>
                        </li>
                    ))}

                </ul>


                {/* Botón escritorio */}
                <Link
                    to="/contacto"
                    className="
                        hidden
                        md:block
                        rounded-lg
                        bg-amber-300
                        px-5
                        py-2
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
                </Link>


                {/* Botón hamburguesa */}
                <button
                    className="
                        md:hidden
                        flex
                        flex-col
                        gap-1
                        transition-all
                    "
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    <span 
                        className={`
                            h-1 
                            w-7 
                            bg-white
                            transition-all
                            duration-300
                            ${menuOpen ? "rotate-45 translate-y-2" : ""}
                        `}
                    />

                    <span 
                        className={`
                            h-1 
                            w-7 
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
                            bg-white
                            transition-all
                            duration-300
                            ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
                        `}
                    />

                </button>

            </div>


            {/* Menu móvil animado */}
            <div
                className={`
                    md:hidden
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-in-out
                    ${
                        menuOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                `}
            >

                <ul className="flex flex-col gap-5 px-6 pb-6 pt-3">

                    {menuItems.map((item) => (

                        <li key={item.name}>

                            <Link
                                to={item.path}
                                onClick={() => setMenuOpen(false)}
                                className="
                                    block
                                    text-white
                                    transition
                                    duration-300
                                    hover:translate-x-2
                                "
                            >
                                {item.name}
                            </Link>

                        </li>

                    ))}

                </ul>

            </div>

        </nav>
    );
}

export default Navbar;