"use client"
import Link from "next/link";
import axios from "axios";

export default function CancelarVenta({ id }) {
    async function borrar(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del enlace
        const url = "http://localhost:3000/ventas/cancelarVenta/" + id;
        try {
            const respuesta = await axios.put(url); // Cambia a axios.put
            if (respuesta.data) {
                alert("La compra ha sido cancelada."); // Muestra la alerta
                window.location.replace("/ventas/mostrar"); // Redirige a la página de ventas
            }
        } catch (error) {
            console.error("Error al cancelar la venta:", error);
            alert("Hubo un error al cancelar la compra. Intenta nuevamente."); // Mensaje de error
        }
    }

    return (
        <Link href="#" onClick={borrar}>Cancelar</Link> // Cambia el href a "#"
    );
}
