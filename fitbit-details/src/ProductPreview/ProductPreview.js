 import React from'react';

 import classes from './ProductPreview.module.css';

 const ProductPreview=(props)=>{
    let date = new Date();
    let currentDate = `${date.getHours()}:${date.getMinutes()}`;

return(
    <div className={classes.ProductPreview}>
    <img src={props.currentPreviewImage} alt="Product Preview" ></img>

    {

        props.showHeartBeatSection ?
        <div  className={classes.HeartBeatSection}> 
        <i class="fas fa-heartbeat"></i>
        <p>78</p>
       </div>
:

<div  className={classes.TimeSection}> 
<p className={classes.time}>{currentDate}</p>
</div>


    }

    </div>
   );

  }

 export default     ProductPreview;