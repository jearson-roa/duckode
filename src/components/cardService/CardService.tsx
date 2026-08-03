import "./CardService.css"

function CardService() {
    const servicios = [
        {
            icono: "devices",
            titulo: "Sitios web",
            descripcion: "Diseño y desarrollo de sitios modernos, responsivos y optimizados para SEO y rendimiento."
        },
        {
            icono: "android",
            titulo: "Desarrollo web",
            descripcion: "Somos un equipo especializado en el desarrollo de soluciones web modernas, creando sitios y aplicaciones a medida para emprendedores, pequeñas empresas y pymes."
        },
        {
            icono: "chat",
            titulo: "Soporte",
            descripcion: "Contarás con un soporte técnico que te acompañará y responderá a tus necesidades cuando lo requieras."
        }
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Nuestros Servicios
                    </h2>

                    <p className="mt-4 text-lg text-slate-600">
                        Desarrollamos soluciones de software a medida, enfocadas en la calidad, la innovación y las necesidades de tu negocio.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {servicios.map((servicio, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <span className="material-symbols-outlined icons">
                                {servicio.icono}
                            </span>

                            <h3 className="mb-4 text-2xl font-bold text-slate-900">
                                {servicio.titulo}
                            </h3>

                            <p className="leading-7 text-slate-600">
                                {servicio.descripcion}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default CardService;