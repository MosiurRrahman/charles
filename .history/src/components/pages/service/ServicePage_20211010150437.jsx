import React, { Component } from "react";
import FeatureBanner from "./FeatureBanner";
import OurSolution from "./OurSolution";
import ThemeInnerBanner from "./ThemeInnerBanner";

class ServicePage extends Component {
  render() {
    return (
      <>
        <ThemeInnerBanner />
        <OurSolution />
        <FeatureBanner />
      </>
    );
  }
}

export default ServicePage;
