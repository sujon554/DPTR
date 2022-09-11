import { Button } from "bootstrap";
import React from "react";
// import { useState } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link, NavLink } from "react-router-dom";

const Deptproject = ({ project }) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const {
    title,
    summary,
    supervisorUniversity,
    supervisorDesignation,
    supervisorDept,
    supervisorName,
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
    Developer1,
    dept1,
    ID1,
    intake1,
    bookedServiceStatus,
    Developer2,
    dept2,
    ID2,
    intake2,
  } = project;
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

          {/* <Button onClick={handleShow}>Project Developers</Button>

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
          </Modal> */}

          {/* **************************************************************** */}
          {/* <Button className="ps-2 mx-2" onClick={handleShow}>
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
          </Modal> */}

          {/* **************************************************************** */}
          <Link />
          <NavLink
            className="border border-primary rounded navItem"
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
        <ReactPlayer
          width="100%"
          height="auto"
          playIcon={true}
          controls={true}
          url={video}
        />

        <h4>Recent 5 Submited Projects</h4>

       
      </Col>
    </Row>
  );
};

export default Deptproject;
