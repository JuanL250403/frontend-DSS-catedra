'use client'

import { useCarrito } from "@/app/context/CarritoProvider";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { peticiones } from "../../../../../../api";
import Cargando from "@/app/components/Cargando";

export default function DetalleJuego() {
    const router = useRouter()
    const params = useParams();
    const { id } = params

    const [cargando, setCargando] = useState(true)
    const [juego, setJuego] = useState()
    const [existente, setExistente] = useState()

    const cargarProducto = async () => {
        setCargando(true)
        await peticiones.get(`videojuegos/${id}`).then((r) => {
            const j = r.data.data
            setJuego(j)
        })
        setCargando(false)

    }

    const juegoExistente = () => {
        const juegos = compra.filter((c) => c.videojuego_id == juego.id)
        console.log(juegos)
        return juegos.length === 1
    }

    useEffect(() => {
        cargarProducto()
    }, [])

    if (cargando) {
        return (
            <Cargando />
        )
    }


    return (
        <div className="max-w-7xl mx-auto px-6 py-16">

            <div className="grid lg:grid-cols-2 gap-14">

                {/* Información */}
                <div>

                    {/* Categoría */}
                    <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
                        {juego.categoria.nombre}
                    </span>

                    {/* Nombre */}
                    <h1 className="text-6xl font-black text-white mt-6">
                        {juego.nombre}
                    </h1>

                    {/* Calificación */}
                    <div className="flex items-center gap-3 mt-6">

                        <span className="text-yellow-400 text-2xl">
                            ⭐
                        </span>

                        <span className="text-2xl font-bold text-white">
                            {juego.calificacion}
                        </span>

                    </div>

                    {/* Descripción */}
                    <div className="mt-10">

                        <h2 className="text-3xl font-bold text-white mb-4">
                            Descripción
                        </h2>

                        <p className="text-slate-400 leading-relaxed text-lg">
                            {juego.descripcion}
                        </p>

                    </div>
                    <div className="mt-10">

                        <h2 className="text-3xl font-bold text-white mb-4">
                            Detalles
                        </h2>

                        <p className="text-slate-400 leading-relaxed text-lg">
                            Agregado: {juego.creado}
                        </p>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            Modificado: {juego.editado}
                        </p>

                    </div>

                    {/* Requisitos */}
                    <div className="mt-10">

                        <h2 className="text-3xl font-bold text-white mb-4">
                            Requisitos del sistema
                        </h2>

                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

                            <p className="space-y-4 text-slate-300">
                                {juego.requisitosSistema}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Compra */}
                <div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 sticky top-28">

                        {/* Estado */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex gap-4">
                                {juego.cantidad !== 0?

                                    <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-semibold">
                                        Stock disponible
                                    </span>
                                    :
                                    <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full font-semibold">
                                        Stock agotado
                                    </span>
                                }
                                {juego.vigente ?

                                    <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-semibold">
                                        Vigente
                                    </span>
                                    :
                                    <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full font-semibold">
                                        No vigente
                                    </span>
                                }
                            </div>


                            <span className="text-slate-400">
                                Stock: {juego.cantidad}
                            </span>

                        </div>

                        {/* Precio */}
                        <div className="mb-10">

                            <p className="text-slate-400 mb-2">
                                Precio
                            </p>

                            <h2 className="text-6xl font-black text-cyan-400">
                                ${juego.precioUnitario}
                            </h2>

                        </div>

                        {/* Botones */}
                        <div className="space-y-4">

                        </div>



                    </div>

                </div>

            </div>

        </div>
    );
}