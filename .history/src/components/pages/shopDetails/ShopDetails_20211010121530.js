import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ThemeInnerBAnner from "./ThemeInnerBAnner";

class ShopDetails extends Component {
  render() {
    return (
      <>
        <div className="shop-details">
          <div className="container">
            <ThemeInnerBAnner />
            <ProductDetails/>
          </div>
        </div>
      </>
    );
  }
}

export default ShopDetails;
