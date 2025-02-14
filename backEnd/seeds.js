const mongoose = require("mongoose");
const Products = require("./models/productModel");

// Conexión a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ElectroShop", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
    process.exit(1);
  }
};

const seedProducts = async () => {
  try {
    await connectDB(); // Conectar a la base de datos
    await Products.deleteMany({});
    console.log("Productos Eliminados");
    await Products.insertMany([
      {
        name: "Iphone X",
        category: "Phones",
        price: 200,
        image: "imgIphoneX.jpg",
      },
      {
        name: "Iphone 15",
        category: "Phones",
        price: 800,
        image: "imgIphone15.jpg",
      },
      {
        name: "Mouse",
        category: "Peripherals",
        price: 50,
        image: "imgMouse.jpg",
      },
      {
        name: "Headsets",
        category: "Peripherals",
        price: 130,
        image: "imgHeadsets.jpg",
      },
      {
        name: "Office Chair",
        category: "Furniture",
        price: 120,
        image: "imgOfficeChair.jpg",
      },
      {
        name: "Gaming Chair",
        category: "Furniture",
        price: 200,
        image: "imgGamingChair.jpg",
      },
      {
        name: "Desk",
        category: "Furniture",
        price: 180,
        image: "imgDesk.jpg",
      },
    ]);
    console.log("Productos insertados correctamente");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error al insertar productos:", error);
    mongoose.connection.close();
  }
};

seedProducts();