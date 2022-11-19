import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const UpdateProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://lit-fjord-88326.herokuapp.com/studentReq")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects)

  return (
    <Container>
      <h1>
        Update<strong className="text-info"> Project when Completed</strong>
      </h1>
      <Row className="g-5">
          {projects.map((Project) => (
            <Col sm={2} md={4} xl={3} key={Project._id} Project={Project}>
              <Card>
                <Card.Body>
                  <Card.Title>{Project.title}</Card.Title>
                  <h6>{Project.supervisor}</h6>
                 
                  
                  <h6 className="text-danger">User: {Project.Groupname}</h6>
                  <Card.Text className="text-danger">
                    {Project.userEmail}
                  </Card.Text>
                  
                </Card.Body>

                <Card.Footer>
                  <small className="text-muted text-center">
                    {Project.bookedServiceStatus}
                  </small>
                  <button className="bg-success ms-3 py-1 px-2">Update</button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
    </Container>
  );
};

export default UpdateProject;
