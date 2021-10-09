// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { Component } from "react";
// import OwlCarousel from 'react-owl-carousel';
import IconImage from '../../../assets/images/icon/1.png';
class TopFeature extends Component {
  render() {
    return (
      <>
        <div className="top-feature section-spacing">
          <div className="top-features-slide owl-theme" nav items={1}>
            <div className="item" style={{ background: "fafafa" }}>
              <div className="main-content" style={{background: "/fafafa"}}>
                <img src={IconImage} alt="" />
                <h4>
                  <a href="/">Consumer Insights</a>
                </h4>
                <p>
                  The east side to a deluxe apartment in move on up to the east
                  side
                </p>
              </div>
            </div>
            <div className="item" style={{ background: "fafafa" }}>
              <div className="main-content" style={{background: "/fafafa"}}>
                <img src={IconImage} alt="" />
                <h4>
                  <a href="/">Consumer Insights</a>
                </h4>
                <p>
                  The east side to a deluxe apartment in move on up to the east
                  side
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default TopFeature;
