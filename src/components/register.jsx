import "bootstrap/dist/css/bootstrap.min.css";
import "../css/app.css";
import { Link } from "react-router-dom";

const register = () => {
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
        <h1 className="text-center mt-4" id="Texto_registro">
          Registro
        </h1>
        <hr />
        <br />
        {/* ---name */}
        <div className="form-group">
          <label className="label" id="form-label">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            id="inputForm"
            required
            placeholder="Ingrese su nombre"
          />
          <label className="label" id="form-label">
            Apellido
          </label>
          <input
            type="text"
            name="apellido"
            className="form-control"
            id="inputForm"
            required
            placeholder="Ingrese su apellido"
          />
          <label className="label" id="form-label">
            Correo
          </label>
          <input
            type="email"
            name="correo"
            className="form-control"
            id="inputForm"
            required
            placeholder="Ingrese su correo"
          />
          <label className="label" id="form-label">
            Contraseña
          </label>
          <input
            type="password"
            name="contrasena"
            id="inputForm"
            className="form-control"
            required
            placeholder="Ingrese su contraseña"
          />
        </div>
        <button
          className="btn btn-block mt-4 btn-dark"
          type="submit"
          id="btn_registrar"
        >
        <strong>Crear cuenta</strong>
        </button>
        <hr />
        <div className="w-100 mt-2 d-flex justify-content-center">
          <div className="d-block text-center">
            <span className="Link_sesion">
              ¿Ya tienes cuenta? {""}
              <Link id="link" to="/">
                inicia Sesión
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default register;
