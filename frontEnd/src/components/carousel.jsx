import React from "react";
import "../styles/styles.css"

const Carousel = () => {
    return (
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src="/img/imgCompu.jpg" className="d-block w-100" alt="Phones" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="/img/imgOffice.jpg" className="d-block w-100" alt="Oficina" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="/img/imgCelu (1).jpg" className="d-block w-100" alt="Computadora" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };
  
  export default Carousel;