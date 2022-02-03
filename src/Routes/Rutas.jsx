import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import Registro from "../components/register";
import Lotes from "../components/Lotes";
import Mislotes from "../components/Mislotes";

const Rutas = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/crear-lote" element={<Mislotes />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/lotes" element={<Lotes />}></Route>
        </Routes>
    </BrowserRouter>
  ); 
};

export default Rutas;
