import React, { Component } from "react";
import ShopDetails from "./ShopDetails";
import ThemeInnerBAnner from "./ThemeInnerBAnner";

class ShopDetailsPage extends Component {
  render() {
    return (
      <>
        <div className="shop-details">
          <div className="container">
            <ThemeInnerBAnner />
            <ShopDetails/>
          </div>
        </div>
      </>
    );
  }
}

export default ShopDetailsPage;
