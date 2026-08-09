
function NosotrosHome() {
    const servicios = [
        {
            icono: "language",
            titulo: "Desarrollo Web",
            descripcion:
                "Sitios web modernos, rápidos y adaptados a las necesidades de tu negocio.",
        },
        {
            icono: "phone_iphone",
            titulo: "Aplicaciones",
            descripcion:
                "Aplicaciones digitales pensadas para mejorar la experiencia de tus usuarios.",
        },
        {
            icono: "code",
            titulo: "Sistemas a medida",
            descripcion:
                "Soluciones personalizadas para optimizar y automatizar procesos.",
        },
        {
            icono: "shopping_cart",
            titulo: "E-commerce",
            descripcion:
                "Tiendas online profesionales con WordPress o Shopify.",
        },
    ];

    return (
        <section
            id="nosotros"
            className="
                relative
                overflow-hidden
                bg-slate-100
                px-6
                py-16
                md:py-20
            "
        >

            {/* Decoración */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    top-20
                    h-80
                    w-80
                    rounded-full
                    bg-blue-100/60
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -left-40
                    h-80
                    w-80
                    rounded-full
                    bg-blue-100/50
                    blur-3xl
                "
            />


            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                "
            >

                {/* =========================
                    ENCABEZADO
                ========================== */}

                <div
                    className="
                        pt-5
                        mx-auto
                        max-w-3xl
                        text-center
                    "
                >

                    <span
                        className="
                            inline-flex
                            items-center
                            rounded-full
                            bg-blue-100
                            px-4
                            py-1.5
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-blue-600
                        "
                    >
                        Sobre nosotros
                    </span>


                    <h2
                        className="
                            mt-4
                            text-3xl
                            font-bold
                            leading-tight
                            tracking-tight
                            text-slate-900
                            sm:text-4xl
                            md:text-5xl
                        "
                    >
                        Tecnología que impulsa
                        <span className="text-blue-600">
                            {" "}tu negocio
                        </span>
                    </h2>


                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-base
                            leading-7
                            text-slate-600
                            md:text-lg
                        "
                    >
                        En{" "}
                        <strong className="font-semibold text-slate-900">
                            DUCKODE
                        </strong>{" "}
                        desarrollamos soluciones digitales desde
                        <strong className="text-slate-900">
                            {" "}2025
                        </strong>
                        , combinando tecnología, diseño y
                        funcionalidad para crear herramientas
                        adaptadas a cada negocio.
                    </p>

                </div>


                {/* =========================
                    SERVICIOS
                ========================== */}

                <div
                    className="
                        mt-12
                        grid
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >

                    {servicios.map((servicio, index) => (
                        <div
                            key={servicio.titulo}
                            className="
                                group
                                relative
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-blue-200
                                hover:shadow-lg
                            "
                        >

                            {/* Número */}

                            <span
                                className="
                                    absolute
                                    right-5
                                    top-5
                                    text-xs
                                    font-bold
                                    text-slate-300
                                    transition
                                    duration-300
                                    group-hover:text-blue-200
                                "
                            >
                                0{index + 1}
                            </span>


                            {/* Icono */}

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-blue-50
                                    text-blue-600
                                    transition-all
                                    duration-300
                                    group-hover:bg-blue-600
                                    group-hover:text-white
                                "
                            >

                                <span
                                    className="
                                        material-symbols-outlined
                                        text-2xl
                                    "
                                >
                                    {servicio.icono}
                                </span>

                            </div>


                            {/* Contenido */}

                            <h3
                                className="
                                    mt-5
                                    text-lg
                                    font-bold
                                    text-slate-900
                                "
                            >
                                {servicio.titulo}
                            </h3>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    leading-6
                                    text-slate-500
                                "
                            >
                                {servicio.descripcion}
                            </p>


                            {/* Línea */}

                            <div
                                className="
                                    mt-5
                                    h-1
                                    w-8
                                    rounded-full
                                    bg-blue-500
                                    transition-all
                                    duration-300
                                    group-hover:w-14
                                "
                            />

                        </div>
                    ))}

                </div>


                {/* =========================
                    CIERRE
                ========================== */}

                <div
                    className="
                        pb-10
                        mt-12
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-3
                        text-center
                        sm:flex-row
                    "
                >

                    <span
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-100
                            text-blue-600
                        "
                    >
                        <span className="material-symbols-outlined text-lg">
                            check
                        </span>
                    </span>

                    <p
                        className="
                            text-base
                            font-semibold
                            text-slate-800
                            md:text-lg
                        "
                    >
                        Tecnología, diseño y soluciones pensadas para tu negocio.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default NosotrosHome;

