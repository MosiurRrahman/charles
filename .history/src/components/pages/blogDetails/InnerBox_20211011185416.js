import React, { Component } from "react";
import BlogImg from '../../../assets/images/blog/17.jpg';

class InnerBox extends Component {
  render() {
    return (
      <>
        <div className="inner-box comment-area">
          <div className="theme-title-one">
            <h2>COMMENTS(02)</h2>
          </div>{" "}
          {/* /.theme-title-one */}
          <div className="single-comment clearfix">
            <img src={BlogImg} alt="BlogImage" className="float-left" />
            <div className="comment float-left">
              <h6>Alex Martin</h6>
              <p>
                Its a civilizations to boldly go where no man has gone before
                you would see the biggest gift would be from me and the card
                attached would say thank you.
              </p>
              <a href="#">REPLY</a>
            </div>{" "}
            {/* /.comment */}
          </div>{" "}
          {/* /.single-comment */}
          <div className="single-comment clearfix">
            <img src={BlogImg} alt className="float-left" />
            <div className="comment float-left">
              <h6>James Frank</h6>
              <p>
                Its a civilizations to boldly go where no man has gone before
                you would see the biggest gift would be from me and the card
                attached would say thank you.
              </p>
              <a href="#">REPLY</a>
            </div>{" "}
            {/* /.comment */}
          </div>{" "}
          {/* /.single-comment */}
        </div>
      </>
    );
  }
}

export default InnerBox;
