import React from "react";
import "../styles/Home.css";
import Banner from "../components/Banner";
import LiveAnywhere from "../components/LiveAnywhere";
import BecomeHost from "../components/BecomeHost";
import Discover from "../components/Discover";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <LiveAnywhere />
      <BecomeHost />
      <Discover />
    </div>
  );
};

export default Home;
