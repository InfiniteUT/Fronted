"use client";
import { useState } from "react";
import axios from "axios";

export default function EditarProducto({ id, nombreActual, proveedorActual }) {
    const [nombre, setNombre] = useState(nombreActual);
    const [proveedor, setProveedor] = useState(proveedorActual);

    const handleEdit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:3000/productos/editarProducto/"+id;
        const datos = { nombre, proveedor };
        
        try {
            await axios.put(url, datos);
            alert("Producto actualizado exitosamente");
            location.reload(); // Recarga la página después de la actualización
        } catch (error) {
            console.error("Error actualizando el usuario:", error);
        }
    };

    return (
        <form onSubmit={handleEdit}>
            <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                placeholder="Nombre" 
            />
            <input 
                type="text" 
                value={proveedor} 
                onChange={(e) => setProveedor(e.target.value)} 
                placeholder="Proveedor" 
            />
            <button type="submit">Guardar cambios</button>
        </form>
    );
}
