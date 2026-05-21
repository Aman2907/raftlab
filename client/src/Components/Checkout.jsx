import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../Context/OrderContext";
import axios from "axios";
import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCity,
  FaMoneyBillWave,
} from "react-icons/fa";

const Checkout = () => {
  const { cart, orderDetails, setOrderDetails, setLatestOrderId } =
    useContext(OrderContext);

  const navigate = useNavigate();

  // VALIDATION
  const isValidName = /^[A-Za-z ]+$/.test(orderDetails?.fullName || "");

  const isValidPhone = /^[0-9]{10}$/.test(orderDetails?.phone || "");

  const isValidPincode = /^[0-9]{6}$/.test(orderDetails?.pincode || "");

  const isValidCity = /^[A-Za-z ]+$/.test(orderDetails?.city || "");

  const isValidAddress = orderDetails?.address?.trim()?.length > 5;

  const isFormValid =
    isValidName &&
    isValidPhone &&
    isValidPincode &&
    isValidCity &&
    isValidAddress &&
    orderDetails?.payment;

  // TOTALS
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const deliveryFee = 50;

  const total = subtotal + deliveryFee;

  // PLACE ORDER
  const placeOrder = async () => {
    const orderData = {
      customer: orderDetails,
      cart,
      subtotal,
      deliveryFee,
      total,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/orders`,
        orderData,
      );

      setLatestOrderId(response.data.id);

      navigate(`/orders/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen px-5 lg:px-10 py-10 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* TOP HEADER */}
      <div className="bg-white/80 backdrop-blur-lg border border-white/30 p-8 rounded-3xl shadow-xl">
        <h1 className="text-5xl font-extrabold text-orange-500">
          Secure Checkout
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Fast delivery & secure payment experience
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="bg-white/90 backdrop-blur-lg border border-orange-100 rounded-3xl shadow-2xl p-8 mt-10 max-w-4xl mx-auto">
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-orange-500 mb-8">
          Delivery Details
        </h2>

        {/* FULL NAME */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-lg font-semibold mb-2">
            <FaUser className="text-orange-500" />
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={orderDetails?.fullName || ""}
            onChange={(e) =>
              setOrderDetails({
                ...orderDetails,
                fullName: e.target.value,
              })
            }
            className={`w-full border rounded-2xl px-4 py-4 bg-gray-50 outline-none transition-all duration-300 focus:scale-[1.02]

            ${
              orderDetails?.fullName && !isValidName
                ? "border-red-500"
                : "border-gray-300 focus:border-orange-500"
            }
            `}
          />

          {orderDetails?.fullName && !isValidName && (
            <p className="text-red-500 text-sm mt-2">
              Name should contain only letters
            </p>
          )}
        </div>

        {/* PHONE */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-lg font-semibold mb-2">
            <FaPhoneAlt className="text-orange-500" />
            Phone Number
          </label>

          <input
            type="text"
            placeholder="Enter phone number"
            value={orderDetails?.phone || ""}
            onChange={(e) =>
              setOrderDetails({
                ...orderDetails,
                phone: e.target.value,
              })
            }
            className={`w-full border rounded-2xl px-4 py-4 bg-gray-50 outline-none transition-all duration-300 focus:scale-[1.02]

            ${
              orderDetails?.phone && !isValidPhone
                ? "border-red-500"
                : "border-gray-300 focus:border-orange-500"
            }
            `}
          />

          {orderDetails?.phone && !isValidPhone && (
            <p className="text-red-500 text-sm mt-2">
              Phone number must be 10 digits
            </p>
          )}
        </div>

        {/* ADDRESS */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-lg font-semibold mb-2">
            <FaMapMarkerAlt className="text-orange-500" />
            Address
          </label>

          <textarea
            rows="4"
            placeholder="Enter your address"
            value={orderDetails?.address || ""}
            onChange={(e) =>
              setOrderDetails({
                ...orderDetails,
                address: e.target.value,
              })
            }
            className={`w-full border rounded-2xl px-4 py-4 bg-gray-50 outline-none transition-all duration-300 focus:scale-[1.02]

            ${
              orderDetails?.address && !isValidAddress
                ? "border-red-500"
                : "border-gray-300 focus:border-orange-500"
            }
            `}
          ></textarea>

          {orderDetails?.address && !isValidAddress && (
            <p className="text-red-500 text-sm mt-2">Address is too short</p>
          )}
        </div>

        {/* CITY + PINCODE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* CITY */}
          <div>
            <label className="flex items-center gap-2 text-lg font-semibold mb-2">
              <FaCity className="text-orange-500" />
              City
            </label>

            <input
              type="text"
              placeholder="Enter city"
              value={orderDetails?.city || ""}
              onChange={(e) =>
                setOrderDetails({
                  ...orderDetails,
                  city: e.target.value,
                })
              }
              className={`w-full border rounded-2xl px-4 py-4 bg-gray-50 outline-none transition-all duration-300 focus:scale-[1.02]

              ${
                orderDetails?.city && !isValidCity
                  ? "border-red-500"
                  : "border-gray-300 focus:border-orange-500"
              }
              `}
            />

            {orderDetails?.city && !isValidCity && (
              <p className="text-red-500 text-sm mt-2">
                City should contain only letters
              </p>
            )}
          </div>

          {/* PINCODE */}
          <div>
            <label className="text-lg font-semibold mb-2 block">Pincode</label>

            <input
              type="text"
              placeholder="Enter pincode"
              value={orderDetails?.pincode || ""}
              onChange={(e) =>
                setOrderDetails({
                  ...orderDetails,
                  pincode: e.target.value,
                })
              }
              className={`w-full border rounded-2xl px-4 py-4 bg-gray-50 outline-none transition-all duration-300 focus:scale-[1.02]

              ${
                orderDetails?.pincode && !isValidPincode
                  ? "border-red-500"
                  : "border-gray-300 focus:border-orange-500"
              }
              `}
            />

            {orderDetails?.pincode && !isValidPincode && (
              <p className="text-red-500 text-sm mt-2">
                Pincode must be 6 digits
              </p>
            )}
          </div>
        </div>

        {/* PAYMENT */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            Payment Method
          </h2>

          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-3 border border-gray-200 rounded-2xl p-5 hover:border-orange-400 hover:bg-orange-50 transition cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="Cash On Delivery"
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    payment: e.target.value,
                  })
                }
              />
              <FaMoneyBillWave className="text-orange-500 text-xl" />
              Cash On Delivery
            </label>

            <label className="flex items-center gap-3 border border-gray-200 rounded-2xl p-5 hover:border-orange-400 hover:bg-orange-50 transition cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="UPI"
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    payment: e.target.value,
                  })
                }
              />
              <FaMoneyBillWave className="text-orange-500 text-xl" />
              UPI Payment
            </label>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-orange-50 rounded-3xl p-6 mt-10">
          <h3 className="text-2xl font-bold mb-5 text-orange-500">
            Order Summary
          </h3>

          <div className="flex justify-between mb-3 text-lg">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between mb-3 text-lg">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span className="text-orange-500">₹{total}</span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          disabled={!isFormValid}
          onClick={placeOrder}
          className={`w-full py-4 rounded-2xl text-xl font-bold mt-10 transition-all duration-300 shadow-lg

          ${
            !isFormValid
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-[1.02] hover:shadow-orange-300 cursor-pointer"
          }
          `}
        >
          {!isFormValid ? "Fill Proper Details" : "Place Order"}
        </button>
      </div>
    </section>
  );
};

export default Checkout;
