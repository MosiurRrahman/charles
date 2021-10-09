import {
  faFacebook,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class TeamSocialIcons extends Component {
  render() {
    return (
      <>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faPinterest} aria-hidden="true" />
          </a>
        </li>
      </>
    );
  }
}

export default TeamSocialIcons;
