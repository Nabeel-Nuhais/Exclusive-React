import React, { useState } from "react";
import TopBar from "../../includes/TopBar.tsx";
import Header from "../../includes/Header.tsx";
import Spotlight from "./_components/Spotlight.tsx";
import Footer from "../../includes/Footer.tsx";
import Categories from "./_components/Categories.tsx";
import ProductsHome from "./_components/ProductsHome.tsx";
import allProucts from "../../helpers/products.json"

const Home = () => {

  const {products, categories} = allProucts

  const [filterProducts, setFilterProducts] = useState(products)

  const handleCategoryChange = (singleCat) => {
    setFilterProducts(
      products.filter(productCategory => productCategory.category.includes(singleCat))
    )
  }

  return (
    <>
      <TopBar />
      <Header />
      <Spotlight />
      <Categories categoryItems={categories} handleCategoryChange={handleCategoryChange} />
      <ProductsHome productItems={filterProducts} />
      <Footer />
    </>
  );
};

export default Home;
