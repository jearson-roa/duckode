import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
FaArrowRight,

FaWhatsapp,
} from "react-icons/fa6";

function Contacto2() {

const form = useRef<HTMLFormElement>(null);

const [enviando, setEnviando] = useState(false);
const [enviado, setEnviado] = useState(false);
const [error, setError] = useState(false);

const enviarFormulario = async (
    e: React.FormEvent<HTMLFormElement>
) => {

    e.preventDefault();

    if (!form.current) return;

    setEnviando(true);
    setEnviado(false);
    setError(false);

    try {

        await emailjs.sendForm(
            "service_38x8zku",
            "template_ag43exp",
            form.current,
            {
                publicKey: "AwdYG5DMkB7sDrfeu",
            }
        );

        setEnviado(true);
        form.current.reset();

    } catch (error) {

        console.error("Error al enviar:", error);
        setError(true);

    } finally {

        setEnviando(false);

    }
};

return (

    <section
        id="contacto"
        className="
            relative
            overflow-hidden
            bg-slate-950
            px-6
            py-16
            md:py-20
        "
    >

        {/* Decoración */}

        <div
            className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-72
                w-72
                rounded-full
                bg-blue-600/20
                blur-3xl
            "
        />

        <div
            className="
                pointer-events-none
                absolute
                -bottom-40
                -left-32
                h-80
                w-80
                rounded-full
                bg-blue-500/10
                blur-3xl
            "
        />


        <div
            className="
                relative
                mx-auto
                max-w-6xl
            "
        >

            <div
                className="
                    grid
                    items-center
                    gap-10
                    lg:grid-cols-[1fr_420px]
                "
            >

                {/* =================================
                    TEXTO
                ================================= */}

                <div>

                    <span
                        className="
                            inline-flex
                            rounded-full
                            border
                            border-blue-400/20
                            bg-blue-500/10
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            uppercase
                            tracking-widest
                            text-blue-400
                        "
                    >
                        ¿Tienes un proyecto?
                    </span>


                    <h2
                        className="
                            mt-4
                            max-w-2xl
                            text-3xl
                            font-bold
                            leading-tight
                            text-white
                            sm:text-4xl
                            md:text-5xl
                        "
                    >
                        Hagamos realidad
                        <span className="text-blue-500">
                            {" "}tu idea.
                        </span>
                    </h2>


                    <p
                        className="
                            mt-4
                            max-w-xl
                            text-base
                            leading-7
                            text-slate-400
                            md:text-lg
                        "
                    >
                        Cuéntanos brevemente qué necesitas y
                        conversemos sobre la mejor solución
                        para tu negocio.
                    </p>


                    {/* Beneficios pequeños */}

                    <div
                        className="
                            mt-7
                            flex
                            flex-wrap
                            gap-x-6
                            gap-y-3
                            text-sm
                            text-slate-300
                        "
                    >

                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            Desarrollo a medida
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            Diseño moderno
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            Soporte
                        </span>

                    </div>


                    {/* WhatsApp */}

                    <a
                        href="https://wa.me/56920358939"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            mt-7
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-slate-300
                            transition
                            hover:text-green-400
                        "
                    >

                        <FaWhatsapp className="text-lg text-green-500" />

                        ¿Prefieres WhatsApp?

                        <FaArrowRight className="text-xs" />

                    </a>

                </div>


                {/* =================================
                    MINI FORMULARIO
                ================================= */}

                <form
                    ref={form}
                    onSubmit={enviarFormulario}
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white
                        p-5
                        shadow-2xl
                        sm:p-6
                    "
                >

                    <h3
                        className="
                            text-xl
                            font-bold
                            text-slate-900
                        "
                    >
                        Solicita una consulta
                    </h3>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500
                        "
                    >
                        Te contactaremos para conocer tu proyecto.
                    </p>


                    {/* Nombre */}

                    <div className="mt-5">

                        <label
                            htmlFor="nombre"
                            className="
                                mb-1.5
                                block
                                text-sm
                                font-semibold
                                text-slate-700
                            "
                        >
                            Nombre
                        </label>

                        <input
                            id="nombre"
                            type="text"
                            name="nombre"
                            required
                            placeholder="Tu nombre"
                            className="
                                w-full
                                rounded-lg
                                border
                                border-slate-200
                                bg-slate-50
                                px-4
                                py-2.5
                                text-sm
                                text-slate-900
                                outline-none
                                transition
                                placeholder:text-slate-400
                                focus:border-blue-500
                                focus:bg-white
                                focus:ring-2
                                focus:ring-blue-100
                            "
                        />

                    </div>


                    {/* Correo */}

                    <div className="mt-4">

                        <label
                            htmlFor="correo"
                            className="
                                mb-1.5
                                block
                                text-sm
                                font-semibold
                                text-slate-700
                            "
                        >
                            Correo electrónico
                        </label>

                        <input
                            id="correo"
                            type="email"
                            name="correo"
                            required
                            placeholder="tu@email.com"
                            className="
                                w-full
                                rounded-lg
                                border
                                border-slate-200
                                bg-slate-50
                                px-4
                                py-2.5
                                text-sm
                                text-slate-900
                                outline-none
                                transition
                                placeholder:text-slate-400
                                focus:border-blue-500
                                focus:bg-white
                                focus:ring-2
                                focus:ring-blue-100
                            "
                        />

                    </div>


                    {/* Botón */}

                    <button
                        type="submit"
                        disabled={enviando}
                        className="
                            group
                            mt-5
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            bg-blue-600
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:bg-blue-700
                            hover:shadow-lg
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    >

                        {enviando ? (

                            <>
                                <span
                                    className="
                                        material-symbols-outlined
                                        animate-spin
                                        text-base
                                    "
                                >
                                    progress_activity
                                </span>

                                Enviando...

                            </>

                        ) : (

                            <>
                                Quiero conversar sobre mi proyecto

                                <FaArrowRight
                                    className="
                                        text-xs
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                />

                            </>

                        )}

                    </button>


                    {/* Éxito */}

                    {enviado && (

                        <div
                            className="
                                mt-4
                                flex
                                items-start
                                gap-2
                                rounded-lg
                                bg-green-50
                                p-3
                                text-sm
                                text-green-700
                            "
                        >

             

                            <div>
                                <p className="font-semibold">
                                    ¡Consulta enviada!
                                </p>

                                <p className="mt-0.5 text-xs">
                                    Nos pondremos en contacto contigo pronto.
                                </p>
                            </div>

                        </div>

                    )}


                    {/* Error */}

                    {error && (

                        <div
                            className="
                                mt-4
                                rounded-lg
                                bg-red-50
                                p-3
                                text-center
                                text-sm
                                text-red-700
                            "
                        >
                            No pudimos enviar tu consulta.
                            Inténtalo nuevamente.
                        </div>

                    )}


                    <p
                        className="
                            mt-4
                            text-center
                            text-xs
                            text-slate-400
                        "
                    >
                        Sin compromiso · Consulta inicial gratuita
                    </p>

                </form>

            </div>

        </div>

    </section>
);


}

export default Contacto2;
