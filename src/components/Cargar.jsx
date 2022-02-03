import "../css/Cargar.css";

const Cargar = () => {
  return (
    <>
      <div className="bg-light vh-100 align-self-center">
        <div
          className="row-fluid col-12 justify-content-center d-flex align-items-center"
          id="label_spin"
        >
          <div
            className="spinner-border text-success"
            role="status"
            id="Spinner"
          ></div>
        </div>
        <div
          className="row-fluid col-12 justify-content-center d-flex"
          id="label_loading"
        >
          <span className="row-fluid text-success">© CowIndex</span>
        </div>
      </div>
    </>
  );
};

export default Cargar;
