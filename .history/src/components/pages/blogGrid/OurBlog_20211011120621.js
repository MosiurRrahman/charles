import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import BlogGridImg from '../../../assets/images/blog/3.jpg';

class OurBlog extends Component {
  render() {
    return (
      <>
        <div className="col-xl-9 col-lg-8 col-12 our-blog">
          <div className="post-wrapper row">
            <div className="col-md-6 col-12">
              <div className="single-blog">
                <div className="image-box">
                  <img src={BlogGridImg} alt />
                  <div className="overlay">
                    <a href="#" className="date">
                      Feb 06, 2018
                    </a>
                  </div>
                </div>{" "}
                {/* /.image-box */}
                <div className="post-meta">
                  <h5 className="title">
                    <a href="blog-details.html">Trouble with the law since</a>
                  </h5>
                  <p>
                    To seek out new life and new civilizations to boldly go
                    where no man has gone before you would see the biggest gift.
                  </p>
                  <a href="blog-details.html" className="read-more">
                    READ MORE
                  </a>
                </div>{" "}
                {/* /.post-meta */}
              </div>{" "}
              {/* /.single-blog */}
            </div>{" "}
            {/* /.col- */}
            <div className="col-md-6 col-12">
              <div className="single-blog">
                <div className="image-box">
                  <img src={BlogGridImg} alt />
                  <div className="overlay">
                    <a href="#" className="date">
                      Mar 30, 2018
                    </a>
                  </div>
                </div>{" "}
                {/* /.image-box */}
                <div className="post-meta">
                  <h5 className="title">
                    <a href="blog-details.html">
                      Kind of torture to have to watch
                    </a>
                  </h5>
                  <p>
                    To seek out new life and new civilizations to boldly go
                    where no man has gone before you would see the biggest gift.
                  </p>
                  <a href="blog-details.html" className="read-more">
                    READ MORE
                  </a>
                </div>{" "}
                {/* /.post-meta */}
              </div>{" "}
              {/* /.single-blog */}
            </div>{" "}
            {/* /.col- */}
            <div className="col-md-6 col-12">
              <div className="single-blog">
                <div className="image-box">
                  <img src={BlogGridImg} alt />
                  <div className="overlay">
                    <a href="#" className="date">
                      Apr 14, 2018
                    </a>
                  </div>
                </div>{" "}
                {/* /.image-box */}
                <div className="post-meta">
                  <h5 className="title">
                    <a href="blog-details.html">
                      Make the best of things its an uphill.
                    </a>
                  </h5>
                  <p>
                    To seek out new life and new civilizations to boldly go
                    where no man has gone before you would see the biggest gift.
                  </p>
                  <a href="blog-details.html" className="read-more">
                    READ MORE
                  </a>
                </div>{" "}
                {/* /.post-meta */}
              </div>{" "}
              {/* /.single-blog */}
            </div>{" "}
            {/* /.col- */}
            <div className="col-md-6 col-12">
              <div className="single-blog">
                <div className="image-box">
                  <img src={BlogGridImg} alt />
                  <div className="overlay">
                    <a href="#" className="date">
                      Feb 06, 2018
                    </a>
                  </div>
                </div>{" "}
                {/* /.image-box */}
                <div className="post-meta">
                  <h5 className="title">
                    <a href="blog-details.html">Trouble with the law since</a>
                  </h5>
                  <p>
                    To seek out new life and new civilizations to boldly go
                    where no man has gone before you would see the biggest gift.
                  </p>
                  <a href="blog-details.html" className="read-more">
                    READ MORE
                  </a>
                </div>{" "}
                {/* /.post-meta */}
              </div>{" "}
              {/* /.single-blog */}
            </div>{" "}
            {/* /.col- */}
            <div className="col-md-6 col-12">
              <div className="single-blog">
                <div className="image-box">
                  <img src={BlogGridImg} alt />
                  <div className="overlay">
                    <a href="#" className="date">
                      Mar 30, 2018
                    </a>
                  </div>
                </div>{" "}
                {/* /.image-box */}
                <div className="post-meta">
                  <h5 className="title">
                    <a href="blog-details.html">
                      Kind of torture to have to watch
                    </a>
                  </h5>
                  <p>
                    To seek out new life and new civilizations to boldly go
                    where no man has gone before you would see the biggest gift.
                  </p>
                  <a href="blog-details.html" className="read-more">
                    READ MORE
                  </a>
                </div>{" "}
                {/* /.post-meta */}
              </div>{" "}
              {/* /.single-blog */}
            </div>{" "}
            {/* /.col- */}
            <div className="col-md-6 col-12">
              <div className="single-blog">
                <div className="image-box">
                  <img src={BlogGridImg} alt />
                  <div className="overlay">
                    <a href="#" className="date">
                      Apr 14, 2018
                    </a>
                  </div>
                </div>{" "}
                {/* /.image-box */}
                <div className="post-meta">
                  <h5 className="title">
                    <a href="blog-details.html">
                      Make the best of things its an uphill.
                    </a>
                  </h5>
                  <p>
                    To seek out new life and new civilizations to boldly go
                    where no man has gone before you would see the biggest gift.
                  </p>
                  <a href="blog-details.html" className="read-more">
                    READ MORE
                  </a>
                </div>{" "}
                {/* /.post-meta */}
              </div>{" "}
              {/* /.single-blog */}
            </div>{" "}
            {/* /.col- */}
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
                  <FontAwesomeIcon icon={faAngleDoubleRight} aria-hidden="true"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default OurBlog;
