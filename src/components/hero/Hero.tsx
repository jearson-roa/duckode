
import { Link } from "react-router-dom";
import duck1 from "../../assets/duck-1.webp";
import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
    return (
        <section
            id="inicio"
            className="
                bg-hero
                relative
                min-h-[600px]
                bg-cover
                bg-center
            "
        >

            {/* Capa oscura */}
            <div
                className="
                    absolute
                    inset-0
                    bg-black/40
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    grid
                    min-h-[600px]
                    max-w-7xl
                    items-center
                    gap-10
                    px-6
                    py-20
                    md:grid-cols-2
                    md:py-0
                "
            >

                {/* =========================
                    TEXTO
                ========================== */}

                <div className="text-white">

                    <h1
                        className="
                            texto-principal
                            text-4xl
                            leading-tight
                            md:text-5xl
                            lg:text-6xl
                        "
                    >
                        Duckode - Desarrollo web y software a medida
                    </h1>

                    <p
                        className="
                            texto-parrafo
                            mt-5
                            max-w-2xl
                            text-base
                            leading-7
                            md:text-lg
                        "
                    >
                        Creamos soluciones digitales a medida para
                        potenciar tu negocio. Diseño moderno, código
                        limpio y soporte continuo para que tu empresa
                        crezca en la era digital.
                    </p>


                    {/* Botón */}

                    <Link
                        to="/contacto"
                        className="
                            group
                            mt-8
                            inline-flex
                            max-w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            bg-amber-300
                            px-6
                            py-3
                            text-center
                            font-semibold
                            text-slate-900
                            shadow-md
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-amber-400
                            hover:shadow-lg
                            sm:px-8
                        "
                    >

                        <span>
                            Solicita tu consulta gratuita
                        </span>

                        <FaArrowRightLong
                            className="
                                shrink-0
                                text-base
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />

                    </Link>

                </div>


                {/* =========================
                    IMAGEN
                ========================== */}

                <div
                    className="
                        flex
                        justify-center
                        md:justify-end
                    "
                >

                    <img
                        src={duck1}
                        alt="Servicios de desarrollo web Duckode"
                        className="
                            max-h-[350px]
                            w-auto
                            object-contain
                            drop-shadow-2xl
                            transition
                            duration-500
                            hover:scale-105
                            md:max-h-[450px]
                        "
                    />

                </div>

            </div>

        </section>
    );
}

export default Hero;
