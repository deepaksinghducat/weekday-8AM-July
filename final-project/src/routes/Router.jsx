import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Account from "../pages/accounts/Account";
import Profile from "../pages/accounts/Profile";
import User from "../pages/accounts/users/User";
import EditUser from "../pages/accounts/users/EditUser";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../pages/accounts/products/Product";
import CreateProduct from "../pages/accounts/products/CreateProduct";
import EditProduct from "../pages/accounts/products/EditProduct";
import Order from "../pages/accounts/orders/Order";
import OrderDetail from "../pages/accounts/orders/OrderDetail";
import PageNotFound from "../pages/PageNotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/accounts" element={<Account />}>
        <Route path="profile" element={<Profile />} />
        <Route path="users" element={<User />} />
        <Route path="edit-user" element={<EditUser />} />
        <Route path="products" element={<Product />} />
        <Route path="create-product" element={<CreateProduct />} />
        <Route path="edit-product/:id" element={<EditProduct />} />
        <Route path="orders" element={<Order />} />
        <Route path="order-detail/:id" element={<OrderDetail />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
