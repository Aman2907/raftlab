import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import OrderProvider from "./Context/OrderContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>

    <OrderProvider>

      <App />

    </OrderProvider>

  </BrowserRouter>

);