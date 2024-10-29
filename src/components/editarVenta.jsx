"use client";
import { useState } from "react";
import axios from "axios";

export default function EditarVenta({ id, idUsuarioActual, idProductoActual, fechaActual, horaActual }) {
    const [idUsuario, setIdUsuario] = useState(idUsuarioActual);
    const [idProducto, setIdProducto] = useState(idProductoActual);
    const [fecha, setFecha] = useState(fechaActual);
    const [hora, setHora] = useState(horaActual);

    const handleEdit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:3000/ventas/editarVenta/"+id;
        const datos = { idUsuario, idProducto, fecha, hora };
        
        try {
            await axios.put(url, datos);
            alert("Venta actualizado exitosamente");
            location.reload(); // Recarga la página después de la actualización
        } catch (error) {
            console.error("Error actualizando la venta:", error);
        }
    };

    return (
        <form onSubmit={handleEdit}>
            <input 
                type="text" 
                value={idUsuario} 
                onChange={(e) => setIdUsuario(e.target.value)} 
                placeholder="IdUsuario" 
            />
            <input 
                type="text" 
                value={idProducto} 
                onChange={(e) => setIdProducto(e.target.value)} 
                placeholder="IdProducto" 
            />
            <input 
                type="text" 
                value={fecha} 
                onChange={(e) => setFecha(e.target.value)} 
                placeholder="Fecha" 
            />
            <input 
                type="text" 
                value={hora} 
                onChange={(e) => setHora(e.target.value)} 
                placeholder="Hora" 
            />
            <button type="submit">Guardar cambios</button>
        </form>
    );
}
