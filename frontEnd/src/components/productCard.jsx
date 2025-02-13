import React from "react";

const ProductCard= ({image,title,price})=>{
    return(
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}</p>
                    <button className="btn btn-warning">Ver más</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;