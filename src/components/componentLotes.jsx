const componentLotes = ({ lote, eliminarLotes, editarLotes }) => {
  const { id, nombre, animal, tipolote, fecha, prioridad } = lote;

  return (
    <>
      <div className="col">
        <div className="card mb-4">
          <div className="card-body bg-success text-light">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text text-light">Alguna descripción del usuario</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-beetwen">
              <p>Cantidad de animales: </p>
              <p>{tipolote}</p>
            </li>
            <li className="list-group-item d-flex justify-content-beetwen">
              <p>tipo del lote: </p>
              <p>{animal}</p>
            </li>
            <li className="list-group-item d-flex justify-content-beetwen">
              <p>Fecha de creación: </p>
              <p>{fecha}</p>
            </li>
            <li className="list-group-item">
              <span className="badge bg-primary rounded-pill">
                {prioridad ? "Prioritario" : "No prioritario"}
              </span>
            </li>
          </ul>
          <div className="card-body d-flex justify-content-end w-100">
            <button
              className="btn btn-danger me-3"
              onClick={() => {
                eliminarLotes(id);
              }}
            >
              Eliminar lote
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                editarLotes(id);
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
