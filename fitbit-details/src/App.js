import React, { Component } from 'react';

import classes from './App.module.css';

import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';

class App extends Component{
  
  state={
    productData:ProductData,
    
    currentPreviewImagePos:0,
    showHeartBeatSection:false,
  }
   onColorOptionClick = (pos) => {
    //  console.log(this.state);
  // const updatedPreviewImage =this.state.productData.colorOptions[pos].imageUrl
  //  console.log(updatedPreviewImage);
  this.setState({currentPreviewImagePos : pos});
  // let showState= ()=>{
  //   console.log(this.state,"====================");
  //   console.log(state,"++++++++++++++++++++");
  // }
} 

 render(){
  return (
    <div className="App">
      <Topbar />

    


    {/* <p>{JSON.stringify(this.state.ProductData)}</p> */}
      <div className={classes.Maincontainer}>
      <div className={classes.ProductPreview} >
           <ProductPreview  currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
           showHeartBeatSection={this.state.showHeartBeatSection}
           currentPreviewImagePos={this.state.currentPreviewImagePos}/> 
       </div>
      <div className={classes.ProductData}>
         <ProductDetails data={this.state.productData} 
          onColorOptionClick={this.onColorOptionClick}/>
       </div>
      </div> 
    </div>
  );
 }
  
}

export default App;
