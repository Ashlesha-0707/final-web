 
import { Routes, Route } from "react-router-dom";
 
import Login from "./pages/Login";
import "./App.css";

function App() {

  const products = [
    { name: "Pre Workout", price: 2499, image: "/images/preworkout.jpg" },
    { name: "Mass Gainer", price: 2999, image: "/images/massjpg.jpg" },
    { name: "Plant Protein", price: 1999, image: "/images/plantprotine.jpg" },
    { name: "Shaker Bottle", price: 499, image: "/images/shaker.png" },
    { name: "Electrolyte", price: 299, image: "/images/electrolyte.jpg" },
    { name: "Gym Gloves", price: 699, image: "/images/gloves.jpg" }
  ];

  // ✅ Cart state with localStorage
 
  // ✅ Save cart
 
   
  return (
    <>
     
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="hero">
                <div className="hero-card">
                  <h1>FitFuel 💪</h1>
                  <p>Fuel Your Fitness Journey</p>
                </div>
              </div>

              <h2 className="title">Our Products</h2>

              <div className="products">
                {products.map((product, index) => (
                  <div className="card" key={index}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>₹{product.price}</p>
                    <button onClick={() => addToCart(product)}>
                      Add to Cart 🛒
                    </button>
                  </div>
                ))}
              </div>
            </>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;