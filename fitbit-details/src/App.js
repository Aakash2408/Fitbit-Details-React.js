import React, { Component } from 'react';
import logo from './logo.png';
import classes from './App.module.css';

import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './ProductData';

class App extends Component{
  
  state={
    ProductData: ProductData,
    currentPreviewImage:'https://imgur.com/xSIK4M8.png',
    showHeartBeatSection:false,
  }

 render(){
  return (
    <div className="App">
      <Topbar />

    



      <div className={classes.Maincontainer}>
      <div className={classes.ProductPreview} >
           <ProductPreview  currentPreviewImage={this.state.currentPreviewImage}
           showHeartBeatSection={this.state.showHeartBeatSection}/> 
       </div>
      <div className={classes.ProductData}>
         <ProductDetails data={this.state.ProductData} />
       </div>
      </div> 
    </div>
  );
 }
  
}

export default App;
