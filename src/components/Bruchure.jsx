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
    </>
  );
};

export default Bruchure;
