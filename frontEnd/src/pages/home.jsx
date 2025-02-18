import React from "react";
import Carousel from "../components/carousel";
import ProductsSection from "./productsSection";
import CarouselProducts from "../components/carouselProducts";

const Home=()=> {
    return(
        <div>
             <Carousel />
             <ProductsSection />
             <CarouselProducts />
        </div>
    )
}

export default Home;