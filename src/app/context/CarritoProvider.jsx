'use client'
import { createContext, useContext, useEffect, useState } from "react";

const CarritoContext = createContext()

export default function CarritoProvider({ children }) {
    const [compra, setCompra] = useState([])

    const agregarProducto = (juego) => {
        const nuevaCompra = {
            videojuego_id: juego.id,
            nombre: juego.nombre,
            precio: juego.precioUnitario,
            cantidad: 1,
            categoria: juego.categoria,
            cantidadProducto: juego.cantidad
        }
        setCompra([...compra, nuevaCompra])

    }

    const sumarCantidad = (id) => {
        const juegosActu = compra.map((c) => {
            if (c.videojuego_id == id && c.cantidad < c.cantidadProducto) {
                c.cantidad += 1
            }

            return c
        })
        setCompra(juegosActu)
    }

    const restarCantidad = (id) => {
        const juegosActu = compra.map((c) => {
            if (c.videojuego_id == id && c.cantidad > 1) {
                c.cantidad -= 1
            }
            return c
        })
        setCompra(juegosActu)
    }

    const eliminar = (id) => {
        const juegosActu = compra.filter(c => c.videojuego_id != id)
        localStorage.setItem('compra', JSON.stringify(juegosActu))
        setCompra(juegosActu)
    }

    const limpiarCarrito = () => {
        localStorage.removeItem('compra')
        setCompra([])
    }

    useEffect(() => {
        if (compra.length != 0) {
            localStorage.setItem('compra', JSON.stringify(compra))
        }
    }, [compra])

    useEffect(() => {
        const datos = localStorage.getItem('compra')
        setCompra(JSON.parse(datos) ?? [])
    }, [])
    return (
        <CarritoContext.Provider value={{ compra, agregarProducto, sumarCantidad, restarCantidad, eliminar, limpiarCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}

export const useCarrito = () => useContext(CarritoContext)