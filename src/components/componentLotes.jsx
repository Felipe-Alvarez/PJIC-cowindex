import React from 'react'

const componentLotes = ({ ComponentLotes }) => {
  // const { id, nombre, animal, tipolote, fecha, prioridad } = lotes

  // const { CANTIDAD_GANADO_LOTE, FECHA_LOTE, TIPO_LOTE } =
  //   ComponentLotes;
  return (
    <>
      <div className="col">
        <div className="card mb-4">
          <div className="card-body bg-success text-light">
            <h5 className="card-title">{}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-beetwen">
              <p>Cantidad de animales: </p>
              {/* <p>{CANTIDAD_GANADO_LOTE}</p> */}
            </li>
            <li className="list-group-item d-flex justify-content-beetwen">
              <p>tipo del lote: </p>
              {/* <p>{TIPO_LOTE}</p> */}
            </li>
            <li className="list-group-item d-flex justify-content-beetwen">
              <p>Fecha de creación: </p>
              {/* <p>{FECHA_LOTE}</p> */}
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
    </>
  );
};

export default componentLotes;
