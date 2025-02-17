import React from "react";

const ProductCard= ({category,price,name,image})=>{
    return(
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={image} className="card-img-top" alt="Imagen Producto" />
                <div className="card-body text-center">
                    <h5 className="card-name">{name}</h5>
                    <p className="card-category">{category}</p>
                    <p className="card-text">{price}</p>
                    <button className="btn btn-warning">Ver más</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;