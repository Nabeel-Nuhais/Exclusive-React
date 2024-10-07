import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/home/Home.tsx";
import Products from "../screens/home/_components/Products.tsx";
import Single from "../screens/home/_components/Single.tsx";
import Contact from "../screens/home/_components/Contact.tsx";
import About from "../screens/home/_components/About.tsx";
import Auth from "../screens/home/_components/Auth.tsx";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/single" element={<Single />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Auth />} />
    </Routes>
  );
};

export default AppRoute;
