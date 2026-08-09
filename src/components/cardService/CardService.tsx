function CardService() {

    const servicios = [
        {
            icono: "language",
            titulo: "Sitios Web",
            descripcion:
                "Creamos sitios web modernos, rápidos y responsivos para que tu negocio tenga una presencia profesional en Internet.",
        },
        {
            icono: "web",
            titulo: "Landing Pages",
            descripcion:
                "Diseñamos landing pages enfocadas en presentar tus servicios, captar clientes y convertir visitas en oportunidades.",
        },
        {
            icono: "shopping_cart",
            titulo: "Tiendas Online",
            descripcion:
                "Desarrollamos e-commerce en WordPress y Shopify para que puedas vender tus productos y servicios online.",
        },
        {
            icono: "code",
            titulo: "Sistemas a Medida",
            descripcion:
                "Desarrollamos sistemas personalizados para optimizar procesos, automatizar tareas y resolver necesidades específicas de tu empresa.",
        },
        {
            icono: "phone_iphone",
            titulo: "Aplicaciones",
            descripcion:
                "Creamos aplicaciones y soluciones digitales adaptadas a los objetivos y necesidades de tu negocio.",
        },
        {
            icono: "support_agent",
            titulo: "Soporte y Mantenimiento",
            descripcion:
                "Te acompañamos después del desarrollo con soporte técnico y mantenimiento para mantener tus soluciones funcionando correctamente.",
        },
    ];

    return (
        <section
            id="servicios"
            className="
                bg-slate-50
                px-6
                py-20
                md:py-28
            "
        >

            <div className="mx-auto max-w-7xl">

                {/* Encabezado */}
                <div className="
                    mx-auto
                    mb-14
                    max-w-3xl
                    text-center
                ">

                    <span className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-widest
                        text-blue-600
                    ">
                        Lo que hacemos
                    </span>

                    <h2 className="
                        mt-3
                        text-3xl
                        font-bold
                        text-slate-900
                        md:text-4xl
                    ">
                        Soluciones digitales para tu negocio
                    </h2>

                    <p className="
                        mt-5
                        text-base
                        leading-7
                        text-slate-600
                        md:text-lg
                    ">
                        Desarrollamos soluciones digitales pensadas para
                        ayudarte a mejorar tu presencia online, optimizar
                        procesos y hacer crecer tu negocio.
                    </p>

                </div>


                {/* Servicios */}
                <div className="
                    grid
                    gap-6
                    sm:grid-cols-2
                    lg:grid-cols-3
                ">

                    {servicios.map((servicio) => (

                        <article
                            key={servicio.titulo}
                            className="
                                group
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-7
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-blue-200
                                hover:shadow-xl
                            "
                        >

                            {/* Icono */}
                            <div className="
                                mb-6
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-xl
                                bg-blue-50
                                transition-all
                                duration-300
                                group-hover:bg-blue-600
                            ">

                                <span className="
                                    material-symbols-outlined
                                    text-3xl
                                    text-blue-600
                                    transition-colors
                                    duration-300
                                    group-hover:text-white
                                ">
                                    {servicio.icono}
                                </span>

                            </div>


                            {/* Título */}
                            <h3 className="
                                text-xl
                                font-bold
                                text-slate-900
                            ">
                                {servicio.titulo}
                            </h3>


                            {/* Descripción */}
                            <p className="
                                mt-3
                                leading-7
                                text-slate-600
                            ">
                                {servicio.descripcion}
                            </p>


                            {/* Detalle */}
                            <div className="
                                mt-6
                                flex
                                items-center
                                gap-2
                                text-sm
                                font-semibold
                                text-blue-600
                            ">

                                <span>
                                    Conoce más
                                </span>

                                <span className="
                                    material-symbols-outlined
                                    text-lg
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                ">
                                    arrow_forward
                                </span>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default CardService;