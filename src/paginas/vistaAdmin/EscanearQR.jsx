import { useState } from "react";
import { useZxing } from "react-zxing";
import NabvarAdmin from "../../componentes/NabvarAdmin";
import axios from "axios"


export const EscanerQR = () => {

var valorDespuesDeMatricula = ""
const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });

  const texto = result

  // Buscamos la posición de "MATRICULA:"
  const posicionInicio = texto.indexOf("MATRICULA:");

  if (posicionInicio !== -1) {
    // Extraemos la subcadena que va después de "MATRICULA:"
    valorDespuesDeMatricula = texto.substring(posicionInicio + "MATRICULA:".length, posicionInicio + "MATRICULA:".length + 6).trim()
    console.log(valorDespuesDeMatricula); // Resultado: "221025"
  } else {
    console.log("No se encontró la subcadena 'MATRICULA:'");
  }

  return (
    <div className="text-center">
    <NabvarAdmin/>
      <video className="p-5" ref={ref}/>
      <p>
        <span className="datosQr">Datos:</span>
        <span className="resultadoQR">{result}, <br /> Valor despues de matricula:{valorDespuesDeMatricula}</span>
      </p>
    </div>
  );

};
