import React, { Component } from 'react';

class ThemeCounter extends Component {
    render() {
        return (
            <>
             <div className="theme-counter-two section-spacing">
        <div className="container">
          <div className="clearfix">
            <div className="cunter-wrapper">
              <div className="row">
                <div className="col-md-3 col-6">
                  <div className="single-counter-box">
                    <div className="number"><span className="timer" data-from={0} data-to={30} data-speed={1200} data-refresh-interval={5}>0</span>+</div>
                    <p>Years of Excellence</p>
                  </div> {/* /.single-counter-box */}
                </div>  {/* /.col- */}
                <div className="col-md-3 col-6">
                  <div className="single-counter-box">
                    <div className="number"><span className="timer" data-from={0} data-to={100} data-speed={1200} data-refresh-interval={5}>0</span>%</div>
                    <p>Client Satisfaction</p>
                  </div> {/* /.single-counter-box */}
                </div>  {/* /.col- */}
                <div className="col-md-3 col-6">
                  <div className="single-counter-box">
                    <div className="number"><span className="timer" data-from={0} data-to={53} data-speed={1200} data-refresh-interval={5}>0</span>k</div>
                    <p>Cases Completed</p>
                  </div> {/* /.single-counter-box */}
                </div>  {/* /.col- */}
                <div className="col-md-3 col-6">
                  <div className="single-counter-box">
                    <div className="number"><span className="timer" data-from={0} data-to={24} data-speed={1200} data-refresh-interval={5}>0</span></div>
                    <p>Consultants</p>
                  </div> {/* /.single-counter-box */}
                </div>  {/* /.col- */}
              </div> {/* /.row */}
            </div> {/* /.cunter-wrapper */}
          </div> {/* /.clearfix */}
        </div> {/* /.container */}
      </div> {/* /.theme-counter */}   
            </>
        );
    }
}

export default ThemeCounter;