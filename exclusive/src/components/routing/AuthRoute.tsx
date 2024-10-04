import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from '../screens/home/Auth.tsx';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Auth />} />
    </Routes>
  );
}

export default AppRoute;
