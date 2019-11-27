import React from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './ProductData';

function App() {
  
  let date = new Date();
  let currentDate = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <nav className={classes.Topbar}>
          <img src="http://localhost:3000/static/media/logo.f18c01ee.png"></img></nav>
          </nav>
      </header>
      <div className={classes.Maincontainer}>
       <div className={classes.ProductPreview} >
         <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" ></img>

         {/* <div  className={classes.TimeSection}> 
         <p className={classes.time}>{currentDate}</p>
         </div> */}

         <div  className={classes.HeartBeatSection}> 
         <i class="fas fa-heartbeat"></i>
         <p>78</p>
         </div>



         
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
           <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png"  alt="Black colored Watch"></img>
           <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red colored Watch"></img>
           <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue colored Watch"></img>
           <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple colored Watch"></img>
           
           </div>
              

           <h3 className={classes.SectionHeading}>Features</h3>

           <div>
             <button className={[classes.FeatureItem,classes.SelectedFeatureItem].join(' ')}>Time</button>
             <button className={classes.FeatureItem}>Heart Rate</button>
           </div> 

           <button className={classes.PrimaryButton}>Buy Now</button>

       </div>
      </div> 
    </div>
  );
}

export default App;
