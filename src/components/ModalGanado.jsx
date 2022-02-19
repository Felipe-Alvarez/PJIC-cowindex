import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import "../css/Start.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";
import Axios from "axios";

const ModalGanado = () => {
  const [idLote, setIdLote] = useState([]);
  const pintarID = async () => {
    try {
      const res = await fetch(
        "https://API-COW.felipealvarez8.repl.co/api/lotes"
      );
      // console.log(res);
      const datos = await res.json();
      setIdLote(datos);
      console.log(datos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pintarID();
  }, []);

  //   const validation = (values) => {
  //     let errors = {};
  //     if (!values.NOMBRE_GANADO) {
  //       errors.NOMBRE_GANADO = "Name is required!";
  //     }
  //     if (!values.RAZA_GANADO) {
  //       errors.RAZA_GANADO = "Last name is required!";
  //     }

  //     if (!values.TIPO_GANADO) {
  //       errors.TIPO_GANADO = "Team is required!";
  //     }
  //     return Swal.fire({
  //       title: "Error",
  //       text: errors,
  //       icon: "error",
  //       confirmButtonText: "Aceptar",
  //     });
  //   };

  return (
    <>
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
          Axios.post(
            "https://api-cow.felipealvarez8.repl.co/api/ganado/agregar",
            {
              ID_GANADO: uuidv4(),
              NOMBRE_GANADO: values.NOMBRE_GANADO,
              RAZA_GANADO: values.RAZA_GANADO,
              TIPO_GANADO: values.TIPO_GANADO,
              ID_LOTE: values.ID_LOTE,
            }
          )
            .then((res) => {
              console.log(res);
              Swal.fire({
                title: "Ganado agregado",
                text: "Se ha registrado correctamente",
                icon: "success",
                confirmButtonText: "Aceptar",
              }).then((res) => {
                if (res.isConfirmed === true) {
                  window.location.href = "/ganado";
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
        // validate={validation}
      >
        <div
          className="modal fade"
          id="modal-crear"
          data-bs-keyboard="true"
          tabIndex="-1"
          aria-labelledby="modal-crearLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content" id="modal-edit">
              <div
                className="modal-header bg-success text-light"
                id="modal-header"
              >
                <h3 className="modal-title" id="modal-crearLabel">
                  Agregar ganado
                </h3>
                <button
                  type="button"
                  id="close-buttom"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
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
                      required
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
                      {idLote.map((item) => {
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
                      Agregar ganado
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default ModalGanado;
