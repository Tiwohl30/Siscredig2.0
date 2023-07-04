import React from 'react';
import NabvarAdmin from '../../componentes/NabvarAdmin';

class AdminGestionUsuarios extends React.Component {

    render() {
        return (
            <div>
              <NabvarAdmin/>
      <div className="container">
      <h1 className="mt-4">Resumen</h1>
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Estudiantes</h5>
                    <p className="card-text">Número total de estudiantes: X</p>
                      <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
                      <div id="demo" class="collapse">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-md-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Maestrs</h5>
                    <p className="card-text">Número total de maestros: X</p>
                      <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo2">Simple collapsible</button>
                      <div id="demo2" class="collapse">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-md-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Estudiantes</h5>
                    <p className="card-text">Número total de estudiantes: X</p>
                      <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo3">Simple collapsible</button>
                      <div id="demo3" class="collapse">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                  </div>
                </div>
              </div>
            </div>


            

      
      </div>

                <footer className="bg-dark text-light py-3" style={{ marginTop: "200px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h5>Contacto</h5>
                                <p>Contacto@uptapachula.edu.mx</p>
                                <p>(962) 689 0090 Ext. 1001-1010</p>
                                <p>Carretera Tapachula - Puerto Madero KM. 24 + 300. Tapachula, Chiapas</p>
                            </div>
                            <div className="col-md-8 text-md-right">
                                <p>&copy; 2023, UP Tapachula. Todos los derechos reservados.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default AdminGestionUsuarios;
