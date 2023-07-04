import React from 'react';
import NabvarAdmin from '../../componentes/NabvarAdmin';

function AdminMensajes() {
    return (
        <div>
            <NabvarAdmin/>
            <div className="container mt-4">
                <h1>Mensajerídda</h1>
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
