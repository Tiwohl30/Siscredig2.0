import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../css/opcion.css';

function GestionMaestros() {
  const [Maestros, setMaestros] = useState([]);
  const [filtroNumero_control, setFiltroNumero_control] = useState('');
  const [MaestrosFiltrados, setMaestrosFiltrados] = useState([]);
  const [cantidadRegistrosM, setCantidadRegistrosM] = useState(0);

  const [reloadKey, setReloadKey] = useState(0); // Estado para forzar la recarga

  const handleRecargarClick = () => {
    setReloadKey(reloadKey + 1); // Incrementa el valor del estado para forzar la recarga
  };

  useEffect(() => {
    // Hacer la solicitud HTTP a la API utilizando Axios
    axios
      .get('https://siscredig-api.onrender.com/api/docentes')
      .then((response) => {
        // Actualizar el estado con los datos recibidos de la API
        setMaestros(response.data);
        setCantidadRegistrosM(response.data.length);
        setMaestrosFiltrados(response.data); // Inicialmente, establecemos los maestros filtrados como todos los maestros
      })
      .catch((error) => {
        console.error(error);
      });
  }, [reloadKey]); 

  const handleDelete = (numero_control) => {
    axios
      .delete(`https://siscredig-api.onrender.com/api/docentes/${numero_control}`)
      .then((response) => {
        // Verificar la respuesta de la API y actualizar la lista de Maestros
        if (response.status === 200) {
          const updatedMaestros = MaestrosFiltrados.filter(
            (maestro) => maestro.numero_control !== numero_control
          );
          setMaestrosFiltrados(updatedMaestros);
        } else {
          console.error('Error al eliminar maestro');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleCredencialActiva = (numero_control, estadoActual) => {
    const nuevoEstado = !estadoActual;

    axios
      .patch(`https://siscredig-api.onrender.com/api/docentes/${numero_control}/`, {
        credencial_activa: nuevoEstado,
      })
      .then((response) => {
        // Verificar la respuesta de la API y actualizar el estado del maestro
        if (response.status === 200) {
          const updatedMaestros = MaestrosFiltrados.map((maestro) => {
            if (maestro.numero_control === numero_control) {
              return { ...maestro, credencial_activa: nuevoEstado };
            }
            return maestro;
          });
          setMaestrosFiltrados(updatedMaestros);
        } else {
          console.error('Error al cambiar el estado de la credencial');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const MaestrosFiltrados = Maestros.filter((maestro) =>
      maestro.numero_control.toString().includes(filtroNumero_control)
    );
    setMaestrosFiltrados(MaestrosFiltrados);
  }, [Maestros, filtroNumero_control]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Maestros</h5>
                <p className="card-text">Número total de Maestros: {cantidadRegistrosM}</p>
                <button type="button" className="btn" data-toggle="collapse" data-target="#demo1">
                  Desplegar
                </button>
                <div id="demo1" className="collapse">
                  <br />
                  <input
                    type="text"
                    value={filtroNumero_control}
                    onChange={(e) => setFiltroNumero_control(e.target.value)}
                    placeholder="Filtrar por matrícula"
                    className="form-control mb-2 col-3"
                  />
                  <br />
                  <table className="table">
                    <thead>
                      <tr>
                        <th>NumControl</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Cred. Activa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MaestrosFiltrados.map((maestro) => (
                        <tr key={maestro.numero_control}>
                          <td>{maestro.numero_control}</td>
                          <td>{maestro.nombre}</td>
                          <td>{maestro.apellido_paterno}</td>
                          <td>{maestro.apellido_materno}</td>
                          <td>{maestro.email}</td>
                          <td>{maestro.telefono}</td>
                          <td>{maestro.credencial_activa ? 'Sí' : 'No'}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleDelete(maestro.numero_control)}
                            >
                              Eliminar
                            </button>

                            <button
                              onClick={() =>
                                toggleCredencialActiva(
                                  maestro.numero_control,
                                  maestro.credencial_activa
                                )
                              }
                              className="btn"
                            >
                              {maestro.credencial_activa ? 'Desactivar' : 'Activar'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button className="btn" onClick={handleRecargarClick}>Recargar</button> {/* Botón para recargar el componente */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default GestionMaestros;
