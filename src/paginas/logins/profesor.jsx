import '../../css/IniSes.css';
import { Link } from 'react-router-dom';
import React from 'react';


function LoginProfesor(){

    return(
        <div>
            <div>
            <body>
            <div>
            <div className="container">
                <div className="info">
                    <h1 className="titulos">Universidad Politecnica De Tapachula</h1>
                    <h1 className="sub">Maestros</h1>
                </div>
            </div>
            <div className="form">
                <div className="thumbnail">
                    <i className="fa-solid fa-user fa-4x"></i>
                </div>
                <form className="myForm">
                    <input id="matri" type="text" placeholder="Matrícula" required />
                    <input id="contra" type="password" placeholder="Contraseña" required />
                    <Link to="/VistaPrevia"><button type="submit">Iniciar sesión</button></Link>
                    <p className="message">
                        Recuerda iniciar sesión con tu correo institucional.
                    </p>
                </form>
            </div>
        </div>
            </body>
        </div>
        </div>
    )
}

export default LoginProfesor;