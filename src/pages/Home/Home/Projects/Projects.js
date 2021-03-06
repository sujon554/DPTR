import React, { useEffect, useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Projects = ({ project }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    title,
    summary,
    externalReview,
    technology,
    dptrCode,
    necessary,
    releaseDate,
    video,
    Developer0,
    dept0,
    ID0,
    intake0,
    bookedServiceStatus,
    Developer1,
    dept1,
    ID1,
    supervisorName,
    supervisorDesignation,
    supervisorDept,
    supervisorUniversity,
    intake1,
    Developer2,
    dept2,
    ID2,
    intake2,
  } = project;

  const buttons = {
    background: "#94fbd952",
    color: "black",
  };

  // Recent Projects
  const [recentProjects, setRecentProjects] = useState([]);
  useEffect(() => {
    fetch("https://lit-fjord-88326.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setRecentProjects(data));
  }, []);
  return (
    <Row>
      {/* Title Here start  */}
      <Col className="text-start" md lg="9">
        <h1>{title}</h1>
        <Row>
          <Col>
            <h6>{bookedServiceStatus}</h6>
          </Col>
          <Col>
            <h6>Rating(avg): 5</h6>
          </Col>
          <Col>
            <h6>Released on {releaseDate}</h6>
          </Col>
          <Col>
            <h6>DPTR Code: {dptrCode}</h6>
          </Col>
          <hr />
        </Row>

        {/* Modal    <!-- Button trigger modal --> */}

        <div className="d-flex justify-content-start">
          {/* **************************************************************** */}

          <Button style={buttons} onClick={handleShow}>
            Project Developers
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Project Developer Team</Modal.Title>
            </Modal.Header>
            <Modal.Body className="lh-1">
              <h4>Team Member One</h4>
              <ul>
                <h5>{Developer0}</h5>
                <p>{dept0}</p>
                <p>{ID0}</p>
                <p>{intake0}</p>
              </ul>
              <hr />
              <h4>Team Member Two</h4>
              <ul>
                <h5>{Developer1}</h5>
                <p>{dept1}</p>
                <p>{ID1}</p>
                <p>{intake1}</p>
              </ul>
              <hr />
              <h4>Team Member Three</h4>
              <ul>
                <h5>{Developer2}</h5>
                <p>{dept2}</p>
                <p>{ID2}</p>
                <p>{intake2}</p>
              </ul>
            </Modal.Body>
          </Modal>

          {/* **************************************************************** */}
          <Button style={buttons} className="ps-2 mx-2" onClick={handleShow}>
            Supervisors
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Project Supervisors Team</Modal.Title>
            </Modal.Header>
            <Modal.Body className="lh-1">
              <h4>Team Member</h4>
              <ul>
                <h5>{supervisorName}</h5>
                <p>{supervisorDesignation}</p>
                <p>{supervisorDept}</p>
                <p>{supervisorUniversity}</p>
              </ul>
            </Modal.Body>
          </Modal>

          {/* **************************************************************** */}
          <Link />
          <NavLink
            className="border border-primary rounded navItem"
            style={buttons}
            to="/MoreProjects"
          >
            More Completed Projects
          </NavLink>
        </div>

        {/* **************************************************************** */}

        <h5>Executive Summary</h5>
        <p className="text-start pe-3">{summary}</p>

        <h5>Use Technology</h5>
        <p>{technology} </p>

        <h5>Why it is Necessary?</h5>
        <p>{necessary}</p>

        <h5>Applicable</h5>
        <p>{necessary}</p>

        <h5>External Review</h5>
        <p>{externalReview}</p>
      </Col>

      <Col ld md="3" className="text-start ps-3">
        <video controls autostart width={100} height={100} type="video/mp4">
          {video}
        </video>

        <h4>Recent 5 Submited Projects</h4>
        {/* <MoreProjects/> */}

        {recentProjects.map((recentPro) => (
          <li>{recentPro.title}</li>
        ))}
      </Col>
    </Row>
  );
};

export default Projects;
