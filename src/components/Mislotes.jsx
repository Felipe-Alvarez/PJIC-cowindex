import "../css/lotes.css";
import { useState } from "react";
import Start from "./Start";
import ComponentLotes from "./componentLotes";
import { useEffect } from "react";

const Mislotes = () => {
  const [lotes, setLotes] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("lotes")) {
      setLotes(JSON.parse(localStorage.getItem("lotes")));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("lotes", JSON.stringify(lotes));
    console.log(lotes)
  }, [lotes]);

  const agregarLotes = (lote) => {
    console.log(lote);
    setLotes((old) => [...old, lote]);
  };

  const eliminarLotes = (id) => {
    setLotes((old) => old.filter((item) => item.id !== id));
  };

  const editarLotes = (id) => {
    const editarLotes = lotes.map((item) =>
      item.id === id ? { ...item, prioridad: !item.prioridad } : item
    );

    setLotes(editarLotes);
  };

  return (
    <>
      <Start agregarLotes={agregarLotes} />
      <div className="container">
        <br />
        <ul id="card" calssName="list-group list-group-numbered">
          {lotes.map((item) => (
            <ComponentLotes
              key={item.id}
              lote={item}
              eliminarLotes={eliminarLotes}
              editarLotes={editarLotes}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Mislotes;
