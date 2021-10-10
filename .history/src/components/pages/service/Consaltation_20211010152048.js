import React, { Component } from "react";

class Consaltation extends Component {
  render() {
    return (
      <>
        <div className="consultation-form section-spacing">
          <div className="container">
            <div className="theme-title-one">
              <h2>FREE CONSULTATION</h2>
              <p>
                A tale of a fateful trip that started from this tropic port
                aboard this tiny ship today stillers
              </p>
            </div>
            <div className="clearfix main-content no-gutters row">
              <div className="col-xl-6 col-lg-5 col-12">
                <div className="img-box" />
              </div>
              <div className="col-xl-6 col-lg-7 col-12">
                <div className="form-wrapper">
                  <form action="#" className="theme-form-one">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" placeholder="Name *" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" placeholder="Phone *" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" placeholder="Email *" />
                      </div>
                      <div className="col-md-6">
                        <select className="form-control" id="exampleSelect1">
                          <option>Service you’re looking for?</option>
                          <option>Business Services</option>
                          <option>Consumer Product</option>
                          <option>Financial Services</option>
                          <option>Software Research</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea placeholder="Message" defaultValue={""} />
                      </div>
                    </div>
                    <button className="theme-button-one">GET A QUOTES</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Consaltation;
