import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  FaCheckCircle,
  FaBoxOpen,
  FaTruck,
  FaShippingFast,
} from "react-icons/fa";

import { useParams } from "react-router-dom";

const Orders = () => {
  const [status, setStatus] = useState("received");
  const [order, setOrder] = useState(null);

  const { id } = useParams();

  // FORMAT TIME
  const formatTime = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // FETCH ORDER
  const fetchOrder = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/orders/${id}`);

      console.log(response.data);

      // FALLBACK DATA IF MISSING
      const orderData = {
        ...response.data,
        orderId: response.data.orderId || Math.floor(Math.random() * 100000),
        placedTime: response.data.placedTime || new Date().toISOString(),
      };

      setOrder(orderData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  // STATUS CHANGE
  useEffect(() => {
    const preparingTimer = setTimeout(() => {
      setStatus("preparing");
    }, 2000);

    const deliveryTimer = setTimeout(() => {
      setStatus("delivery");
    }, 7000);

    const deliveredTimer = setTimeout(() => {
      setStatus("delivered");
    }, 12000);

    return () => {
      clearTimeout(preparingTimer);
      clearTimeout(deliveryTimer);
      clearTimeout(deliveredTimer);
    };
  }, []);

  // LOADING
  if (!order) {
    return <h1 className="text-3xl p-10">Loading...</h1>;
  }

  // TIMES
  const preparingTime = new Date(
    new Date(order.placedTime).getTime() + 2 * 60000,
  );

  const deliveryTime = new Date(
    new Date(order.placedTime).getTime() + 7 * 60000,
  );

  const deliveredTime = new Date(
    new Date(order.placedTime).getTime() + 12 * 60000,
  );

  return (
  <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4 md:px-10 py-10">
    {/* TOP CARD */}
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-orange-100 p-6 md:p-10 overflow-hidden relative">
      
      {/* GLOW */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10">
        {/* TITLE */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500">
              Track Your Order
            </h1>

            <p className="text-gray-500 mt-2">
              Your delicious food is on the way 🚀
            </p>
          </div>

          <div className="bg-orange-100 text-orange-600 px-5 py-3 rounded-2xl font-bold shadow-md">
            Estimated Delivery : 12 mins
          </div>
        </div>

        {/* ORDER INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-2xl p-5 shadow-lg">
            <p className="opacity-80 text-sm">Order ID</p>

            <h2 className="text-3xl font-bold mt-1">
              #{order?.orderId || "N/A"}
            </h2>
          </div>

          <div className="bg-gray-100 rounded-2xl p-5 shadow-inner">
            <p className="text-gray-500 text-sm">Placed Time</p>

            <h2 className="text-2xl font-bold mt-1 text-gray-800">
              {order?.placedTime
                ? `${new Date(
                    order.placedTime
                  ).toLocaleDateString()} - ${formatTime(
                    order.placedTime
                  )}`
                : "Time not available"}
            </h2>
          </div>
        </div>

        {/* STATUS TRACKER */}
        <div className="mt-14">
          <div className="flex items-center justify-between relative">
            
            {/* LINE */}
            <div className="absolute top-6 left-0 w-full h-2 bg-gray-200 rounded-full"></div>

            <div
              className={`absolute top-6 left-0 h-2 rounded-full transition-all duration-1000
              ${
                status === "received"
                  ? "w-[8%]"
                  : status === "preparing"
                  ? "w-[38%]"
                  : status === "delivery"
                  ? "w-[72%]"
                  : "w-full"
              }
              bg-gradient-to-r from-orange-400 to-orange-500`}
            ></div>

            {/* STEP 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-xl shadow-lg transition-all duration-500
                ${
                  status === "received" ||
                  status === "preparing" ||
                  status === "delivery" ||
                  status === "delivered"
                    ? "bg-green-500 scale-110"
                    : "bg-gray-300"
                }`}
              >
                <FaCheckCircle />
              </div>

              <p className="mt-3 text-xs text-gray-500">
                {formatTime(order.placedTime)}
              </p>

              <h4 className="font-semibold text-sm mt-1">
                Order Received
              </h4>
            </div>

            {/* STEP 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-xl shadow-lg transition-all duration-500
                ${
                  status === "preparing" ||
                  status === "delivery" ||
                  status === "delivered"
                    ? "bg-green-500 scale-110"
                    : "bg-gray-300"
                }`}
              >
                <FaBoxOpen />
              </div>

              <p className="mt-3 text-xs text-gray-500">
                {formatTime(preparingTime)}
              </p>

              <h4 className="font-semibold text-sm mt-1">
                Preparing
              </h4>
            </div>

            {/* STEP 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-xl shadow-lg transition-all duration-500
                ${
                  status === "delivery" || status === "delivered"
                    ? "bg-orange-500 scale-110"
                    : "bg-gray-300"
                }`}
              >
                <FaShippingFast />
              </div>

              <p className="mt-3 text-xs text-gray-500">
                {formatTime(deliveryTime)}
              </p>

              <h4 className="font-semibold text-sm mt-1">
                Out For Delivery
              </h4>
            </div>

            {/* STEP 4 */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-xl shadow-lg transition-all duration-500
                ${
                  status === "delivered"
                    ? "bg-orange-500 scale-110"
                    : "bg-gray-300"
                }`}
              >
                <FaTruck />
              </div>

              <p className="mt-3 text-xs text-gray-500">
                {formatTime(deliveredTime)}
              </p>

              <h4 className="font-semibold text-sm mt-1">
                Delivered
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* BOTTOM CARDS */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      
      {/* CUSTOMER */}
      <div className="bg-white rounded-3xl shadow-xl p-7 border border-orange-100 hover:shadow-2xl transition">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          Customer Details
        </h2>

        <div className="space-y-5">
          <div className="bg-orange-50 p-4 rounded-2xl">
            <p className="text-gray-500 text-sm">Customer Name</p>

            <h4 className="font-bold text-lg text-gray-800">
              {order?.customer?.fullName || "N/A"}
            </h4>
          </div>

          <div className="bg-orange-50 p-4 rounded-2xl">
            <p className="text-gray-500 text-sm">Phone</p>

            <h4 className="font-bold text-lg text-gray-800">
              {order?.customer?.phone || "N/A"}
            </h4>
          </div>

          <div className="bg-orange-50 p-4 rounded-2xl">
            <p className="text-gray-500 text-sm">Delivery Address</p>

            <h4 className="font-bold text-gray-800">
              {order?.customer?.address || "N/A"}
            </h4>
          </div>

          <div className="bg-orange-50 p-4 rounded-2xl">
            <p className="text-gray-500 text-sm">Payment Method</p>

            <h4 className="font-bold text-gray-800">
              {order?.customer?.payment || "N/A"}
            </h4>
          </div>
        </div>
      </div>

      {/* ITEMS */}
      <div className="bg-white rounded-3xl shadow-xl p-7 border border-orange-100 hover:shadow-2xl transition">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          Order Items
        </h2>

        <div className="space-y-5">
          {order?.cart?.length > 0 ? (
            order.cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-orange-50 rounded-2xl p-4 hover:scale-[1.02] transition"
              >
                <div>
                  <h4 className="font-bold text-gray-800">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Qty : {item.quantity}
                  </p>
                </div>

                <div className="bg-orange-500 text-white px-4 py-2 rounded-xl font-bold shadow">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))
          ) : (
            <p>No items found</p>
          )}
        </div>
      </div>

      {/* SUMMARY */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-3xl shadow-2xl p-7 h-fit sticky top-5">
        <h2 className="text-3xl font-bold mb-8">
          Order Summary
        </h2>

        <div className="space-y-5">
          <div className="flex justify-between text-lg">
            <p>Subtotal</p>

            <p className="font-bold">₹{order?.subtotal || 0}</p>
          </div>

          <div className="flex justify-between text-lg">
            <p>Delivery Fee</p>

            <p className="font-bold">₹{order?.deliveryFee || 0}</p>
          </div>

          <div className="border-t border-orange-200 pt-5 flex justify-between text-3xl font-extrabold">
            <p>Total</p>

            <p>₹{order?.total || 0}</p>
          </div>

          <button className="w-full mt-8 bg-white text-orange-500 font-bold py-4 rounded-2xl hover:scale-105 transition shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  </section>
);
};

export default Orders;
