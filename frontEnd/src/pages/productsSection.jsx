import React, {useEffect,useState} from "react";
import axios from "axios";
import ProductCard from "../components/productCard";

const ProductsSection = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/products") // Endpoint del backend
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener los productos:", error);
        });
    }, []);
  
    return (
      <section id="productos" className="container my-5">
        <h2 className="text-center mb-4">Most Wanted</h2>
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} image={product.image} title={product.title} price={`$${product.price}`} />
            ))
          ) : (
            <p>Cargando productos...</p>
          )}
        </div>
      </section>
    );
  };
  
  export default ProductsSection;