'use client'
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { showToast } from "nextjs-toast-notify";
import { useRouter } from "next/navigation";
import { peticiones } from "../../../../api";

export default function Registro() {
    const router = useRouter()
    const { data: session } = useSession()
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registrarse = async () => {
        await peticiones.post('auth/registro', { name: nombre, email, password, rol_id: 2 }).then(() => {
            showToast.success('Usuario registrado')
        })
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">

                {/* Header */}
                <div className="text-center mb-10">

                    <h1 className="text-5xl font-black text-white">
                        Tu Chero Gamer
                    </h1>

                    <p className="text-slate-400 mt-4 text-lg">
                        Registrate
                    </p>

                </div>

                {/* Formulario */}
                <div className="space-y-7">

                    {/* Correo */}
                    <div>

                        <label className="block text-slate-300 mb-3 font-semibold">
                            Nombre
                        </label>

                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Juan"
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                        />

                    </div>

                    {/* Correo */}
                    <div>

                        <label className="block text-slate-300 mb-3 font-semibold">
                            Correo electrónico
                        </label>

                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="correo@ejemplo.com"
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                        />

                    </div>

                    {/* Contraseña */}
                    <div>

                        <label className="block text-slate-300 mb-3 font-semibold">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingrese su contraseña"
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                        />

                    </div>


                    {/* Botón */}
                    <div className="flex justify-between gap-4">
                        <button
                            onClick={() => registrarse()}
                            className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-2xl text-lg font-bold transition"
                        >
                            Registrarse
                        </button>
                        <button
                            onClick={() => router.back()}
                            className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 px-8 py-5 rounded-2xl text-lg font-bold transition"
                        >
                            Regresar
                        </button>
                    </div>

                </div>

                {/* Footer */}
                <div className="mt-10 text-center">

                    <p className="text-slate-400">

                        ¿Ya tienes una cuenta?

                        <button onClick={() => router.push("/auth/login")} className="text-cyan-400 hover:text-cyan-300 transition">
                            Inicia sesión
                        </button>

                    </p>

                </div>

            </div>

        </div>
    );
}