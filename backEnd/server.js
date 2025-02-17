const app = require('./app');  // Importamos la configuración de app.js
const cors=require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
