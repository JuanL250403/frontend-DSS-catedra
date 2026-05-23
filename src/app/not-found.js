"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-3xl text-center">
        {/* 404 */}
        <h1 className="text-[140px] md:text-[220px] font-black leading-none bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-4xl md:text-5xl font-black mt-4">
          Página no encontrada
        </h2>

        <p className="text-slate-400 text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
          La página que intentas visitar no existe, fue eliminada o la dirección
          ingresada es incorrecta.
        </p>

        {/* Imagen */}
        <div className="mt-12 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
            alt="404 gaming"
            className="w-full max-w-xl h-72 object-cover rounded-3xl border border-slate-800 shadow-2xl"
          />
        </div>

        {/* Botones */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
          <button
            onClick={() => router.push("/")}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl text-lg font-bold transition shadow-lg shadow-cyan-500/30"
          >
            Volver al inicio
          </button>

          <button
            onClick={() => router.back()}
            className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-2xl text-lg font-bold transition"
          >
            Regresar
          </button>
        </div>
      </div>
    </main>
  );
}
