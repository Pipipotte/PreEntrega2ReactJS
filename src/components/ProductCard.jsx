import React from "react";
import './ProductCard.css';
import { Link } from "react-router-dom";

//import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
  return (
    <div className="card">
      <img src={productData.images[0]} alt={productData.title} />
      <div className="card-body">
        <h5 className="card-title">{productData.title}</h5>
        <p className="card-text">{productData.description}</p>
        <p className="card-price">${productData.price}</p>
        <p className="card-stock">Stock: {productData.stock}</p>
        <Link to={`/item/${productData.id}`} >Ver más</Link>
        <p className="card-category">{productData.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
