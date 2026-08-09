
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
    FaArrowRight,
    FaWhatsapp,
    FaCalendarCheck,
} from "react-icons/fa6";

function Contacto() {

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
                bg-white
                px-6
                py-20
                md:py-28
            "
        >

            <div className="mx-auto max-w-6xl">

                {/* ENCABEZADO */}

                <div className="text-center pt-30">

                    <span
                        className="
                            inline-flex
                            rounded-full
                            bg-blue-50
                            px-4
                            py-2
                            text-xs
                            font-bold
                            uppercase
                            tracking-widest
                            text-blue-600
                        "
                    >
                        Hablemos
                    </span>

                    <h2
                        className="
                            mt-5
                            text-3xl
                            font-bold
                            tracking-tight
                            text-slate-900
                            sm:text-4xl
                            md:text-5xl
                        "
                    >
                        ¿Tienes un proyecto
                        <span className="text-blue-600">
                            {" "}en mente?
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-base
                            leading-7
                            text-slate-600
                            md:text-lg
                        "
                    >
                        Cuéntanos tu idea, necesidad o proyecto.
                        Estamos listos para ayudarte a transformarlo
                        en una solución digital.
                    </p>

                </div>


                {/* CONTENIDO */}

                <div
                    className="
                        mt-14
                        grid
                        gap-12
                        lg:grid-cols-[1fr_480px]
                        lg:items-center
                    "
                >

                    {/* INFORMACIÓN */}

                    <div>

                        <h3
                            className="
                                text-2xl
                                font-bold
                                text-slate-900
                            "
                        >
                            Comencemos a conversar
                        </h3>

                        <p
                            className="
                                mt-4
                                max-w-lg
                                leading-7
                                text-slate-600
                            "
                        >
                            No necesitas tener todo definido.
                            Cuéntanos qué tienes en mente y
                            nosotros te ayudamos a encontrar
                            la mejor alternativa.
                        </p>


                        {/* OPCIONES */}

                        <div className="mt-8 space-y-4">

                            {/* WHATSAPP */}

                            <a
                                href="https://wa.me/56920358939"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-5
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-green-200
                                    hover:bg-white
                                    hover:shadow-md
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-green-50
                                    "
                                >

                                    <FaWhatsapp
                                        className="
                                            text-2xl
                                            text-green-500
                                        "
                                    />

                                </div>

                                <div className="flex-1">

                                    <p
                                        className="
                                            font-bold
                                            text-slate-900
                                        "
                                    >
                                        Escríbenos por WhatsApp
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            text-slate-500
                                        "
                                    >
                                        Respuesta rápida y directa
                                    </p>

                                </div>

                                <FaArrowRight
                                    className="
                                        text-sm
                                        text-slate-400
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                />

                            </a>


                            {/* REUNIÓN */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-5
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-blue-50
                                    "
                                >

                                    <FaCalendarCheck
                                        className="
                                            text-xl
                                            text-blue-600
                                        "
                                    />

                                </div>

                                <div>

                                    <p
                                        className="
                                            font-bold
                                            text-slate-900
                                        "
                                    >
                                        ¿Prefieres una reunión?
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            text-slate-500
                                        "
                                    >
                                        Déjanos tus datos y coordinamos.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* GARANTÍA */}

                        <div
                            className="
                                mt-8
                                flex
                                items-center
                                gap-3
                                text-sm
                                text-slate-500
                            "
                        >

                            <span
                                className="
                                    material-symbols-outlined
                                    text-lg
                                    text-green-500
                                "
                            >
                                check_circle
                            </span>

                            Consulta inicial sin compromiso

                        </div>

                    </div>


                    {/* FORMULARIO */}

                    <form
                        ref={form}
                        onSubmit={enviarFormulario}
                        className="
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-xl
                            shadow-slate-200/60
                            md:p-8
                        "
                    >

                        <h3
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                            "
                        >
                            Solicita contacto
                        </h3>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-slate-500
                            "
                        >
                            Completa tus datos y nos pondremos
                            en contacto contigo.
                        </p>


                        {/* NOMBRE */}

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
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-900
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                    focus:bg-white
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>


                        {/* CORREO */}

                        <div className="mt-4">

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
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-900
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                    focus:bg-white
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>


                        {/* TELÉFONO */}

                        <div className="mt-4">

                            <label
                                htmlFor="telefono"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                WhatsApp / Teléfono
                            </label>

                            <input
                                id="telefono"
                                type="tel"
                                name="telefono"
                                placeholder="+56 9 1234 5678"
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-900
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                    focus:bg-white
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>


                        {/* OPCIÓN */}

                        <div className="mt-4">

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
                                ¿En qué podemos ayudarte?
                            </label>

                            <select
                                id="servicio"
                                name="servicio"
                                required
                                defaultValue=""
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-900
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                    focus:bg-white
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            >

                                <option value="" disabled>
                                    Selecciona una opción
                                </option>

                                <option value="Cotización">
                                    Solicitar cotización
                                </option>

                                <option value="Sitio Web">
                                    Crear un sitio web
                                </option>

                                <option value="Tienda Online">
                                    Crear una tienda online
                                </option>

                                <option value="Sistema">
                                    Desarrollar un sistema
                                </option>

                                <option value="Reunión">
                                    Agendar una reunión
                                </option>

                                <option value="Consulta">
                                    Realizar una consulta
                                </option>

                            </select>

                        </div>


                        {/* BOTÓN */}

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
                                rounded-xl
                                bg-blue-600
                                px-5
                                py-3.5
                                text-sm
                                font-semibold
                                text-white
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
                                    <span
                                        className="
                                            material-symbols-outlined
                                            animate-spin
                                        "
                                    >
                                        progress_activity
                                    </span>

                                    Enviando...
                                </>

                            ) : (

                                <>
                                    Solicitar contacto

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


                        {/* ÉXITO */}

                        {enviado && (

                            <div
                                className="
                                    mt-4
                                    rounded-xl
                                    bg-green-50
                                    p-4
                                    text-center
                                    text-sm
                                    text-green-700
                                "
                            >

                                <p className="font-semibold">
                                    ¡Solicitud enviada correctamente!
                                </p>

                                <p className="mt-1 text-xs">
                                    Nos pondremos en contacto contigo pronto.
                                </p>

                            </div>

                        )}


                        {/* ERROR */}

                        {error && (

                            <div
                                className="
                                    mt-4
                                    rounded-xl
                                    bg-red-50
                                    p-4
                                    text-center
                                    text-sm
                                    text-red-700
                                "
                            >
                                No pudimos enviar tu solicitud.
                                Inténtalo nuevamente.
                            </div>

                        )}

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Contacto;

