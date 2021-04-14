import React from "react";
import "../styles/BecomeHost.css";
import { Button } from "@material-ui/core";

const BecomeHost = () => {
  return (
    <div className="become-host">
      <img
        src="https://a0.muscache.com/im/pictures/48893cdc-221e-4eaf-b624-8956600550db.jpg"
        alt="become host img"
      />
      <div className="content">
        <h1>Become A Host</h1>
        <h3>
          Earn extra income and unlock new opportunities by sharing your space.
        </h3>
        <Button className="button">Learn more</Button>
      </div>
    </div>
  );
};

export default BecomeHost;
