import React from 'react';

function VistaPreviaCredencial() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Administrador</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="credadmin.html">Vista previa credencial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="adminges.html">Gestión de usuarios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="gescreds.html">Gestión de credenciales</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="adminmess.html">Mensajería</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container" style={{ marginBottom: "100px" }}>
        <div className="card mt-5">
          <div className="card-header bg-dark text-white">
            <h5 className="mb-0">Vista previa de credencial</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img className="img-fluid" src="https://via.placeholder.com/150x200" alt="Foto" />
              </div>
              <div className="col-md-8">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Nombre completo:</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="Juan Pérez" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Matrícula:</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="A123456" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Cargo:</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="__________________" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Area:</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="__________________" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Correo:</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="12345@uptapachula.edu.mx" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Fecha de expedición:</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="01/01/2023" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Fecha de vencimiento:</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="01/01/2024" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Número de seguridad social:</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="235892356" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Tipo de sangre:</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="A+" readOnly />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: "200px" }}>
        <div className="card mt-5">
          <div className="card-header bg-dark text-white">
            <h5 className="mb-0">Contacto de emergencia</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img className="img-fluid" src="https://via.placeholder.com/150x200" alt="Foto" />
              </div>
              <div className="col-md-8">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Nombre completo:</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="José Pérez" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Número telefónico:</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="9621234567" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Parentesco</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="Padre" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Correo:</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value="mail@mail.com" readOnly />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-light py-3">
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

export default VistaPreviaCredencial;
