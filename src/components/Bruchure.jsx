import React from "react";
import "../css/Bruchure.css";
import { Link } from "react-router-dom";

const Bruchure = () => {
  return (
    <>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" id="info">
        <div className="container context">
          <h1 className="text-success">Bienvenido a cowindex</h1>
          <hr />
          <div className="row w-auto">
            <Link to="/login" className="col-3 btn info m-auto" id="buttom-wel">
              Prueba el aplicativo
            </Link>
          </div>
        </div>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="container-fluid h-auto" id="welcome">
        <div className="container h-100 ms-0 col-12 p-2">
          <div className="col-6 h-50 text-success align-items-end d-flex">
            <div className="text-center p-4" id="text-wel">
              <h2>Inicia en el aplicativo</h2>
              <hr />
              <h5>
                Aquí podrás emprender tu aventura en el aplicativo cowindex
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid vh-100" id="contactus"></div>
      <div className="container-fluid vh-100" id="footer"></div>
    </>
  );
};

export default Bruchure;
