import React from 'react';

function AdminMensajes() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Administrador</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="credadmin.html">Vista previa credencial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="adminges.html">Gestión de usuarios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="gescreds.html">Gestión de credenciales</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="adminmess.html">Mensajería</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container mt-4">
                <h1>Mensajería</h1>
                <hr />

                <div className="row">
                    <div className="col-md-6">
                        <h2>Enviar mensaje</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="destinatario">Destinatario:</label>
                                <input type="text" className="form-control" id="destinatario" placeholder="Nombre o correo del destinatario" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="asunto">Asunto:</label>
                                <input type="text" className="form-control" id="asunto" placeholder="Asunto del mensaje" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensaje">Mensaje:</label>
                                <textarea className="form-control" id="mensaje" rows="5" placeholder="Escribe tu mensaje aquí"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="bg-dark text-light py-3" style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Contacto</h5>
                            <p>Contacto@uptapachula.edu.mx</p>
                            <p>(962) 689 0090 Ext. 1001-1010</p>
                            <p>Carretera Tapachula - Puerto Madero KM. 24 + 300. Tapachula, Chiapas</p>
                        </div>
                        <div className="col-md-8 text-md-right">
                            <p>&copy; 2023, UP Tapachula. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AdminMensajes;
