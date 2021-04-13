import React, {useState} from "react";
import "../styles/Banner.css";
import { Button } from "@material-ui/core";


const Banner = () => {
    const [showSearch, setShowSearch] = useState(false)
  return (
    <div className="banner">
      <div className="banner-search">
        <Button onClick={() =>{
            setShowSearch(!showSearch)
        }} variant="outlined" className="banner-search-button">
          Search Date
        </Button>
      </div>

      <div className="banner-text">
        <h2>Made Possible By Hosts</h2>
      </div>
      
    </div>
  );
};

export default Banner;
