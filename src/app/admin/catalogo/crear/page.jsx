'use client'

import { useEffect, useState } from "react";
import { peticiones } from "../../../../../api";
import { showToast } from "nextjs-toast-notify";
import { useRouter } from "next/navigation";

export default function CrearProducto() {
    const router = useRouter()

    const [categorias, setCategorias] = useState([])
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState(0.00)
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState(0)
    const [calificacion, setCalificacion] = useState(0.0)
    const [requisitos, setRequisitos] = useState('')

    const cargarCategorias = async () => {
        await peticiones.get('categorias').then((r) => {
            setCategorias(r.data.data)
        })
    }

    const crearProducto = async () => {
        const data = {
            nombre,
            descripcion,
            precio_unitario: precio,
            cantidad,
            categoria_id: categoria,
            calificacion,
            requisitos_de_sistema: requisitos
        }

        await peticiones.post('videojuegos', data).then(() => showToast.success('Producto creado'))
    }

    useEffect(() => {
        cargarCategorias()
    }, [])

    return (
        <div className="max-w-5xl mx-auto px-6 py-16">

            {/* Header */}
            <div className="mb-12">

                <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
                    Administración
                </span>

                <h1 className="text-5xl font-black text-white mt-6">
                    Crear Producto
                </h1>

                <p className="text-slate-400 text-lg mt-4">
                    Agrega un nuevo videojuego al catálogo de Tu Chero Gamer.
                </p>

            </div>

            {/* Formulario */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

                <div className="space-y-8">

                    {/* Nombre */}
                    <div>

                        <label className="block text-slate-300 mb-3 font-semibold">
                            Nombre del videojuego
                        </label>

                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ingrese el nombre del videojuego"
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                        />

                    </div>

                    {/* Descripción */}
                    <div>

                        <label className="block text-slate-300 mb-3 font-semibold">
                            Descripción
                        </label>

                        <textarea
                            rows={5}
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            placeholder="Ingrese una descripción..."
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none resize-none focus:border-cyan-400 transition"
                        />

                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Precio */}
                        <div>

                            <label className="block text-slate-300 mb-3 font-semibold">
                                Precio
                            </label>

                            <input
                                type="number"
                                placeholder="$0.00"
                                step="0.25"
                                min="1.0"
                                value={precio}
                                onChange={(e) => setPrecio(Number(e.target.value))}
                                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                            />

                        </div>

                        {/* Cantidad */}
                        <div>

                            <label className="block text-slate-300 mb-3 font-semibold">
                                Stock disponible
                            </label>

                            <input
                                type="number"
                                placeholder="0"
                                min="0"
                                value={cantidad}
                                onChange={(e) => setCantidad(Number(e.target.value))}
                                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                            />

                        </div>

                    </div>

                    {/* Categoría y calificación */}
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Categoría */}
                        <div>

                            <label className="block text-slate-300 mb-3 font-semibold">
                                Categoría
                            </label>

                            <select
                                value={categoria}
                                onChange={(e) => setCategoria(Number(e.target.value))}
                                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                            >
                                <option value="">
                                    Seleccione una categoría
                                </option>

                                {categorias.map((categoria, index) => (
                                    <option key={index} value={categoria.id}>
                                        {categoria.nombre}
                                    </option>
                                ))}
                            </select>

                        </div>

                        {/* Calificación */}
                        <div>

                            <label className="block text-slate-300 mb-3 font-semibold">
                                Calificación
                            </label>

                            <input
                                value={calificacion}
                                onChange={(e) => setCalificacion(Number(e.target.value))}
                                type="number"
                                step="0.1"
                                min="0"
                                max="5.0"
                                lang="en"
                                placeholder="0.0"
                                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                            />

                        </div>

                    </div>

                    {/* Requisitos */}
                    <div>

                        <label className="block text-slate-300 mb-3 font-semibold">
                            Requisitos del sistema
                        </label>

                        <textarea
                            rows={4}
                            value={requisitos}
                            onChange={(e) => setRequisitos(e.target.value)}
                            placeholder="Ej: 16GB RAM, RTX 2060, Intel i7..."
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none resize-none focus:border-cyan-400 transition"
                        />

                    </div>

                    {/* Botones */}
                    <div className="flex flex-col md:flex-row gap-5 pt-6">

                        <button
                            onClick={() => crearProducto()}
                            type="submit"
                            className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-5 rounded-2xl text-lg font-bold transition"
                        >
                            Crear Producto
                        </button>

                        <button
                            onClick={() => router.push("/admin/catalogo")}
                            type="button"
                            className="flex-1 border border-slate-700 hover:border-red-400 hover:text-red-400 py-5 rounded-2xl text-lg font-bold transition"
                        >
                            Cancelar
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}