
function Nosotros() {
    return (
        <section
            id="nosotros"
            className="
                bg-white
                px-6
                py-20
                md:py-28
            "
        >

            <div className="
                mx-auto
                max-w-7xl
            ">

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
                        Sobre nosotros
                    </span>

                    <h2 className="
                        mt-3
                        text-3xl
                        font-bold
                        leading-tight
                        text-slate-900
                        md:text-4xl
                    ">
                        Soluciones digitales para hacer crecer tu negocio
                    </h2>

                    <p className="
                        mt-6
                        text-base
                        leading-7
                        text-slate-600
                        md:text-lg
                    ">
                        Desde <strong className="text-slate-900">2025</strong>,
                        en Duckode desarrollamos soluciones digitales pensadas
                        para hacer crecer tu negocio. Creamos
                        <strong className="text-slate-900">
                            {" "}sitios web, aplicaciones, sistemas a medida
                            y tiendas online en WordPress y Shopify
                        </strong>,
                        combinando tecnología, diseño y funcionalidad para
                        entregar soluciones adaptadas a cada cliente.
                    </p>

                </div>


                {/* Servicios principales */}
                <div className="
                    mt-14
                    grid
                    gap-6
                    sm:grid-cols-2
                    lg:grid-cols-4
                ">

                    {/* Desarrollo Web */}
                    <div className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-6
                        text-center
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-lg
                    ">

                        <span className="
                            material-symbols-outlined
                            mb-4
                            inline-flex
                            rounded-xl
                            bg-blue-100
                            p-4
                            text-4xl
                            text-blue-600
                        ">
                            language
                        </span>

                        <h3 className="
                            text-lg
                            font-bold
                            text-slate-900
                        ">
                            Desarrollo Web
                        </h3>

                        <p className="
                            mt-2
                            text-sm
                            leading-6
                            text-slate-600
                        ">
                            Sitios web modernos, rápidos y adaptados a
                            las necesidades de tu negocio.
                        </p>

                    </div>


                    {/* Aplicaciones */}
                    <div className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-6
                        text-center
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-lg
                    ">

                        <span className="
                            material-symbols-outlined
                            mb-4
                            inline-flex
                            rounded-xl
                            bg-blue-100
                            p-4
                            text-4xl
                            text-blue-600
                        ">
                            phone_iphone
                        </span>

                        <h3 className="
                            text-lg
                            font-bold
                            text-slate-900
                        ">
                            Aplicaciones
                        </h3>

                        <p className="
                            mt-2
                            text-sm
                            leading-6
                            text-slate-600
                        ">
                            Desarrollo de aplicaciones pensadas para
                            mejorar la experiencia de tus usuarios.
                        </p>

                    </div>


                    {/* Sistemas a medida */}
                    <div className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-6
                        text-center
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-lg
                    ">

                        <span className="
                            material-symbols-outlined
                            mb-4
                            inline-flex
                            rounded-xl
                            bg-blue-100
                            p-4
                            text-4xl
                            text-blue-600
                        ">
                            code
                        </span>

                        <h3 className="
                            text-lg
                            font-bold
                            text-slate-900
                        ">
                            Sistemas a medida
                        </h3>

                        <p className="
                            mt-2
                            text-sm
                            leading-6
                            text-slate-600
                        ">
                            Soluciones personalizadas para optimizar y
                            automatizar los procesos de tu empresa.
                        </p>

                    </div>


                    {/* Ecommerce */}
                    <div className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-6
                        text-center
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-lg
                    ">

                        <span className="
                            material-symbols-outlined
                            mb-4
                            inline-flex
                            rounded-xl
                            bg-blue-100
                            p-4
                            text-4xl
                            text-blue-600
                        ">
                            shopping_cart
                        </span>

                        <h3 className="
                            text-lg
                            font-bold
                            text-slate-900
                        ">
                            E-commerce
                        </h3>

                        <p className="
                            mt-2
                            text-sm
                            leading-6
                            text-slate-600
                        ">
                            Tiendas online profesionales desarrolladas
                            con WordPress o Shopify.
                        </p>

                    </div>

                </div>


                {/* Cierre */}
                <div className="
                    mt-14
                    text-center
                ">

                    <p className="
                        text-lg
                        font-semibold
                        text-slate-900
                        md:text-xl
                    ">
                        Tecnología, diseño y soluciones pensadas para tu negocio.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Nosotros;