import React, { Component } from "react";
// import ModalFooter from "react-bootstrap/ModalFooter";
import Container from "react-bootstrap/Container";
// import MediaQuery from "react-responsive";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faInstagram } from "@fortawesome/free-solid-svg-icons";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footDivOut">
        <div className="footDivIn">
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          ></link>
          <Container>
            <p>Footer</p>
          </Container>
        </div>
      </div>
    );
  }
}

export default Footer;
