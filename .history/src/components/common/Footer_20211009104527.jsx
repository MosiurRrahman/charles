import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer class="theme-footer-one">
          <div class="top-footer">
            <div class="container">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-sm-6 about-widget">
                  <h6 class="title">About OUR Consulting</h6>
                  <p>
                    That started from this tropic port aboard this tiny ship
                    today still want by theam government they survive on up to
                    thetre east side to a deluxe as soldiers of artics fortune.
                  </p>
                  <div class="queries">
                    <i class="flaticon-phone-call"></i> Any Queries :
                    <a href="#">(+1) 234 567 900</a>
                  </div>
                </div>
                {/* <!-- /.about-widget --> */}
                <div class="col-xl-4 col-lg-3 col-sm-6 footer-recent-post">
                  <h6 class="title">RECENT POSTS</h6>
                  <ul>
                    <li class="clearfix">
                      <img src="images/blog/1.jpg" alt="" class="float-left" />
                      <div class="post float-left">
                        <a href="blog-details.html">
                          Till wanted by theam govern they survive as soldiers.
                        </a>
                        <div class="date">
                          <i class="fa fa-calendar-o" aria-hidden="true"></i>{" "}
                          Feb 06, 2018
                        </div>
                      </div>
                    </li>
                    <li class="clearfix">
                      <img src="images/blog/2.jpg" alt="" class="float-left" />
                      <div class="post float-left">
                        <a href="blog-details.html">
                          World don't move to beat of just one drum.
                        </a>
                        <div class="date">
                          <i class="fa fa-calendar-o" aria-hidden="true"></i>{" "}
                          Mar 20, 2018
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- /.footer-recent-post --> */}
                <div class="col-xl-2 col-lg-3 col-sm-6 footer-list">
                  <h6 class="title">SOLUTIONS</h6>
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
                <div class="col-xl-3 col-lg-2 col-sm-6 footer-newsletter">
                  <h6 class="title">NEWSLETTER</h6>
                  <form action="#">
                    <input type="text" placeholder="Name *" />
                    <input type="email" placeholder="Email *" />
                    <button class="theme-button-one">SUBSCRIBE</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-footer">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-12">
                  <p>&copy; Copyrights 2018. All Rights Reserved.</p>
                </div>
                <div class="col-md-6 col-12">
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
