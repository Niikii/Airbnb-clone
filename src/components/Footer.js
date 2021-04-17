import React from "react";
import "../styles/Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LanguageIcon from "@material-ui/icons/Language";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-right">
        <h3>© 2021 Airbnb, Inc.</h3>
        <h3>.Privacy . Terms . Sitemap</h3>
      </div>
      <div className="footer-left">
        <div lang-icon>
          <LanguageIcon />
        </div>
        <h3>English</h3>
        <h3>R Zar</h3>
      </div>
      <div className="social-links">
        <div>
          <FacebookIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
        <div>
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
