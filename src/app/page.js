"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Texto */}
          <div>
            <span className="bg-cyan-500/20 border border-cyan-400/20 text-cyan-400 px-5 py-2 rounded-full text-sm font-semibold">
              Bienvenido a Tu Chero Gamer
            </span>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight mt-8">
              Tu tienda favorita de videojuegos
            </h1>

            <p className="text-slate-400 text-xl mt-8 leading-relaxed">
              Descubre videojuegos de acción, aventura, RPG, deportes y mucho
              más. Compra fácil, rápido y seguro desde cualquier lugar.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-10">
              <div>
                <h2 className="text-4xl font-black text-cyan-400">+500</h2>
                <p className="text-slate-400">Videojuegos</p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-cyan-400">+15K</h2>
                <p className="text-slate-400">Clientes</p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-cyan-400">24/7</h2>
                <p className="text-slate-400">Soporte</p>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-wrap gap-5 mt-12">
              <button
                onClick={() => router.push("/auth/login")}
                className="bg-cyan-500 hover:bg-cyan-600 px-8 py-5 rounded-2xl text-lg font-bold transition shadow-lg shadow-cyan-500/30"
              >
                Iniciar sesión
              </button>

              <button
                onClick={() => router.push("/auth/registro")}
                className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 px-8 py-5 rounded-2xl text-lg font-bold transition"
              >
                Regístrate
              </button>
            </div>
          </div>

          {/* Imagen principal */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
              alt="gaming"
              className="relative rounded-3xl h-[550px] w-full object-cover border border-slate-800 shadow-2xl"
            />

            {/* Card flotante */}
            <div className="absolute -bottom-8 -left-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl">
              <h3 className="text-3xl font-black text-cyan-400">4.9 ★</h3>
              <p className="text-slate-400">
                Valoración de nuestros clientes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-black">
              Categorías populares
            </h2>

            <p className="text-slate-400 mt-3">
              Encuentra tus géneros favoritos
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition">
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
              alt="accion"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">Acción</h3>
              <p className="text-slate-400 mt-3">
                Juegos llenos de adrenalina y combate intenso.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition">
            <img
              src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop"
              alt="rpg"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">RPG</h3>
              <p className="text-slate-400 mt-3">
                Vive historias épicas y mejora tus personajes.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition">
            <img
              src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1200&auto=format&fit=crop"
              alt="deportes"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">Deportes</h3>
              <p className="text-slate-400 mt-3">
                Compite en fútbol, carreras y mucho más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-2xl font-black">
              Tu Chero Gamer
            </h3>

            <p className="text-slate-500 mt-2">
              La mejor experiencia gamer.
            </p>
          </div>

          <div className="flex gap-6 text-slate-400">
            <button className="hover:text-cyan-400 transition">
              Facebook
            </button>

            <button className="hover:text-cyan-400 transition">
              Instagram
            </button>

            <button className="hover:text-cyan-400 transition">
              TikTok
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}