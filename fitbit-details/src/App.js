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
         <p className={classes.ProductDecription}>
           {ProductData.description}
         </p>


         <h3 className={classes.SectionHeading}>Select Color</h3>
         
         
         <div>
           <img className={[classes.ProductImage,classes.SelectedProductImage].join( ' ')} src="https://imgur.com/iOeUBV7.png"  alt="Black colored Watch"></img>
           <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red colored Watch"></img>
           <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue colored Watch"></img>
           <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple colored Watch"></img>
           
           </div>
              

           <h3 className={classes.SectionHeading}>Features</h3>

           <div>
             <button className={classes.FeatureTime}>Time</button>
             <button className={classes.FeatureTime}>Heart Rate</button>
           </div> 

       </div>
      </div> 
    </div>
  );
}

export default App;