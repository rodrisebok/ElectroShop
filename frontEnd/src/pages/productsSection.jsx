import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCarousel from "../components/listProducts"; // Verifica que esté bien importado

const ProductsSection = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        console.log("Productos recibidos:", response.data); // Verificar si llegan los datos
        setProductos(response.data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
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
    <section id="productos" className="container my-5">
      <h2 className="text-center mb-4">Most Wanted</h2>
      {productos.length > 0 ? (
        <ProductCarousel products={productos} />
      ) : (
        <p className="text-center">No hay productos para mostrar.</p>
      )}
    </section>
  );
};

export default ProductsSection;
