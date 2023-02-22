import React, { Component, useState, useRef } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Image from "react-bootstrap/Image";
import { InputGroup } from "react-bootstrap";
import HomeImage from "../../assets/images/homepage.jpg";

function Home() {
  return (
    <Container className="rootContainer">
      {/* <h1>Home page</h1> */}

      <Container className="homepageImageContainer">
        <Image src={HomeImage} className="homepageImage"></Image>

        <h1 className="homepageImageTitle">Exceptional parts that keep the journey going.</h1>


        <Container className="omnisearchContainer">

          <Row>
            <Col sm={9} className="omnisearchCol">
              <FloatingLabel controlId="floatingTextarea" label="Enter a Keyword or Part Number" className="mb-3 omnisearch">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 omnisearchField"
                  aria-label="Enter a Keyword or Part Number"
                  aria-describedby="basic-addon2"
                />
              </FloatingLabel>
            </Col>

            <Col sm={3} className="omnisearchCol">
              <Button className="omnisearchButton" variant="success">Search</Button>
            </Col>

          </Row>
        </Container>



      </Container>




    </Container >
  );
}

export default Home;
