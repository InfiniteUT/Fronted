import CancelarVenta from "@/components/cancelarVenta";
import EditarVenta from "@/components/editarVenta"; // Importa el componente de editar
import axios from "axios";
import Link from "next/link";

async function getVentas() {
    const url = "http://localhost:3000/ventas";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function Universidades() {
    const ventas = await getVentas();

    return (
        <>
            <h1>Ventas</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>IDUsuario</th>
                        <th>IDProducto</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Editar/Cancelar</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{venta.idUsuario}</td>
                            <td>{venta.idProducto}</td>
                            <td>{venta.fecha}</td>
                            <td>{venta.hora}</td>
                            <td>
                                <EditarVenta
                                    id={venta.id} 
                                    idUsuarioActual={venta.idUsuario} 
                                    idProductoActual={venta.idProducto}
                                    fechaActual={venta.fecha} 
                                    horaActual={venta.hora}
                                />
                                <CancelarVenta id={venta.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
