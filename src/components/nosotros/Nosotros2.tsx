
import ceo from "../../assets/ceo.webp";

function Nosotros2() {

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
                        Sobre nosotros
                    </span>

                    <h2 className="
                        mt-3
                        text-3xl
                        font-bold
                        text-slate-900
                        md:text-4xl
                    ">
                        Tecnología pensada para hacer crecer tu negocio
                    </h2>

                    <p className="
                        mt-5
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


                {/* Quiénes somos */}
                <div className="
                    mt-16
                    grid
                    items-center
                    gap-12
                    md:grid-cols-2
                ">

                    {/* Texto */}
                    <div>

                        <h3 className="
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
                            Duckode es una empresa chilena fundada en 2025,
                            dedicada al desarrollo web y de software a medida.
                            Creamos soluciones digitales modernas para
                            emprendedores, pequeñas empresas y pymes.
                        </p>

                        <p className="
                            mt-4
                            leading-7
                            text-slate-600
                        ">
                            Desarrollamos sitios web, aplicaciones, sistemas
                            personalizados y tiendas online utilizando
                            tecnologías como WordPress y Shopify.
                        </p>

                        <p className="
                            mt-4
                            leading-7
                            text-slate-600
                        ">
                            Nuestro objetivo es transformar las ideas y
                            necesidades de nuestros clientes en soluciones
                            digitales funcionales, modernas y escalables.
                        </p>

                    </div>


                    {/* Valores */}
                    <div className="
                        grid
                        gap-5
                        sm:grid-cols-2
                    ">

                        <div className="
                            rounded-2xl
                            bg-slate-50
                            p-6
                            shadow-sm
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
                                text-lg
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


                        <div className="
                            rounded-2xl
                            bg-slate-50
                            p-6
                            shadow-sm
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
                                text-lg
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


                        <div className="
                            rounded-2xl
                            bg-slate-50
                            p-6
                            shadow-sm
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
                                text-lg
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
                                Tecnología orientada a ayudar a tu negocio
                                a crecer y mejorar.
                            </p>

                        </div>


                        <div className="
                            rounded-2xl
                            bg-slate-50
                            p-6
                            shadow-sm
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
                                text-lg
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


                {/* Fundador */}
                <div className="
                    mt-24
                    rounded-3xl
                    bg-slate-900
                    p-8
                    md:p-12
                ">

                    <div className="
                        grid
                        items-center
                        gap-10
                        md:grid-cols-[280px_1fr]
                    ">

                        {/* Foto */}
                        <div className="
                            flex
                            justify-center
                        ">

                            <img
                                src={ceo}
                                alt="Fundador de Duckode"
                                className="
                                    h-56
                                    w-56
                                    rounded-2xl
                                    object-cover
                                    shadow-xl
                                    md:h-64
                                    md:w-64
                                "
                            />

                        </div>


                        {/* Información */}
                        <div className="text-white">

                            <span className="
                                text-sm
                                font-semibold
                                uppercase
                                tracking-widest
                                text-amber-300
                            ">
                                Detrás de Duckode
                            </span>

                            <h3 className="
                                mt-3
                                text-3xl
                                font-bold
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
                                soluciones digitales que sean modernas,
                                funcionales y realmente útiles para
                                nuestros clientes.
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
                                acompañarlo durante el proceso.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Nosotros2;

