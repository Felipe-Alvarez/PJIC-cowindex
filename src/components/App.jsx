import "bootstrap/dist/css/bootstrap.min.css";
import "../css/app.css";
import { Link } from "react-router-dom";
import { GrKey } from "react-icons/gr";
import LogoCow from "../images/cowindex.png";
// import { useHistory } from "react-router-dom";
// import Axios from "axios";

// import { useState } from "react";
//import Cargar from "./Cargar";

const App = () => {
  // const url = 'https://api-cow.felipealvarez8.repl.co/api/usuario'

  // const handleSubmit = (e) =>{
  //     e.preventDefault();
  // }

  // const handleChange = async (e) => {

  // }
  // const [user, setuser] = useState(null);
  // async function login(email, pass){
  //   const { data } = await Axios.post('https://api-cow.felipealvarez8.repl.co/api/usuario', {
  //     email,
  //     pass
  //   })
  // }

  // const history = useHistory();

  // function login() {
  //   const usuario = {
  //     correo: document.getElementById("inputForm").value,
  //     clave: document.getElementById("inputFormPass").value,
  //   };
  //   Axios
  //     .post("https://API-COW.felipealvarez8.repl.co/api/usuario/auth", usuario)
  //     .then(function ({ data, status }) {
  //       // Se ejecuta siempre que el servidor ejecute todo correctamente
  //       if (status === 200) {
  //         // history.push("/");
  //       } else {

  //       }
  //     })
  //     .catch(function (error) {
  //       // Se ejecuta siempre que ocurra algún error
  //       console.log(error);
  //     });
  // }

  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center"
      id="container"
    >
      {/* PARA ORGANIZAR: JUSTIFY = EJE X, ALING = EJE Y */}
      <form className="ms-5 col-lg-4 col-md-10 col-sm-10 col-12 p-2" id="form">
        <div className="d-flex justify-content-center">
          <img
            src={LogoCow}
            className="img img-fluid"
            alt="cowindex-logo.png"
          />
        </div>
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
          <label htmlFor="name" id="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="inputFormPass"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <div className="w-100 d-flex justify-content-center mt-4">
          <Link
            className="btn btn-success d-flex col-12 justify-content-between"
            to="/lotes"
            id="link-login"
            type="submit"
          >
            <div className="">Iniciar sesión</div>
            <div className="">
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
