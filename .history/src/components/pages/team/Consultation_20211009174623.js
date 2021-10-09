import React, { Component } from 'react';

class Consultation extends Component {
    render() {
        return (
            <>
             <div className="consultation-form section-spacing">
        <div className="container">
          <div className="theme-title-one">
            <h2>Get Appointment</h2>
            <p>A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>
          </div> {/* /.theme-title-one */}
          <div className="clearfix main-content no-gutters row">
            <div className="col-xl-6 col-lg-5 col-12"><div className="img-box" /></div>
            <div className="col-xl-6 col-lg-7 col-12">
              <div className="form-wrapper">
                <form action="#" className="theme-form-one">
                  <div className="row">
                    <div className="col-md-6"><input type="text" placeholder="Name *" /></div>
                    <div className="col-md-6"><input type="text" placeholder="Phone *" /></div>
                    <div className="col-md-6"><input type="email" placeholder="Email *" /></div>
                    <div className="col-md-6">
                      <select className="form-control" id="exampleSelect1">
                        <option>Whom you’re looking for?</option>
                        <option>Richards Mills</option>
                        <option>Mike Hussey</option>
                        <option>Jenilia D’sosa</option>
                        <option>David Warner</option>
                      </select>
                    </div>
                    <div className="col-12"><textarea placeholder="Message" defaultValue={""} /></div>
                  </div> {/* /.row */}
                  <button className="theme-button-one">GET A QUOTES</button>
                </form>
              </div> {/* /.form-wrapper */}
            </div> {/* /.col- */}
          </div> {/* /.main-content */}
        </div> {/* /.container */}
      </div> {/* /.consultation-form */}   
            </>
        );
    }
}

export default Consultation;