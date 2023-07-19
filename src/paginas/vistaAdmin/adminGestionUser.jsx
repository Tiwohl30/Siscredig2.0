import React from 'react';
import Footer from '../../componentes/footer'
import NabvarAdmin from '../../componentes/NabvarAdmin';
import GestionAlumnos from './Gestion/GesAlumnos';
import GestionMaestros from './Gestion/GesMaestros';
import GestionOtros from './Gestion/GesOtros';

function AdminGestionUsuarios() {







    return (
        <div>
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
