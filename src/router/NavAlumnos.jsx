import React from "react";
import { Link } from "react-router-dom"

function NavAlumnos(){

return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand">Credenciales</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navbar-dark">
                        
                        <Link to="/VistaPrevia" >
                        <li className="nav-item active">
                         Vista Previa 
                        </li>
                        </Link>
                        
                        <Link to="/ActualizacionDatos" >
                        <li className="nav-item">
                         Actualizacion de datos 
                        </li>
                        </Link>
                        
                        <Link to="/SolicitudReposicion" >
                        <li className="nav-item">
                         Solicitar reposicion 
                        </li>
                        </Link>
                        
                    </ul>
                </div>
        </nav>
)

}

export default NavAlumnos;