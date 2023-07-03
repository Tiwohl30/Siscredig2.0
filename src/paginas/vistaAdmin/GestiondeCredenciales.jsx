import React from 'react';

function GestionCredenciales() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand" href="#">Administrador</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link" href="credadmin.html">Vista previa credencial</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="adminges.html">Gestión de usuarios</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="gescreds.html">Gestión de credenciales</span>
                        </li>
                        <li className="nav-item active">
                            <span className="nav-link" href="adminmess.html">Mensajería</span>
                        </li>
                    </ul>
                </div>
            </nav>

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
