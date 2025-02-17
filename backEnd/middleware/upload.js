const multer = require('multer');
const path = require('path');

// Configuración del almacenamiento de imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images'); // Guarda las imágenes en la carpeta 'images'
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Usa un nombre único
  }
});

const upload = multer({ storage: storage });

module.exports = upload;  // Exportamos el middleware para usarlo en las rutas
