import React, { Component } from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <h1>this is content</h1>
        <Footer />
      </>
    );
  }
}

export default Layout;
