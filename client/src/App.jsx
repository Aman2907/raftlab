import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Orders from "./Components/Orders";
import Checkout from "./Components/Checkout";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders/:id" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
