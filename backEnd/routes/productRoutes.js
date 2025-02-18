const express = require('express');
const Product = require('../models/productModels');  // Importamos el modelo de producto
const upload = require('../middleware/upload');    // Importamos el middleware de Multer

const router = express.Router();

// Ruta para subir un producto con su imagen
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
   
    const product = new Product({
      name: 'Product Name',       
      category: 'Product Category',
      price:"Product Price",
      image: '/images/' + req.file.filename, 
    });

    await product.save();  
    res.json({ message: 'Image uploaded successfully', product });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading image',error });
  }
});


router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' });
    }
  });
  

module.exports = router; 
