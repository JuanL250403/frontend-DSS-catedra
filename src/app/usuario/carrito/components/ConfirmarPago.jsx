export default function ConfirmarPago({ setPagar, subTotal, impuestos, total, metodos, metodoPago, setMetodoPago, direccion, setDireccion, realizarCompra }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6">

            <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-slate-800">

                    <div>

                        <h2 className="text-3xl font-black text-white">
                            Confirmar Compra
                        </h2>

                        <p className="text-slate-400 mt-2">
                            Verifica los datos antes de realizar el pago.
                        </p>

                    </div>
                </div>

                {/* Body */}
                <div className="p-8 space-y-6">
                    <div>

                        <label className="block text-slate-300 mb-3 font-semibold">
                            Método de pago
                        </label>

                        <select
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition"
                            value={metodoPago}
                            onChange={(e) => (setMetodoPago(Number(e.target.value)))}
                        >
                            <option value="">
                                Seleccione un método de pago
                            </option>
                            {metodos.map((metodo, index) => (
                                <option key={index} value={metodo.id}>
                                    {metodo.nombre}
                                </option>
                            ))}
                        </select>

                        <div>

                            <label className="block text-slate-300 mb-3 font-semibold">
                                Dirección de envío
                            </label>

                            <textarea
                                rows={4}
                                placeholder="Ingrese la dirección completa de envío..."
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white outline-none resize-none focus:border-cyan-400 transition"
                            />

                        </div>

                    </div>
                    {/* Totales */}
                    <div className="border-t border-slate-800 pt-6 space-y-4">

                        <div className="flex items-center justify-between text-slate-400">

                            <span>Subtotal</span>

                            <span>${subTotal.toFixed(2)}</span>

                        </div>

                        <div className="flex items-center justify-between text-slate-400">

                            <span>Impuestos</span>

                            <span>${impuestos.toFixed(2)}</span>

                        </div>

                        <div className="flex items-center justify-between pt-4">

                            <span className="text-2xl font-black text-white">
                                Total
                            </span>

                            <span className="text-4xl font-black text-cyan-400">
                                ${total.toFixed(2)}
                            </span>

                        </div>

                    </div>

                </div>

                {/* Footer */}
                <div className="flex flex-col md:flex-row gap-4 px-8 py-6 border-t border-slate-800">

                    <button onClick={() => setPagar(false)} className="flex-1 border border-slate-700 hover:border-red-400 hover:text-red-400 py-4 rounded-2xl font-bold transition">
                        Cancelar
                    </button>

                    <button onClick={() => realizarCompra()} className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-4 rounded-2xl font-bold text-lg transition">
                        Confirmar Pago
                    </button>

                </div>

            </div>

        </div>
    );
}