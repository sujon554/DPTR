import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Home/images/BUBT-Logo.png";

const Header = () => {
  return (
    <Container>
      <Row className="justify-content-md-center m-3">
        <Col xs lg="2">
          <img width="75%" height="150" src={logo} alt="" />
        </Col>

        <Col
          md="auto"
          className="animate__animated animate__zoomIn animate__slower"
        >
          <h1>Dissertation and Project-Thesis Repository(DPTR)</h1>
          <h3>Bangladesh University of Business and Technology</h3>

          <div>
            <hr />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
