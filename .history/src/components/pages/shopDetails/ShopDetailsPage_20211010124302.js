import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ProductReview from "./ProductReview";
import RealatedProduct from "./RealatedProduct";
import ThemeInnerBAnner from "./ThemeInnerBAnner";

class ShopDetailsPage extends Component {
  render() {
    return (
      <>
        <div className="shop-details">
          <div className="container">
            <ThemeInnerBAnner />
            <ProductDetails/>
            <ProductReview/>
            <RealatedProduct/>
          </div>
        </div>
      </>
    );
  }
}

export default ShopDetailsPage;
