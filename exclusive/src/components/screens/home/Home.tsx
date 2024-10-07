import React from "react";
import TopBar from "../../includes/TopBar.tsx";
import Header from "../../includes/Header.tsx";
import Spotlight from "./_components/Spotlight.tsx";
import Footer from "../../includes/Footer.tsx";

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Spotlight />
      <Footer />
    </>
  );
};

export default Home;
