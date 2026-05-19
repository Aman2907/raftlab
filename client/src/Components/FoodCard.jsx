import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const FoodCard = ({ food, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold">{food.name}</h2>

        <p className="text-gray-600 mt-2">{food.description}</p>

        <div className="flex items-center gap-1 text-yellow-500 mt-3">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-xs" />
          ))}

          <span className="text-sm">{food.rating}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">₹{food.price}</span>

          <button
            onClick={() => addToCart(food)}
            className="bg-white cursor-pointer text-orange-500 px-2 py-2 rounded-lg border border-orange-500 flex items-center gap-2"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
