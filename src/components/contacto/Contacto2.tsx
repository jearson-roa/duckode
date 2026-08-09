import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
                bg-slate-900
                px-6
                py-20
                md:py-28
            "
        >

            <div className="mx-auto max-w-7xl">

                <div className="
                    grid
                    items-center
                    gap-12
                    md:grid-cols-2
                ">

                    {/* Información */}
                    <div className="text-white">

                        <span className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-widest
                            text-amber-300
                        ">
                            Contacto
                        </span>

                        <h2 className="
                            mt-3
                            text-3xl
                            font-bold
                            md:text-5xl
                        ">
                            ¿Tienes un proyecto en mente?
                        </h2>

                        <p className="
                            mt-6
                            max-w-xl
                            text-base
                            leading-7
                            text-slate-300
                            md:text-lg
                        ">
                            Cuéntanos qué necesitas y conversemos sobre
                            cómo podemos ayudarte a llevar tu idea al
                            mundo digital.
                        </p>

                        <div className="mt-8 space-y-4">

                            <div className="
                                flex
                                items-center
                                gap-3
                            ">

                                <span className="
                                    material-symbols-outlined
                                    text-amber-300
                                ">
                                    mail
                                </span>

                                <span className="text-slate-300">
                                    Contáctanos y recibe una
                                    asesoría inicial.
                                </span>

                            </div>

                            <div className="
                                flex
                                items-center
                                gap-3
                            ">

                                <span className="
                                    material-symbols-outlined
                                    text-amber-300
                                ">
                                    code
                                </span>

                                <span className="text-slate-300">
                                    Desarrollo web y software a medida.
                                </span>

                            </div>

                            <div className="
                                flex
                                items-center
                                gap-3
                            ">

                                <span className="
                                    material-symbols-outlined
                                    text-amber-300
                                ">
                                    support_agent
                                </span>

                                <span className="text-slate-300">
                                    Soporte y acompañamiento.
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* Formulario */}
                    <form
                        ref={form}
                        onSubmit={enviarFormulario}
                        className="
                            rounded-2xl
                            bg-white
                            p-6
                            shadow-2xl
                            md:p-8
                        "
                    >

                        <h3 className="
                            text-2xl
                            font-bold
                            text-slate-900
                        ">
                            Solicita una consulta
                        </h3>

                        <p className="
                            mt-2
                            text-sm
                            text-slate-500
                        ">
                            Completa el formulario y nos pondremos
                            en contacto contigo.
                        </p>


                        {/* Nombre */}
                        <div className="mt-6">

                            <label
                                htmlFor="nombre"
                                className="
                                    mb-2
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
                                    border-slate-300
                                    px-4
                                    py-3
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>


                        {/* Correo */}
                        <div className="mt-5">

                            <label
                                htmlFor="correo"
                                className="
                                    mb-2
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
                                    border-slate-300
                                    px-4
                                    py-3
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>


                        {/* Servicio */}
                        <div className="mt-5">

                            <label
                                htmlFor="servicio"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                ¿Qué necesitas?
                            </label>

                            <select
                                id="servicio"
                                name="servicio"
                                required
                                defaultValue=""
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-slate-300
                                    bg-white
                                    px-4
                                    py-3
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            >

                                <option value="" disabled>
                                    Selecciona una opción
                                </option>

                                <option value="Sitio Web">
                                    Sitio Web
                                </option>

                                <option value="Landing Page">
                                    Landing Page
                                </option>

                                <option value="Tienda Online">
                                    Tienda Online
                                </option>

                                <option value="Sistema a medida">
                                    Sistema a medida
                                </option>

                                <option value="Aplicación">
                                    Aplicación
                                </option>

                                <option value="Otro">
                                    Otro
                                </option>

                            </select>

                        </div>


                        {/* Mensaje */}
                        <div className="mt-5">

                            <label
                                htmlFor="mensaje"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                Cuéntanos brevemente
                            </label>

                            <textarea
                                id="mensaje"
                                name="mensaje"
                                required
                                rows={4}
                                placeholder="Cuéntanos qué necesitas..."
                                className="
                                    w-full
                                    resize-none
                                    rounded-lg
                                    border
                                    border-slate-300
                                    px-4
                                    py-3
                                    outline-none
                                    transition
                                    focus:border-blue-500
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
                                mt-6
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-blue-600
                                px-6
                                py-3
                                font-semibold
                                text-white
                                shadow-md
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-blue-700
                                hover:shadow-lg
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                            "
                        >

                            {enviando ? (
                                <>
                                    <span className="
                                        material-symbols-outlined
                                        animate-spin
                                    ">
                                        progress_activity
                                    </span>

                                    Enviando...
                                </>
                            ) : (
                                <>
                                    Enviar consulta

                                    <span className="
                                        material-symbols-outlined
                                    ">
                                        arrow_forward
                                    </span>
                                </>
                            )}

                        </button>


                        {/* Éxito */}
                        {enviado && (
                            <div className="
                                mt-4
                                rounded-lg
                                bg-green-50
                                p-3
                                text-center
                                text-sm
                                font-medium
                                text-green-700
                            ">
                                ¡Consulta enviada correctamente!
                            </div>
                        )}


                        {/* Error */}
                        {error && (
                            <div className="
                                mt-4
                                rounded-lg
                                bg-red-50
                                p-3
                                text-center
                                text-sm
                                font-medium
                                text-red-700
                            ">
                                No pudimos enviar tu consulta.
                                Inténtalo nuevamente.
                            </div>
                        )}

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Contacto2;
