import React from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './ProductData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <nav className={classes.Topbar}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8fnHPM-sqSQEghXsgItHj5Jqohis9bPwuXJDCkoieaU4nSOu7"></img></nav>
          </nav>
      </header>
      <div className={classes.Maincontainer}>
       <div className={classes.ProductPreview} >
         <img src="https://imgur.com/iOeUBV7.png" ></img>
       </div>

       <div className={classes.ProductData}>
         <h1 className={classes.ProductTitle}>
           {ProductData.title}
         </h1>
       </div>
      </div>
    </div>
  );
}

export default App;
