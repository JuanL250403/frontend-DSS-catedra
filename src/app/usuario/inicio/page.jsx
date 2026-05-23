'use client'
import { useRouter } from "next/navigation"

export default function Inicio() {
    const router = useRouter()


    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
                            La mejor tienda gamer
                        </span>

                        <h2 className="text-5xl lg:text-7xl font-black leading-tight mt-6">
                            Encuentra tus videojuegos favoritos
                        </h2>

                        <p className="text-slate-400 text-lg mt-6 leading-relaxed">
                            Compra juegos de acción, aventura, deportes, RPG y mucho más.
                            Disfruta de precios increíbles y las mejores ofertas gamer.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <button onClick={() => router.push('/usuario/catalogo')} className="bg-cyan-500 hover:bg-cyan-600 px-7 py-4 rounded-2xl font-bold text-lg transition shadow-lg shadow-cyan-500/20">
                                Explorar catálogo
                            </button>

                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

                        <img
                            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop"
                            alt="Gaming"
                            className="relative rounded-3xl shadow-2xl border border-slate-800"
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}