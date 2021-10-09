import React, { Component } from "react";
import AboutCompany from "./AboutCompany";
import CallOutBanner from "./CallOutBanner";
import ThemeCounter from "./ThemeCounter";
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
       <ThemeCounter/>
      </>
    );
  }
}

export default about;
