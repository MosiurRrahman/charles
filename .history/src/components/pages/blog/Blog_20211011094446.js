import React, { Component } from "react";
import BlogInner from "./BlogInner";

class Blog extends Component {
  render() {
    return (
      <>
        <div className="blog-inner-page section-spacing">
          
          <div className="container">
            <div className="row">
                <BlogInner/>
                <BlogSIdear/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Blog;
