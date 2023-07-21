import React, { useState } from 'react';
import '../../css/registro.css'
import Footer from '../../componentes/footer'
import NabvarAdmin from '../../componentes/NabvarAdmin';
import background from '../../img/back2.jpeg'

const RegistroOtros = () => {
  const [numero_control, setMatricula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [nss, setNss] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tipoSangre, setTipoSangre] = useState('');
  const [area, setArea] = useState('');
  const [nombreContacto, setNombreContacto] = useState('');
  const [apellidoPaternoContacto, setApellidoPaternoContacto] = useState('');
  const [apellidoMaternoContacto, setApellidoMaternoContacto] = useState('');
  const [parentescoContacto, setParentescoContacto] = useState('Padre');
  const [telefonoContacto, setTelefonoContacto] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://siscredig-api.onrender.com/api/otros/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numero_control,
          nss,
          nombre,
          apellido_paterno: apellidoPaterno,
          apellido_materno: apellidoMaterno,
          direccion,
          tipo_sangre: tipoSangre,
          email,
          nombre_contactoe: nombreContacto,
          apellido_paterno_contactoe: apellidoPaternoContacto,
          apellido_materno_contactoe: apellidoMaternoContacto,
          parentescto_contactoe: parentescoContacto,
          cargo,
          area,
          telefono_contactoe: telefonoContacto,
          password
        }),
      });

      if (response.ok) {
        console.log('Usuario registrado exitosamente');
        alert('Usuario registrado con exito')
      } else {
        console.error('Error al registrar al usuario');
      }
    } catch (error) {
      console.error('Error al conectar con la API', error);
    }
  };


  const estiloComponente = {
    
      
      backgroundImage: `url(${background})`,
      position: 'absolute',
      backgroundSize: 'cover', // Otras propiedades de estilo para el fondo, según sea necesario.
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      
      };
    

  return (

    <div style={estiloComponente}>
    <div >
    <NabvarAdmin />
    
    <div className="container contenedor">
    <h1>Datos del usuario</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Numero de control:
                <input type="text" value={numero_control} onChange={(e) => setMatricula(e.target.value)} className="form-control" />
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Nombre:
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" />
              </label>
            </div>
          </div>
        </div>

        <div className='row'>

        <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"/>
              </label>
            </div>
          </div>

          <div className="row">
            
          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Contraseña:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
              </label>
            </div>
          </div>


        </div>

        </div>

        <br />

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Apellido Paterno:
                <input type="text" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} className="form-control"/>
              </label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Apellido Materno:
                <input type="text" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} className="form-control" />
              </label>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                NSS:
                <input type="text" value={nss} onChange={(e) => setNss(e.target.value)} className="form-control"/>
              </label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Dirección:
                <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} className="form-control" />
              </label>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Tipo de Sangre:
                <input type="text" value={tipoSangre} onChange={(e) => setTipoSangre(e.target.value)} className="form-control" />
              </label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Area:
                <input type="text" value={area} onChange={(e) => setArea(e.target.value)} className="form-control" />
              </label>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Cargo:
                <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} className="form-control"/>
              </label>
            </div>
          </div>

          
        </div>

        <br />
        <h1 >Contacto de Emergencia</h1>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Nombre 
                <input type="text" value={nombreContacto} onChange={(e) => setNombreContacto(e.target.value)} className="form-control"/>
              </label>
            </div>
          </div>

          <div className="col-md6">
            <div className="form-group">
              <label className="titlename">
                Apellido Paterno
                <input type="text" value={apellidoPaternoContacto} onChange={(e) => setApellidoPaternoContacto(e.target.value)} className="form-control" />
              </label>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Apellido Materno
                <input type="text" value={apellidoMaternoContacto} onChange={(e) => setApellidoMaternoContacto(e.target.value)} className="form-control" />
              </label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Parentesco
                <select value={parentescoContacto} onChange={(e) => setParentescoContacto(e.target.value)} className="form-control" id="exampleFormControlSelect1">
                  <option value="Padre">Padre</option>
                  <option value="Madre">Madre</option>
                  <option value="Tio">Tio</option>
                  <option value="Tia">Tia</option>
                  <option value="Otro">Otro</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="titlename">
                Teléfono
                <input type="text" value={telefonoContacto} onChange={(e) => setTelefonoContacto(e.target.value)} className="form-control" />
              </label>
            </div>
          </div>
        </div>
      
        <br />

        

        <button className="btn" type="submit">Registrar</button>
      </form>
    </div>
    <Footer/>
    </div>
  </div>

  );
};

export default RegistroOtros;
