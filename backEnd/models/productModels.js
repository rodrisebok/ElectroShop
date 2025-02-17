const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price:{type:Number,required:true},
  image: { type: String, required: true },  // Guardaremos la ruta de la imagen
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;  // Exportamos el modelo
