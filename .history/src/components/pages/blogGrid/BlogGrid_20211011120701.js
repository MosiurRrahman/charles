import React, { Component } from "react";
import BlogSIdear from "../blog/BlogSIdear";
import OurBlog from "./OurBlog";

class BlogGrid extends Component {
  render() {
    return (
      <>
        <div className="blog-grid section-spacing">
            <div className="container">
                <div className="row">
                    <OurBlog/>
                    <BlogSIdear/>
                </div>
            </div>
        </div>
      </>
    );
  }
}

export default BlogGrid;
