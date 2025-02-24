import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'; // Asegúrate de importar desde 'react-dom/client'
import App from './app'; // Tu componente App
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter para la navegación

const root = ReactDOM.createRoot(document.getElementById('root'));

// Envuelve tu App en Router para habilitar la navegación entre páginas
root.render(
  <Router>
    <App />
  </Router>
);
