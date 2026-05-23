'use client'
import { useRouter } from "next/navigation"

export default function Inicio() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Header */}
            <section className="border-b border-slate-800 bg-slate-900">

                <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                    <div>

                        <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
                            Panel Administrativo
                        </span>

                        <h1 className="text-5xl font-black mt-6">
                            Bienvenido Administrador
                        </h1>

                        <p className="text-slate-400 text-lg mt-4">
                            Gestiona videojuegos, ventas, usuarios y estadísticas
                            de Tu Chero Game.
                        </p>

                    </div>

                    <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl text-lg font-bold transition">
                        Agregar Videojuego
                    </button>

                </div>

            </section>

            {/* Estadísticas */}
            <section className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">

                    {/* Botón */}
                    <button onClick={() => router.push('/admin/catalogo')} className="bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 rounded-3xl p-8 transition duration-300 text-left group">

                        <div className="flex items-center justify-between mb-6">

                        </div>

                        <h2 className="text-3xl font-black text-white">
                            Productos
                        </h2>

                        <p className="text-slate-400 mt-4">
                            Consulta compras, pagos y pedidos realizados.
                        </p>

                    </button>


                    {/* Botón */}
                    <button onClick={() => router.push('/admin/ventas')} className="bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 rounded-3xl p-8 transition duration-300 text-left group">

                        <div className="flex items-center justify-between mb-6">

                        </div>

                        <h2 className="text-3xl font-black text-white">
                            Ventas
                        </h2>

                        <p className="text-slate-400 mt-4">
                            Controla stock y disponibilidad de productos.
                        </p>

                    </button>

                </div>

            </section>
        </div>
    )
}