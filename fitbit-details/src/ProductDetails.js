import React from'react';
import classes from'./ProductDetails.module.css';

const ProductDetails =(props) =>{
    return(
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
    )

}
export default ProductDetails;  