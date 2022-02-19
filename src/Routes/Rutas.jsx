import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import Registro from "../components/register";
import Start from "../components/Start";
import Mislotes from "../components/Mislotes";
import Ganado from "../components/Ganado";
import Perfil from "../components/Usuario";
import Bruchure from '../components/Bruchure';

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bruchure />}></Route>
        <Route path="/login" element={<App />}></Route>
        <Route path="/crear-lote" element={<Start />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/lotes" element={<Mislotes />}></Route>
        <Route path="/ganado" element={<Ganado />}></Route>
        <Route path="/usuario" element={<Perfil />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
