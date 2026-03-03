import React from "react";
import "./Home.css";
import ProductCard from "./ProductCard";

function Home() {

  const products = [
    {
      name: "Pre Workout",
      price: 2499,
      image: "/images/preworkout.jpg"
    },
    {
      name: "Mass Gainer",
      price: 2999,
      image: "/images/mass-gainer.jpg"
    },
    {
      name: "Plant Protein",
      price: 1999,
      image: "/images/plant-protein.jpg"
    },
    {
      name: "Shaker Bottle",
      price: 499,
      image: "/images/shaker.png"
    },
    {
      name: "Electrolyte",
      price: 299,
      image: "/images/electrolyte.jpg"
    },
    {
      name: "Gym Gloves",
      price: 699,
      image: "/images/gloves.jpg"
    }
  ];

  return (
    <div>

      <div className="hero">

        <div className="hero-content">

          <h1>FitFuel 💪</h1>

          <p>Fuel Your Fitness Journey</p>

        </div>

      </div>


      <div className="product-section">

        <h2>Our Products</h2>

        <div className="product-grid">

          {products.map((product, index) => (

            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;