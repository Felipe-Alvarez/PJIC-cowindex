const componentLotes = ({ lote, eliminarLotes, editarLotes }) => {
  const { id, nombre, animal, tipolote, fecha, prioridad } = lote;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mb-4">
      <div className="ms-2 me-auto col-10">
        <div className="fw-bold">Nombre del lote:{nombre}</div>
        <hr className="w-100" />
        <p className="fw-bold mb-2">tipo del lote:</p>
        {tipolote}
        <p className="fw-bold mt-2">Cantidad de animales: {animal}</p>
        <p className="fw-bold mt-2">Fecha de creación: {fecha}</p>
        <div className="d-flex justify-content-end w-100">
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
      <span className="badge bg-primary rounded-pill">
        {prioridad ? "Prioritario" : "No prioritario"}
      </span>
    </li>
  );
};

export default componentLotes;
