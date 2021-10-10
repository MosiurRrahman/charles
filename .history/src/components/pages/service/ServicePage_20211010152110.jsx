import React, { Component } from "react";
import Consaltation from "./Consaltation";
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
        <Consaltation />
      </>
    );
  }
}

export default ServicePage;
