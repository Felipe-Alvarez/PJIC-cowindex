import "bootstrap/dist/css/bootstrap.min.css";
import "../css/registro.css";
import { Link } from "react-router-dom";
import { BsFillPersonCheckFill } from "react-icons/bs";

const register = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center vh-100"
      id="contain"
    >
      {/* PARA ORGANIZAR: JUSTIFY = EJE X, ALING = EJE Y */}
      <form
        className="ms-5 col-lg-4 col-md-10 col-sm-10 col-10 h-auto p-2"
        id="form"
      >
        <div className="text-center">
          <h1 className="text-center mt-4" id="Texto_registro">
            Registro
          </h1>
        </div>
        <hr className="w-75 m-auto mt-2" />
        {/* form email */}
        <div className="form-group mb-2 mt-4">
          <label id="form-label">Documento</label>
          <input
            type="number"
            className="form-control"
            id="inputForm"
            aria-describedby="docHelp"
            placeholder="Ingrese su documento."
          />
        </div>
        <div className="form-group mb-2 mt-4">
          <label id="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="inputForm"
            aria-describedby="nameHelp"
            placeholder="Ingrese su nombre."
          />
        </div>
        {/* form password */}
        <div className="form-group mb-2 mt-4">
          <label for="name" id="form-label">
            Primer apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="inputForm"
            placeholder="Ingrese su primer apellido."
          />
        </div>
        <div className="form-group mb-2 mt-4">
          <label for="name" id="form-label">
            Segundo apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="inputForm"
            placeholder="Ingrese su segundo apellido."
          />
        </div>
        <div className="form-group mb-2 mt-4">
          <label for="name" id="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="inputForm"
            placeholder="Ingrese su correo."
          />
        </div>
        <div className="form-group mb-2 mt-4">
          <label for="name" id="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="inputForm"
            placeholder="Ingrese su contraseña."
          />
        </div>
        <div className="w-100 d-flex justify-content-center mt-4">
          <Link
            className="btn btn-success col-8 d-flex justify-content-between"
            to="/crear-lote"
          >
            <div className="col-6">Crear cuenta</div>
            <div className="col-2">
            <BsFillPersonCheckFill></BsFillPersonCheckFill>
            </div>
          </Link>
        </div>
        <div className="w-100 mt-2 d-flex justify-content-center">
          <div className="d-block text-center">
            <p className="mb-0">
              ¿Ya estás registrado? {""}
              <Link className="" to="/">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default register;
