const express=require("express");
const connectDB=require("./config/mongoose");
const dotenv=require("dotenv");
const productRoutes = require("./routes/productRoutes")

dotenv.config();

const app=express();

connectDB();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Funcionando correctamente")
})

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})


app.use('/api', productRoutes);