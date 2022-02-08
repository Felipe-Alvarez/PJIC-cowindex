import "../css/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaThLarge } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaStickerMule } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const ModalExit = () => {
    Swal.fire({
      title: "Cerrar sesión",
      text: "¿Estás seguro de cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    })
      .then((res) => {
        if (res.isConfirmed === true) {
          window.location.href = `/`;
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "Hubo un error",
          icon: "warning",
        });
        console.log(error);
      });
  };

  return (
    <>
      <div
        className="row-fluid bg-success col-12 d-flex justify-content-center"
        name=""
        id="nav-on"
      >
        <Link id="btn" className="btn btn-primary" to="/lotes">
          <FaThLarge></FaThLarge>
          <div className="">Lotes</div>
        </Link>
        <Link id="btn" className="btn btn-primary" to="/ganado">
          <FaStickerMule></FaStickerMule>
          <div className="">Ganado</div>
        </Link>
        <Link id="btn" className="btn btn-primary" to="/usuario">
          <FaUserAlt></FaUserAlt>
          <div className="">Usuario</div>
        </Link>
        <buttom
          id="btn"
          className="btn btn-primary"
          type="buttom"
          onClick={ModalExit}
        >
          <FaSignOutAlt></FaSignOutAlt>
          <div className="">Salir</div>
        </buttom>
      </div>
    </>
  );
};

export default Navbar;
