import React, { Component } from "react";
import BlogImg from '../../../assets/images/blog/9.jpg';

class BlogInner extends Component {
  render() {
    return (
      <>
      <div className="col-xl-9 col-lg-8 col-12 our-blog">
          <div className="post-wrapper">
            <div className="single-blog">
              <div className="image-box">
                <img src={BlogImg} alt="BlogImg" />
                <div className="overlay">
                  <a href="#" className="date">
                    Feb 06, 2018
                  </a>
                </div>
              </div>{" "}
              {/* /.image-box */}
              <div className="post-meta">
                <h5 className="title">
                  <a href="blog-details.html">
                    Its like a kind of torture to have to watch the show
                  </a>
                </h5>
                <p>
                  A tale of a fateful trip that started from this tropic port
                  aboard this tiny ship today still wanted by the government
                  apartment in the sky moving on up to the east side a family.
                </p>
                <a href="blog-details.html" className="read-more">
                  READ MORE
                </a>
              </div>{" "}
              {/* /.post-meta */}
            </div>{" "}
            {/* /.single-blog */}
            <div className="single-blog">
              <div className="image-box">
              <img src={BlogImg} alt="BlogImg" />
                <div className="overlay">
                  <a href="#" className="date">
                    Mar 23, 2018
                  </a>
                </div>
              </div>{" "}
              {/* /.image-box */}
              <div className="post-meta">
                <h5 className="title">
                  <a href="blog-details.html">
                    Flying away on a wing and a prayer
                  </a>
                </h5>
                <p>
                  A tale of a fateful trip that started from this tropic port
                  aboard this tiny ship today still wanted by the government
                  apartment in the sky moving on up to the east side a family.
                </p>
                <a href="blog-details.html" className="read-more">
                  READ MORE
                </a>
              </div>{" "}
              {/* /.post-meta */}
            </div>{" "}
            {/* /.single-blog */}
            <div className="single-blog">
              <div className="image-box">
              <img src={BlogImg} alt="BlogImg" />
                <div className="overlay">
                  <a href="#" className="date">
                    Feb 06, 2018
                  </a>
                </div>
              </div>{" "}
              {/* /.image-box */}
              <div className="post-meta">
                <h5 className="title">
                  <a href="blog-details.html">
                    The law since to eastern side of yellow mint
                  </a>
                </h5>
                <p>
                  A tale of a fateful trip that started from this tropic port
                  aboard this tiny ship today still wanted by the government
                  apartment in the sky moving on up to the east side a family.
                </p>
                <a href="blog-details.html" className="read-more">
                  READ MORE
                </a>
              </div>{" "}
              {/* /.post-meta */}
            </div>{" "}
            {/* /.single-blog */}
            <div className="single-blog">
              <div className="image-box">
              <img src={BlogImg} alt="BlogImg" />
                <div className="overlay">
                  <a href="#" className="date">
                    Mar 23, 2018
                  </a>
                </div>
              </div>{" "}
              {/* /.image-box */}
              <div className="post-meta">
                <h5 className="title">
                  <a href="blog-details.html">
                    Rouble with the law since the day they was born
                  </a>
                </h5>
                <p>
                  A tale of a fateful trip that started from this tropic port
                  aboard this tiny ship today still wanted by the government
                  apartment in the sky moving on up to the east side a family.
                </p>
                <a href="blog-details.html" className="read-more">
                  READ MORE
                </a>
              </div>{" "}
              {/* /.post-meta */}
            </div>{" "}
            {/* /.single-blog */}
          </div>{" "}
          {/* /.post-wrapper */}
          <div className="theme-pagination">
            <ul>
              <li>
                <a href="#">1</a>
              </li>
              <li className="active">
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      
      </>
    );
  }
}

export default BlogInner;
