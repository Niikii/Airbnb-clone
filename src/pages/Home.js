import React from "react";
import "../styles/Home.css";
import Banner from "../components/Banner";
import LiveAnywhere from "../components/LiveAnywhere";
import BecomeHost from "../components/BecomeHost";
import Discover from "../components/Discover";
import ExploreNearby from "../components/ExploreNearby";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <ExploreNearby />
      <LiveAnywhere />
      <BecomeHost />
      <Discover />
      <Footer size="small" />
    </div>
  );
};

export default Home;
