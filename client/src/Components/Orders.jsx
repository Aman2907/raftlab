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
    <section className="bg-gray-100 min-h-screen px-10 py-10">
      {/* TOP SECTION */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-orange-500">Track Your Order</h1>

        <div className="flex justify-between mt-6">
          {/* ORDER ID */}
          <div>
            <p className="text-gray-500">Order ID</p>

            <h3 className="text-xl font-bold">#{order?.orderId || "N/A"}</h3>
          </div>

          {/* PLACED TIME */}
          <div>
            <p className="text-gray-500">Placed Time</p>

            <h3 className="text-xl font-bold">
              {order?.placedTime
                ? `${new Date(
                    order.placedTime,
                  ).toLocaleDateString()} - ${formatTime(order.placedTime)}`
                : "Time not available"}
            </h3>
          </div>
        </div>

        {/* ORDER STATUS */}
        <div className="flex justify-between items-center mt-12">
          {/* STEP 1 */}
          <div className="flex flex-col items-center">
            <div
              className={`text-white p-4 rounded-full ${
                status === "received" ||
                status === "preparing" ||
                status === "delivery" ||
                status === "delivered"
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            >
              <FaCheckCircle />
            </div>

            <p className="text-sm text-gray-500 mt-2">
              {formatTime(order.placedTime)}
            </p>

            <p className="text-sm font-semibold">Order Received</p>
          </div>

          <div className="h-1 bg-green-300 flex-1 mx-3"></div>

          {/* STEP 2 */}
          <div className="flex flex-col items-center">
            <div
              className={`text-white p-4 rounded-full ${
                status === "preparing" ||
                status === "delivery" ||
                status === "delivered"
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            >
              <FaBoxOpen />
            </div>

            <p className="text-sm text-gray-500 mt-2">
              {formatTime(preparingTime)}
            </p>

            <p className="text-sm font-semibold">Preparing</p>
          </div>

          <div className="h-1 bg-orange-300 flex-1 mx-3"></div>

          {/* STEP 3 */}
          <div className="flex flex-col items-center">
            <div
              className={`text-white p-4 rounded-full ${
                status === "delivery" || status === "delivered"
                  ? "bg-orange-500"
                  : "bg-gray-300"
              }`}
            >
              <FaShippingFast />
            </div>

            <p className="text-sm text-gray-500 mt-2">
              {formatTime(deliveryTime)}
            </p>

            <p className="text-sm font-semibold">Out For Delivery</p>
          </div>

          <div className="h-1 bg-gray-300 flex-1 mx-3"></div>

          {/* STEP 4 */}
          <div className="flex flex-col items-center">
            <div
              className={`text-white p-4 rounded-full ${
                status === "delivered" ? "bg-orange-500" : "bg-gray-300"
              }`}
            >
              <FaTruck />
            </div>

            <p className="text-sm text-gray-500 mt-2">
              {formatTime(deliveredTime)}
            </p>

            <p className="text-sm font-semibold">Delivered</p>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-6"
      >
        {/* LEFT SIDE */}
        <div className="bg-white rounded-2xl shadow-md p-6 ">
          <h2 className="text-2xl font-bold text-orange-500 mb-6">
            Order Details
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-gray-500">Customer Name</p>

              <h4 className="font-semibold">
                {order?.customer?.fullName || "N/A"}
              </h4>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>

              <h4 className="font-semibold">
                {order?.customer?.phone || "N/A"}
              </h4>
            </div>

            <div>
              <p className="text-gray-500">Delivery Address</p>

              <h4 className="font-semibold">
                {order?.customer?.address || "N/A"}
              </h4>
            </div>

            <div>
              <p className="text-gray-500">Payment Method</p>

              <h4 className="font-semibold">
                {order?.customer?.payment || "N/A"}
              </h4>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-orange-500 mb-6">
            Order Items
          </h2>

          {order?.cart?.length > 0 ? (
            order.cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-5">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>

                  <p className="text-gray-500 text-sm">Qty : {item.quantity}</p>
                </div>

                <p className="font-bold">₹{item.price * item.quantity}</p>
              </div>
            ))
          ) : (
            <p>No items found</p>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
          <h2 className="text-2xl font-bold text-orange-500 mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Subtotal</p>

              <p>₹{order?.subtotal || 0}</p>
            </div>

            <div className="flex justify-between">
              <p>Delivery Fee</p>

              <p>₹{order?.deliveryFee || 0}</p>
            </div>

            <div className="border-t pt-4 flex justify-between text-xl font-bold">
              <p>Total</p>

              <p>₹{order?.total || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
