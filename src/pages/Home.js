import React from "react";
import Announcement from "../components/Announcment";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Announcement
        text={
          "Super Deal! Invite Friend and you both get your next puchsse for free!"
        }
      />
      <Navbar />
    </div>
  );
};

export default Home;
