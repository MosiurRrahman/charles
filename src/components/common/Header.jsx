import React, { Component } from "react";
import "../../assets/fonts/icon/font/flaticon.css";
import Logo from "../../assets/images/logo/logo.png";
import "../../vendor/bootstrap/css/bootstrap.min.css";
import "../../vendor/menu/dist/css/slimmenu.css";

class Header extends Component {
  render() {
    return (
      <>
        <header className="header-one">
          <div className="top-header">
            <div className="container clearfix">
              <div className="logo float-left">
                <a href="index.html">
                  <img src={Logo} alt="" />
                </a>
              </div>
              <div className="address-wrapper float-right">
                <ul>
                  <li className="address">
                    <i className="icon flaticon-placeholder"></i>
                    <h6>Address:</h6>
                    <p>2A0, Queenstown St, USA.</p>
                  </li>
                  <li className="address">
                    <i className="icon flaticon-multimedia"></i>
                    <h6>Mail us:</h6>
                    <p>supporthere@mail.com</p>
                  </li>
                  <li className="quotes">
                    <a href="/">GET A QUOTES</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="theme-menu-wrapper">
            <div className="container">
              <div className="bg-wrapper clearfix">
                {/* <!-- ============== Menu Warpper ================ --> */}
                <div className="menu-wrapper float-left">
                  <nav id="mega-menu-holder" className="clearfix">
                    <ul className="clearfix">
                      <li className="active">
                        <a href="/">Home</a>
                        <ul className="dropdown">
                          <li>
                            <a href="index.html">Home version one</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home version two</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">PAGES</a>
                        <ul className="dropdown">
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
                            <a href="/">Third Level menu</a>
                            <ul>
                              <li>
                                <a href="/">Demo one</a>
                              </li>
                              <li>
                                <a href="/">Demo two</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Service</a>
                        <ul className="dropdown">
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
                        <a href="/">Portfolio</a>
                        <ul className="dropdown">
                          <li>
                            <a href="project.html">project</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Blog</a>
                        <ul className="dropdown">
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

                <div className="right-widget float-right">
                  <ul>
                    <li className="social-icon">
                      <ul>
                        <li>
                          <a href="/">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i
                              className="fa fa-pinterest"
                              aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="cart-icon">
                      <a href="/">
                        <i className="flaticon-tool"></i> <span>2</span>
                      </a>
                    </li>
                    <li className="search-option">
                      <div className="dropdown">
                        <button
                          type="button"
                          className="dropdown-toggle"
                          data-toggle="dropdown">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                        <form action="/" className="dropdown-menu">
                          <input type="text" placeholder="Enter Your Search" />
                          <button>
                            <i className="fa fa-search"></i>
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
