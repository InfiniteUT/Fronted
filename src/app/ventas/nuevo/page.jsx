"use client"
import axios from "axios";
async function nuevaVenta(e) {
    e.preventDefault();
    //console.log("Estas en nuevo usuario");
    const url = "http://localhost:3000/ventas/nuevaVenta";
    const datos = {
        idUsuario:document.getElementById("idUsuario").value,
        idProducto:document.getElementById("idProducto").value,
        fecha:document.getElementById("fecha").value,
        hora:document.getElementById("hora").value,
    }
    //console.log(datos);
    const respuesta = await axios.post(url,datos);
    location.replace("http://localhost:3001/ventas/mostrar");
    //console.log(respuesta.data);
}
export default function Nuevo() {
    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={nuevaVenta} action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nueva venta</h1>
                    </div>
                    <div className="card-body">
                        <input id="idUsuario" placeholder="IdUsuario" autoFocus className="form-control mb-3" type="text" />
                        <input id="idProducto" placeholder="IdProducto" className="form-control mb-3" type="text" />
                        <input id="fecha" placeholder="Fecha" className="form-control mb-3" type="text" />
                        <input id="hora" placeholder="Hora" className="form-control mb-3" type="text" />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary col-12 mt-2 mb-2" type="submit">Guardar usuario</button>
                    </div>
                </div>
            </form>
        </div>
    );
}