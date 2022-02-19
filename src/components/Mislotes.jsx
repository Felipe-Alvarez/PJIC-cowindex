import React from "react";
import "../css/lotes.css";
import Navbar from "./Navbar";
import Modal from "./Modal";
// import ComponentLotes from "./componentLotes";
import { useState, useEffect } from "react";
import Cargar from "./Cargar";
import { v4 as uuidv4 } from "uuid";

const Mislotes = () => {
  // const [lotes, setLotes] = useState([]);

  // useEffect(() => {
  //   if (window.localStorage.getItem("lotes")) {
  //     setLotes(JSON.parse(window.localStorage.getItem("lotes")));
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("lotes", JSON.stringify(lotes));
  // }, [lotes]);

  // const agregarLotes = (lote) => {
  //   setLotes((old) => [...old, lote]);
  // };

  // const eliminarLotes = (id) => {
  //   setLotes((old) => old.filter((item) => item.id !== id));
  // };

  // const editarLotes = (id) => {
  //   const editarLotes = lotes.map((item) =>
  //     item.id === id ? { ...item, prioridad: !item.prioridad } : item
  //   );

  //   setLotes(editarLotes);
  // };
  // if(!loadLotes){
  //   return(
  //     <Cargar />
  //   );
  // }
  const [lotePintado, setLotePintado] = useState([]);
  const [loading, setLoading] = useState(false);
  const pintarLotes = async () => {
    try {
      setLoading(true)
      const res = await fetch(
        "https://API-COW.felipealvarez8.repl.co/api/lotes"
      );
      // console.log(res);
      const datos = await res.json();
      setLotePintado(datos);
      console.log(datos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    pintarLotes();
  }, []);

  if (loading) {
    return <Cargar />
  }
    return (
      <>
      <Navbar />
        <div className="container">
          <div className="row-fluid mt-4 justify-content-center d-flex">
            <div
              id="btn-crelote"
              className="btn btn-success collg-4 col-12"
              data-bs-toggle="modal"
              data-bs-target="#modal-crear"
            >
              Crear nuevo lote
            </div>
          </div>
        </div>
        <Modal />
        <br />
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {lotePintado.map((item) => {
              return (
                <div className="col" key={uuidv4()}>
                  <div className="card mb-4">
                    <div className="card-body bg-success text-light">
                      <h5 className="card-title">{item.ID_LOTE}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-beetwen">
                        <p className="me-2">Cantidad de animales: </p>
                        <p>{item.CANTIDAD_GANADO_LOTE}</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-beetwen">
                        <p className="me-2">tipo del lote: </p>
                        <p>{item.TIPO_LOTE}</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-beetwen">
                        <p className="me-2">Fecha de creación: </p>
                        <p>{item.FECHA_LOTE}</p>
                      </li>
                      {/* <li className="list-group-item">
              <span className="badge bg-primary rounded-pill">
                {prioridad ? "Prioritario" : "No prioritario"}
              </span>
            </li> */}
                    </ul>
                    <div className="card-body d-flex justify-content-end w-100">
                      <button
                        className="btn btn-danger me-3"
                        onClick={() => {
                          // eliminarLotes(id);
                        }}
                      >
                        Eliminar lote
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          // editarLotes(id);
                        }}
                      >
                        Editar lote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
};

export default Mislotes;
