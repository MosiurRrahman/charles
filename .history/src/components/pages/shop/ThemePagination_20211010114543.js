import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class ThemePagination extends Component {
  render() {
    return (
      <>
        <div className="theme-pagination text-center">
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
                <FontAwesomeIcon icon={faAngleDoubleRight} area-hidden="true"/>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default ThemePagination;
