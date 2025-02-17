const express = require('express');
const productRoutes = require('./routes/productRoutes');  // Importamos las rutas de productos
const mongoose=require("mongoose");
const cors=require("cors");
const path=require("path");
const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost:27017/ElectroShop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database connection error: ', err));

app.use(express.json());  // Para parsear el cuerpo de las solicitudes como JSON
//app.use('/images', express.static('images'));  // Servir las imágenes de la carpeta 'images'
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/products', productRoutes);  // Usar las rutas de productos


module.exports = app;  // Exportamos el app para usarlo en server.js
