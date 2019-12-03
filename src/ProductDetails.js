import React from "react";
import classes from "./App.module.css";

const ProductDetails = props => {
  let date = new Date();
  let currentDate = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <div className={classes.ProductContainer}>
      <div className={classes.LeftSection}>
        <img className={classes.PreviewImage} src={props.preImage} alt="" />
        <div className={classes.FeaturesWrapper}>
          {props.featureBtn === "Time" ? (
            <p className={classes.time}>{currentDate}</p>
          ) : (
            <div className={classes.HeartRate}>
              <img src="https://i.imgur.com/dtevMBk.png" alt="" />
              <p>75</p>
            </div>
          )}
        </div>
      </div>

      <div className={classes.ProductDetails}>
        <p className={classes.Title}>{props.title}</p>
        <p>{props.description}</p>

        <div className={classes.SelectColor}>
          <h3 className={classes.Heading}>Select Color</h3>
          {props.colorOptions.map((item, pos) => {
            return (
              <img
                key={pos}
                className={[
                  classes.Image,
                  pos === props.currentImage ? classes.Active : null
                ].join(" ")}
                src={item.imageUrl}
                alt=""
                onClick={() => props.imgOnClick(pos)}
              />
            );
          })}
        </div>

        <div className={classes.Features}>
          <h3 className={classes.Heading}>Features</h3>
          {props.featureList.map((item, pos) => {
            return (
              <button
                key={pos}
                className={[
                  classes.FeatureBtn,
                  pos === props.currentBtn ? classes.ActiveBtn : null
                ].join(" ")}
                onClick={() => props.btnOnClick(item, pos)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <button className={classes.BuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
