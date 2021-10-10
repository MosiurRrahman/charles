import React, { Component } from "react";
import ServiceDetails from "./ServiceDetails";
import ThemeInnerBanner from "./ThemeInnerBanner";

class ServiceDetailsPage extends Component {
  render() {
    return (
      <>
        <ThemeInnerBanner />
        <ServiceDetails />
      </>
    );
  }
}

export default ServiceDetailsPage;
