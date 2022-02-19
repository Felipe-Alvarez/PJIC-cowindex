import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import "../css/Start.css";
import "bootstrap/dist/css/bootstrap.min.css";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";
import Axios from "axios";

const Start = () => {
  // const initialState = {
  //   nombre: "",
  //   animal: 0,
  //   tipolote: "",
  //   fecha: Date,
  //   prioridad: false,
  // };

  // const [inputs, handleChange, reset] = useFormulario(initialState);

  // const { nombre, animal, tipolote, fecha, prioridad } = inputs;

  // const swalError = () => {
  //   Swal.fire({
  //     title: "Error!",
  //     text: "No deje espacios en blanco",
  //     icon: "error",
  //     confirmButtonText: "Aceptar",
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!nombre.trim()) {
  //     e.target[0].focus();
  //     swalError();
  //     return;
  //   }
  //   // if (!tipolote.trim()) {
  //   //   e.target[2].focus();
  //   //   swalError();
  //   //   return;
  //   // }

  //   Swal.fire({
  //     title: "Lote agregado",
  //     text: "El lote fue agregado",
  //     icon: "success",
  //     confirmButtonText: "Aceptar",
  //   });

  //   agregarLotes({
  //     nombre,
  //     animal,
  //     tipolote,
  //     fecha,
  //     prioridad,
  //     id: uuidv4(),
  //   });

  //   reset(initialState);
  //   // console.log(lote);
  // };

  const [idsel, setIdsel] = useState([]);
  const pintarIDLote = async () => {
    try {
      const res = await fetch(
        "https://API-COW.felipealvarez8.repl.co/api/lotes"
      );
      // console.log(res);
      const datos = await res.json();
      setIdsel(datos);
      console.log(datos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pintarIDLote();
  }, []);

  return (
    <Formik
      initialValues={{
        ID_GANADO: uuidv4(),
        NOMBRE_GANADO: "",
        RAZA_GANADO: "",
        TIPO_GANADO: "",
        ID_LOTE: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        Axios.post("https://api-cow.felipealvarez8.repl.co/api/ganado", {
          ID_GANADO: values.ID_GANADO,
          NOMBRE_GANADO: values.NOMBRE_GANADO,
          RAZA_GANADO: values.RAZA_GANADO,
          TIPO_GANADO: values.TIPO_GANADO,
          ID_LOTE: values.ID_LOTE,
        })
          .then(function (res) {
            console.log(res);
            Swal.fire({
              title: "Usuario creado",
              text: "Se ha registrado correctamente",
              icon: "success",
              confirmButtonText: "Aceptar",
            });
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire({
              title: "Error",
              text: "No se pudo registrar correctamente. Revise los campos",
              icon: "error",
              confirmButtonText: "Aceptar",
            });
          });
      }}
    >
      <Form className="p-2 mb-5" id="form">
        {/* form LOTE */}
        <div className="form-group mb-2 mt-4">
          <label id="form-label">Nombre de animal</label>
          <Field
            type="text"
            className="form-control"
            id="inputForm"
            placeholder="Ingrese el nombre del animal"
            name="NOMBRE_GANADO"
          />
        </div>
        {/* form NRO VACAS */}
        <div className="form-group mb-2 mt-4">
          <label htmlFor="name" id="form-label">
            Raza ganado
          </label>
          <Field
            type="text"
            className="form-control"
            id="inputForm"
            placeholder="Ingrese el tipo de raza"
            name="RAZA_GANADO"
          />
        </div>
        <div className="form-group mb-2 mt-4">
          <label htmlFor="name" id="form-label">
            Destino del animal
          </label>
          <Field
            type="text"
            className="form-control"
            id="inputForm"
            placeholder="Añada para qué está destinado el animal"
            name="TIPO_GANADO"
          />
        </div>
        <div className="form-group mb-2 mt-4">
          <label htmlFor="name" id="form-label">
            Agregar a lote
          </label>
          <Field
            as="select"
            id="inputForm"
            className="form-control"
            name="ID_LOTE"
          >
            {idsel.map((item) => {
              return (
                <option key={uuidv4()} className="form-control">
                  {item.ID_LOTE}
                </option>
              );
            })}
          </Field>
        </div>
        <div className="w-100 d-flex justify-content-center mt-4">
          <Button type="submit" className="btn btn-success col-10">
            Agregar lote
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default Start;
