'use client'
import { useCarrito } from "@/app/context/CarritoProvider"

export default function JuegoCard({ juego, verDetalles }) {

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 group">
            <div className="p-6">

                <div className="flex items-center justify-between mb-4">

                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {juego.categoria.nombre}
                    </span>

                    <span className="text-yellow-400">
                        ⭐ {juego.calificacion}
                    </span>

                </div>

                <h2 className="text-2xl font-bold text-white mb-3">
                    {juego.nombre}
                </h2>

                <p className="text-slate-400 mb-6">
                    {juego.descripcion}
                </p>

                <div className="flex items-center justify-between">

                    <span className="text-3xl font-black text-cyan-400">
                        ${juego.precioUnitario}
                    </span>

                    <button onClick={() => verDetalles(juego.id)} className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-bold transition">
                        Detalles
                    </button>

                </div>

            </div>

        </div>
    )
}