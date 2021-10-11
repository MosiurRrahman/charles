import React, { Component } from "react";
import BlogInner from "./BlogInner";
import BlogSIdear from "./BlogSIdear";
import ThemeInnerBanner from "./ThemeInnerBanner";

class BlogPage extends Component {
  render() {
    return (
      <>
        <ThemeInnerBanner />
        <BlogInner />
        <BlogSIdear />
      </>
    );
  }
}

export default BlogPage;
