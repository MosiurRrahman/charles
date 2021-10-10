import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ProductReview from "./ProductReview";
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
          </div>
        </div>
      </>
    );
  }
}

export default ShopDetailsPage;
