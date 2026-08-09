import { Link } from "react-router-dom";

function Portafolio() {

    const proyectos = [
        {
            categoria: "Desarrollo Web",
            titulo: "Sitio Web Corporativo",
            descripcion:
                "Diseño y desarrollo de una presencia digital moderna, rápida y adaptable a cualquier dispositivo.",
            tecnologias: ["React", "Tailwind CSS"],
            icono: "language",
            numero: "01",
        },
        {
            categoria: "E-Commerce",
            titulo: "Tienda Online",
            descripcion:
                "Una experiencia de compra pensada para mostrar productos, facilitar las ventas y conectar con clientes.",
            tecnologias: ["WordPress", "WooCommerce"],
            icono: "shopping_cart",
            numero: "02",
        },
        {
            categoria: "Software a medida",
            titulo: "Sistema de Gestión",
            descripcion:
                "Plataforma web desarrollada para centralizar información, optimizar procesos y facilitar la gestión.",
            tecnologias: ["React", "Node.js", "MySQL"],
            icono: "dashboard",
            numero: "03",
        },
        {
            categoria: "Aplicaciones",
            titulo: "Aplicación Web",
            descripcion:
                "Soluciones web personalizadas enfocadas en resolver necesidades específicas de cada negocio.",
            tecnologias: ["React", "Node.js"],
            icono: "smartphone",
            numero: "04",
        },
        {
            categoria: "E-Commerce",
            titulo: "Tienda Shopify",
            descripcion:
                "Tienda online personalizada con una experiencia de compra simple, moderna y orientada a resultados.",
            tecnologias: ["Shopify", "Liquid"],
            icono: "storefront",
            numero: "05",
        },
        {
            categoria: "Soluciones digitales",
            titulo: "Sistema Personalizado",
            descripcion:
                "Herramientas digitales diseñadas para automatizar tareas y mejorar el funcionamiento del negocio.",
            tecnologias: ["React", "Node.js", "MySQL"],
            icono: "settings",
            numero: "06",
        },
    ];

    return (
        <section
            id="portafolio"
            className="bg-white px-6 py-20 md:py-28"
        >

            <div className="mx-auto max-w-7xl">

                {/* ENCABEZADO */}

                <div className="
                    pt-30
                    flex
                    flex-col
                    gap-5
                    md:flex-row
                    md:items-end
                    md:justify-between
                ">

                    <div className="max-w-2xl">

                        <span className="
                            inline-flex
                            rounded-full
                            bg-blue-50
                            px-4
                            py-1.5
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-blue-600
                        ">
                            Portafolio
                        </span>

                        <h2 className="
                            mt-5
                            text-3xl
                            font-bold
                            leading-tight
                            tracking-tight
                            text-slate-900
                            sm:text-4xl
                            md:text-5xl
                        ">
                            Ideas que se convierten
                            <span className="text-blue-600">
                                {" "}en soluciones
                            </span>
                        </h2>

                    </div>

                    <p className="
                        max-w-md
                        text-base
                        leading-7
                        text-slate-500
                        md:text-right
                    ">
                        Desarrollamos soluciones digitales adaptadas
                        a las necesidades reales de cada negocio.
                    </p>

                </div>


                {/* PROYECTOS */}

                <div className="
                    mt-14
                    grid
                    gap-6
                    md:grid-cols-2
                    lg:grid-cols-3
                ">

                    {proyectos.map((proyecto) => (

                        <article
                            key={proyecto.numero}
                            className="
                                group
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-blue-200
                                hover:shadow-xl
                            "
                        >

                            {/* ÁREA VISUAL */}

                            <div className="
                                relative
                                h-52
                                overflow-hidden
                                bg-slate-900
                            ">

                                {/* Decoración superior */}

                                <div className="
                                    absolute
                                    -right-16
                                    -top-16
                                    h-48
                                    w-48
                                    rounded-full
                                    bg-blue-600/30
                                    blur-2xl
                                    transition-all
                                    duration-500
                                    group-hover:scale-125
                                " />

                                {/* Decoración inferior */}

                                <div className="
                                    absolute
                                    -bottom-20
                                    -left-16
                                    h-52
                                    w-52
                                    rounded-full
                                    bg-blue-500/20
                                    blur-2xl
                                    transition-all
                                    duration-500
                                    group-hover:scale-125
                                " />

                                {/* Número */}

                                <span className="
                                    absolute
                                    left-6
                                    top-5
                                    text-xs
                                    font-bold
                                    tracking-widest
                                    text-white/40
                                ">
                                    {proyecto.numero}
                                </span>


                                {/* Icono */}

                                <div className="
                                    absolute
                                    inset-0
                                    flex
                                    items-center
                                    justify-center
                                ">

                                    <div className="
                                        flex
                                        h-20
                                        w-20
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/10
                                        backdrop-blur-sm
                                        transition-all
                                        duration-500
                                        group-hover:scale-110
                                        group-hover:bg-blue-600
                                    ">

                                        <span className="
                                            material-symbols-outlined
                                            text-4xl
                                            text-white
                                        ">
                                            {proyecto.icono}
                                        </span>

                                    </div>

                                </div>


                                {/* Categoría */}

                                <span className="
                                    absolute
                                    bottom-5
                                    left-6
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/10
                                    px-3
                                    py-1
                                    text-xs
                                    font-medium
                                    text-white
                                    backdrop-blur-sm
                                ">
                                    {proyecto.categoria}
                                </span>

                            </div>


                            {/* CONTENIDO */}

                            <div className="p-6">

                                <h3 className="
                                    text-xl
                                    font-bold
                                    text-slate-900
                                ">
                                    {proyecto.titulo}
                                </h3>

                                <p className="
                                    mt-3
                                    text-sm
                                    leading-6
                                    text-slate-500
                                ">
                                    {proyecto.descripcion}
                                </p>


                                {/* TECNOLOGÍAS */}

                                <div className="
                                    mt-5
                                    flex
                                    flex-wrap
                                    gap-2
                                ">

                                    {proyecto.tecnologias.map(
                                        (tecnologia) => (

                                            <span
                                                key={tecnologia}
                                                className="
                                                    rounded-md
                                                    bg-slate-100
                                                    px-2.5
                                                    py-1
                                                    text-xs
                                                    font-medium
                                                    text-slate-600
                                                "
                                            >
                                                {tecnologia}
                                            </span>

                                        )
                                    )}

                                </div>


                                {/* PARTE INFERIOR */}

                                <div className="
                                    mt-6
                                    flex
                                    items-center
                                    justify-between
                                    border-t
                                    border-slate-100
                                    pt-5
                                ">

                                    <span className="
                                        text-xs
                                        font-medium
                                        text-slate-400
                                    ">
                                        Solución Duckode
                                    </span>

                                    <span className="
                                        material-symbols-outlined
                                        text-lg
                                        text-slate-400
                                        transition-all
                                        duration-300
                                        group-hover:translate-x-1
                                        group-hover:text-blue-600
                                    ">
                                        arrow_forward
                                    </span>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>


                {/* CTA */}

                <div className="
                    mt-16
                    flex
                    flex-col
                    items-center
                    justify-between
                    gap-6
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-6
                    py-8
                    text-center
                    sm:flex-row
                    sm:text-left
                    md:px-10
                ">

                    <div>

                        <p className="
                            text-lg
                            font-bold
                            text-slate-900
                        ">
                            ¿Tienes un proyecto en mente?
                        </p>

                        <p className="
                            mt-1
                            text-sm
                            text-slate-500
                        ">
                            Cuéntanos tu idea y busquemos la mejor solución.
                        </p>

                    </div>


                    <Link
                        to="/contacto"
                        className="
                            group
                            inline-flex
                            shrink-0
                            items-center
                            gap-2
                            rounded-lg
                            bg-blue-600
                            px-6
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-blue-700
                            hover:shadow-lg
                        "
                    >

                        Hablemos de tu proyecto

                        <span className="
                            material-symbols-outlined
                            text-lg
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        ">
                            arrow_forward
                        </span>

                    </Link>

                </div>

            </div>

        </section>
    );
}

export default Portafolio;