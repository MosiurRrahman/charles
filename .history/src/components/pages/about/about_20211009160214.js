import React, { Component } from "react";
import AboutCompany from "./AboutCompany";
import CallOutBanner from "./CallOutBanner";
import ThemeInnerBanner from "./ThemeInnerBanner";
import WhyWeBest from "./WhyWeBest";

class about extends Component {
  render() {
    return (
      <>
       <ThemeInnerBanner/>
       <CallOutBanner/>
       <AboutCompany/>
       <WhyWeBest/> 
      </>
    );
  }
}

export default about;
