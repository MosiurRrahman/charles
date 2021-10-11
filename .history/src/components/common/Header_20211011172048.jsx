import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
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
        </header>
      </>
    );
  }
}

export default Header;
