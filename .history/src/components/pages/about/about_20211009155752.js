import React, { Component } from "react";
import AboutCompany from "./AboutCompany";
import CallOutBanner from "./CallOutBanner";
import ThemeInnerBanner from "./ThemeInnerBanner";

class about extends Component {
  render() {
    return (
      <>
       <ThemeInnerBanner/>
       <CallOutBanner/>
       <AboutCompany/> 
      </>
    );
  }
}

export default about;
