import React from 'react';
import AppRoute from './components/routing/AppRoute.tsx';
import AuthRoute from './components/routing/AuthRoute.tsx';

const App = () => {
  return (
    <>
      <AppRoute />
      <AuthRoute />
    </> 
  );
}

export default App;
