import React from 'react';

import classes from './App.module.css';

import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';

function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Topbar />
    </header>
      <div className={classes.Maincontainer}>
       <div className={classes.ProductPreview} >
      <ProductPreview />

         
       </div>

       <div className={classes.ProductData}>
         <ProductDetails />
       </div>
      </div> 
    </div>
  );
}

export default App;
