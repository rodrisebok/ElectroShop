import React from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "../styles/styles.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> {/* Enlace a la página principal */}
      <Link to="/shop">Shop</Link> {/* Enlace a la página de productos */}
      <Link to="#contact">Contacto</Link> {/* Enlace a la sección de contacto */}
    </nav>
  );
};

export default NavBar;
