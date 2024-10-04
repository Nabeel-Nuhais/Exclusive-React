import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/home/Home.tsx';
import Products from '../screens/home/Products.tsx';
import Single from '../screens/home/Single.tsx';
import Contact from '../screens/home/Contact.tsx';
import About from '../screens/home/About.tsx';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home/products" element={<Products />} />
      <Route path="/home/single" element={<Single />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoute;
