'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import JuegoCard from "./components/juegoCard";
import { useEffect } from "react";
import { peticiones } from "../../../../api";
import CargandoModal from "@/app/components/CargandoModal";

export default function Catalogo() {
    const [juegos, setJuegos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [cargando, setCargando] = useState(true)

    const router = useRouter()

    const [busqueda, setBusqueda] = useState('')
    const [cat, setCat] = useState(0)

    useEffect(() => {
        cargarDatos();
    }, []);

    useEffect(() => {
        buscarCategoria()
    }, [cat])

    const cargarDatos = async () => {
        await cargarJuegos()
        await peticiones.get('categorias').then((r) => setCategorias(r.data.data))
    };

        const cargarJuegos = async () => {
            setCargando(true)
            await peticiones.get("videojuegos/activos").then((r) => {
                setJuegos(r.data.data)
            });
            setCargando(false)
        }

    const limpiarFiltros = async () => {
        if (cat === 0) {
            return
        }
        setCat(0)
        await cargarJuegos()
    }

    const limpiarBusqueda = async () => {
        if (!busqueda) {
            return
        }
        setCat(0)
        setBusqueda('')
        await cargarJuegos()
    }

    const buscarCategoria = async () => {
        if (cat === 0) {
            return
        }

        setCargando(true)
        await peticiones.get('videojuegos/activos', {
            params: {
                categoria: cat
            }
        }).then((r) => {
            setJuegos(r.data.data)
        })
        setCargando(false)
    }
    const buscar = async () => {
        let parametros = {}

        if (busqueda == '') {
            return
        }
        else if (busqueda != '' && cat !== 0) {
            parametros = {
                nombre: busqueda,
                categoria: cat
            }
        } else if (busqueda != '') {
            parametros = {
                nombre: busqueda
            }
        } else {
            parametros = {
                nombre: busqueda
            }
        }

        setCargando(true)
        await peticiones.get('videojuegos/activos', {
            params: parametros
        }).then((r) => {
            setJuegos(r.data.data)
        })
        setCargando(false)
    }

    const verDetalles = (id) => {
        router.push(`/usuario/catalogo/detalle/${id}`)
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">

                <div>
                    <h1 className="text-5xl font-black text-white">
                        Catálogo de Juegos
                    </h1>

                    <p className="text-slate-400 mt-3 text-lg">
                        Descubre los mejores videojuegos para todas las plataformas.
                    </p>
                </div>

                {/* Buscador */}
                <div className="flex gap-4">

                    <div className="flex items-center gap-2">

                        <input
                            type="text"
                            placeholder="Buscar juego..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            className="bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-400 w-72 transition"
                        />

                        <button
                            onClick={() => limpiarBusqueda()}
                            className="w-12 h-12 flex items-center justify-center bg-slate-900 border border-slate-800 hover:border-red-400 hover:bg-red-500/20 rounded-2xl text-red-400 hover:text-red-300 text-xl font-bold transition"
                        >
                            ×
                        </button>

                    </div>

                    <button onClick={() => buscar()} className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-semibold transition">
                        Buscar
                    </button>

                </div>

            </div>

            {/* Categorías */}
            <div className="flex flex-wrap gap-4 mb-12">

                <button onClick={() => limpiarFiltros()} className={`bg-cyan-500 text-white px-5 py-2 rounded-full font-semibold ${cat != 0 ? "bg-slate-900" : "bg-cyan-500"}`}>
                    Todos
                </button>

                {categorias.map((categoria, index) => (
                    <button onClick={() => setCat(categoria.id)} key={index} className={`border border-slate-800 hover:border-cyan-400 px-5 py-2 rounded-full transition ${categoria.id != cat ? "bg-slate-900" : "bg-cyan-500"}`}>
                        {categoria.nombre}
                    </button>
                ))}

            </div>


            {
                cargando ?
                    <CargandoModal />
                    :
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {juegos.map((juego, index) => (
                            <JuegoCard key={index} juego={juego} verDetalles={verDetalles} />
                        ))}
                    </div>
            }

        </div>
    );
}