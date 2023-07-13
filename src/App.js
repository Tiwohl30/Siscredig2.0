import React, { useState, useEffect } from 'react';
import './index.css';
import ActualizacionDatos from './paginas/vistaUser/ActualizacionDatosPage';
import VistaPrevia from './paginas/vistaUser/vistaprevia';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Reposicion from './paginas/vistaUser/solicitudRepocision';
import LoginAlumno from './paginas/logins/alumno';
import LoginAdmin from './paginas/logins/administradores';
import Accesos from './paginas/accesos';
import { EscanerQR } from './paginas/vistaAdmin/EscanearQR';
import AdminGestionUsuarios from './paginas/vistaAdmin/adminGestionUser';
import AdminMensajes from './paginas/vistaAdmin/apartadomensaje';
import '@fortawesome/fontawesome-svg-core/styles.css';
import LoginProfesor from './paginas/logins/profesor';
import NavAlumnos from './componentes/NavAlumnos';
import ProtectedRoute from './paginas/vistaUser/ProtectedRoute';




  function App() {

   
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
  
    const handleLogin = (user) => {
      setIsLoggedIn(true);
      setUserData(user);
    };

    
      return (
        <>
        
        <BrowserRouter>
        <NavAlumnos isLoggedIn={isLoggedIn} />
          <Routes>
            <Route path="/" element={<Accesos />} />
            <Route path="/loginAlumnos" element={<LoginAlumno onLogin={handleLogin}/>}/>
            <Route path="/loginMaestro" element={<LoginProfesor />} />
            <Route path="/loginAdmin" element={<LoginAdmin />} />
            <Route path="/VistaPrevia" element={<VistaPrevia userData={userData} />} />
            <Route
              path="/VistaPrevia"
              element={<ProtectedRoute element={VistaPrevia} isLoggedIn={isLoggedIn} />}
            />

            
        <Route
          path="/ActualizacionDatos"
          element={<ActualizacionDatos
          isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/SolicitudReposicion"
          element={<Reposicion />}
          isLoggedIn={isLoggedIn}
        />

            <Route path="/GestionUsuarios" element={<AdminGestionUsuarios />} />
            <Route path="/EscanearQR" element={<EscanerQR />} />
            <Route path="/Mensajes" element={<AdminMensajes />} />
          </Routes>
        </BrowserRouter>
        </>
      );
    }
    
  export default App;
