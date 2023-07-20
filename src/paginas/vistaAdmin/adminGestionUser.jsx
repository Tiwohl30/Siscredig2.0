import React from 'react';
import Footer from '../../componentes/footer'
import NabvarAdmin from '../../componentes/NabvarAdmin';
import GestionAlumnos from './Gestion/GesAlumnos';
import GestionMaestros from './Gestion/GesMaestros';
import GestionOtros from './Gestion/GesOtros';

function AdminGestionUsuarios() {

    const estiloComponente = {
        backgroundImage: 'url("https://storage.googleapis.com/pai-images/2afb4ff7181d468d87de565926efd7dc.jpeg")',
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
