import React, { useState, useEffect } from 'react';
import ProductCard from './productCard';

const ProductCarousel = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log("Productos recibidos en el carousel:", products);
  }, [products]);

  // Función para pasar a la siguiente "slide"
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Función para pasar a la anterior "slide"
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Mostrar los productos
  const displayedProducts = products.slice(currentIndex, currentIndex + 3);  // Mostrar 3 productos a la vez

  return (
    <div className="product-carousel">
      <div className="carouselProducts-container">
        {/* Flecha para ir hacia la izquierda */}
        <button className="carouselProducts-control prev" onClick={prevSlide}>
          &#10094;
        </button>

        {/* Contenedor de productos */}
        <div className="carouselProducts-items">
          {displayedProducts.map((product, index) => (
            <div
              key={product._id}
              className={`carouselProduct-item ${index === 1 ? 'center' : ''}`}
            >
              <ProductCard
                key={product._id}
                image={product.image}
                name={product.name}
                price={`$${product.price}`}
                category={product.category}
              />
            </div>
          ))}
        </div>

        {/* Flecha para ir hacia la derecha */}
        <button className="carouselProducts-control next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
