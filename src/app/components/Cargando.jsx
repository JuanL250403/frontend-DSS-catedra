export default function Cargando() {
    return (
        <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50">

            {/* Spinner */}
            <div className="w-20 h-20 border-4 border-slate-700 border-t-cyan-400 rounded-full animate-spin"></div>

            <p className="text-slate-400 mt-3 text-lg">
                Cargando contenido...
            </p>

        </div>
    );
}