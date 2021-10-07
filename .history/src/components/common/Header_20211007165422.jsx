import React, { Component } from "react";
import Logo from "../../assets/images/logo/logo";

class Header extends Component {
  render() {
    return (
      <>
        <header class="header-one">
          <div class="top-header">
            <div class="container clearfix">
              <div class="logo float-left">
                <a href="index.html">
                  <img src={Logo} alt="" />
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
        </header>
      </>
    );
  }
}

export default Header;
