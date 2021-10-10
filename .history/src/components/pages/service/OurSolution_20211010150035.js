import React, { Component } from "react";
import Icon5 from '../../../assets/images/icon/10.png';
import Icon1 from '../../../assets/images/icon/5.png';
import Icon2 from '../../../assets/images/icon/6.png';
import Icon3 from '../../../assets/images/icon/7.png';
import Icon4 from '../../../assets/images/icon/9.png';

class OurSolution extends Component {
  render() {
    return (
      <>
        <div className="our-solution section-spacing">
          <div className="container">
            <div className="theme-title-one">
              <h2>Our SOLUTIONS</h2>
            </div>{" "}
            {/* /.theme-title-one */}
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="single-solution-block">
                    <img src={Icon1} alt="icon1" className="icon" />
                    <h5>
                      <a href="service-details.html">Business Services</a>
                    </h5>
                    <p>
                      The explore strange new worlds to seek fout new life and
                      new civilizations to boldly where no man has before gone.{" "}
                    </p>
                  </div>{" "}
                  {/* /.single-solution-block */}
                </div>{" "}
                {/* /.col- */}
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="single-solution-block">
                    <img src={Icon2} alt="Icon2" className="icon" />
                    <h5>
                      <a href="service-details.html">Business Services</a>
                    </h5>
                    <p>
                      The explore strange new worlds to seek fout new life and
                      new civilizations to boldly where no man has before gone.{" "}
                    </p>
                  </div>{" "}
                  {/* /.single-solution-block */}
                </div>{" "}
                {/* /.col- */}
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="single-solution-block">
                    <img src={Icon3} alt="Icon3" className="icon" />
                    <h5>
                      <a href="service-details.html">Business Services</a>
                    </h5>
                    <p>
                      The explore strange new worlds to seek fout new life and
                      new civilizations to boldly where no man has before gone.{" "}
                    </p>
                  </div>{" "}
                  {/* /.single-solution-block */}
                </div>{" "}
                {/* /.col- */}
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="single-solution-block">
                    <img src={Icon4} alt="Icon4" className="icon" />
                    <h5>
                      <a href="service-details.html">Business Services</a>
                    </h5>
                    <p>
                      The explore strange new worlds to seek fout new life and
                      new civilizations to boldly where no man has before gone.{" "}
                    </p>
                  </div>{" "}
                  {/* /.single-solution-block */}
                </div>{" "}
                {/* /.col- */}
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="single-solution-block">
                    <img src={Icon5} alt="Icon5" className="icon" />
                    <h5>
                      <a href="service-details.html">Business Services</a>
                    </h5>
                    <p>
                      The explore strange new worlds to seek fout new life and
                      new civilizations to boldly where no man has before gone.{" "}
                    </p>
                  </div>
                  
                </div>
                
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="single-solution-block">
                    <img src={Icon5} alt="Icon5" className="icon" />
                    <h5>
                      <a href="service-details.html">Business Services</a>
                    </h5>
                    <p>
                      The explore strange new worlds to seek fout new life and
                      new civilizations to boldly where no man has before gone.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OurSolution;
