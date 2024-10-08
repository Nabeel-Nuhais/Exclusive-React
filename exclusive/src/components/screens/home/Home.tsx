import React from "react";
import TopBar from "../../includes/TopBar.tsx";
import Header from "../../includes/Header.tsx";
import Spotlight from "./_components/Spotlight.tsx";
import Footer from "../../includes/Footer.tsx";
import Categories from "./_components/Categories.tsx";
import ProductsHome from "./_components/ProductsHome.tsx";

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Spotlight />
      <Categories />
      <ProductsHome />
      <Footer />
    </>
  );
};

export default Home;
