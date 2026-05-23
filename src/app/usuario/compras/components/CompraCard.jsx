export default function CompraCard({ compra, cancelar }) {
    return (
        <div
            key={compra.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"
        >

            {/* Header compra */}
            <div className="border-b border-slate-800 px-8 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                <div>

                    <h2 className="text-3xl font-black text-white">
                        ID #{compra.id}
                    </h2>

                    <p className="text-slate-400 mt-2">
                        Realizada el {compra.creado}
                    </p>

                </div>

                <div className="flex flex-wrap gap-4">

                    <span
                        className={`px-4 py-2 rounded-full font-semibold ${!compra.estado ?
                            "bg-red-500/20 text-red-400"
                            : "bg-green-500/20 text-green-400"
                            }`}
                    >
                        {!compra.estado
                            ? "Cacelada"
                            : "Confirmada"}
                    </span>

                </div>

            </div>

            {/* Body */}
            <div className="p-8">

                {/* Dirección */}
                <div className="mb-10">

                    <h3 className="text-2xl font-bold text-white mb-4">
                        Dirección de envío
                    </h3>

                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">

                        <p className="text-slate-300">
                            {compra.direccionEnvio}
                        </p>

                        <p className="text-slate-500 mt-2 text-sm">
                            Fecha de entrega: {compra.fechaEntrega}
                        </p>

                    </div>

                </div>

                {/* Tabla */}
                <div className="overflow-x-auto rounded-2xl border border-slate-800">

                    <table className="w-full">

                        <thead className="bg-slate-950">

                            <tr className="text-left text-slate-400">

                                <th className="px-6 py-5">
                                    Juego
                                </th>

                                <th className="px-6 py-5">
                                    Cantidad
                                </th>

                                <th className="px-6 py-5">
                                    Precio
                                </th>

                                <th className="px-6 py-5">
                                    IVA
                                </th>

                                <th className="px-6 py-5">
                                    Total
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {compra.detalles.map((detalle, index) => (

                                <tr
                                    key={index}
                                    className="border-t border-slate-800 hover:bg-slate-800/40 transition"
                                >

                                    <td className="px-6 py-6 font-semibold text-white">
                                        {detalle.videojuego}
                                    </td>

                                    <td className="px-6 py-6 text-slate-300">
                                        {detalle.cantidad}
                                    </td>

                                    <td className="px-6 py-6 text-slate-300">
                                        ${detalle.precioVenta}
                                    </td>

                                    <td className="px-6 py-6 text-slate-300">
                                        ${detalle.iva}
                                    </td>

                                    <td className="px-6 py-6 text-cyan-400 font-bold text-lg">
                                        ${detalle.total}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

                {/* Footer */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mt-10">

                    <div className="text-slate-400">

                        <p>
                            Método de pago:
                            <span className="text-white font-semibold ml-2">
                                {compra.metodoPago}
                            </span>
                        </p>

                        <p>
                            A nombre de:
                            <span className="text-white font-semibold ml-2">
                                {compra.usuario}
                            </span>
                        </p>

                    </div>

                    {compra.estado ?

                        <button onClick={() => cancelar(compra.id)} className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-bold transition">
                            Cancelar
                        </button>
                        :
                        <></>
                    }

                </div>

            </div>

        </div>
    )
}