// ProductsCards.js
import React from "react";

const ProductsCards = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-600">${product.price}</p>
        <button onClick={handleAddToCart} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductsCards;
