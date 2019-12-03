import React, { Component } from "react";
import classes from "./App.module.css";
import ProductData from "./ProductData";
import Header from "./Header";
import ProductDetails from "./ProductDetails";

class App extends Component {
  state = {
    currentImagePos: 0,
    imageUrl: ProductData.colorOptions[0].imageUrl,
    featureBtnPos: 0,
    featureBtn: ProductData.featureList[0]
  };

  onImageClick = pos => {
    this.setState({
      imageUrl: ProductData.colorOptions[pos].imageUrl,
      currentImagePos: pos
    });
  };

  onFeatureBtnClick = (item, pos) => {
    this.setState({
      featureBtn: item,
      featureBtnPos: pos
    });
  };

  render() {
    return (
      <div className={classes.App}>
        <Header />
        <ProductDetails
          preImage={this.state.imageUrl}
          title={ProductData.title}
          description={ProductData.description}
          colorOptions={ProductData.colorOptions}
          imgOnClick={this.onImageClick}
          currentImage={this.state.currentImagePos}
          featureList={ProductData.featureList}
          btnOnClick={this.onFeatureBtnClick}
          featureBtn={this.state.featureBtn}
          currentBtn={this.state.featureBtnPos}
        />
      </div>
    );
  }
}

export default App;
