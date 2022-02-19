import "../css/Start.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormulario } from "../Hooks/useFormulario";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
// import Cargar from "./Cargar";

const Start = ({ agregarLotes }) => {
  const initialState = {
    nombre: "",
    animal: 0,
    tipolote: "",
    fecha: Date,
    prioridad: false,
  };

  const [inputs, handleChange, reset] = useFormulario(initialState);

  const { nombre, animal, tipolote, fecha, prioridad } = inputs;

  const swalError = () => {
    Swal.fire({
      title: "Error!",
      text: "No deje espacios en blanco",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      e.target[0].focus();
      swalError();
      return;
    }
    // if (!tipolote.trim()) {
    //   e.target[2].focus();
    //   swalError();
    //   return;
    // }

    Swal.fire({
      title: "Lote agregado",
      text: "El lote fue agregado",
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    agregarLotes({
      nombre,
      animal,
      tipolote,
      fecha,
      prioridad,
      id: uuidv4(),
    });

    reset(initialState);
    // console.log(lote);
  };

  return (
      <form className="p-2 mb-5" id="form" onSubmit={handleSubmit}>
        {/* form LOTE */}
        <div className="form-group mb-2 mt-4">
          <label id="form-label">Nombre del lote</label>
          <input
            type="text"
            className="form-control"
            id="inputForm"
            placeholder="Ingrese el nombre del lote"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        {/* form NRO VACAS */}
        <div className="form-group mb-2 mt-4">
          <label htmlFor="name" id="form-label">
            Cantidad de animales
          </label>
          <input
            type="number"
            className="form-control"
            id="inputForm"
            placeholder="Ingrese el número máximo de animales"
            name="animal"
            value={animal}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2 mt-4">
          <label htmlFor="name" id="form-label">
            Tipo de lote
          </label>
          <input
            type="text"
            className="form-control"
            id="inputForm"
            placeholder="Añada para qué está destinado el lote"
            name="tipolote"
            value={tipolote}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2 mt-4">
          <label htmlFor="name" id="form-label">
            Fecha de creación
          </label>
          <input
            type="date"
            className="form-control"
            id="inputForm"
            placeholder="Añada para qué está destinado el lote"
            name="fecha"
            value={fecha}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-4">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="check"
              name="prioridad"
              checked={prioridad}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Priorizar lote
            </label>
          </div>
        </div>

        <div className="w-100 d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-success col-10">
            Agregar lote
          </button>
        </div>
      </form>
  );
};

export default Start;
