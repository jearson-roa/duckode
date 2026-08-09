import { Link } from "react-router-dom";

function Portafolio() {

    const proyectos = [
        {
            icono: "language",
            categoria: "Desarrollo Web",
            titulo: "Sitio Web Corporativo",
            descripcion:
                "Diseño y desarrollo de un sitio web moderno y responsivo para potenciar la presencia digital de una empresa.",
            tecnologias: ["React", "Tailwind CSS"],
        },

        {
            icono: "shopping_cart",
            categoria: "E-Commerce",
            titulo: "Tienda Online",
            descripcion:
                "Implementación de una tienda online orientada a la venta de productos y a mejorar la experiencia de compra.",
            tecnologias: ["WordPress", "WooCommerce"],
        },

        {
            icono: "dashboard",
            categoria: "Software a medida",
            titulo: "Sistema de Gestión",
            descripcion:
                "Sistema web desarrollado para optimizar procesos internos y facilitar la gestión de información de una empresa.",
            tecnologias: ["React", "Node.js", "MySQL"],
        },

        {
            icono: "smartphone",
            categoria: "Aplicaciones",
            titulo: "Aplicación Web",
            descripcion:
                "Desarrollo de aplicaciones web adaptadas a las necesidades específicas de cada proyecto.",
            tecnologias: ["React", "Node.js"],
        },

        {
            icono: "storefront",
            categoria: "E-Commerce",
            titulo: "Tienda Shopify",
            descripcion:
                "Creación y personalización de tiendas online enfocadas en mejorar la presencia digital y las ventas.",
            tecnologias: ["Shopify", "Liquid"],
        },

        {
            icono: "settings",
            categoria: "Soluciones digitales",
            titulo: "Sistema Personalizado",
            descripcion:
                "Desarrollo de herramientas digitales para automatizar tareas y mejorar los procesos de un negocio.",
            tecnologias: ["React", "Node.js", "MySQL"],
        },
    ];

    return (
        <section
            id="portafolio"
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
                        Portafolio
                    </span>

                    <h2 className="
                        mt-3
                        text-3xl
                        font-bold
                        text-slate-900
                        md:text-4xl
                    ">
                        Proyectos y soluciones digitales
                    </h2>

                    <p className="
                        mt-5
                        text-base
                        leading-7
                        text-slate-600
                        md:text-lg
                    ">
                        Conoce algunos ejemplos de las soluciones que
                        podemos desarrollar para llevar tu negocio
                        al mundo digital.
                    </p>

                </div>


                {/* Tarjetas */}
                <div className="
                    mt-12
                    grid
                    gap-8
                    md:grid-cols-2
                    lg:grid-cols-3
                ">

                    {proyectos.map((proyecto, index) => (

                        <article
                            key={index}
                            className="
                                group
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:shadow-xl
                            "
                        >

                            {/* Parte visual */}
                            <div className="
                                relative
                                flex
                                h-48
                                items-center
                                justify-center
                                overflow-hidden
                                bg-gradient-to-br
                                from-blue-600
                                to-slate-900
                            ">

                                {/* Decoración */}
                                <div className="
                                    absolute
                                    -right-10
                                    -top-10
                                    h-32
                                    w-32
                                    rounded-full
                                    bg-white/10
                                "/>

                                <div className="
                                    absolute
                                    -bottom-16
                                    -left-10
                                    h-40
                                    w-40
                                    rounded-full
                                    bg-white/10
                                "/>


                                {/* Icono */}
                                <span className="
                                    material-symbols-outlined
                                    relative
                                    text-7xl
                                    text-white
                                    transition
                                    duration-500
                                    group-hover:scale-110
                                ">
                                    {proyecto.icono}
                                </span>

                            </div>


                            {/* Contenido */}
                            <div className="p-7">

                                {/* Categoría */}
                                <span className="
                                    text-sm
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-blue-600
                                ">
                                    {proyecto.categoria}
                                </span>


                                {/* Título */}
                                <h3 className="
                                    mt-2
                                    text-2xl
                                    font-bold
                                    text-slate-900
                                ">
                                    {proyecto.titulo}
                                </h3>


                                {/* Descripción */}
                                <p className="
                                    mt-3
                                    leading-7
                                    text-slate-600
                                ">
                                    {proyecto.descripcion}
                                </p>


                                {/* Tecnologías */}
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
                                                    rounded-full
                                                    bg-slate-100
                                                    px-3
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

                            </div>

                        </article>

                    ))}

                </div>


                {/* CTA */}
                <div className="
                    mt-14
                    text-center
                ">

                    <p className="
                        text-slate-600
                    ">
                        ¿Tienes un proyecto en mente?
                    </p>

                    <Link
                        to="/contacto"
                        className="
                            mt-4
                            inline-flex
                            items-center
                            gap-2
                            rounded-lg
                            bg-blue-600
                            px-7
                            py-3
                            font-semibold
                            text-white
                            shadow-md
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

