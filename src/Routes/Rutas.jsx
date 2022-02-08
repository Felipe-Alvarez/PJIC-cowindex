import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import Registro from "../components/register";
import Lotes from "../components/Lotes";
import Mislotes from "../components/Mislotes";
import Ganado from "../components/Ganado";
import Perfil from '../components/Usuario';

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/crear-lote" element={<Mislotes />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/lotes" element={<Lotes />}></Route>
        <Route path="/ganado" element={<Ganado></Ganado>}></Route>
        <Route path="/usuario" element={<Perfil></Perfil>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
