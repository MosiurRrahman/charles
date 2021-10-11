import React, { Component } from "react";
import BlogDetails from "./BlogDetails";
import ThemeInnerBanner from "./ThemeInnerBanner";

class BlogDetailsPage extends Component {
  render() {
    return (
      <>
        <ThemeInnerBanner />
        <BlogDetails />
      </>
    );
  }
}

export default BlogDetailsPage;
