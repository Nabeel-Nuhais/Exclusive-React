import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/home/Home.tsx';
import Products from '../screens/home/Products.tsx';
import Single from '../screens/home/Single.tsx';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Home/Products" element={<Products />} />
      <Route path="/Home/Single" element={<Single />} />
    </Routes>
  );
}

export default AppRoute;
