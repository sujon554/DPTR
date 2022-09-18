import React, { useEffect, useState } from "react";
import {Container, Row, Col, Button, Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import Rating from "react-rating";
import { Link, NavLink, useParams } from "react-router-dom";

const SingleProjects = () => {
  const { id } = useParams();
  const [singleProject, setSingleProjects] = useState([]);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);


  useEffect(() => {
    fetch(`https://lit-fjord-88326.herokuapp.com/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProjects(data));
  }, []);

  // Recent Projects
  const [recentProjects, setRecentProjects] = useState([]);
  useEffect(() => {
    fetch("https://lit-fjord-88326.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setRecentProjects(data));
  }, []);

  const buttons = {
    background: "#94fbd952",
    color: "black",
  };

  return (
    <Container>
     
      <Row>

      <Col className="text-start" md="8">
        <h2 className="text-uppercase mt-4 p-3 bg-success bg-opacity-10 border border-info rounded">
          {singleProject.title}
        </h2>
        <Row>
          <Col className="col-1">
            <h5>{singleProject.bookedServiceStatus}</h5>
          </Col>
          <Col className="d-flex col-5 ps-5">
            <h6>Rating(avg).</h6>
            <Rating
              initialRating={singleProject.rating}
              readonly
              emptySymbol="far fa-star fa-1x text-warning"
              fullSymbol="fas fa-star fa-1x text-warning"
              className="font-zise"
            />
          </Col>
          <Col>
            <h6>Released on {singleProject.releaseDate}</h6>
          </Col>
          <Col>
            <h6>DPTR Code: {singleProject.dptrCode}</h6>
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
                <h5>{singleProject.Developer0}</h5>
                <p>{singleProject.dept0}</p>
                <p>{singleProject.ID0}</p>
                <p>{singleProject.intake0}</p>
              </ul>
              <hr />
              <h4>Team Member Two</h4>
              <ul>
                <h5>{singleProject.Developer1}</h5>
                <p>{singleProject.dept1}</p>
                <p>{singleProject.ID1}</p>
                <p>{singleProject.intake1}</p>
              </ul>
              <hr />
              <h4>Team Member Three</h4>
              <ul>
                <h5>{singleProject.Developer2}</h5>
                <p>{singleProject.dept2}</p>
                <p>{singleProject.ID2}</p>
                <p>{singleProject.intake2}</p>
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
              <h4>{singleProject.supervisorName}</h4>
              <ul>
                <p>{singleProject.supervisorDesignation}</p>
                <p>{singleProject.supervisorDept}</p>
                <p>{singleProject.supervisorUniversity}</p>
              </ul>
            </Modal.Body>
          </Modal>

          {/* **************************************************************** */}
          
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
        <p className="text-start pe-3">{singleProject.summary}</p>

        <h5 className="text-uppercase mt-4 p-3 bg-success bg-opacity-10 border border-info rounded">
          Use Technology
        </h5>
        <p>{singleProject.technology} </p>

        <h5 className="text-uppercase mt-4 p-3 bg-success bg-opacity-10 border border-info rounded">
          Why it is Necessary?
        </h5>
        <p>{singleProject.necessary}</p>

        <h5 className="text-uppercase mt-4 p-3 bg-success bg-opacity-10 border border-info rounded">
          Applicable
        </h5>
        <p>{singleProject.necessary}</p>

        <h5 className="text-uppercase mt-4 p-3 bg-success bg-opacity-10 border border-info rounded">
          External Review
        </h5>
        <p>{singleProject.externalReview}</p>
      </Col>



      <Col ld md="4" className="text-start ps-3">
        <h2 className="intro text-uppercase rounded-top">
          Project Introductions
        </h2>
        <ReactPlayer
          width="100%"
          height="34%"
          playIcon={true}
          controls={true}
          url={singleProject.video}
        />

        <h2 className="feedback text-uppercase">Your Feedback Please</h2>
        <p className="p-0 m-0">Rate This Work</p>
        <Rating
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          fractions={2}
        />

        <h4 className="recent text-uppercase">
          Recent Five Submited Projectss
        </h4>

        {recentProjects.slice(0, 5).map((recentPro) => (
          <div key={recentPro._id}>
            <Link
              className="text-decoration-none cursor-pointer"
              to={`/singleprojet/${recentPro._id}`}
            >
              <ul>
                <li>{recentPro.title}</li>
              </ul>
            </Link>
          </div>
        ))}
        <Link className="text-decoration-none" to="/MoreProjects">
          <h6 className="text-end">Show All</h6>
        </Link>
      </Col>
      </Row>
       

        
       
    
    </Container>
  );
};

export default SingleProjects;
