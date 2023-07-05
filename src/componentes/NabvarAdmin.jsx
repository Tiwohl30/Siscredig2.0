import {Link} from "react-router-dom";

function NabvarAdmin() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark styl">
                <a className="navbar-brand" href="#">Administrador</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/GestionUsuarios">Gestión de usuarios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/EscanearQR">Escanear QR</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" >Mensajeria</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default NabvarAdmin;