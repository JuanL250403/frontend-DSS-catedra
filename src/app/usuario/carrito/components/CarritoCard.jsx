

export default function CarritoCard({juego, sumar, restar, eliminar}) {

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">

            <div>

                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    {juego?.categoria.nombre}
                </span>

                <h2 className="text-3xl font-bold text-white mt-4">
                    {juego?.nombre}
                </h2>

            </div>

            <div className="flex items-center gap-8">

                {/* Cantidad */}
                <div className="flex items-center bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">

                    <button onClick={() => restar(juego?.videojuego_id)} className="px-4 py-3 hover:bg-slate-800 transition">
                        -
                    </button>

                    <span className="px-5 font-bold">
                        {juego.cantidad}
                    </span>

                    <button onClick={() => sumar(juego?.videojuego_id)} className="px-4 py-3 hover:bg-slate-800 transition">
                        +
                    </button>

                </div>

                {/* Precio */}
                <span className="text-3xl font-black text-cyan-400">
                    ${(juego.cantidad * juego.precio).toFixed(2)}
                </span>

                {/* Eliminar */}
                <button onClick={() => eliminar(juego?.videojuego_id)} className="text-red-400 hover:text-red-300 transition">
                    Eliminar
                </button>

            </div>

        </div>
    )
}