import React, { Component } from "react";

class BlogSIdear extends Component {
  render() {
    return (
      <>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12 blog-sidebar">
          <div className="sidebar-container sidebar-search">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>{" "}
          {/* /.sidebar-search */}
          <div className="sidebar-container sidebar-categories">
            <h5 className="title">Categories</h5>
            <ul>
              <li>
                <a href="#">Travel and Aviation</a>
              </li>
              <li>
                <a href="#">Business Services</a>
              </li>
              <li>
                <a href="#">Consumer Products</a>
              </li>
              <li>
                <a href="#">Financial Services</a>
              </li>
              <li>
                <a href="#">Software Research</a>
              </li>
            </ul>
          </div>{" "}
          {/* /.sidebar-categories */}
          <div className="sidebar-container sidebar-recent-post">
            <h5 className="title">Recent Posts</h5>
            <ul>
              <li className="clearfix">
                <img src="images/blog/6.jpg" alt className="float-left" />
                <div className="post float-left">
                  <a href="blog-details.html">
                    World don't move to beat of just one drum.
                  </a>
                  <div className="date">5 minutes ago</div>
                </div>
              </li>
              <li className="clearfix">
                <img src="images/blog/7.jpg" alt className="float-left" />
                <div className="post float-left">
                  <a href="blog-details.html">
                    Be right for you may not be right for some.
                  </a>
                  <div className="date">2 days ago</div>
                </div>
              </li>
              <li className="clearfix">
                <img src="images/blog/8.jpg" alt className="float-left" />
                <div className="post float-left">
                  <a href="blog-details.html">
                    World don't move to beat of just one drum.
                  </a>
                  <div className="date">1 month ago</div>
                </div>
              </li>
            </ul>
          </div>{" "}
          {/* /.sidebar-recent-post */}
          <div className="sidebar-container sidebar-archives">
            <h5 className="title">Archives</h5>
            <ul>
              <li>
                <a href="#">January 2018</a>
              </li>
              <li>
                <a href="#">February 2018</a>
              </li>
              <li>
                <a href="#">March 2018</a>
              </li>
            </ul>
          </div>{" "}
          {/* /.sidebar-archives */}
          <div className="sidebar-tags">
            <h5 className="title">tags</h5>
            <ul className="clearfix">
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Consulting</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Startup</a>
              </li>
              <li className="active">
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Financial</a>
              </li>
              <li>
                <a href="#">Research</a>
              </li>
            </ul>
          </div>{" "}
          {/* /.sidebar-tags */}
        </div>
      </>
    );
  }
}

export default BlogSIdear;
