'use client'
import { useSession } from "next-auth/react";
import CarritoProvider, { useCarrito } from "../context/CarritoProvider";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Maquetado from "./Maquetado";

export default function Layout({ children }) {

    return (
        <CarritoProvider>
            <Maquetado>
                {children}
            </Maquetado>
        </CarritoProvider>
    );
}