import { Link } from "react-router-dom";
import duck1 from "../../assets/duck-1.webp";
import Contacto from "../contacto/Contacto";
import "./Hero.css";


function Hero() {

    return (
        <section
            id="inicio"
            className="
                bg-hero
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

                    <h1 className="texto-principal">Duckode - Desarrollo web y software a medida</h1>


                    <p className="texto-parrafo">Creamos soluciones digitales a medida para potenciar tu negocio. Diseño moderno, codigo limpio y soporte continuo para tu empresa crezca en la era digital</p>


                    <Link
                        to="/Contacto"
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
                    > Solicita tu consulta gratuita 
                    <span className="material-symbols-outlined">arrow_forward</span></Link>
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