import React from 'react';
import NavAlumnos from '../../componentes/NavAlumnos';
import Footer from "../../componentes/footer";

function VistaPrevia({ userData, isLoggedIn }) {

    
    console.log(userData.data.nombre);
    
    return (
        <>
        
            <div className="container" style={{ marginBottom: '100px' }}>
                <div className="card mt-5">
                    <div className="card-header bg-dark text-white">
                        <h5 className="mb-0">Vista previa de credencial</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" src="https://via.placeholder.com/150x200" alt="Foto" />
                            </div>
                            <div className="col-md-8">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Nombre completo:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.data.nombre} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Matrícula:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.data.matricula} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Cuatrimestre:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.data.cuatrimestre} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Carrera:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.data.carrera} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Correo:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.data.email} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Direccion:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.data.direccion} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Número de seguridad social:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value=" "readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Tipo de sangre:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.data.tipo_sangre} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginBottom: '200px' }}>
                <div className="card mt-5">
                    <div className="card-header bg-dark text-white">
                        <h5 className="mb-0">Contacto de emergencia</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" src="https://via.placeholder.com/150x200" alt="Foto" />
                            </div>
                            <div className="col-md-8">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Nombre completo:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={`${userData.data.nombre_contactoe} ${userData.data.apellido_materno_contactoe} ${userData.data.apellido_paterno_contactoe}`} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Número telefónico:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.data.telefono_contactoe}readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Parentesco</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.data.parentescto_contactoe} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Correo:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={" "} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    );
}

export default VistaPrevia;
