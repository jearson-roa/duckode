import { Link } from "react-router-dom";
import duck1 from "../../assets/duck-1.webp";


function Hero() {

    return (
        <section
            className="
                relative
                min-h-[600px]
                bg-cover
                bg-center
            "
        >

            {/* Capa oscura para mejorar lectura */}
            <div className="
                absolute
                inset-0
                bg-black/40
            "/>


            <div className="
                relative
                mx-auto
                grid
                max-w-7xl
                min-h-[600px]
                items-center
                gap-10
                px-6
                md:grid-cols-2
            ">


                {/* Texto izquierda */}
                <div className="
                    text-white
                ">

                    <h1 className="
                        max-w-xl
                        text-4xl
                        font-bold
                        leading-tight
                        md:text-6xl
                    ">
                        Soluciones profesionales
                        para tu empresa
                    </h1>


                    <p className="
                        mt-6
                        max-w-lg
                        text-lg
                        text-slate-200
                    ">
                        Entregamos servicios de calidad,
                        compromiso y experiencia para
                        nuestros clientes.
                    </p>


                    <Link
                        to="/contacto"
                        className="
                            mt-8
                            inline-block
                            rounded-lg
                            bg-amber-300
                            px-8
                            py-3
                            font-semibold
                            text-slate-900
                            transition
                            duration-300
                            hover:-translate-y-1
                            hover:bg-amber-400
                        "
                    >
                        Solicitar cotización
                    </Link>

                </div>



                {/* Imagen derecha */}
                <div className="
                    flex
                    justify-center
                    md:justify-end
                ">

                    <img
                        src={duck1}
                        alt="Servicios empresa"
                        className="
                            max-h-[450px]
                            object-contain
                            drop-shadow-2xl
                            transition
                            duration-500
                            hover:scale-105
                        "
                    />

                </div>


            </div>

        </section>
    );
}


export default Hero;