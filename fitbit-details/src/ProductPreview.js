 import React from'react';

 import classes from './ProductPreview.module.css';

 const ProductPreview=(props)=>{
    let date = new Date();
    let currentDate = `${date.getHours()}:${date.getMinutes()}`;
return(
    <div className={classes.ProductPreview}>
    <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" ></img>

{/* <div  className={classes.TimeSection}> 
<p className={classes.time}>{currentDate}</p>
</div> */}

<div  className={classes.HeartBeatSection}> 
<i class="fas fa-heartbeat"></i>
<p>78</p>
</div>
    </div>
   );

  }

 export default     ProductPreview;