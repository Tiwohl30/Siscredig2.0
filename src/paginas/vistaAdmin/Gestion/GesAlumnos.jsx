import React, { useState, useEffect} from 'react';
import axios from 'axios';


function GestionAlumnos(){


  const [estudiantes, setEstudiantes] = useState([]);
  const [filtroMatricula, setFiltroMatricula] = useState('');
  const [estudiantesFiltrados, setEstudiantesFiltrados] = useState([]);
  const [cantidadRegistrosA, setCantidadRegistrosA] = useState(0);
  const [reloadKey, setReloadKey] = useState(0); // Estado para forzar la recarga

  const handleRecargarClick = () => {
    setReloadKey(reloadKey + 1); // Incrementa el valor del estado para forzar la recarga
  };

  useEffect(() => {
    axios
      .get('https://siscredig-api.onrender.com/api/alumnos')
      .then(response => {
        setEstudiantes(response.data);
        setCantidadRegistrosA(response.data.length);
      })
      .catch(error => {
        console.error(error);
      });
  }, [reloadKey]); // Agregamos reloadKey al array de dependencias para que la solicitud se realice nuevamente al cambiar el estado y forzar la recarga

  useEffect(() => {
    const estudiantesFiltrados = estudiantes.filter(estudiante =>
      estudiante.matricula.toString().includes(filtroMatricula)
    );
    setEstudiantesFiltrados(estudiantesFiltrados);
  }, [estudiantes, filtroMatricula, reloadKey]);

  const handleDelete = matricula => {
    axios
      .delete(`https://siscredig-api.onrender.com/api/alumnos/${matricula}`)
      .then(response => {
        if (response.status === 200) {
          // Eliminar el estudiante del estado estudiantesFiltrados
          const updatedEstudiantes = estudiantesFiltrados.filter(
            estudiante => estudiante.matricula !== matricula
          );
          setEstudiantesFiltrados(updatedEstudiantes);

          // Actualizar también el estado estudiantes para reflejar el cambio
          setEstudiantes(estudiantes.filter(estudiante => estudiante.matricula !== matricula));
        } else {
          console.error('Error al eliminar estudiante');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const toggleCredencialActiva = (matricula, estadoActual) => {
    const nuevoEstado = !estadoActual;

    axios
      .patch(`https://siscredig-api.onrender.com/api/alumnos/${matricula}/`, {
        credencial_activa: nuevoEstado,
      })
      .then(response => {
        if (response.status === 200) {
          const updatedEstudiantes = estudiantesFiltrados.map(estudiante => {
            if (estudiante.matricula === matricula) {
              return { ...estudiante, credencial_activa: nuevoEstado };
            }
            return estudiante;
          });
          setEstudiantesFiltrados(updatedEstudiantes);
        } else {
          console.error('Error al cambiar el estado de la credencial');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    const estudiantesFiltrados = estudiantes.filter(estudiante =>
      estudiante.matricula.toString().includes(filtroMatricula)
    );
    setEstudiantesFiltrados(estudiantesFiltrados);
  }, [estudiantes, filtroMatricula]);



    
        return (
            <div>
              
      <div className="container">
      
            

            <div className="row">
              <div className="col-md-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Estudiantes</h5>
                    <p className="card-text">Número total de estudiantes: {cantidadRegistrosA}</p>
                      <button type="button" className="btn" data-toggle="collapse" data-target="#demo2">Desplegar</button>
                      <div id="demo2" className="collapse">

                      <br />
                      <input
                        type="text"
                        value={filtroMatricula}
                        onChange={(e) => setFiltroMatricula(e.target.value)}
                        placeholder="Filtrar por matrícula"
                        className="form-control mb-2 col-3"
                      />
                      <br />

                      <table className="table">
                        <thead>
                          <tr>
                            <th>Matrícula</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Carrera</th>
                            <th>Cuatrimestre</th>
                            <th>Telefono</th>
                            <th>Cred. Activa</th>
                          </tr>
                        </thead>
                        <tbody>
                      {estudiantesFiltrados.map(estudiante => (
                        <tr key={estudiante.matricula}>
                          <td>{estudiante.matricula}</td>
                          <td>{estudiante.nombre}</td>
                          <td>{estudiante.apellido_paterno}</td>
                          <td>{estudiante.apellido_materno}</td>
                          <td>{estudiante.carrera}</td>
                          <td>{estudiante.cuatrimestre}</td>
                          <td>{estudiante.telefono}</td>
                          <td>{estudiante.credencial_activa ? 'Sí' : 'No'}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleDelete(estudiante.matricula)}
                            >
                              Eliminar
                            </button>
                            
                            <button
                                onClick={() => toggleCredencialActiva(estudiante.matricula, estudiante.credencial_activa)}
                                className="btn"
                              >
                                {estudiante.credencial_activa ? 'Desactivar' : 'Activar'}
                              </button>
                          </td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                    <button className="btn" onClick={handleRecargarClick}>Recargar</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>

      
      </div>

            </div>
        );
    
}

export default GestionAlumnos;
