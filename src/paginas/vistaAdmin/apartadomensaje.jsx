import React from 'react';
import { useState } from "react";
import { Button, Card} from "react-bootstrap";
import NabvarAdmin from '../../componentes/NabvarAdmin';

function AdminMensajes() {


    const [mensajes, setMensajes] = useState([
        {
          id: 1,
          remitente: "Estudiante A",
          mensaje: "Solicitud de reposición de credencial.",
        },
        {
          id: 2,
          remitente: "Maestro B",
          mensaje: "Necesito una nueva credencial, la mía está dañada.",
        },
      ]);
    
      const handleResponder = (id) => {
        // Lógica para responder al mensaje con el ID proporcionado
        console.log("Responder al mensaje con ID:", id);
      };
        
    return (
      <>

       
        <div>
        <NabvarAdmin/>
            
          <h2 style={{ marginTop: "30px", marginLeft:"30px" }}>Mensajes de solicitud de reposición de credencial</h2>
          {mensajes.map((mensaje) => (
          <Card key={mensaje.id} className="mb-3 ml-4 mt-5">
            <Card.Body>
              <Card.Title>De: {mensaje.remitente}</Card.Title>
              <Card.Text>{mensaje.mensaje}</Card.Text>
              <Button
                variant="primary"
                onClick={() => handleResponder(mensaje.id)}
              >
                Responder
              </Button>
            </Card.Body>
        </Card>
      ))}


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

        </>
    );
}

export default AdminMensajes;
