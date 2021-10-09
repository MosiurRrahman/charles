import React, { Component } from "react";
import ConsultationForm from "./ConsultationForm";

class Consultation extends Component {
  render() {
    return (
      <>
        <div className="consultation-form section-spacing">
          <div className="container">
            <div className="theme-title-one">
              <h2>Get Appointment</h2>
              <p>
                A tale of a fateful trip that started from this tropic port
                aboard this tiny ship today stillers
              </p>
            </div>{" "}
            {/* /.theme-title-one */}
            <div className="clearfix main-content no-gutters row">
              <div className="col-xl-6 col-lg-5 col-12">
                <div className="img-box" />
              </div>
              <div className="col-xl-6 col-lg-7 col-12">
                <div className="form-wrapper">
                  <ConsultationForm/>
                </div>{" "}
                {/* /.form-wrapper */}
              </div>{" "}
              {/* /.col- */}
            </div>{" "}
            {/* /.main-content */}
          </div>{" "}
          {/* /.container */}
        </div>{" "}
        {/* /.consultation-form */}
      </>
    );
  }
}

export default Consultation;
