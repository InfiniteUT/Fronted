import BorrarUsuario from "@/components/borrar";
import EditarUsuario from "@/components/editar"; // Importa el componente de editar
import axios from "axios";
import Link from "next/link";

async function getUsuarios() {
    const url = "http://localhost:3000/usuarios";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function Universidades() {
    const usuarios = await getUsuarios();

    return (
        <>
            <h1>Usuarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Editar/Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.usuario}</td>
                            <td>
                                <EditarUsuario 
                                    id={usuario.id} 
                                    nombreActual={usuario.nombre} 
                                    usuarioActual={usuario.usuario} 
                                />
                                <BorrarUsuario id={usuario.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
