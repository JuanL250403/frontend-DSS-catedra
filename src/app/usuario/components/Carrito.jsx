'use client'
import { useCarrito } from "@/app/context/CarritoProvider"
import { useRouter } from "next/navigation"

export default function Carrito() {
    const { compra } = useCarrito()
    const router = useRouter()
    return (
        <button
        onClick={() => router.push('/usuario/carrito')}
            className="relative bg-slate-900 border border-slate-800 hover:border-cyan-400 p-3 rounded-2xl transition group"
        >

            {/* Icono */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-7 h-7 text-white group-hover:text-cyan-400 transition"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.836L5.76 7.5m0 0L7.5 14.25m-1.74-6.75h13.114c.967 0 1.692.89 1.497 1.836l-1.26 6.75a1.5 1.5 0 0 1-1.474 1.164H8.25a1.5 1.5 0 0 1-1.474-1.164L5.76 7.5Zm3.99 13.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm9 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
            </svg>

            {/* Cantidad */}
            <span
                className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-lg"
            >
                {compra?.length}
            </span>

        </button>
    )
}