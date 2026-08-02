import icon from '../assets/icon.png';

function Loading() {
    return (
        <div className="
            flex 
            min-h-screen 
            items-center 
            justify-center 
            bg-gradient-to-br 
            from-blue-600 
            via-blue-500 
            to-blue-300
        ">

            <div className="flex flex-col items-center">

                {/* Logo animado */}
                <div className="
                    relative 
                    flex 
                    h-32 
                    w-32 
                    items-center 
                    justify-center
                ">

                    {/* Círculo de carga */}
                    <div className="
                        absolute
                        h-full
                        w-full
                        animate-spin
                        rounded-full
                        border-4
                        border-white/30
                        border-t-amber-300
                    "/>


                    {/* Fondo del logo */}
                    <div className="
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        shadow-xl
                        animate-pulse
                    ">

                        <img
                            src={icon}
                            alt="Logo empresa"
                            className="
                                h-16
                                w-auto
                                object-contain
                            "
                        />

                    </div>

                </div>


                {/* Mensaje de carga */}
                <div className="
                    mt-8
                    text-center
                ">

                    <h2 className="
                        text-xl
                        font-semibold
                        text-white
                    ">
                        Cargando
                    </h2>


                    <p className="
                        mt-2
                        text-sm
                        text-blue-100
                    ">
                        Preparando tu experiencia...
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Loading;