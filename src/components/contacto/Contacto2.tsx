
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

        } catch (err) {

            console.error("Error al enviar:", err);
            setError(true);

        } finally {

            setEnviando(false);

        }
    };

    return (

        <section
            id="contacto"
            className="
                bg-slate-100
                px-5
                py-14
                md:px-8
                md:py-16
            "
        >

            <div
                className="
                    mx-auto
                    max-w-6xl
                "
            >

                <div
                    className="
                        overflow-hidden
                        rounded-3xl
                        bg-blue-600
                        px-6
                        py-8
                        shadow-lg
                        md:px-10
                        md:py-10
                    "
                >

                    <div
                        className="
                            grid
                            items-center
                            gap-8
                            lg:grid-cols-[1fr_360px]
                        "
                    >

                        {/* TEXTO */}

                        <div>

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-blue-200
                                "
                            >
                                Hablemos
                            </span>

                            <h2
                                className="
                                    mt-3
                                    max-w-xl
                                    text-3xl
                                    font-bold
                                    leading-tight
                                    text-white
                                    md:text-4xl
                                "
                            >
                                ¿Tienes un proyecto en mente?
                            </h2>

                            <p
                                className="
                                    mt-3
                                    max-w-lg
                                    text-sm
                                    leading-6
                                    text-blue-100
                                    md:text-base
                                "
                            >
                                Cuéntanos qué necesitas y te
                                orientamos para encontrar la
                                mejor solución para tu negocio.
                            </p>


                            {/* WhatsApp */}

                            <a
                                href="https://wa.me/56920358939"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    mt-6
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    border
                                    border-white/20
                                    bg-white/10
                                    px-4
                                    py-2.5
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-white/20
                                "
                            >

                                <FaWhatsapp className="text-green-300" />

                                Hablar por WhatsApp

                                <FaArrowRight className="text-xs" />

                            </a>

                        </div>


                        {/* MINI FORMULARIO */}

                        <form
                            ref={form}
                            onSubmit={enviarFormulario}
                            className="
                                rounded-2xl
                                bg-white
                                p-5
                                shadow-xl
                            "
                        >

                            <h3
                                className="
                                    text-lg
                                    font-bold
                                    text-slate-900
                                "
                            >
                                Déjanos tus datos
                            </h3>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    text-slate-500
                                "
                            >
                                Te contactaremos para conversar.
                            </p>


                            {/* Nombre */}

                            <input
                                type="text"
                                name="nombre"
                                required
                                placeholder="Nombre"
                                className="
                                    mt-4
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
                                "
                            />


                            {/* Correo */}

                            <input
                                type="email"
                                name="correo"
                                required
                                placeholder="Correo electrónico"
                                className="
                                    mt-3
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
                                "
                            />


                            {/* Botón */}

                            <button
                                type="submit"
                                disabled={enviando}
                                className="
                                    group
                                    mt-3
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-lg
                                    bg-slate-900
                                    px-4
                                    py-2.5
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-slate-800
                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                "
                            >

                                {enviando
                                    ? "Enviando..."
                                    : "Quiero que me contacten"
                                }

                                {!enviando && (
                                    <FaArrowRight
                                        className="
                                            text-xs
                                            transition-transform
                                            group-hover:translate-x-1
                                        "
                                    />
                                )}

                            </button>


                            {/* Mensaje enviado */}

                            {enviado && (

                                <p
                                    className="
                                        mt-3
                                        rounded-lg
                                        bg-green-50
                                        p-2.5
                                        text-center
                                        text-xs
                                        font-medium
                                        text-green-700
                                    "
                                >
                                    ✓ ¡Listo! Te contactaremos pronto.
                                </p>

                            )}


                            {/* Error */}

                            {error && (

                                <p
                                    className="
                                        mt-3
                                        rounded-lg
                                        bg-red-50
                                        p-2.5
                                        text-center
                                        text-xs
                                        text-red-700
                                    "
                                >
                                    No pudimos enviar tus datos.
                                    Inténtalo nuevamente.
                                </p>

                            )}

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contacto2;
