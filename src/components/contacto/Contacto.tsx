
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";

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
                bg-slate-50
                px-6
                py-20
                md:py-28
            "
        >

            <div className="mx-auto max-w-7xl">

                {/* =====================================
                    ENCABEZADO
                ====================================== */}

                <div
                    className="
                        mx-auto
                        max-w-3xl
                        text-center
                    "
                >

                    <span
                        className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-widest
                            text-blue-600
                        "
                    >
                        Contacto
                    </span>

                    <h2
                        className="
                            mt-3
                            text-3xl
                            font-bold
                            text-slate-900
                            md:text-4xl
                        "
                    >
                        Hablemos de tu proyecto
                    </h2>

                    <p
                        className="
                            mt-5
                            text-base
                            leading-7
                            text-slate-600
                            md:text-lg
                        "
                    >
                        ¿Tienes una idea o necesitas una solución
                        digital para tu negocio? Cuéntanos y
                        conversemos sobre tu proyecto.
                    </p>

                </div>


                {/* =====================================
                    CONTENIDO
                ====================================== */}

                <div
                    className="
                        mt-12
                        grid
                        gap-10
                        lg:grid-cols-5
                    "
                >


                    {/* =====================================
                        INFORMACIÓN DE CONTACTO
                    ====================================== */}

                    <div
                        className="
                            lg:col-span-2
                            rounded-2xl
                            bg-slate-900
                            p-8
                            text-white
                            shadow-lg
                            md:p-10
                        "
                    >

                        {/* Icono principal */}

                        <span
                            className="
                                material-symbols-outlined
                                text-4xl
                                text-amber-300
                            "
                        >
                            forum
                        </span>


                        <h3
                            className="
                                mt-5
                                text-2xl
                                font-bold
                            "
                        >
                            Conversemos
                        </h3>


                        <p
                            className="
                                mt-4
                                leading-7
                                text-slate-300
                            "
                        >
                            Estamos disponibles para conocer tu
                            proyecto, resolver tus dudas y encontrar
                            la mejor solución para tu negocio.
                        </p>


                        {/* =====================================
                            WHATSAPP
                        ====================================== */}

                        <a
                            href="https://wa.me/56920358939"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contactar por WhatsApp"
                            className="
                                mt-8
                                flex
                                items-center
                                gap-4
                                rounded-xl
                                bg-white/10
                                p-4
                                transition
                                duration-300
                                hover:bg-white/20
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
                                    rounded-lg
                                    bg-green-500/10
                                "
                            >

                                <FaWhatsapp
                                    className="
                                        text-3xl
                                        text-green-400
                                    "
                                />

                            </div>


                            <div>

                                <p
                                    className="
                                        text-sm
                                        text-slate-400
                                    "
                                >
                                    WhatsApp
                                </p>

                                <p
                                    className="
                                        font-semibold
                                    "
                                >
                                    +56 9 2035 8939
                                </p>

                            </div>

                        </a>


                        {/* =====================================
                            REDES SOCIALES
                        ====================================== */}

                        <div className="mt-8">

                            <p
                                className="
                                    text-sm
                                    font-semibold
                                    text-slate-300
                                "
                            >
                                También puedes encontrarnos en
                            </p>


                            <div
                                className="
                                    mt-4
                                    flex
                                    gap-3
                                "
                            >

                                {/* =================================
                                    INSTAGRAM
                                ================================== */}

                                <a
                                    href="https://www.instagram.com/duckode.cl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram Duckode"
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-white/10
                                        text-white
                                        transition
                                        duration-300
                                        hover:-translate-y-1
                                        hover:bg-pink-500
                                    "
                                >

                                    <FaInstagram
                                        className="text-xl"
                                    />

                                </a>


                                {/* =================================
                                    FACEBOOK
                                ================================== */}

                                <a
                                    href="https://www.facebook.com/share/1CMX163cki/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook Duckode"
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-white/10
                                        text-white
                                        transition
                                        duration-300
                                        hover:-translate-y-1
                                        hover:bg-blue-600
                                    "
                                >

                                    <FaFacebook
                                        className="text-xl"
                                    />

                                </a>


                                {/* =================================
                                    LINKEDIN
                                ================================== */}

                                <a
                                    href="https://www.linkedin.com/in/jearson-roa-leiva-885aa22b4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-white/10
                                        text-white
                                        transition
                                        duration-300
                                        hover:-translate-y-1
                                        hover:bg-blue-700
                                    "
                                >

                                    <FaLinkedin
                                        className="text-xl"
                                    />

                                </a>

                            </div>

                        </div>


                        {/* =====================================
                            EQUIPO
                        ====================================== */}

                        <div
                            className="
                                mt-8
                                border-t
                                border-white/10
                                pt-6
                            "
                        >

                            <p
                                className="
                                    text-sm
                                    text-slate-400
                                "
                            >
                                ¿Quieres conocer más sobre nosotros?
                            </p>

                            <p
                                className="
                                    mt-1
                                    font-semibold
                                "
                            >
                                Conoce al equipo de Duckode
                            </p>

                        </div>

                    </div>


                    {/* =====================================
                        FORMULARIO
                    ====================================== */}

                    <div className="lg:col-span-3">

                        <form
                            ref={form}
                            onSubmit={enviarFormulario}
                            className="
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-sm
                                md:p-8
                            "
                        >

                            {/* =================================
                                NOMBRE + CORREO
                            ================================== */}

                            <div
                                className="
                                    grid
                                    gap-6
                                    md:grid-cols-2
                                "
                            >

                                {/* Nombre */}

                                <div>

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
                                            bg-white
                                            px-4
                                            py-3
                                            text-slate-900
                                            outline-none
                                            transition
                                            placeholder:text-slate-400
                                            focus:border-blue-500
                                            focus:ring-2
                                            focus:ring-blue-100
                                        "
                                    />

                                </div>


                                {/* Correo */}

                                <div>

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
                                            bg-white
                                            px-4
                                            py-3
                                            text-slate-900
                                            outline-none
                                            transition
                                            placeholder:text-slate-400
                                            focus:border-blue-500
                                            focus:ring-2
                                            focus:ring-blue-100
                                        "
                                    />

                                </div>

                            </div>


                            {/* =================================
                                TELÉFONO + SERVICIO
                            ================================== */}

                            <div
                                className="
                                    mt-6
                                    grid
                                    gap-6
                                    md:grid-cols-2
                                "
                            >

                                {/* Teléfono */}

                                <div>

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
                                        Teléfono
                                    </label>

                                    <input
                                        id="telefono"
                                        type="tel"
                                        name="telefono"
                                        placeholder="+56 9 1234 5678"
                                        className="
                                            w-full
                                            rounded-lg
                                            border
                                            border-slate-300
                                            bg-white
                                            px-4
                                            py-3
                                            text-slate-900
                                            outline-none
                                            transition
                                            placeholder:text-slate-400
                                            focus:border-blue-500
                                            focus:ring-2
                                            focus:ring-blue-100
                                        "
                                    />

                                </div>


                                {/* Servicio */}

                                <div>

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
                                        Servicio
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
                                            text-slate-900
                                            outline-none
                                            transition
                                            focus:border-blue-500
                                            focus:ring-2
                                            focus:ring-blue-100
                                        "
                                    >

                                        <option
                                            value=""
                                            disabled
                                        >
                                            Selecciona un servicio
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

                                        <option value="Soporte y mantenimiento">
                                            Soporte y mantenimiento
                                        </option>

                                        <option value="Otro">
                                            Otro
                                        </option>

                                    </select>

                                </div>

                            </div>


                            {/* =================================
                                MENSAJE
                            ================================== */}

                            <div className="mt-6">

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
                                    Cuéntanos sobre tu proyecto
                                </label>

                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    required
                                    rows={6}
                                    placeholder="Cuéntanos qué necesitas..."
                                    className="
                                        w-full
                                        resize-none
                                        rounded-lg
                                        border
                                        border-slate-300
                                        bg-white
                                        px-4
                                        py-3
                                        text-slate-900
                                        outline-none
                                        transition
                                        placeholder:text-slate-400
                                        focus:border-blue-500
                                        focus:ring-2
                                        focus:ring-blue-100
                                    "
                                />

                            </div>


                            {/* =================================
                                BOTÓN
                            ================================== */}

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
                                        <span
                                            className="
                                                material-symbols-outlined
                                            "
                                        >
                                            send
                                        </span>

                                        Enviar mensaje
                                    </>

                                )}

                            </button>


                            {/* =================================
                                MENSAJE DE ÉXITO
                            ================================== */}

                            {enviado && (

                                <div
                                    className="
                                        mt-5
                                        rounded-lg
                                        bg-green-50
                                        px-4
                                        py-3
                                        text-center
                                        text-sm
                                        font-medium
                                        text-green-700
                                    "
                                >
                                    ¡Mensaje enviado correctamente!
                                    <br />
                                    Nos pondremos en contacto contigo.
                                </div>

                            )}


                            {/* =================================
                                MENSAJE DE ERROR
                            ================================== */}

                            {error && (

                                <div
                                    className="
                                        mt-5
                                        rounded-lg
                                        bg-red-50
                                        px-4
                                        py-3
                                        text-center
                                        text-sm
                                        font-medium
                                        text-red-700
                                    "
                                >
                                    No pudimos enviar tu mensaje.
                                    <br />
                                    Inténtalo nuevamente.
                                </div>

                            )}

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contacto;
