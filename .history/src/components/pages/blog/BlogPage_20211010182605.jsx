import React, { Component } from "react";
import BlogWrapper from "./BlogWrapper";
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
