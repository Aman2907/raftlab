import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../Context/OrderContext";
import axios from "axios";

const Checkout = () => {
const { cart, orderDetails, setOrderDetails, setLatestOrderId } = useContext(OrderContext);
const navigate = useNavigate();

// VALIDATION
const isValidName = /^[A-Za-z ]+$/.test(
orderDetails?.fullName || ""
);

const isValidPhone = /^[0-9]{10}$/.test(
orderDetails?.phone || ""
);

const isValidPincode = /^[0-9]{6}$/.test(
orderDetails?.pincode || ""
);

const isValidCity = /^[A-Za-z ]+$/.test(
orderDetails?.city || ""
);

const isValidAddress =
orderDetails?.address?.trim()?.length > 5;

const isFormValid =
isValidName &&
isValidPhone &&
isValidPincode &&
isValidCity &&
isValidAddress &&
orderDetails?.payment;

// PLACE ORDER
const placeOrder = async () => {
const orderData = {
customer: orderDetails,
  cart: cart,

  subtotal: cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  ),

  deliveryFee: 50,

  total:
    cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    ) + 50,
};

try {
    const response = await axios.post(
      "http://localhost:5000/orders",
      orderData
    );
     
    setLatestOrderId(response.data.id);
    navigate(`/orders/${response.data.id}`);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <section className="bg-gray-100 min-h-screen px-5 lg:px-10 py-10">

      {/* TOP */}
      <div className="bg-white p-8 rounded-2xl shadow-md">
    <h1 className="text-5xl font-bold text-orange-500">
      Checkout
    </h1>

    <p className="text-gray-500 mt-3 text-lg">
      Complete your delivery details
    </p>
  </div>

  {/* FORM */}
  <div className="bg-white rounded-2xl shadow-md p-8 mt-10 max-w-3xl mx-auto">

    <h2 className="text-3xl font-bold text-orange-500 mb-8">
      Delivery Details
    </h2>

    {/* FULL NAME */}
    <div className="mb-6">
      <label className="block text-lg font-semibold mb-2">
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
        className={`w-full border rounded-lg px-4 py-3 outline-none

        ${
          orderDetails?.fullName &&
          !isValidName
            ? "border-red-500"
            : "border-gray-300 focus:border-orange-500"
        }
        `}
      />

      {orderDetails?.fullName &&
        !isValidName && (
          <p className="text-red-500 text-sm mt-2">
            Name should contain only letters
          </p>
        )}
    </div>

    {/* PHONE */}
    <div className="mb-6">
      <label className="block text-lg font-semibold mb-2">
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
        className={`w-full border rounded-lg px-4 py-3 outline-none

        ${
          orderDetails?.phone &&
          !isValidPhone
            ? "border-red-500"
            : "border-gray-300 focus:border-orange-500"
        }
        `}
      />

      {orderDetails?.phone &&
        !isValidPhone && (
          <p className="text-red-500 text-sm mt-2">
            Phone number must be 10 digits
          </p>
        )}
    </div>

    {/* ADDRESS */}
    <div className="mb-6">
      <label className="block text-lg font-semibold mb-2">
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
        className={`w-full border rounded-lg px-4 py-3 outline-none

        ${
          orderDetails?.address &&
          !isValidAddress
            ? "border-red-500"
            : "border-gray-300 focus:border-orange-500"
        }
        `}
      ></textarea>

      {orderDetails?.address &&
        !isValidAddress && (
          <p className="text-red-500 text-sm mt-2">
            Address is too short
          </p>
        )}
    </div>

    {/* CITY + PINCODE */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

      {/* CITY */}
      <div>
        <label className="block text-lg font-semibold mb-2">
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
          className={`w-full border rounded-lg px-4 py-3 outline-none

          ${
            orderDetails?.city &&
            !isValidCity
              ? "border-red-500"
              : "border-gray-300 focus:border-orange-500"
          }
          `}
        />

        {orderDetails?.city &&
          !isValidCity && (
            <p className="text-red-500 text-sm mt-2">
              City should contain only letters
            </p>
          )}
      </div>

      {/* PINCODE */}
      <div>
        <label className="block text-lg font-semibold mb-2">
          Pincode
        </label>

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
          className={`w-full border rounded-lg px-4 py-3 outline-none

          ${
            orderDetails?.pincode &&
            !isValidPincode
              ? "border-red-500"
              : "border-gray-300 focus:border-orange-500"
          }
          `}
        />

        {orderDetails?.pincode &&
          !isValidPincode && (
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

        <label className="flex items-center gap-3">
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
          Cash On Delivery
        </label>

        <label className="flex items-center gap-3">
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
          UPI
        </label>
      </div>
    </div>

    {/* BUTTON */}
    <button
      disabled={!isFormValid}
      onClick={placeOrder}
      className={`w-full py-4 rounded-xl text-xl font-semibold mt-10 transition

      ${
        !isFormValid
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-orange-500 text-white hover:bg-orange-600 cursor-pointer"
      }
      `}
    >
      {!isFormValid
        ? "Fill Proper Details"
        : "Place Order"}
    </button>
  </div>
</section>
);
};

export default Checkout;
