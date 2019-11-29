import React,{Component} from 'react';
import logo from './logo.png';
import classes from './App.module.css';

import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';

class App extends Component{
  
  state={
    ProductData: ProductData
  }

 render(){
  return (
    <div className="App">
      
       <Topbar />
    



      <div className={classes.Maincontainer}>
       
       
       
       <div className={classes.ProductPreview} >
              <ProductPreview /> 
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
