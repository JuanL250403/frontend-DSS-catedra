'use client'

import { useCarrito } from "@/app/context/CarritoProvider";
import CarritoCard from "./components/CarritoCard";
import ConfirmarPago from "./components/ConfirmarPago";
import { useEffect, useState } from "react";
import { peticiones } from "../../../../api";
import { showToast } from "nextjs-toast-notify";
import { useRouter } from "next/navigation";

export default function CarritoLista() {
    const router = useRouter()
    const { compra, sumarCantidad, restarCantidad, eliminar, limpiarCarrito } = useCarrito()
    const [pagar, setPagar] = useState(false)
    const [subTotal, setSubTotal] = useState(0)
    const [impuestos, setImpuestos] = useState(0)
    const [total, setTotal] = useState(0)
    const [metodos, setMetodos] = useState([])
    const [metodoPago, setMetodoPago] = useState(1)
    const [direccion, setDireccion] = useState("")

    const actualizarDatos = () => {
        const sub = compra.reduce((ac, cu) => ac + (cu.cantidad * cu.precio), 0)
        const imp = sub * 0.13
        const tot = sub + imp
        setSubTotal(sub)
        setImpuestos(imp)
        setTotal(tot)
    }

    const cargarDatos = async () => {
        await peticiones.get('metodos').then((res) => setMetodos(res.data.data))
    }

    const realizarCompra = async () => {
        const d = compra.map((c) => {
            return {
                videojuego_id: c.videojuego_id,
                cantidad: c.cantidad
            }
        })

        const datos = {
            compra: {
                metodo_pago_id: metodoPago,
                direccion_envio: direccion
            },
            detalles: d
        }
        await peticiones.post('compras', datos).then(() => {
            limpiarCarrito()
            setPagar(false)
            showToast.success("Compra realizada")
        })
        console.log(datos)
    }

    useEffect(() => {
        actualizarDatos()
    }, [compra])

    useEffect(() => {
        cargarDatos()
    }, [])

    if (pagar) {
        return (
            <ConfirmarPago
                setPagar={setPagar}
                subTotal={subTotal}
                impuestos={impuestos}
                total={total}
                metodos={metodos}
                metodoPago={metodoPago}
                setMetodoPago={setMetodoPago}
                direccion={direccion}
                setDireccion={setDireccion}
                realizarCompra={realizarCompra}
            />
        )
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">

            {/* Header */}
            <div className="mb-12">

                <h1 className="text-5xl font-black text-white mb-4">
                    Carrito de Compras
                </h1>

                <p className="text-slate-400 text-lg">
                    Revisa los videojuegos que deseas comprar.
                </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-10">

                {/* Lista de productos */}
                <div className="lg:col-span-2 space-y-6">

                    {
                        compra.map((juego, index) => (
                            <CarritoCard key={index} juego={juego} sumar={sumarCantidad} restar={restarCantidad} eliminar={eliminar} />
                        ))
                    }
                </div>

                {/* Resumen */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 h-fit sticky top-28">

                    <h2 className="text-3xl font-black mb-8">
                        Resumen
                    </h2>

                    <div className="space-y-5">

                        <div className="flex items-center justify-between text-slate-400">
                            <span>Productos</span>
                            <span>{compra.length}</span>
                        </div>

                        <div className="flex items-center justify-between text-slate-400">
                            <span>Subtotal</span>
                            <span>${subTotal.toFixed(2)}</span>
                        </div>

                        <div className="flex items-center justify-between text-slate-400">
                            <span>Impuestos</span>
                            <span>${impuestos.toFixed(2)}</span>
                        </div>

                        <div className="border-t border-slate-800 pt-5 flex items-center justify-between">

                            <span className="text-2xl font-bold">
                                Total
                            </span>

                            <span className="text-4xl font-black text-cyan-400">
                                ${total.toFixed(2)}
                            </span>

                        </div>

                    </div>

                    {compra.length !== 0 ?

                        <button onClick={() => setPagar(true)} className="w-full mt-10 bg-cyan-500 hover:bg-cyan-600 py-4 rounded-2xl text-lg font-bold transition">
                            Proceder al pago
                        </button>
                        :
                        <></>
                    }

                    <button
                    onClick={() => router.push('/usuario/catalogo')}
                    className="w-full mt-4 border border-slate-700 hover:border-cyan-400 py-4 rounded-2xl text-lg font-bold transition">
                        Seguir comprando
                    </button>

                </div>

            </div>

        </div>
    );
}