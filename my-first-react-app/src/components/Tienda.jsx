import React, { useState, useEffect } from "react";
import ProductsCards from "./ProducsCards";
import Navbar from "./Navbar";

const Tienda = () => {
  const [clothingProducts, setClothingProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (clothingProducts.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          const clothingProducts = data.filter(
            (product) =>
              product.category === "men's clothing" ||
              product.category === "women's clothing"
          );
          setClothingProducts(clothingProducts);
        });
    }
  }, [clothingProducts]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
        {clothingProducts.map((product) => (
          <ProductsCards key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.title} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tienda;
