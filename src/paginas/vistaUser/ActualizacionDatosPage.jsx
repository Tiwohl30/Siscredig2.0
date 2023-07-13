import React from 'react';
import Loading from '../../componentes/buttons/circularColor';
import NavAlumnos from '../../componentes/NavAlumnos';
import Footer from "../../componentes/footer";

function ActualizacionDatos(isLoggedIn){
    
        return (
            <div>
               
                <div className="container my-5">
                    <h2>Actualización de datos del estudiante</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre completo:</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre completo" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cuatrimestre">Cuatrimestre:</label>
                            <input type="text" className="form-control" id="cuatrimestre" placeholder="Ingresa tu cuatrimestre actual" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nss">Número de seguridad social:</label>
                            <input type="text" className="form-control" id="nss" placeholder="Ingresa tu número de seguridad social" />
                        </div>
                        <hr />
                        <h3>Datos de contacto de emergencia</h3>
                        <div className="form-group">
                            <label htmlFor="nombre_contacto">Nombre del contacto:</label>
                            <input type="text" className="form-control" id="nombre_contacto" placeholder="Ingresa el nombre del contacto de emergencia" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono_contacto">Número telefónico:</label>
                            <input type="text" className="form-control" id="telefono_contacto" placeholder="Ingresa el número telefónico del contacto de emergencia" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo_contacto">Correo electrónico:</label>
                            <input type="email" className="form-control" id="correo_contacto" placeholder="Ingresa el correo electrónico del contacto de emergencia" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="parentesco_contacto">Parentesco:</label>
                            <input type="text" className="form-control" id="parentesco_contacto" placeholder="Ingresa el parentesco del contacto de emergencia" />
                        </div>

                        <Loading><button type="" className="btn btn-primary">Actualizar datos</button></Loading>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }


export default ActualizacionDatos;
