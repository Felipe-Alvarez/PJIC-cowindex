import "../css/lotes.css";
import { useState } from "react";
import Start from "./Start";
import ComponentLotes from "./componentLotes";
import Navbar from "./Navbar";
import { useEffect } from "react";


const Mislotes = () => {
  const [lotes, setLotes] = useState([]);

  useEffect(() => {
    if (window.localStorage.getItem("lotes")) {
      setLotes(JSON.parse(window.localStorage.getItem("lotes")));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lotes", JSON.stringify(lotes));
    console.log(lotes);
  }, [lotes]);

  const agregarLotes = (lote) => {
    console.log(lote);
    setLotes((old) => [...old, lote]);
  };

  const eliminarLotes = (id) => {
    setLotes((old) => old.filter((item) => item.id !== id));
  };

  const editarLotes = (id) => {
    const editarLotes = lotes.map((item) =>
      item.id === id ? { ...item, prioridad: !item.prioridad } : item
    );

    setLotes(editarLotes);
  };

  return (
    <>
      <Navbar />
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
          <buttom
            id="btn-crelote"
            className="btn btn-success col-3 ms-auto me-5"
            data-bs-toggle="modal"
            data-bs-target="#modal-crear"
          >
            Crear nuevo lote
          </buttom>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="modal-crear"
        data-bs-keyboard="true"
        tabindex="-1"
        aria-labelledby="modal-crearLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content" id="modal-edit">
            <div className="modal-header bg-success text-light" id="modal-header">
              <h3 className="modal-title" id="modal-crearLabel">
                Crear lote
              </h3>
              <button
                type="button"
                id="close-buttom"
                className="btn-close btn-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Start agregarLotes={agregarLotes}/>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {lotes.map((item) => (
            <ComponentLotes
              key={item.id}
              lote={item}
              eliminarLotes={eliminarLotes}
              editarLotes={editarLotes}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Mislotes;
