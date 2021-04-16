import React from "react";
import "../styles/Home.css";
import Banner from "../components/Banner";
import LiveAnywhere from "../components/LiveAnywhere";
import BecomeHost from "../components/BecomeHost";
import Discover from "../components/Discover";
import ExploreNearby from "../components/ExploreNearby";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <ExploreNearby />
      <LiveAnywhere />
      <BecomeHost />
      <Discover />
    </div>
  );
};

export default Home;
