import React, { Component } from "react";
import Blog from "./Blog";
import ThemeInnerBanner from "./ThemeInnerBanner";

class BlogPage extends Component {
  render() {
    return (
      <>
        <ThemeInnerBanner />
        <Blog />
      </>
    );
  }
}

export default BlogPage;
