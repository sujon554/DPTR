import React, { useEffect, useState } from "react";
import {Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleProjects = () => {
  const { id } = useParams();
  const [singleProject, setSingleProjects] = useState([]);

  useEffect(() => {
    fetch(`https://lit-fjord-88326.herokuapp.com/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProjects(data));
  }, []);

  return (
    <Container>
     
      
          <Col className="text-start" md lg="9">
            <h1>{singleProject.title}</h1>
            <Row>
              <Col><h6>{singleProject.bookedServiceStatus}</h6></Col>
              <Col>
                <h6>Rating(avg): 5</h6>
              </Col>
              <Col>{/* <h6>Released on {releaseDate}</h6> */}</Col>
              <Col>{/* <h6>DPTR Code: {dptrCode}</h6> */}</Col>
              <hr />
            </Row>

            {/* **************************************************************** */}

            <h5>Executive Summary</h5>
            <p className="text-start pe-3">{singleProject.summary}</p>

            <h5>Use Technology</h5>
            <p>{singleProject.technology} </p>

            <h5>Why it is Necessary?</h5>
            <p>{singleProject.necessary}</p>

            <h5>Applicable</h5>
            <p>{singleProject.necessary}</p>

            <h5>External Review</h5>
            <p>{singleProject.externalReview}</p>
          </Col>

          <Col ld md="3" className="text-start ps-3">
            <video controls autostart width={100} height={100} type="video/mp4">
              {/* {video} */}
            </video>
          </Col>
       
    
    </Container>
  );
};

export default SingleProjects;
