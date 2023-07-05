import '../../css/IniSes.css';

import React from 'react';
import InicioSesion from '../../componentes/login';

function LoginAlumno(){

    return(
        <div>
            <body>
                <InicioSesion subtitulo="ALUMNOS"/>
            </body>
        </div>
    )
}

export default LoginAlumno;