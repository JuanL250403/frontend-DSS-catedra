'use client'
import { useEffect, useState } from "react";
import CompraCard from "./components/CompraCard";
import { peticiones } from "../../../../api";
import { showToast } from "nextjs-toast-notify";
import CargandoModal from "@/app/components/CargandoModal";

export default function MisComprasPage() {

    const [compras, setCompras] = useState([])
    const [cargando, setCargando] = useState(true)

    const cargarCompras = async () => {
        setCargando(true)
        await peticiones.get('compras/usuario').then((r) => {
            setCompras(r.data.data)
        })
        setCargando(false)
    }

    const cancelar = async (id) => {
        await peticiones.delete(`/compras/${id}`).then(() => showToast.success("Compra cancelada"));
        await cargarCompras()
    }

    useEffect(() => {
        cargarCompras()
    }, [])

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">

            {/* Header */}
            <div className="mb-14">

                <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
                    Historial
                </span>

                <h1 className="text-5xl font-black text-white mt-6">
                    Mis Compras
                </h1>

                <p className="text-slate-400 text-lg mt-4">
                    Consulta todas las compras realizadas en Tu Chero Game.
                </p>

            </div>

            {cargando ?
                <CargandoModal />
                :
                <div className="space-y-10">

                    {compras.map((compra, index) => (

                        <CompraCard key={index} compra={compra} cancelar={cancelar} />

                    ))}

                </div>
            }

        </div>
    );
}