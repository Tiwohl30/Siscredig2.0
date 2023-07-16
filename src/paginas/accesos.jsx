import React from 'react';
import '../css/opcion.css';
import Button from '@mui/material/Button';
import Footer from '../componentes/footer'
import BarraAcceso from '../componentes/bar';
import { Link } from "react-router-dom"


function Accesos() {

    const containerStyle = {
        backgroundImage: "url('../img/fondo.jpeg')",
        // Ajusta los estilos adicionales según tus necesidades
      };
    

    return (
        <div style={{ backgroundImage: "url('https://img.freepik.com/vector-gratis/fondo-morado-rosa-nublado_91008-257.jpg?w=1060&t=st=1689448798~exp=1689449398~hmac=962616d5cef5f04de8cbb8452ade4971fa4ad0cdc6198f1cc1303cc6e62e3129'),",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover' }}>
            <BarraAcceso/>
            <div className="separador" />
            
            <div className="container">
                <div className="info">
                    <h1>Universidad Politécnica De Tapachula</h1>
                    <span>
                        <a href="/">Bienvenido a Credencialización Digital</a>
                    </span>
                </div>
                <div className="menu">
                    <div className="menu-item alumno">
                        <i className="fa-solid fa-user" />
                        <h2>Alumno</h2>
                        <Link to="LoginAlumnos">
                            <Button variant="outlined" color='secondary'>IR</Button>
                        </Link>
                    </div>
                    <div className="menu-item administrativos">
                        <i className="fa-solid fa-shield-halved" />
                        <h2>Docente</h2>
                        <Link to="/loginMaestro">
                            <Button variant="outlined" color='secondary'>IR</Button>
                        </Link>
                    </div>
                    <div className="menu-item administrativos">
                        <i className="fa-solid fa-shield-halved" />
                        <h2>Otros</h2>
                        <Link to="loginOtros">
                            <Button variant="outlined" color='secondary'>IR</Button>
                        </Link>
                    </div>
                    <div className="menu-item administrativos">
                        <i className="fa-solid fa-shield-halved" />
                        <h2>Administrativos</h2>
                        <Link to="/loginAdmin">
                            <Button variant="outlined" color='secondary'>IR</Button>
                        </Link>
                    </div>

                </div>
            </div>
            <div className='separator'></div>
            <Footer/>
        </div>
    );
}

export default Accesos;
