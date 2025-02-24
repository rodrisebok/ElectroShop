import React from "react";
import { Route, Routes } from "react-router-dom"; // Cambié 'Switch' por 'Routes'
import Navbar from "../src/components/navBar";
import Home from "../src/pages/home";
import Shop from "../src/pages/shop"; // Asegúrate de importar tu nueva página Shop
import "./styles/styles.css";

const App = () => {
  return (
    <div>
      <header>
        <img src="img/logo.png" alt="logo" id="logo" />
      </header>
      <Navbar />
      
      {/* Rutas para diferentes páginas usando Routes en vez de Switch */}
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* Ruta para la página principal (Home) */}
        <Route path="/shop" element={<Shop />} /> {/* Ruta para la página de productos (Shop) */}
      </Routes>
      
      <footer>
        <p>© 2025 Electro Shop - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default App;
