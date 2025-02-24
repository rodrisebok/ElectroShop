import React from "react";
import ProductCard from "./productCard"; // Verifica que esté bien importado

const ProductCarousel = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          name={product.name}
          category={product.category}
          price={`$${product.price}`}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductCarousel;
