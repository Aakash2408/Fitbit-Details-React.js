import React from 'react';
import logo from  './logo.png';
import classes from './Topbar.module.css';
const Topbar= (  ) => {

    return (
         <header   >
        <nav>
            
          <nav className={classes.Topbar}>
          <img src={logo} alt="Amazon Logo"></img></nav>
          </nav> 
          </header>
    )

}
export default Topbar;