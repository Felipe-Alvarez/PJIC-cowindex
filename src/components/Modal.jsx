import React from "react";
import Start from "./Start";

const Modal = () => {
  return (
    <>
      {/* Modal */}
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
                Crear lote
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
              <Start />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
