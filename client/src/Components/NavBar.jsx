import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";

import { OrderContext } from "../Context/OrderContext";

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { cart } = useContext(OrderContext);

  const [search, setSearch] = useState("");
  const categories = [
    "All Items",
    "Pizza",
    "Burger",
    "Sandwich",
    "Fries",
    "Drinks",
  ];

  const filteredCategories = categories.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center gap-4 px-5 lg:px-10 py-4 bg-white text-black relative">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <MdFoodBank className="text-orange-600 text-3xl" />

        <h1
          onClick={() => navigate("/")}
          className="m-0 cursor-pointer text-2xl text-orange-600 font-bold"
        >
          FooDie
        </h1>
      </div>

      {/* Middle */}
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative after:content-[''] after after after:-bottom-1 after:h-[2px] after after after 
          ${isActive ? "text-orange-500 after:w-full" : "text-black after:w-0 hover:text-orange-500 hover:after:w-full"}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `relative after:content-[''] after after after:-bottom-1 after:h-[2px] after after after 
          ${isActive ? "text-orange-500 after:w-full" : "text-black after:w-0 hover:text-orange-500 hover:after:w-full"}`
          }
        >
          Menu
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `relative after:content-[''] after after after:-bottom-1 after:h-[2px] after after after 
          ${isActive ? "text-orange-500 after:w-full" : "text-black after:w-0 hover:text-orange-500 hover:after:w-full"}`
          }
        >
          Orders
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative after:content-[''] after after after:-bottom-1 after:h-[2px] after after after 
          ${isActive ? "text-orange-500 after:w-full" : "text-black after:w-0 hover:text-orange-500 hover:after:w-full"}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative after:content-[''] after after after:-bottom-1 after:h-[2px] after after after 
          ${isActive ? "text-orange-500 after:w-full" : "text-black after:w-0 hover:text-orange-500 hover:after:w-full"}`
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative flex items-center border border-gray-300 rounded-lg px-3">
          <IoIosSearch className="text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-2 py-2 outline-none"
          />
          {/* SEARCH DROPDOWN */}
          {search && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-20">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      navigate(`/menu?category=${item}`);
                      setSearch("");
                    }}
                    className="px-4 py-3 hover:bg-orange-100 cursor-pointer transition"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <p className="px-4 py-3 text-gray-500">No item found</p>
              )}
            </div>
          )}
        </div>
        {/* CART BUTTON */}{" "}
        <button
          onClick={() => navigate("/checkout")}
          className="relative
          border border-gray-300 p-3 rounded-lg hover:border-orange-500 transition"
        >
          <BsCartCheck className="text-xl" />{" "}
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {" "}
              {cart.length}
            </span>
          )}{" "}
        </button>
        {/* Profile */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-orange-400 transition text-black px-4 py-2 rounded-full cursor-pointer"
          >
            <FaUserCircle className="text-2xl" />
            <span>John Doe</span>
          </div>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl p-2 z-50 border border-gray-100">
              <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-xl cursor-pointer transition">
                <FiUser className="text-lg" />
                <span>My Profile</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-xl cursor-pointer transition">
                <FiSettings className="text-lg" />
                <span>Settings</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 hover:bg-red-100 text-red-500 rounded-xl cursor-pointer transition">
                <FiLogOut className="text-lg" />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
