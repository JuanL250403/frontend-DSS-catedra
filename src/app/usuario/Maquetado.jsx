import { useCarrito } from "../context/CarritoProvider"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import Carrito from "./components/Carrito"
export default function Maquetado({ children }) {
    const { limpiarCarrito } = useCarrito()
    const router = useRouter()
    const { data: session } = useSession()

    return (
        <main className="bg-slate-950 text-white min-h-screen flex flex-col">

            <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">

                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                            <span className="font-black text-slate-950 text-lg">
                                TG
                            </span>
                        </div>

                        <div>
                            <h1 className="text-2xl font-black tracking-wide text-white">
                                Tu Chero Gamer
                            </h1>

                            <p className="text-xs text-slate-500">
                                Jugando a otro nivel
                            </p>
                        </div>

                    </div>

                    {/* Navegación */}
                    <nav className="hidden md:flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-2xl p-2">

                        <button
                            onClick={() => router.push('/usuario/inicio')}
                            className="px-5 py-2 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition"
                        >
                            Inicio
                        </button>

                        <button
                            onClick={() => router.push('/usuario/catalogo')}
                            className="px-5 py-2 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition"
                        >
                            Juegos
                        </button>

                        <button
                            onClick={() => router.push('/usuario/compras')}
                            className="px-5 py-2 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition"
                        >
                            Compras
                        </button>

                    </nav>

                    {/* Acciones */}
                    <div className="flex items-center gap-4">

                        <div className="hidden lg:flex flex-col text-right">
                            <span className="text-sm font-semibold text-white">
                                {session?.user.usuario}
                            </span>

                            <span className="text-xs text-slate-500">
                                Sesión activa
                            </span>
                        </div>

                        <div className="flex items-center gap-4">

                            <button onClick={() => {
                                signOut({ callbackUrl: '/' })
                                limpiarCarrito()
                            }} className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-semibold transition">
                                Salir
                            </button>

                            <Carrito />
                        </div>

                    </div>

                </div>

            </header>


            {/* Contenido */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-slate-800 mt-auto">

                <div className="max-w-7xl mx-auto px-6 py-12">

                    <div className="grid md:grid-cols-3 gap-10">

                        {/* Marca */}
                        <div>

                            <h2 className="text-3xl font-black text-cyan-400 mb-4">
                                Tu Chero Gamer
                            </h2>

                            <p className="text-slate-400 leading-relaxed">
                                Tu tienda gamer favorita para encontrar
                                videojuegos, ofertas y experiencias épicas.
                            </p>

                        </div>


                    </div>

                    {/* Bottom */}
                    <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                        <p className="text-slate-500 text-center">
                            © 2026 Tu Chero Gamer. Todos los derechos reservados.
                        </p>

                        <div className="flex gap-6 text-slate-500">

                            <a href="#" className="hover:text-cyan-400 transition">
                                Privacidad
                            </a>

                            <a href="#" className="hover:text-cyan-400 transition">
                                Términos
                            </a>

                        </div>

                    </div>

                </div>

            </footer>

        </main>
    )
}