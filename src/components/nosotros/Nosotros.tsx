import ceo from "../../assets/ceo.webp";

function Nosotros() {
    return (
<section
    id="nosotros"
    className="
        bg-white
        px-6
        pt-10
        pb-20
        md:pt-16
        md:pb-28
    "
>

            <div className="mx-auto max-w-7xl">

                {/* ENCABEZADO */}

                <div className="
                    pt-30
                    mx-auto
                    max-w-3xl
                    text-center
                ">

                    <span className="
                        inline-block
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
                        Sobre nosotros
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
                        Tecnología pensada para
                        <span className="text-blue-600">
                            {" "}hacer crecer tu negocio
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
                        En Duckode desarrollamos soluciones digitales
                        adaptadas a las necesidades de cada negocio,
                        combinando tecnología, diseño y funcionalidad.
                    </p>

                </div>


                {/* QUIÉNES SOMOS */}

                <div className="
                    mt-16
                    grid
                    items-center
                    gap-12
                    lg:grid-cols-2
                    lg:gap-16
                ">

                    {/* TEXTO */}

                    <div>

                        <span className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-widest
                            text-blue-600
                        ">
                            Nuestra historia
                        </span>

                        <h3 className="
                            mt-3
                            text-2xl
                            font-bold
                            text-slate-900
                            md:text-3xl
                        ">
                            ¿Quiénes somos?
                        </h3>

                        <p className="
                            mt-5
                            leading-7
                            text-slate-600
                        ">
                            Duckode es una empresa chilena fundada en
                            2025, dedicada al desarrollo web y de
                            software a medida. Creamos soluciones
                            digitales modernas para emprendedores,
                            pequeñas empresas y pymes.
                        </p>

                        <p className="
                            mt-4
                            leading-7
                            text-slate-600
                        ">
                            Desarrollamos sitios web, aplicaciones,
                            sistemas personalizados y tiendas online,
                            utilizando tecnologías como WordPress
                            y Shopify.
                        </p>

                        <p className="
                            mt-4
                            leading-7
                            text-slate-600
                        ">
                            Nuestro objetivo es transformar las ideas
                            y necesidades de nuestros clientes en
                            soluciones digitales funcionales, modernas
                            y escalables.
                        </p>

                    </div>


                    {/* VALORES */}

                    <div className="
                        grid
                        gap-4
                        sm:grid-cols-2
                    ">

                        {/* CARD */}

                        <div className="
                            group
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
                            hover:shadow-lg
                        ">

                            <span className="
                                material-symbols-outlined
                                text-4xl
                                text-blue-600
                            ">
                                code
                            </span>

                            <h4 className="
                                mt-4
                                font-bold
                                text-slate-900
                            ">
                                Desarrollo a medida
                            </h4>

                            <p className="
                                mt-2
                                text-sm
                                leading-6
                                text-slate-600
                            ">
                                Soluciones adaptadas a las necesidades
                                reales de cada negocio.
                            </p>

                        </div>


                        {/* CARD */}

                        <div className="
                            group
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
                            hover:shadow-lg
                        ">

                            <span className="
                                material-symbols-outlined
                                text-4xl
                                text-blue-600
                            ">
                                devices
                            </span>

                            <h4 className="
                                mt-4
                                font-bold
                                text-slate-900
                            ">
                                Diseño moderno
                            </h4>

                            <p className="
                                mt-2
                                text-sm
                                leading-6
                                text-slate-600
                            ">
                                Experiencias digitales pensadas para
                                cualquier dispositivo.
                            </p>

                        </div>


                        {/* CARD */}

                        <div className="
                            group
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
                            hover:shadow-lg
                        ">

                            <span className="
                                material-symbols-outlined
                                text-4xl
                                text-blue-600
                            ">
                                trending_up
                            </span>

                            <h4 className="
                                mt-4
                                font-bold
                                text-slate-900
                            ">
                                Enfoque en resultados
                            </h4>

                            <p className="
                                mt-2
                                text-sm
                                leading-6
                                text-slate-600
                            ">
                                Tecnología orientada a ayudar a tu
                                negocio a crecer y mejorar.
                            </p>

                        </div>


                        {/* CARD */}

                        <div className="
                            group
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
                            hover:shadow-lg
                        ">

                            <span className="
                                material-symbols-outlined
                                text-4xl
                                text-blue-600
                            ">
                                support_agent
                            </span>

                            <h4 className="
                                mt-4
                                font-bold
                                text-slate-900
                            ">
                                Acompañamiento
                            </h4>

                            <p className="
                                mt-2
                                text-sm
                                leading-6
                                text-slate-600
                            ">
                                Estamos presentes antes, durante y
                                después del desarrollo.
                            </p>

                        </div>

                    </div>

                </div>


                {/* FUNDADOR */}

                <div className="
                    mt-20
                    overflow-hidden
                    rounded-3xl
                    bg-slate-900
                    p-8
                    shadow-xl
                    md:mt-24
                    md:p-12
                ">

                    <div className="
                        grid
                        items-center
                        gap-10
                        md:grid-cols-[240px_1fr]
                        md:gap-12
                    ">

                        {/* FOTO */}

                        <div className="
                            flex
                            justify-center
                        ">

                            <img
                                src={ceo}
                                alt="Jearson Roa Leiva, fundador de Duckode"
                                className="
                                    h-52
                                    w-52
                                    rounded-2xl
                                    object-cover
                                    shadow-2xl
                                    ring-1
                                    ring-white/10
                                    md:h-60
                                    md:w-60
                                "
                            />

                        </div>


                        {/* INFORMACIÓN */}

                        <div className="text-white">

                            <span className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-blue-400
                            ">
                                Detrás de Duckode
                            </span>

                            <h3 className="
                                mt-3
                                text-2xl
                                font-bold
                                md:text-3xl
                            ">
                                Jearson Roa Leiva
                            </h3>

                            <p className="
                                mt-1
                                font-medium
                                text-blue-300
                            ">
                                Fundador & Desarrollador
                            </p>

                            <p className="
                                mt-5
                                max-w-2xl
                                leading-7
                                text-slate-300
                            ">
                                Duckode nace con la idea de ayudar a
                                negocios y emprendedores a aprovechar
                                la tecnología para crecer. Buscamos crear
                                soluciones digitales modernas,
                                funcionales y realmente útiles.
                            </p>

                            <p className="
                                mt-4
                                max-w-2xl
                                leading-7
                                text-slate-300
                            ">
                                Trabajamos de manera cercana con cada
                                cliente para entender sus necesidades,
                                desarrollar la solución adecuada y
                                acompañarlo durante todo el proceso.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Nosotros;

