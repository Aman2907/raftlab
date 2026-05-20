import React from "react";
import { useNavigate } from "react-router-dom";
import { Truck, ShieldCheck, CreditCard } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen overflow-hidden bg-[#fdf8f3] flex items-center px-6 lg:px-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-2xl md:text-2xl lg:text-6xl font-bold leading-tight text-[#111827]">
            Delicious food,
            <br />
            <span className="text-orange-600">delivered fast</span>
            <br />
            to your doorstep
          </h1>

          <p className="text-gray-600 text-base lg:text-lg mt-5 max-w-lg">
            Order from your favorite restaurants and get it delivered hot and
            fresh.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate("/menu")}
              className="bg-orange-600 hover:bg-orange-700 transition text-white px-7 py-3 rounded-xl font-semibold shadow-md"
            >
              Order Now
            </button>

            <button
              onClick={() => navigate("/menu")}
              className="bg-white border border-gray-300 hover:border-orange-600 hover:text-orange-600 transition px-7 py-3 rounded-xl font-semibold"
            >
              View Menu
            </button>
          </div>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-6 mt-10">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <Truck className="text-orange-500 w-5 h-5" />
              </div>

              <div>
                <h4 className="font-semibold text-sm">Fast Delivery</h4>
                <p className="text-xs text-gray-500">On time delivery</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <ShieldCheck className="text-orange-500 w-5 h-5" />
              </div>

              <div>
                <h4 className="font-semibold text-sm">Best Quality</h4>
                <p className="text-xs text-gray-500">Fresh food</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <CreditCard className="text-orange-500 w-5 h-5" />
              </div>

              <div>
                <h4 className="font-semibold text-sm">Easy Payment</h4>
                <p className="text-xs text-gray-500">Secure payment</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
            alt="Burger"
            className="w-full max-w-[480px] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]"
          />

          {/* OFFER BADGE */}
          <div className="absolute bottom-10 right-2 bg-yellow-300 w-32 h-32 rounded-full flex flex-col items-center justify-center rotate-[-10deg] shadow-xl">
            <span className="text-sm font-medium">Up to</span>

            <h2 className="text-2xl font-bold">30% OFF</h2>

            <p className="text-xs">on first order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
