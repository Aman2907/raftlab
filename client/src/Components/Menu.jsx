import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import { useSearchParams } from "react-router-dom";

const Menu = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [item, setItem] = useState(categoryFromUrl || "All");
  const [foods, setFoods] = useState([]);
  const [sortType, setSortType] = useState("popular");

  const { cart, setCart } = useContext(OrderContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const deliveryFee = 50;
  const total = subtotal + deliveryFee;
  const navigate = useNavigate();

  const filteredFood =
    item === "All" ? foods : foods.filter((food) => food.category === item);

  const sortedFoods = [...filteredFood];

  if (sortType === "price") {
    sortedFoods.sort((a, b) => a.price - b.price);
  }

  if (sortType === "rating") {
    sortedFoods.sort((a, b) => b.rating - a.rating);
  }

  if (sortType === "popular") {
    sortedFoods.sort((a, b) => b.rating - a.rating);
  }

  const addToCart = (food) => {
    const existingItem = cart.find((item) => item.id === food.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item,
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...food,
          quantity: 1,
        },
      ]);
    }
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );

    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await axios.get("https://raftlab-i23i.onrender.com/api/orders")

      setFoods(response.data);
    };

    fetchFoods();
  }, []);

  return (
    <section className="flex flex-col lg:flex-row gap-10 px-10 py-12 bg-gray-100 min-h-screen">
      {/* LEFT SIDE CATEGORY */}
      <div className="w-[160px] bg-white p-6 rounded-2xl shadow-md h-fit">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">Category</h2>

        <div className="flex flex-col gap-4 text-lg">
          <p
            onClick={() => setItem("All")}
            className={`cursor-pointer hover:text-orange-500 ${
              item === "All" && "text-orange-500 font-bold"
            }`}
          >
            All Items
          </p>

          <p
            onClick={() => setItem("Pizza")}
            className={`cursor-pointer hover:text-orange-500 ${
              item === "Pizza" && "text-orange-500 font-bold"
            }`}
          >
            Pizza
          </p>

          <p
            onClick={() => setItem("Burger")}
            className={`cursor-pointer hover:text-orange-500 ${
              item === "Burger" && "text-orange-500 font-bold"
            }`}
          >
            Burger
          </p>

          <p
            onClick={() => setItem("Sandwich")}
            className={`cursor-pointer hover:text-orange-500 ${
              item === "Sandwich" && "text-orange-500 font-bold"
            }`}
          >
            Sandwich
          </p>

          <p
            onClick={() => setItem("Fries")}
            className={`cursor-pointer hover:text-orange-500 ${
              item === "Fries" && "text-orange-500 font-bold"
            }`}
          >
            Fries
          </p>

          <p
            onClick={() => setItem("Drinks")}
            className={`cursor-pointer hover:text-orange-500 ${
              item === "Drinks" && "text-orange-500 font-bold"
            }`}
          >
            Drinks
          </p>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold text-orange-500">Our Menu</h1>

        <h6 className="text-gray-700 text-lg mt-4">
          Choose from a wide variety of delicious food
        </h6>

        {/* Sort Section */}
        <section className="flex gap-4 mt-8 mb-10">
          <button
            onClick={() => setSortType("popular")}
            className={` cursor-pointer , px-5 py-2 rounded-lg ${
              sortType === "popular"
                ? "bg-orange-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Popular
          </button>

          <button
            onClick={() => setSortType("price")}
            className={` cursor-pointer , px-5 py-2 rounded-lg ${
              sortType === "price"
                ? "bg-orange-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Price
          </button>

          <button
            onClick={() => setSortType("rating")}
            className={` cursor-pointer , px-5 py-2 rounded-lg ${
              sortType === "rating"
                ? "bg-orange-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Rating
          </button>
        </section>

        {/* FOOD CARDS */}
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {sortedFoods.map((food) => (
            <FoodCard
              className="cursor-pointer"
              key={food.id}
              food={food}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE CART */}
      <div className="w-full lg:w-[320px] bg-white p-6 rounded-2xl shadow-md h-fit sticky top-5">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-black">
           Your Cart ({totalItems} Items)
          </h2>

          <button
            onClick={() => setCart([])}
            className="text-orange-500 font-semibold hover:text-orange-600"
          >
            Clear Cart
          </button>
        </div>

        {/* CART ITEMS */}
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 border-b pb-3"
            >
              <div className="flex items-center gap-3 mt-3">
                <h4 className="font-semibold">{item.name}</h4>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
                >
                  {" "}
                  -{" "}
                </button>

                <span className="font-semibold">{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="w-8 h-8 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition cursor-pointer"
                >
                  
                  + 
                </button>
              </div>

              <p className="font-bold">₹{item.price * item.quantity}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-6">Cart is Empty</p>
        )}

        {/* BILL SECTION */}
        <div className="border-t pt-4 mt-6">
          <div className="flex justify-between mb-3">
            <p>Items</p>
            <p>{totalItems}</p>
          </div>

          <div className="flex justify-between mb-3">
            <p>Subtotal</p>
            <p>₹{subtotal}</p>
          </div>

          <div className="flex justify-between mb-3">
            <p>Delivery Fee</p>
            <p>₹{deliveryFee}</p>
          </div>

          <div className="flex justify-between font-bold text-lg mt-5">
            <p>Total</p>
            <p>₹{total}</p>
          </div>
        </div>

        {/* CHECKOUT BUTTON */}
        <button
          disabled={cart.length === 0}
          onClick={() => navigate("/checkout")}
          className={`w-full py-3 rounded-xl mt-8 font-semibold transition
            ${
              cart.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-500 text-white hover cursor-pointer"
            }
           `}
        >
          {" "}
          Proceed To Checkout
        </button>
      </div>
    </section>
  );
};

export default Menu;
