import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6">
            
            <div className="max-w-xl text-center">

                <p className="text-7xl font-bold text-blue-600">
                    404
                </p>

                <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                    Página no encontrada
                </h1>

                <p className="mt-4 leading-7 text-slate-600">
                    La página que estás buscando no existe o puede que
                    haya sido movida.
                </p>

                <Link
                    to="/"
                    className="
                        mt-8
                        inline-flex
                        items-center
                        rounded-lg
                        bg-blue-600
                        px-6
                        py-3
                        font-semibold
                        text-white
                        transition
                        duration-300
                        hover:-translate-y-1
                        hover:bg-blue-700
                    "
                >
                    Volver al inicio
                </Link>

            </div>

        </section>
    );
}

export default NotFound;