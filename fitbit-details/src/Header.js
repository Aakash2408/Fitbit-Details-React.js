import React from "react";
import classes from "./App.module.css";
import Logo from "./img/logo.png";

const Header = () => {
  return (
    <div className={classes.Header}>
      <img className={classes.LogoImage} src={Logo} alt="Amazon Logo" />
    </div>
  );
};

export default Header;