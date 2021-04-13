import React from "react";
import "../styles/Header.css";
import img from "../styles/images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
  //   const useStyles = makeStyles((theme) => ({
  //     accountButton: {
  //       borderRadius: "50px",
  //     },
  //   }));

  //   const classes = useStyles();

  return (
    <div className="header">
      <img className="header-logo" src={img} alt="Airbnb-Logo" />

      <div className="header-center">
        <input type="text" placeholder="Start your search..." />
        {/* <SearchIcon color="action" /> */}
        <IconButton aria-label="SearchIcon" color="secondary">
          <SearchIcon />
        </IconButton>
      </div>

      <div className="header-right">
        <Button size="small" variant="outlined">
          Become a host
        </Button>
        {/* <LanguageIcon fontSize="medium" />
        <AccountCircleIcon color="disabled" fontSize="large" /> */}

        <IconButton aria-label="LanguageIcon">
          <LanguageIcon />
        </IconButton>
        <IconButton aria-label="AccountCircleIcon">
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
