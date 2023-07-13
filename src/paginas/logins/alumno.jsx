import '../../css/IniSes.css';
import { useNavigate  } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function LoginAlumno({ onLogin }){

      const navigate = useNavigate();

      const [error, setError] = useState('');
      const [matricula, setMatricula] = useState('');
      const [password, setPassword] = useState('');
    
      const handleMatriculaChange = (event) => {
        setMatricula(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
        const response = await axios.post('http://127.0.0.1:8000/login/', { matricula, password });
        // La solicitud fue exitosa, puedes realizar acciones adicionales aquí,
        // como almacenar el token de autenticación en el local storage y redirigir al usuario.
        
        // Obtén los datos del usuario autenticado
        const userData = await axios.get(`http://127.0.0.1:8000/api/alumnos/${matricula}`);
        console.log(response.data);
        console.log(userData.data);
        onLogin(userData);

        navigate('/VistaPrevia');
        return userData
        } catch (error) {
        // Ocurrió un error durante la solicitud, puedes manejarlo aquí.
        setError('Credenciales inválidas');
        console.error(error);
    }
      };
      

    return(
        <div>
            <body>
            <div>
            <div className="container">
                <div className="info">
                    <h1 className="titulos">Universidad Politecnica De Tapachula</h1>
                    <h1 className="sub">Alumnos</h1>
                </div>
            </div>
            <div className="form">
                <div className="thumbnail">
                    <i className="fa-solid fa-user fa-4x"></i>
                </div>

                <form className="myForm" onSubmit={handleLogin}>
                    <input id="matri" type="text" placeholder="Correo" value={matricula} onChange={handleMatriculaChange} required />
                    <input id="contra" type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} required />
                    <button type="submit">Iniciar sesión</button>
                    <p className="message">
                        Recuerda iniciar sesión con tu correo institucional.
                    </p>
                    {error && <p>{error}</p>}
                </form>

            </div>
        </div>
            </body>
        </div>
    )
}

export default LoginAlumno;