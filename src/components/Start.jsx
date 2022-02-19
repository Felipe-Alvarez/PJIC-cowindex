import React from "react";
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
  // }

  return (
    <Formik
      initialValues={{
        ID_LOTE: "",
        CANTIDAD_GANADO_LOTE: "",
        FECHA_LOTE: "",
        TIPO_LOTE: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        Axios.post("https://api-cow.felipealvarez8.repl.co/api/lotes/agregar", {
          ID_LOTE: uuidv4(),
          CANTIDAD_GANADO_LOTE: values.CANTIDAD_GANADO_LOTE,
          FECHA_LOTE: values.FECHA_LOTE,
          TIPO_LOTE: values.TIPO_LOTE,
        })
          .then(function (res) {
            console.log(res);
            Swal.fire({
              title: "Lote creado",
              text: "Se ha registrado correctamente",
              icon: "success",
              confirmButtonText: "Aceptar",
            }).then((res) => {
              if (res.isConfirmed === true) {
                window.location.href = "/lotes";
              }
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
        {/* form NRO VACAS */}
        <div className="form-group mb-2 mt-4">
          <label htmlFor="name" id="form-label">
            Cantidad de animales
          </label>
          <Field
            type="number"
            className="form-control"
            id="inputForm"
            placeholder="Ingrese el número de animales"
            name="CANTIDAD_GANADO_LOTE"
          />
        </div>
        <div className="form-group mb-2 mt-4">
          <label htmlFor="name" id="form-label">
            Tipo de lote
          </label>
          <Field
            type="text"
            className="form-control"
            id="inputForm"
            placeholder="Ingrese el tipo de lote (Carne, crianza, etc)"
            name="TIPO_LOTE"
          />
        </div>
        <div className="form-group mb-2 mt-4">
          <label htmlFor="name" id="form-label">
            Fecha de creación
          </label>
          <Field
            type="date"
            className="form-control"
            id="inputForm"
            placeholder="Fecha de creación"
            name="FECHA_LOTE"
          />
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
