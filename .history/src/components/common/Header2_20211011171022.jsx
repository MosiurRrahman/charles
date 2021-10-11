import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header2 extends Component {
  render() {
    return (
      <>
        <div className="theme-menu-wrapper">
          <div className="container">
            <div className="bg-wrapper clearfix">
              {/* ============== Menu Warpper ================ */}
              <div className="menu-wrapper float-left">
                <nav id="mega-menu-holder" className="clearfix">
                  <ul className="clearfix">
                    <li className="active">
                      <Link to="/">Home</Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="/">Home version one</Link>
                        </li>
                        <li>
                          <Link to="/">Home version two</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/">PAGES</Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="/about">About us</Link>
                        </li>
                        <li>
                          <Link to="/team">Our team</Link>
                        </li>
                        <li>
                          <Link to="/faq">Faq's</Link>
                        </li>
                        <li>
                          <Link to="/error">404</Link>
                        </li>
                        <li>
                          <Link to="/shop">Shop</Link>
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
                      <a href="#">Portfolio</a>
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
                      <a href="#">Blog</a>
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
                {/* /#mega-menu-holder */}
              </div>
              {/* /.menu-wrapper */}
              <div className="right-widget float-right">
                <ul>
                  <li className="social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="cart-icon">
                    <a href="#">
                      <i className="flaticon-tool" /> <span>2</span>
                    </a>
                  </li>
                  <li className="search-option">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="dropdown-toggle"
                        data-toggle="dropdown">
                        <i className="fa fa-search" aria-hidden="true" />
                      </button>
                      <form action="#" className="dropdown-menu">
                        <input type="text" placeholder="Enter Your Search" />
                        <button>
                          <i className="fa fa-search" />
                        </button>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
              {/* /.right-widget */}
            </div>
            {/* /.bg-wrapper */}
          </div>
          {/* /.container */}
        </div>
      </>
    );
  }
}

export default Header2;
