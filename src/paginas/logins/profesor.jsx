import '../../css/IniSes.css';
import '../../fontawesome-free-6.3.0-web/css/all.min.css'
import React from 'react';
import InicioSesion from '../../componentes/login';

function LoginProfesor(){

    return(
        <div>
            <body>
                <InicioSesion subtitulo="Profesor">

                </InicioSesion>
            </body>
        </div>
    )
}

export default LoginProfesor;