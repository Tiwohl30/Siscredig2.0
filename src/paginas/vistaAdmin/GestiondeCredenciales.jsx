import React from 'react';
import NabvarAdmin from '../../componentes/NabvarAdmin';

function GestionCredenciales() {
    return (
        <div>
            <NabvarAdmin />
            <div className="container">
                <h1>Gestión de Credenciales</h1>
                <hr />
                <div className="row">
                    <div className="col-sm-6">
                        <form>
                            <h3>Agregar Credencial</h3>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Completo:</label>
                                <input type="text" className="form-control" id="nombre" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="carrera">Carrera:</label>
                                <input type="text" className="form-control" id="carrera" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fecha">Fecha de Expedición:</label>
                                <input type="date" className="form-control" id="fecha" />
                            </div>
                            <button type="submit" className="btn btn-primary">Agregar</button>
                        </form>
                    </div>
                    <div className="col-sm-6">
                        <h3>Credenciales Registradas</h3>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Carrera</th>
                                    <th>Fecha de Expedición</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>Ingeniería en Sistemas</td>
                                    <td>2022-01-01</td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-editar">Editar</button>
                                        <button type="button" className="btn btn-danger btn-eliminar">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Jane Smith</td>
                                    <td>Ingeniería Industrial</td>
                                    <td>2021-12-31</td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-editar">Editar</button>
                                        <button type="button" className="btn btn-danger btn-eliminar">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GestionCredenciales;
