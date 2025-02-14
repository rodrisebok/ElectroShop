const express = require("express");
const connectDB = require("./config/mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const cors=require("cors");

dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

// Rutas
app.get("/", (req, res) => {
    res.send("Funcionando correctamente");
});

app.use('/api/products', productRoutes);  // 👈 Ahora esta línea está en el lugar correcto

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
