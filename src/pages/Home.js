import React from "react";
import Announcement from "../components/Announcment";
import Categories from "../components/Catergories";
import Navbar from "../components/Navbar";
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
    </div>
  );
};

export default Home;
