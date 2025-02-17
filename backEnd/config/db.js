const mongoose = require('mongoose');
require('dotenv').config();  // Esto carga las variables de entorno del archivo .env

const connectDB = async () => {
  try {
    // Obtener la URI desde las variables de entorno
    const uri = process.env.MONGO_URI;
    
    // Conectar a la base de datos
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Salir si no se puede conectar
  }
};

module.exports = connectDB;
