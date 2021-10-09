import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="theme-footer-one">
          <div className="top-footer">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-sm-6 about-widget">
                  <h6 className="title">About OUR Consulting</h6>
                  <p>
                    That started from this tropic port aboard this tiny ship
                    today still want by theam government they survive on up to
                    thetre east side to a deluxe as soldiers of artics fortune.
                  </p>
                  <div className="queries">
                    <i className="flaticon-phone-call"></i> Any Queries :
                    <a href="#">(+1) 234 567 900</a>
                  </div>
                </div>
                {/* <!-- /.about-widget --> */}
                <div className="col-xl-4 col-lg-3 col-sm-6 footer-recent-post">
                  <h6 className="title">RECENT POSTS</h6>
                  <ul>
                    <li className="clearfix">
                      <img
                        src="images/blog/1.jpg"
                        alt=""
                        className="float-left"
                      />
                      <div className="post float-left">
                        <a href="blog-details.html">
                          Till wanted by theam govern they survive as soldiers.
                        </a>
                        <div className="date">
                          <i
                            className="fa fa-calendar-o"
                            aria-hidden="true"></i>{" "}
                          Feb 06, 2018
                        </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img
                        src="images/blog/2.jpg"
                        alt=""
                        className="float-left"
                      />
                      <div className="post float-left">
                        <a href="blog-details.html">
                          World don't move to beat of just one drum.
                        </a>
                        <div className="date">
                          <i
                            className="fa fa-calendar-o"
                            aria-hidden="true"></i>{" "}
                          Mar 20, 2018
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- /.footer-recent-post --> */}
                <div className="col-xl-2 col-lg-3 col-sm-6 footer-list">
                  <h6 className="title">SOLUTIONS</h6>
                  <ul>
                    <li>
                      <a href="#">Travel and Aviation</a>
                    </li>
                    <li>
                      <a href="#">Business Services</a>
                    </li>
                    <li>
                      <a href="#">Consumer Products</a>
                    </li>
                    <li>
                      <a href="#">Financial Services</a>
                    </li>
                    <li>
                      <a href="#">Software Research</a>
                    </li>
                    <li>
                      <a href="#">Quality Resourcing</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /.footer-list --> */}
                <div className="col-xl-3 col-lg-2 col-sm-6 footer-newsletter">
                  <h6 className="title">NEWSLETTER</h6>
                  <form action="#">
                    <input type="text" placeholder="Name *" />
                    <input type="email" placeholder="Email *" />
                    <button className="theme-button-one">SUBSCRIBE</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <p>&copy; Copyrights 2018. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 col-12">
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="service.html">Solutions</a>
                    </li>
                    <li>
                      <a href="#">FAQ’s</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.bottom-footer --> */}
        </footer>
      </>
    );
  }
}

export default Footer;
