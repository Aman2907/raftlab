import React from "react";
import { MdFoodBank } from "react-icons/md";

const About = () => {
return ( <section className="bg-gray-100 min-h-screen px-5 lg:px-10 py-12">

  {/* TOP */}
  <div className="bg-white rounded-3xl shadow-md p-10 text-center">

    <div className="flex justify-center">
      <MdFoodBank className="text-7xl text-orange-600" />
    </div>

    <h1 className="text-5xl font-bold text-orange-600 mt-6">
      About FooDie
    </h1>

    <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto leading-8">
      FooDie is a modern food delivery platform built to
      provide a smooth and fast ordering experience.
      Users can browse delicious meals, add items to
      their cart, place orders, and track delivery
      status in real-time.
    </p>
  </div>

  {/* FEATURES */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

    {/* CARD 1 */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
        Fast Delivery
      </h2>

      <p className="text-gray-600 leading-7">
        Get your favorite meals delivered quickly with
        real-time order tracking and smooth checkout.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
        Fresh Food
      </h2>

      <p className="text-gray-600 leading-7">
        We provide a variety of freshly prepared meals,
        including burgers, pizzas, fries, drinks, and
        more.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
        Easy Ordering
      </h2>

      <p className="text-gray-600 leading-7">
        Simple user interface with cart management,
        checkout validation, and responsive design for
        all devices.
      </p>
    </div>
  </div>

  {/* BOTTOM */}
  <div className="bg-orange-500 hover:bg-orange-700 text-white rounded-3xl p-10 mt-12 text-center shadow-md">

    <h2 className="text-4xl font-bold">
      Delicious Food, Delivered Faster 🚀
    </h2>

    <p className="mt-4 text-lg">
      Built with React, Tailwind CSS, Node.js, and Express.js
    </p>
  </div>
</section>

);
};

export default About;
