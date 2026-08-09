
function CardService() {

    const servicios = [
        {
            numero: "01",
            icono: "language",
            titulo: "Sitios Web",
            descripcion:
                "Sitios web modernos, rápidos y responsivos para potenciar la presencia digital de tu negocio.",
        },
        {
            numero: "02",
            icono: "web",
            titulo: "Landing Pages",
            descripcion:
                "Páginas enfocadas en presentar tus servicios, captar clientes y generar nuevas oportunidades.",
        },
        {
            numero: "03",
            icono: "shopping_cart",
            titulo: "Tiendas Online",
            descripcion:
                "E-commerce desarrollados con WordPress o Shopify para vender tus productos y servicios online.",
        },
        {
            numero: "04",
            icono: "code",
            titulo: "Sistemas a Medida",
            descripcion:
                "Sistemas personalizados para optimizar procesos, automatizar tareas y resolver necesidades específicas.",
        },
        {
            numero: "05",
            icono: "phone_iphone",
            titulo: "Aplicaciones",
            descripcion:
                "Aplicaciones y soluciones digitales adaptadas a los objetivos y necesidades de tu negocio.",
        },
        {
            numero: "06",
            icono: "support_agent",
            titulo: "Soporte y Mantenimiento",
            descripcion:
                "Soporte técnico y mantenimiento para mantener tus soluciones funcionando correctamente.",
        },
    ];

    return (
        <section
            id="servicios"
            className="
                relative
                overflow-hidden
                bg-white
                px-6
                py-16
                md:py-20
            "
        >

            {/* =========================
                DECORACIONES
            ========================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-20
                    h-80
                    w-80
                    rounded-full
                    bg-blue-50
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-0
                    h-80
                    w-80
                    rounded-full
                    bg-blue-50
                    blur-3xl
                "
            />


            <div className="
                relative
                mx-auto
                max-w-7xl
            ">

                {/* =========================
                    ENCABEZADO
                ========================== */}

                <div className="
                    mx-auto
                    max-w-3xl
                    text-center
                ">

                    <span className="
                        inline-flex
                        rounded-full
                        bg-blue-100
                        px-4
                        py-1.5
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-blue-600
                    ">
                        Servicios
                    </span>


                    <h2 className="
                        mt-4
                        text-3xl
                        font-bold
                        leading-tight
                        tracking-tight
                        text-slate-900
                        sm:text-4xl
                        md:text-5xl
                    ">
                        Soluciones digitales
                        <span className="text-blue-600">
                            {" "}para tu negocio
                        </span>
                    </h2>


                    <p className="
                        mx-auto
                        mt-5
                        max-w-2xl
                        text-base
                        leading-7
                        text-slate-600
                        md:text-lg
                    ">
                        Diseñamos y desarrollamos soluciones pensadas
                        para mejorar tu presencia digital, optimizar
                        procesos y ayudarte a crecer.
                    </p>

                </div>


                {/* =========================
                    SERVICIOS
                ========================== */}

                <div className="
                    mt-12
                    grid
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-3
                ">

                    {servicios.map((servicio) => (

                        <article
                            key={servicio.numero}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-200
                                bg-slate-50
                                p-6
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-blue-200
                                hover:bg-white
                                hover:shadow-xl
                            "
                        >

                            {/* Número */}

                            <span className="
                                absolute
                                right-5
                                top-4
                                text-5xl
                                font-black
                                tracking-tight
                                text-slate-100
                                transition-colors
                                duration-300
                                group-hover:text-blue-50
                            ">
                                {servicio.numero}
                            </span>


                            {/* Icono */}

                            <div className="
                                relative
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-blue-100
                                text-blue-600
                                transition-all
                                duration-300
                                group-hover:bg-blue-600
                                group-hover:text-white
                            ">

                                <span className="
                                    material-symbols-outlined
                                    text-2xl
                                ">
                                    {servicio.icono}
                                </span>

                            </div>


                            {/* Contenido */}

                            <div className="relative">

                                <h3 className="
                                    mt-5
                                    text-lg
                                    font-bold
                                    text-slate-900
                                ">
                                    {servicio.titulo}
                                </h3>


                                <p className="
                                    mt-2
                                    text-sm
                                    leading-6
                                    text-slate-500
                                ">
                                    {servicio.descripcion}
                                </p>


                                {/* Línea decorativa */}

                                <div className="
                                    mt-5
                                    h-1
                                    w-8
                                    rounded-full
                                    bg-blue-500
                                    transition-all
                                    duration-300
                                    group-hover:w-14
                                " />

                            </div>

                        </article>

                    ))}

                </div>


                {/* =========================
                    CIERRE
                ========================== */}

                <div className="
                    mt-10
                    text-center
                ">

                    <p className="
                        text-sm
                        text-slate-500
                    ">
                        ¿No encuentras exactamente lo que necesitas?
                        <span className="
                            ml-1
                            font-semibold
                            text-blue-600
                        ">
                            También desarrollamos soluciones personalizadas.
                        </span>
                    </p>

                </div>

            </div>

        </section>
    );
}

export default CardService;
