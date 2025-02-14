const express = require('express');
const Product = require("../models/productModel");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        console.log("Productos encontrados:", products); // 🔍 Debug en la consola del servidor
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
