import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <header class="header-one">
          <div class="top-header">
            <div class="container clearfix">
              <div class="logo float-left">
                <a href="index.html">
                  <img src="images/logo/logo.png" alt="" />
                </a>
              </div>
              <div class="address-wrapper float-right">
                <ul>
                  <li class="address">
                    <i class="icon flaticon-placeholder"></i>
                    <h6>Address:</h6>
                    <p>2A0, Queenstown St, USA.</p>
                  </li>
                  <li class="address">
                    <i class="icon flaticon-multimedia"></i>
                    <h6>Mail us:</h6>
                    <p>supporthere@mail.com</p>
                  </li>
                  <li class="quotes">
                    <a href="#">GET A QUOTES</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="theme-menu-wrapper">
            <div class="container">
              <div class="bg-wrapper clearfix">
                {/* <!-- ============== Menu Warpper ================ --> */}
                <div class="menu-wrapper float-left">
                  <nav id="mega-menu-holder" class="clearfix">
                    <ul class="clearfix">
                      <li class="active">
                        <a href="#">Home</a>
                        <ul class="dropdown">
                          <li>
                            <a href="index.html">Home version one</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home version two</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">PAGES</a>
                        <ul class="dropdown">
                          <li>
                            <a href="about.html">About us</a>
                          </li>
                          <li>
                            <a href="team.html">Our team</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq's</a>
                          </li>
                          <li>
                            <a href="404.html">404</a>
                          </li>
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="shop-details.html">Shop details</a>
                          </li>
                          <li>
                            <a href="#">Third Level menu</a>
                            <ul>
                              <li>
                                <a href="#">Demo one</a>
                              </li>
                              <li>
                                <a href="#">Demo two</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Service</a>
                        <ul class="dropdown">
                          <li>
                            <a href="service.html">Service Version one</a>
                          </li>
                          <li>
                            <a href="service-v2.html">Service version two</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                        <ul class="dropdown">
                          <li>
                            <a href="project.html">project</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                        <ul class="dropdown">
                          <li>
                            <a href="blog.html">Blog List</a>
                          </li>
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div class="right-widget float-right">
                  <ul>
                    <li class="social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-pinterest" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="cart-icon">
                      <a href="#">
                        <i class="flaticon-tool"></i> <span>2</span>
                      </a>
                    </li>
                    <li class="search-option">
                      <div class="dropdown">
                        <button
                          type="button"
                          class="dropdown-toggle"
                          data-toggle="dropdown">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                        <form action="#" class="dropdown-menu">
                          <input type="text" Placeholder="Enter Your Search" />
                          <button>
                            <i class="fa fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
