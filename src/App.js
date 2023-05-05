import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
// --- BOOTSTRAP ---
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';

import NavBar from './navbar';
import Catalogo from "./Catalogo_ropa";
import Producto from './Producto_ropa';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Catalogo/>} />
        <Route path="/:tipo" element={<Producto/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
