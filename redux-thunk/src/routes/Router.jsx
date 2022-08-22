import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import Home from "../components/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Router;
