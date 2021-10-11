import React, { Component } from "react";
import BlogInner from "./BlogInner";
import ThemeInnerBanner from "./ThemeInnerBanner";

class BlogPage extends Component {
  render() {
    return (
      <>
        <ThemeInnerBanner />
        <BlogInner />
      </>
    );
  }
}

export default BlogPage;
