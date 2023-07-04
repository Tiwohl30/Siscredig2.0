import React from 'react';
import NavAlumnos from '../../componentes/NavAlumnos';
import Footer from "../../componentes/footer";

function Reposicion() {
    return (
        <>
        <NavAlumnos></NavAlumnos>
            <div className="container my-4">
                <h2 className="text-center mb-4">Solicitar reposición de credencial</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre completo:</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="matricula">Matrícula:</label>
                                <input type="text" className="form-control" id="matricula" name="matricula" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="carrera">Carrera:</label>
                                <input type="text" className="form-control" id="carrera" name="carrera" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cuatrimestre">Cuatrimestre:</label>
                                <input type="text" className="form-control" id="cuatrimestre" name="cuatrimestre" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="motivo">Motivo de la reposición:</label>
                                <textarea className="form-control" id="motivo" name="motivo" rows="3" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block my-4">Enviar solicitud</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Reposicion;
