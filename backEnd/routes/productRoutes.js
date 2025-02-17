const express = require('express');
const Product = require('../models/productModels');  // Importamos el modelo de producto
const upload = require('../middleware/upload');    // Importamos el middleware de Multer

const router = express.Router();

// Ruta para subir un producto con su imagen
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Crear un nuevo producto con la URL de la imagen
    const product = new Product({
      name: 'Product Name',       // Aquí puedes tomar los datos del body de la solicitud
      category: 'Product Category',
      price:"Product Price",
      image: '/images/' + req.file.filename,  // Guardamos la ruta de la imagen
    });

    await product.save();  // Guardamos el producto en la base de datos
    res.json({ message: 'Image uploaded successfully', product });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading image' });
  }
});

// Ruta para obtener todos los productos
router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' });
    }
  });
  

module.exports = router;  // Exportamos las rutas para usarlas en app.js
