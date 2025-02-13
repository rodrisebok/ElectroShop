import React from "react";
import Navbar from "../src/components/navBar";
import Home from "../src/pages/home" ;
import "./styles/styles.css";

const App = () => {
  return (
    <div>
        <header>
            <img src="img/logo.png" alt="logo" id="logo"/>
        </header>
        <Navbar />
        <Home />
        <footer><p>© 2025 Electro Shop - Todos los derechos reservados</p></footer>
    </div>
  );
};

export default App;