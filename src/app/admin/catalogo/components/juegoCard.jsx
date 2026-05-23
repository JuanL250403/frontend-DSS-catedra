'use client'
import { useCarrito } from "@/app/context/CarritoProvider"

export default function JuegoCard({ juego, verDetalles, verEdicion, cambiarEstado }) {

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 group">

            <div className="p-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">

                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                            {juego.categoria.nombre}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${juego.vigente ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                            {juego.vigente ? "Vigente" : "No vigente"}
                        </span>
                    </div>

                    <span className="text-yellow-400">
                        ⭐ {juego.calificacion}
                    </span>

                </div>

                {/* Nombre */}
                <h2 className="text-2xl font-bold text-white mb-3">
                    {juego.nombre}
                </h2>

                {/* Descripción */}
                <p className="text-slate-400 mb-6 line-clamp-3">
                    {juego.descripcion}
                </p>

                {/* Precio */}
                <div className="mb-6">

                    <span className="text-3xl font-black text-cyan-400">
                        ${juego.precioUnitario}
                    </span>

                </div>

                {/* Botones */}
                <div className="grid grid-cols-3 gap-3">

                    {/* Detalles */}
                    <button
                        onClick={() => verDetalles(juego.id)}
                        className="bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-bold transition"
                    >
                        Detalles
                    </button>

                    {/* Editar */}
                    <button
                        onClick={() => verEdicion(juego.id)}
                        className="bg-yellow-500 hover:bg-yellow-600 py-3 rounded-xl font-bold transition"
                    >
                        Editar
                    </button>

                    {/* Eliminar */}
                    <button
                        onClick={() => cambiarEstado(juego.id)}
                        className={` py-3 rounded-xl font-bold transition ${juego.vigente ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
                    >
                        {juego.vigente ? "Desactivar" : "Activar"}
                    </button>

                </div>

            </div>

        </div>
    )
}