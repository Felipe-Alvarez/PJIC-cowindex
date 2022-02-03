import "bootstrap/dist/css/bootstrap.min.css";
import "../css/app.css";
import { Link } from "react-router-dom";
import { GrKey } from "react-icons/gr";
// import { useState } from "react";
//import Cargar from "./Cargar";

const App = () => {
  // const [loading, setLoading] = useState(false);

  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center"
      id="container"
    >
      {/* PARA ORGANIZAR: JUSTIFY = EJE X, ALING = EJE Y */}
      <form
        className="ms-5 col-lg-4 col-md-10 col-sm-10 col-10 h-auto p-2"
        id="form"
      >
        <div className="text-center">
          <h1 className="text-center mt-4" id="Texto_registro">
            Iniciar sesión
          </h1>
        </div>
        <hr className="w-75 m-auto mt-2" />
        {/* form email */}
        <div className="form-group mb-2 mt-4">
          <label id="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            id="inputForm"
            aria-describedby="emailHelp"
            placeholder="Example@cowindex.co"
          />
        </div>
        {/* form password */}
        <div className="form-group mb-2 mt-4">
          <label for="name" id="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="inputForm"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <div className="w-100 d-flex justify-content-center mt-4">
          <Link
            className="btn btn-success col-8 d-flex justify-content-between"
            to="/crear-lote"
          >
            <div className="col-6">Iniciar sesión</div>
            <div className="col-2">
              <GrKey></GrKey>
            </div>
          </Link>
        </div>
        <div className="w-100 mt-2 d-flex justify-content-center">
          <div className="d-block text-center">
            <p className="mb-0">
              ¿No tienes cuenta? {""}
              <Link className="" to="/registro">
                regístrate
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
