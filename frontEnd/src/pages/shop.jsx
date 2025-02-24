import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/productCard"; // Asegúrate de importar el componente ProductCard

const Shop = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");  // Ajusta esta ruta si es necesario
        setProductos(response.data);
      } catch (error) {
        setError("Hubo un error al cargar los productos.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Todos los Productos</h2>
      <div className="row">
        {productos.map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            category={product.category}
            price={`$${product.price}`}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
