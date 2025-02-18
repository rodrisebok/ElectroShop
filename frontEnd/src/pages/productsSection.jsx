/*import React, {useEffect,useState} from "react";
import axios from "axios";
import ProductCard from "../components/productCard";
import CarouselProducts from "../components/carouselProducts";

const ProductsSection = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/products") // Endpoint del backend
        .then((response) => {
          console.log(response.data)
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener los productos:", error);
        });
    }, []);
  
    return (
      <section id="productos" className="container my-5">
        <h2 className="text-center mb-4">Most Wanted</h2>

        <CarouselProducts products={products}/>
        <div className="row">
        
        </div>
      </section>
    );
  };
  
  export default ProductsSection;*/
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import ProductCarousel from '../components/carouselProducts';
  
  const ProductsSection = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/products');  // Reemplaza con la URL de tu API
          setProductos(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error al cargar productos:", error);
          setError('Hubo un error al cargar los productos.');
          setIsLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
  
    if (isLoading) {
      return <p>Cargando productos...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    return (
      <section id="productos" className="container my-5">
        <h2 className="text-center mb-4">Most Wanted</h2>
        <ProductCarousel products={productos} />
      </section>
    );
  };
  
  export default ProductsSection;
  