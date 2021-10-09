import React, { Component } from "react";
import HomeImage from '../../../assets/images/home/1.jpg';
class AboutCompany extends Component {
  render() {
    return (
      <div>
        <div className="about-compnay-two no-bg section-spacing">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-12 text order-lg-last">
                  <div className="theme-title-one">
                    <h2>SHORT HISTORY</h2>
                  </div>{" "}
                  {/* /.theme-title-one */}
                  <p>
                    A tale of a fateful trip that started from this tropic port
                    aboard this tiny ship today still wanted by the government
                    they survive as soldiers of fortune to a deluxe you
                    apartment in the sky to explore strange new worlds to seek
                    out new life and new civilizations to boldly go where no man
                    has gone.
                  </p>
                  <p>
                    You would see the biggest gift would be from me and the card
                    attached would so thank you for being a friend the biggest
                    gift.
                  </p>
                  <img
                    src="images/home/sign-black.png"
                    alt=""
                    className="sign"
                  />
                </div>
                <div className="col-lg-6 col-12 order-lg-first">
                  <img src={HomeImage} alt="" className="left-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutCompany;
