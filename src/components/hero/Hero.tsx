
import { Link } from "react-router-dom";
import duck1 from "../../assets/duck-1.webp";
import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
    return (
        <section
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-hero
            "
        >

            {/* Efectos de fondo */}
            <div className="
                pointer-events-none
                absolute
                -right-40
                top-20
                h-96
                w-96
                rounded-full
                bg-blue-400/20
                blur-3xl
            " />

            <div className="
                pointer-events-none
                absolute
                -bottom-40
                -left-40
                h-96
                w-96
                rounded-full
                bg-blue-950/30
                blur-3xl
            " />

            {/* Contenedor */}
            <div
                className="
                    relative
                    mx-auto
                    grid
                    min-h-screen
                    max-w-7xl
                    items-center
                    gap-10
                    px-6
                    pb-16
                    pt-28
                    md:grid-cols-2
                    md:gap-16
                    md:pb-0
                    md:pt-20
                "
            >

                {/* TEXTO */}
                <div className="text-white">

                    <span className="
                        inline-block
                        rounded-full
                        border
                        border-blue-300/30
                        bg-white/10
                        px-4
                        py-1.5
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-blue-100
                        backdrop-blur-sm
                    ">
                        Desarrollo digital
                    </span>

                    <h1
                        className="
                            mt-5
                            text-4xl
                            font-bold
                            leading-tight
                            tracking-tight
                            sm:text-5xl
                            md:text-5xl
                            lg:text-6xl
                        "
                    >
                        Desarrollo web y
                        <span className="block text-amber-300">
                            software a medida
                        </span>
                    </h1>

                    <p
                        className="
                            mt-6
                            max-w-xl
                            text-base
                            leading-7
                            text-blue-50/90
                            sm:text-lg
                        "
                    >
                        Creamos soluciones digitales modernas para
                        potenciar tu negocio. Sitios web, tiendas online
                        y sistemas desarrollados según tus necesidades.
                    </p>

                    {/* BOTONES */}
                    <div className="
                        mt-8
                        flex
                        flex-col
                        gap-3
                        sm:flex-row
                    ">

                        <Link
                            to="/contacto"
                            className="
                                group
                                inline-flex
                                items-center
                                justify-center
                                gap-3
                                rounded-xl
                                bg-amber-300
                                px-6
                                py-3.5
                                font-semibold
                                text-slate-900
                                shadow-lg
                                shadow-amber-900/20
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-amber-400
                                hover:shadow-xl
                            "
                        >
                            Solicita una consulta

                            <FaArrowRightLong
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />
                        </Link>

                        <Link
                            to="/servicios"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-white/20
                                bg-white/10
                                px-6
                                py-3.5
                                font-semibold
                                text-white
                                backdrop-blur-sm
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-white/15
                            "
                        >
                            Ver servicios
                        </Link>

                    </div>

                    {/* Pequeños indicadores */}
                    <div className="
                        mt-8
                        flex
                        flex-wrap
                        gap-x-6
                        gap-y-2
                        text-sm
                        text-blue-100/80
                    ">

                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-amber-300" />
                            Diseño moderno
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-amber-300" />
                            Responsive
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-amber-300" />
                            Soporte
                        </span>

                    </div>

                </div>


                {/* IMAGEN */}
                <div className="
                    relative
                    flex
                    items-center
                    justify-center
                    md:justify-end
                ">

                    {/* Halo detrás del personaje */}
                    <div className="
                        absolute
                        h-72
                        w-72
                        rounded-full
                        bg-blue-300/20
                        blur-3xl
                        sm:h-96
                        sm:w-96
                    " />

                    <img
                        src={duck1}
                        alt="Duckode desarrollo web y software"
                        className="
                            relative
                            z-10
                            max-h-[320px]
                            w-auto
                            object-contain
                            drop-shadow-2xl
                            transition-transform
                            duration-500
                            hover:scale-105
                            sm:max-h-[380px]
                            md:max-h-[420px]
                            lg:max-h-[500px]
                        "
                    />

                </div>

            </div>

        </section>
    );
}

export default Hero;
