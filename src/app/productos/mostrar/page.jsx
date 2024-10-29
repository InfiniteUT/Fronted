import BorrarProducto from "@/components/borrarProducto";
import EditarUsuario from "@/components/editarProducto"; // Importa el componente de editar
import axios from "axios";
import Link from "next/link";

async function getProductos() {
    const url = "http://localhost:3000/productos";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function Universidades() {
    const productos = await getProductos();

    return (
        <>
            <h1>Productos</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Proveedor</th>
                        <th>Editar/Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.proveedor}</td>
                            <td>
                                <EditarUsuario 
                                    id={producto.id} 
                                    nombreActual={producto.nombre} 
                                    proveedorActual={producto.proveedor} 
                                />
                                <BorrarProducto id={producto.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
