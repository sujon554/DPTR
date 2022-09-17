import React, { useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";

const Deptproject = ({ project }) => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

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
    rating,
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

  return (
    <Row className="mt-5">
      {/* Title Here start  */}
      <Col className="text-start" md lg="8">
        <h2 className="text-uppercase p-3 bg-success bg-opacity-10 border border-info rounded">
          {title}
        </h2>
        <Row>
          <Col className="col-1">
            <h5>{bookedServiceStatus}</h5>
          </Col>
          <Col className="d-flex col-5 ps-5">
            <h6>Rating(avg).</h6>
            <Rating
              initialRating={rating}
              readonly
              emptySymbol="far fa-star fa-1x text-warning"
              fullSymbol="fas fa-star fa-1x text-warning"
              className="font-zise"
            />
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

          <Button style={buttons} onClick={() => setSmShow(true)}>
            Project Developers
          </Button>
          <Modal show={smShow} onHide={() => setSmShow(false)}>
            <Modal.Header closeButton>
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
          <Button
            style={buttons}
            className="ps-2 mx-2"
            onClick={() => setLgShow(true)}
          >
            Supervisors
          </Button>
          <Modal show={lgShow} onHide={() => setLgShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Project Supervisors</Modal.Title>
            </Modal.Header>
            <Modal.Body className="lh-1">
              <h4>{supervisorName}</h4>
              <ul>
                <p>{supervisorDesignation}</p>
                <p>{supervisorDept}</p>
                <p>{supervisorUniversity}</p>
              </ul>
            </Modal.Body>
          </Modal>

          <NavLink
            className="border border-primary rounded navItem"
            style={buttons}
            to="/MoreProjects"
          >
            More Completed Projects
          </NavLink>
        </div>

        {/* **************************************************************** */}

        <h5 className="text-uppercase mt-4 p-3 bg-success bg-opacity-10 border border-info rounded">
          Executive Summary
        </h5>
        <p className="text-start pe-3">{summary}</p>

        <h5 className="text-uppercase mt-4 p-3 bg-success bg-opacity-10 border border-info rounded">
          Use Technology
        </h5>
        <p>{technology} </p>

        <h5 className="text-uppercase mt-4 p-3 bg-success bg-opacity-10 border border-info rounded">
          Why it is Necessary?
        </h5>
        <p>{necessary}</p>

        <h5 className="text-uppercase mt-4 p-3 bg-success bg-opacity-10 border border-info rounded">
          Applicable
        </h5>
        <p>{necessary}</p>

        <h5 className="text-uppercase mt-4 p-3 bg-success bg-opacity-10 border border-info rounded">
          External Review
        </h5>
        <p>{externalReview}</p>
      </Col>

      <Col ld="4" className="text-start ps-3">
        <h2 className="intro text-uppercase rounded-top">
          Project Introductions
        </h2>
        <ReactPlayer
          width="100%"
          height="34%"
          playIcon={true}
          controls={true}
          url={video}
        />

        <h2 className="feedback text-uppercase">Your Feedback Please</h2>
        <p className="p-0 m-0">Rate This Work</p>
        <Rating
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          fractions={2}
        />
      </Col>
    </Row>
  );
};

export default Deptproject;
