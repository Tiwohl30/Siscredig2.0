import { useState } from "react";
import {QrReader} from "react-qr-reader";

export const EscanerQR = (props) => {


  const [data, setData] = useState('No result');

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
        </div>
      </div>
    </div>
  );
};
