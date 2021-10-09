import React, { Component } from "react";
import CallOutBanner from "./CallOutBanner";
import ThemeInnerBanner from "./ThemeInnerBanner";

class about extends Component {
  render() {
    return (
      <>
       <ThemeInnerBanner/>
       <CallOutBanner/> 
      </>
    );
  }
}

export default about;
