import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Home/images/BUBT-Logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer-body">
      <Container className="footer mt-5">
        <Row>
         <div> <img className="img-fluid my-3" height='100' width='100' src={logo} alt="" /></div>
          <h2>BUBT</h2>
          <h4>Bangladesh University of Business and Technology</h4>
          <Container>
            <Row className="footer">
              <div>
                <FontAwesomeIcon icon="fa-regular fa-location-pin" />
                <h6>Rupnagar, Mirpur-2, Dhaka-1216</h6>
              </div>
              <div>
                <h6>info@bubt.edu.bd</h6>
              </div>
              <div>
                <h6> +8801680050630</h6>
              </div>
            </Row>
          </Container>
        </Row>
        <hr />
        <Row className="items">
          <Col>
            <h5>About Us</h5>
            <ol>Projects</ol>
            <ol>Thesis</ol>
            <ol>Why Use It</ol>
            <ol>Ours Goal</ol>
            <ol>How Submited</ol>
          </Col>
          <Col>
            <h5>CLUBS</h5>
            <ol>Annex</ol>
            <ol>Rover Scout</ol>
            <ol>Cultural Club</ol>
            <ol>Programming Club</ol>
            <ol>Sports Club</ol>
          </Col>
          <Col>
            <h5>DEPARTMENTS</h5>
            <ol>CSE</ol>
            <ol>EEE</ol>
            <ol>TE</ol>
            <ol>SE</ol>
            <ol>CST</ol>
          </Col>
          <Col>
            <h5>IMPORTANT LINKS</h5>
            <ol>UGC</ol>
            <ol>ICT Division</ol>
            <ol>Prime Minister Office</ol>
            <ol>Ministry Of Education</ol>
            <ol>List Of All Universities</ol>
          </Col>
        </Row>
        <hr />
        <footer>© 2022 All Right Reserved.</footer>
      </Container>
    </div>
  );
};

export default Footer;
