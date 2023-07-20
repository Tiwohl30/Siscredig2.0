import React from 'react';
import Footer from '../../componentes/footer'
import NabvarAdmin from '../../componentes/NabvarAdmin';
import GestionAlumnos from './Gestion/GesAlumnos';
import GestionMaestros from './Gestion/GesMaestros';
import GestionOtros from './Gestion/GesOtros';
import back2 from '../../img/back2.jpeg'

function AdminGestionUsuarios() {

    const estiloComponente = {
        backgroundImage: `url(${back2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
       
      };
    





    return (
        <div style={estiloComponente}>
            <NabvarAdmin />
            <div className="container">
                <h1 className="mt-4">Resumen</h1>


                <GestionMaestros />

                <GestionAlumnos />


                <GestionOtros />





            </div>
            <Footer/>
        </div>
    );

}

export default AdminGestionUsuarios;
