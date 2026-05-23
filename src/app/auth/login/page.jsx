'use client'
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { showToast } from "nextjs-toast-notify";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()
    const { data: session } = useSession()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const iniciarSesion = async () => {

        const res = await signIn('credentials', { email, password, redirect: false })

        if (res.status === 200) {
            if (session?.user.rol == "Administrador") {
                router.push('/admin/inicio')
            } else {
                router.push('/usuario/inicio')
            }
            showToast.success('Sesion inciada')

        } else if (res.status === 401) {
            showToast.error("Credenciales invalidas")
        }
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
                        Inicia sesión para continuar
                    </p>

                </div>

                {/* Formulario */}
                <div className="space-y-7">

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
                            onClick={() => iniciarSesion()}
                            className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-2xl text-lg font-bold transition"
                        >
                            Iniciar Sesión
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

                        ¿No tienes cuenta?

                        <button onClick={() => router.push("/auth/registro")} className="text-cyan-400 hover:text-cyan-300 transition">
                            Registrarse
                        </button>

                    </p>

                </div>

            </div>

        </div>
    );
}