import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

const Perfil = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <form
          className="d-block col-lg-7 col-md-10 col-sm-10 col-xs-12 h-auto p-2 m-auto"
          id="form"
        >
          <h1 className="text-center mt-4" id="Texto_perfil">
            Perfil
          </h1>
          <hr />
          <br />
          {/* ---name */}
          <form action="" className="form-group">
            <div className="form-group mb-2 mt-4">
              <label id="form-label">Documento</label>
              <input
                className="form-control"
                id="inputForm"
                aria-describedby="docHelp"
                value="Document@user"
                disabled
              />
            </div>
            <div className="form-group mb-2 mt-4">
              <label id="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="inputForm"
                aria-describedby="nameHelp"
                value="Name@user"
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
                value="Lastname@user"
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
                value="Lastname2@user"
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
                value="Email@user"
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
                value="Password@user"
              />
            </div>
          </form>
          <div className="d-flex col-12 mt-4">
            <button
              className="btn btn-block btn-success d-block m-auto col-4"
              type="submit"
              id="btn_editdatos"
            >
              <strong>Editar datos</strong>
            </button>
            <button
              className="btn btn-block btn-success d-block m-auto col-4"
              type="submit"
              id="btn_elimcuenta"
            >
              <strong>Eliminar cuenta</strong>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Perfil;
