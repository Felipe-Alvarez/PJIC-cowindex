import "bootstrap/dist/css/bootstrap.min.css";
import "../css/lotes.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Lotes = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <div id="card-lote" className="card col-4 bg-success ms-auto mt-5">
          <div className="card-body">
            <div class="d-grid gap-2 col-9 mx-auto">
              <button id="btn-lote" className="btn btn-light btn-lg" to="/">
                Registrar ganado
              </button>
              <br />
              <button id="btn-lote" className="btn btn-light btn-lg" to="/">
                Editar ganado
              </button>
              <br />
              <button id="btn-lote" className="btn btn-light btn-lg" to="/">
                Eliminar ganado
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
        <Link id="btn-crelote" className="btn btn-success col-3 ms-auto me-5" to="/crear-lote">
          Crear nuevo lote
        </Link>
        </div>
      </div>
    </>
  );
};

export default Lotes;