import React, { Component } from 'react';
import blogImg from '../../../assets/images/blog/9.jpg';

class BlogPostWrapper extends Component {
    render() {
        return (
            <>
             <div className="post-wrapper blog-details">
  <div className="single-blog">
    <div className="image-box">
      <img src={blogImg} alt="blogImg" />
      <div className="overlay">
        <a href="/" className="date">
          Feb 06, 2018
        </a>
      </div>
    </div>{" "}
    {/* /.image-box */}
    <div className="post-meta">
      <h5 className="title">
        Its like a kind of torture to have to watch the show
      </h5>
      <p>
        A tale of a fateful trip that started from this tropic port aboard this
        tiny ship today still wanted by the government apartment in the sky
        moving on up to the east side a family to explore strange new worlds to
        seek out new life and new civilizations to boldly go where no man has
        gone before you would see the biggest gift would be from me and the card
        attached would say thank you for being a friend.
      </p>
      <p>
        That this group would somehow form a family that's the way we all became
        the Brady Bunch apartment in the sky moving on up to the east side a
        family to explore strange new worlds.
      </p>
      <p>
        This tropic port aboard this tiny ship today still wanted by the
        government apartment in the sky moving on up to the east side a family
        to explore strange new worlds to seek out new life and new civilizations
        to boldly go where no man has gone before you would see the biggest gift
        would be from me and the card.
      </p>
      <div className="mark-text">
        <div className="row">
          <div className="col-md-5">
            <img src={blogImg} alt />
          </div>
          <div className="col-md-7">
            <div className="inner-text">
              <p>
                Somehow form a family that's the way we all became the Brady
                Bunch apartment in the sky moving on up to the family tools
                explore strange new worlds us here each week my friends you're
                sure to get a smile.
              </p>
              <h6>- San Johnson -</h6>
            </div>
          </div>{" "}
          {/* /.col- */}
        </div>{" "}
        {/* /.row */}
      </div>{" "}
      {/* /.mark-text */}
      <p>
        A tale of a fateful trip that started from this tropic port aboard this
        tiny ship today still wanted by the government apartment in the sky
        moving on up to the east side a family to explore strange new worlds to
        seek out new life and new civilizations to boldly go where no man has
        gone before you would see the biggest gift would be from me and the card
        attached would say thank you for being a friend.
      </p>
      <p>
        To seek out new life and new civilizations to boldly go where no man has
        gone before you would see the biggest gift would be from me and the card
        attached would say thank you for new civilizations
      </p>
    </div>{" "}
    {/* /.post-meta */}
    <div className="share-option clearfix">
      <ul className="tag-meta float-left">
        <li>
          <i className="fa fa-tags" aria-hidden="true" /> Tags :
        </li>
        <li>
          <a href="/">Business,</a>
        </li>
        <li>
          <a href="/">Consulting,</a>
        </li>
        <li>
          <a href="/">Financial</a>
        </li>
      </ul>
      <ul className="social-icon float-right">
        <li>
          <i className="fa fa-share-alt" aria-hidden="true" /> Share :
        </li>
        <li>
          <a href="/">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-pinterest" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>{" "}
    {/* /.share-option */}
  </div>{" "}
  {/* /.single-blog */}
</div>
   
            </>
        );
    }
}

export default BlogPostWrapper;