import React, { Component } from "react";
import Consaltation from "./Consaltation";
import FeatureBanner from "./FeatureBanner";
import OurSolution from "./OurSolution";
import ThemeInnerBanner from "./ThemeInnerBanner";
import TopFeature from "./TopFeature";

class ServicePage extends Component {
  render() {
    return (
      <>
        <ThemeInnerBanner />
        <OurSolution />
        <FeatureBanner />
        <Consaltation />
        <TopFeature />
      </>
    );
  }
}

export default ServicePage;
