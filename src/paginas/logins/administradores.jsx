import { Link } from 'react-router-dom';
import '../../css/IniSes.css';
import '../../fontawesome-free-6.3.0-web/css/all.min.css'
import React from 'react';
import { Helmet } from 'react-helmet';

function LoginAdmin() {
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="../../css/status.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
                <link rel="stylesheet" href="../../fontawesome-free-6.3.0-web/css/all.min.css" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Inicio</title>
            </Helmet>
            <body>
                {
                    
                    <div>
                        <div class="container">
                            <div class="info">
                                <h1>Universidad Politecnica De Tapachula </h1>
                                <span>Bienvenido a Credencializacion Digital</span>
                                <h1 class="sub">Administrativos</h1>
                            </div>
                        </div>
                        <div class="form">
                            <div class="thumbnail"><i class="fa-solid fa-user fa-4x"></i>
                            </div>
                            <form class="myForm">
                                <input id="matri" type="text" placeholder="Matricula"  />
                                <input id="contra" type="password" placeholder="Contraseña"  />
                                
                                <Link to="/VistaPrevia">
                                <button type="submit">
                                login</button></Link>
                                

                                
                                <p class="message">Recuerda iniciar sesion con tu matricula proporcionada por la universidad.</p>
                            </form>
                        </div>
                    </div>
                }
            </body>
        </div>
    );
}

export default LoginAdmin;
