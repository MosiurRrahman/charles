import React, { Component } from "react";
import BlogGrid from "./BlogGrid";
import ThemeInnerBanner from "./ThemeInnerBanner";

class BlogGridPage extends Component {
  render() {
    return (
      <>
        <ThemeInnerBanner />
        <BlogGrid />
      </>
    );
  }
}

export default BlogGridPage;
