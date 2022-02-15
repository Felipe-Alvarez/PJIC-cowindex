import React from "react";
import "../css/Bruchure.css";
import { Link } from "react-router-dom";

const Bruchure = () => {
  return (
    <>
      <div className="container-fluid vh-100" id="info">
        <div className="context">
          <h1>Bienvenido a cowindex</h1>
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
      <div className="container-fluid vh-100" id="welcome">
        <div className="container h-100 ms-0 col-12 p-2">
          <div
            className="col-6 h-50 text-success align-items-end d-flex"
          >
            <div className="text-center p-4" id="text-wel">
              <h2>Inicia en el aplicativo</h2>
              <hr />
              <h5>
                Aquí podrás emprender tu aventura en el aplicativo cowindex
              </h5>
            </div>
          </div>
          <br />
          <div className="col-6 d-flex p-2 justify-content-center">
            <Link to="/login" className="col-6 btn" id="buttom-wel">
              Prueba el aplicativo
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid vh-100" id="contactus"></div>
      <div className="container-fluid vh-100" id="footer"></div>
    </>
  );
};

export default Bruchure;
