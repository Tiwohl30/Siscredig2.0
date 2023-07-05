import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ActualizacionDatos from './paginas/vistaUser/ActualizacionDatosPage';
import VistaPrevia from './paginas/vistaUser/vistaprevia';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Reposicion from './paginas/vistaUser/solicitudRepocision';
import LoginAlumno from './paginas/logins/alumno';
import LoginAdmin from './paginas/logins/administradores';
import Accesos from './paginas/accesos';
import { EscanerQR } from './paginas/vistaAdmin/EscanearQR';
import AdminGestionUsuarios from './paginas/vistaAdmin/adminGestionUser';
import AdminMensajes from './paginas/vistaAdmin/apartadomensaje';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Accesos></Accesos>,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/loginAlumnos',
    element: <LoginAlumno/>,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/loginAdmin',
    element: <LoginAdmin />,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/VistaPrevia',
    element: <VistaPrevia />,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/ActualizacionDatos',
    element: <ActualizacionDatos />,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/SolicitudReposicion',
    element: <Reposicion />,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/GestionUsuarios',
    element: <AdminGestionUsuarios />,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/EscanearQR',
    element: <EscanerQR />,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/Mensajes',
    element: <AdminMensajes />,
    errorElement: <h1>Error</h1>
  },



])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);
