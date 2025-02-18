const mongoose = require('mongoose');
const Product = require('./models/productModels'); // Importamos el modelo de producto

// Conectar a la base de datos
mongoose.connect('mongodb://localhost:27017/ElectroShop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Database connected');
})
.catch((err) => {
  console.log('Database connection error: ', err);
});

// Crear algunos productos con imágenes
const seedProducts = async () => {
    try {
      const products = [
        /*{
            name: "Iphone X",
            category: "Phones",
            price: 200,
            image: "/images/imgIphoneX.jpg",
          },*/
          {
            name: "Iphone 15",
            category: "Phones",
            price: 800,
            image: "/images/imgIphone15.jpg",
          },
          {
            name: "Mouse",
            category: "Peripherals",
            price: 50,
            image: "/images/imgMouse.jpg",
          },
          {
            name: "Headsets",
            category: "Peripherals",
            price: 130,
            image: "/images/imgHeadsets.jpg",
          }//,
          /*{
            name: "Office Chair",
            category: "Furniture",
            price: 120,
            image: "/images/imgOfficeChair.jpg",
          },
          {
            name: "Gaming Chair",
            category: "Furniture",
            price: 200,
            image: "/images/imgGamingChair.jpg",
          },
          {
            name: "Desk",
            category: "Furniture",
            price: 180,
            image: "/images/imgDesk.jpg",
          },*/
      ];
  
      // Borrar todos los productos previos para limpiar la base de datos
      await Product.deleteMany({});
  
      // Insertar los productos en la base de datos
      await Product.insertMany(products);
  
      console.log('Products have been seeded');
      mongoose.disconnect(); // Desconectarse de la base de datos después de insertar los productos
    } catch (err) {
      console.log('Error seeding products:', err);
    }
  };
  
  seedProducts(); // Llamar a la función para ejecutar el seeding