import React from "react";
import Announcement from "../components/Announcment";
import Categories from "../components/Catergories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement
        text={
          "Super Deal! Invite Friend and you both get your next puchsse for free!"
        }
      />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
