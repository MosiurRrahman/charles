import React, { Component } from "react";

class ShopFilter extends Component {
  render() {
    return (
      <>
        <div className="shop-filter">
          <ul className="clearfix">
            <li>Showing all 1-15 results</li>
            <li>
              <select className="form-control" id="exampleSelect1">
                <option>Default Sorting</option>
                <option>Price</option>
                <option>Size</option>
                <option>Trending</option>
                <option>Upcoming</option>
              </select>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default ShopFilter;
