const mongoose = require('mongoose');

// Definir el esquema del producto
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category:{
    type: String,
    required:true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// Crear el modelo
const Product = mongoose.model('Product', productSchema);

module.exports = Product;