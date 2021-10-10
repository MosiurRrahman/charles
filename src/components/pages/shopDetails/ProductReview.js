import React, { Component } from "react";

class ProductReview extends Component {
  render() {
    return (
      <>
        <div className="product-review-tab">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#description">
                Description
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#review">
                Reviews(02)
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div id="description" className="tab-pane active">
              <p>
                This tropic port aboard this tiny ship today still wanted by the
                government apartment in the sky moving on up to the east side a
                family to explore strange new worlds to seek out new life and
                new civilizations to boldly go where new worlds to seek out new
                life and new civilizations to boldly no man has gone before you
                would see the biggest gift would be from me and the card.
              </p>
              <p>
                That this group would somehow form a family that's the way we
                all became the Brady Bunch apartment in the sky moving on up to
                the east side a family to explore strange new worlds.
              </p>
            </div>
            <div id="review" className="tab-pane fade">
              <div className="single-review clearfix">
                <img src="images/blog/17.jpg" alt="" className="float-left" />
                <div className="comment float-left">
                  <h6>Alex Martin</h6>
                  <ul>
                    <li>
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-o" aria-hidden="true" />
                    </li>
                  </ul>
                  <p>
                    Its a civilizations to boldly go where no man has gone
                    before you would see the biggest gift would be from me and
                    the card attached would say thank you.
                  </p>
                </div>{" "}
                {/* /.comment */}
              </div>{" "}
              {/* /.single-review */}
              <div className="single-review clearfix">
                <img src="images/blog/17.jpg" alt="" className="float-left" />
                <div className="comment float-left">
                  <h6>James Frank</h6>
                  <ul>
                    <li>
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-o" aria-hidden="true" />
                    </li>
                  </ul>
                  <p>
                    Its a civilizations to boldly go where no man has gone
                    before you would see the biggest gift would be from me and
                    the card attached would say thank you.
                  </p>
                </div>{" "}
                {/* /.comment */}
              </div>{" "}
              {/* /.single-review */}
            </div>
          </div>
        </div>{" "}
        {/* /.product-review-tab */}
      </>
    );
  }
}

export default ProductReview;
