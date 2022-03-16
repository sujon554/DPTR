import React, { useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = ({ project }) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const {
        id,
        title,
        author,
        coAuthor,
        summary,
        externalInternal,
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
        Developer2,
        dept2,
        ID2,
       intake2
      } = project;
  return (
    <Row>

        {/* Title Here start  */}
      <Col className="text-start" md lg="9">
        <h1>{title}</h1>
        <Row>
          <Col>
            <h6>(Full and Final)</h6>
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


      <Button onClick={handleShow}>
      Project Developer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Project Developer Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    

{/* **************************************************************** */}




        <h4 className="pe-2"></h4>
       <h4 className="ps-2">Project Supervisor</h4>
        <hr />
        </div>

        <h5>Executive Summary</h5>
        <p className="text-start pe-3">{summary}</p>

        <h5>Use Technology</h5>
        <p>{technology} </p>

        <h5>Why it is Necceryary</h5>
        <ul>{necessary}</ul>

        <h5>Application</h5>
        <ul>
          <li>It work on kdfd</li>
          <li>It work on kdfd</li>
          <li>It work on kdfd</li>
        </ul>
      </Col>

      <Col ld md="3" className="text-start ps-3">
        <video
          controls
          autostart
          width={100}
          height={100}
          type="video/mp4"
        >
        {video}
        </video>

        <h4>Recent 5 Submited Work</h4>
        <Link>Title of Project/Thesis here</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          tenetur.
        </p>
        <Link>Title of Project/Thesis here</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          tenetur.
        </p>
        <Link>Title of Project/Thesis here</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          tenetur.
        </p>
        <Link>Title of Project/Thesis here</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          tenetur.
        </p>
        <Link>Title of Project/Thesis here</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          tenetur.
        </p>
        <Link>Title of Project/Thesis here</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          tenetur.
        </p>
      </Col>
    </Row>
  );
};

export default Projects;
