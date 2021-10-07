import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Logo from "../../assets/images/logo/logo.png";

class Header extends Component {
  render() {
    return (
      <>
        <header className="header-one">
          <div className="top-header">
            <Container>
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
            </Container>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
