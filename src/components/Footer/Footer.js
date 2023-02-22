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
      <Container className="rootFoterContainer">

        <Row className="footerRow">
          <Col>
            <Row><h5>Contact Us</h5></Row>
            <Row>
              <p className="addressText">
                Address line 1,< br />
                City, Province< br />
                Postal Code
              </p>
              <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir///@49.1422828,-122.8954575,11.7z/data=!4m2!4m1!3e0">
                <Button className="directionsButton" variant="outline-light">Directions</Button>
              </a>
            </Row>
          </Col >

          <Col>
            <Row><h5>Information</h5></Row>
            <Row>
              <a className="noDesignLink" href="/contact">Contact Us</a>
            </Row>
            <Row>
              <a className="noDesignLink" href="/#shipping">Shipping Info</a>
            </Row>
            <Row>
              <a className="noDesignLink" href="/#about">About Us</a>
            </Row>
          </Col>

          <Col>
            <Row><h5>Business Hours</h5></Row>
            <Row>
              <p>
                Monday - Friday: 8am to 7:30pm< br />
                Saturday: 10am to 5pm< br />
                Sunday: Closed
              </p>
            </Row>
          </Col>
        </Row>

        <Row className="copyrightRow">
          <p>&#169; 2023 Company Name</p>
        </Row>

      </Container >
    );
  }
}

export default Footer;
