import Navar from "./Navbar";
import React from "react";
import "../css/Start.css";
import ModalGanado from "./ModalGanado";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Cargar from "./Cargar";
import { v4 as uuidv4 } from "uuid";


const Ganado = () => {
  const [ganadoPintado, setGanadoPintado] = useState([]);
  const [loading, setLoading] = useState(false);
  const pintarGanado = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://API-COW.felipealvarez8.repl.co/api/ganado"
      );
      // console.log(res);
      const datos = await res.json();
      setGanadoPintado(datos);
      console.log(datos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    pintarGanado();
  }, []);

  if (loading) {
    return <Cargar />;
  }

  return (
    <>
      <Navar />
      <div className="container">
        <div className="row-fluid mt-4 justify-content-center d-flex">
          <div
            id="btn-crelote"
            className="btn btn-success col-lg-4 col-12"
            data-bs-toggle="modal"
            data-bs-target="#modal-crear"
          >
            Agregar nuevo ganado
          </div>
        </div>
      </div>
      <ModalGanado />
      <br />
      <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {ganadoPintado.map((item) => {
              return (
                <div className="col" key={uuidv4()}>
                  <div className="card mb-4">
                    <div className="card-body bg-success text-light">
                      <h5 className="card-title">{item.NOMBRE_GANADO}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-beetwen">
                        <p className="me-2">Raza del ganado: </p>
                        <p>{item.RAZA_GANADO}</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-beetwen">
                        <p className="me-2">tipo del ganado: </p>
                        <p>{item.TIPO_GANADO}</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-beetwen">
                        <p className="me-2">Pertenece al lote: </p>
                        <p>{item.ID_LOTE}</p>
                      </li>
                    </ul>
                    <div className="card-body d-flex justify-content-end w-100">
                      <button
                        className="btn btn-danger me-3"
                        onClick={() => {
                          // eliminarLotes(id);
                        }}
                      >
                        Eliminar ganado
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          // editarLotes(id);
                        }}
                      >
                        Editar ganado
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

export default Ganado;
