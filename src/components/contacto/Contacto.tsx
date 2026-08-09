import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
                        Contacto
                    </span>

                    <h2 className="
                        mt-3
                        text-3xl
                        font-bold
                        text-slate-900
                        md:text-4xl
                    ">
                        Hablemos de tu proyecto
                    </h2>

                    <p className="
                        mt-5
                        text-base
                        leading-7
                        text-slate-600
                        md:text-lg
                    ">
                        Cuéntanos qué necesitas y nos pondremos en
                        contacto contigo para ayudarte.
                    </p>

                </div>


                {/* Formulario */}
                <form
                    ref={form}
                    onSubmit={enviarFormulario}
                    className="
                        mx-auto
                        mt-12
                        max-w-3xl
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-6
                        shadow-sm
                        md:p-8
                    "
                >

                    {/* Nombre + Correo */}
                    <div className="
                        grid
                        gap-6
                        md:grid-cols-2
                    ">

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


                    {/* Teléfono + Servicio */}
                    <div className="
                        mt-6
                        grid
                        gap-6
                        md:grid-cols-2
                    ">

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

                                <option value="" disabled>
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


                    {/* Mensaje */}
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
                            placeholder="Cuéntanos qué necesitas, qué tipo de proyecto tienes en mente, o cualquier detalle que consideres importante..."
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
                                <span className="
                                    material-symbols-outlined
                                ">
                                    send
                                </span>

                                Enviar mensaje
                            </>
                        )}

                    </button>


                    {/* Mensaje de éxito */}
                    {enviado && (
                        <div className="
                            mt-5
                            rounded-lg
                            bg-green-50
                            px-4
                            py-3
                            text-center
                            text-sm
                            font-medium
                            text-green-700
                        ">
                            ¡Mensaje enviado correctamente!
                            Nos pondremos en contacto contigo.
                        </div>
                    )}


                    {/* Mensaje de error */}
                    {error && (
                        <div className="
                            mt-5
                            rounded-lg
                            bg-red-50
                            px-4
                            py-3
                            text-center
                            text-sm
                            font-medium
                            text-red-700
                        ">
                            No pudimos enviar tu mensaje.
                            Inténtalo nuevamente.
                        </div>
                    )}

                </form>

            </div>

        </section>
    );
}

export default Contacto;
