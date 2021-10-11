import React, { Component } from "react";

class CommentForm extends Component {
  render() {
    return (
      <>
        <div className="inner-box comment-form">
          <div className="theme-title-one">
            <h2>POST A COMMENTS</h2>
          </div>{" "}
          {/* /.theme-title-one */}
          <form action="#" className="theme-form-one">
            <div className="row">
              <div className="col-md-6 col-12">
                <input type="text" placeholder="Name" />
              </div>
              <div className="col-md-6 col-12">
                <input type="text" placeholder="Phone" />
              </div>
              <div className="col-12">
                <input type="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea placeholder="Comments" defaultValue={""} />
              </div>
            </div>
            <button className="theme-button-one">POST COMMENT</button>
          </form>
        </div>
      </>
    );
  }
}

export default CommentForm;
