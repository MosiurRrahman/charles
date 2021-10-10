import React, { Component } from "react";

class ProductDetails extends Component {
  render() {
    return (
      <>
        <div className="product-details">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="product-tab clearfix">
                <div className="product-preview">
                  <div className="tab-content">
                    <div id="tag-one" className="tab-pane active">
                      <img src="images/shop/13.jpg" alt="" />
                    </div>
                    <div id="tag-two" className="tab-pane fade">
                      <img src="images/shop/14.jpg" alt="" />
                    </div>
                  </div>
                </div>{" "}
                {/* /.product-preview */}
                <div className="product-thumbnail">
                  <ul className="nav-tabs nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tag-one">
                        <img src="images/shop/15.jpg" alt="" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tag-two">
                        <img src="images/shop/16.jpg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                {/* /.product-thumbnail */}
              </div>{" "}
              {/* /.product-tab */}
            </div>
            <div className="col-lg-7 col-12">
              <div className="product-info">
                <h5 className="title">
                  Contract and Fee-Setting Guide for Consultants
                </h5>
                <div className="price">
                  <del>$43.00</del>$38.00
                </div>
                <p>
                  A tale of a fateful trip that started from this tropic port
                  aboard this tiny ship today still wanted by the government
                  apartment in the sky moving on up to the east side a family to
                  explore strange new worlds to seek out new life and new
                  civilizations to boldly go where no man has gone before you
                  would see the biggest gift would be from me and the card
                  attached would say thank you for being a friend.
                </p>
                <ul className="order-box">
                  <li>Qty:</li>
                  <li>
                    <button id="value-decrease">-</button>
                    <input
                      type="number"
                      min={1}
                      max={22}
                      defaultValue={3}
                      className="val"
                      disabled
                      id="product-value"
                    />
                    <button id="value-increase">+ </button>
                  </li>
                </ul>
                <a href="#" className="theme-button-one">
                  <i className="fa fa-shopping-cart" aria-hidden="true" /> ADD
                  TO CART
                </a>
              </div>{" "}
              {/* /.product-info */}
            </div>
          </div>
        </div>{" "}
        {/* /.product-details */}
      </>
    );
  }
}

export default ProductDetails;
