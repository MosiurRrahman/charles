import React, { Component } from "react";
import ThemeInnerBanner from "./ThemeInnerBanner";

class BlogPage extends Component {
  render() {
    return (
      <>
        <ThemeInnerBanner />
        <BlogWrapper />
      </>
    );
  }
}

export default BlogPage;
