import React, { useState } from 'react';
import Footer from "../../componentes/footer";
import axios from 'axios';




function Reposicion({ isLoggedIn, userData }) {

const [motivo, setMotivo] = useState('');
  const { nombre, matricula, carrera, cuatrimestre, email} = userData;


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Construye los datos del formulario
    const formData = {
      destinatario: '221025@uptapachula.edu.mx',
      asunto: `Solicitud de reposicion de credencial - ${matricula ? matricula : userData.numero_control}`,
      
      contenido: `de : ${email}
      nombre: ${nombre} ${userData.apellido_paterno} ${userData.apellido_materno}, 
      usuario tipo: ${userData.tipoLogin }
      ${userData.cargo ? "Area: " + userData.area : " "} 
      ${userData.cargo ? "Cargo: " + userData.cargo : " "} 
      ${userData.carrera ? userData.carrera : " "}
      ${cuatrimestre ? "Cuatrimestre:" + cuatrimestre : " "} 
      Motivo de la solicitud de reposicion de credencial: "${motivo}"`,
    };
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/send-email/', formData);
      console.log(response.data);

      const text = `http://127.0.0.1:8000/api/${userData.tipoLogin}/${matricula?matricula:userData.numero_control}/`
      console.log(text)
      const des = await axios.patch(text, {
        credencial_activa: false
      });

      console.log(des)
      
      
    } catch (error) {
      console.error(error);
      // Maneja el error en caso de que ocurra algún problema
    }
  };


  return (
    <>
      <div className="container my-4">
        <h2 className="text-center mb-4">Solicitar reposición de credencial</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={nombre + " " + userData.apellido_paterno + " " + userData.apellido_materno} // Llena automáticamente el valor del campo con userData.nombre
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="matricula">Matrícula / numero de control:</label>
                <input
                  type="text"
                  className="form-control"
                  id="matricula"
                  name="matricula"
                  value={matricula ? matricula : userData.numero_control} // Llena automáticamente el valor del campo con userData.matricula
                  required
                />
              </div>

              { carrera&&(
              <div className="form-group">
                <label htmlFor="carrera">Carrera:</label>
                <input
                  type="text"
                  className="form-control"
                  id="carrera"
                  name="carrera"
                  value={carrera} // Llena automáticamente el valor del campo con userData.carrera
                  required
                />
              </div>)}

                { cuatrimestre &&(
              <div className="form-group">
                <label htmlFor="cuatrimestre">Cuatrimestre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cuatrimestre"
                  name="cuatrimestre"
                  value={cuatrimestre} // Llena automáticamente el valor del campo con userData.cuatrimestre
                  required
                />
              </div>)}

              <div className="form-group">
                <label htmlFor="motivo">Motivo de la reposición:</label>
                <textarea
                  className="form-control"
                  id="motivo"
                  name="motivo"
                  rows="3"
                  value={motivo} onChange={(e) => setMotivo(e.target.value)}
                  required
                ></textarea>
              </div>{}
              <button type="submit" className="btn btn-primary btn-block my-4" disabled={!userData.credencial_activa}>
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reposicion;
