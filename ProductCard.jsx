import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, image }) {

  return (

    <div className="product-card">

      <img src={image} className="product-image" />

      <h3>{name}</h3>

      <p>₹{price}</p>

      <button>Buy Now</button>

    </div>

  );

}

export default ProductCard;