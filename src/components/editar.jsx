"use client";
import { useState } from "react";
import axios from "axios";

export default function EditarUsuario({ id, nombreActual, usuarioActual }) {
    const [nombre, setNombre] = useState(nombreActual);
    const [usuario, setUsuario] = useState(usuarioActual);

    const handleEdit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:3000/usuarios/editarUsuario/"+id;
        const datos = { nombre, usuario };
        
        try {
            await axios.put(url, datos);
            alert("Usuario actualizado exitosamente");
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
                value={usuario} 
                onChange={(e) => setUsuario(e.target.value)} 
                placeholder="Usuario" 
            />
            <button type="submit">Guardar cambios</button>
        </form>
    );
}
