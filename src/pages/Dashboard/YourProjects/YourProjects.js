import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from "../../../hooks/useAuth";


const YourProjects = () => {

    const [projects, setProjects] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://lit-fjord-88326.herokuapp.com/myprojects?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  //   /Delete projects
  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this package?"
    );
    if (proceed) {
      fetch(`https://lit-fjord-88326.herokuapp.com/myprojects/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingProjects = projects.filter((Project) => Project._id !== id);
            setProjects(remainingProjects);
          }
        });
    }
  };

    return (
          <div>
      <Container>
        <h1>
          Our Team<strong className="text-info"> Projects</strong>
        </h1>
        <h3 className="my-5">Total projects {projects.length}</h3>
        <Row className="g-5">
          {projects.map((Project) => (
            <Col sm={2} md={4} xl={3} key={Project._id} Project={Project}>
              <Card>
               
                <Card.Body>
                  <Card.Title>{Project.title}</Card.Title>
                  <h6>{Project.supervisorName}</h6>
                  <Card.Title>Booked By</Card.Title>
                  <Card.Title>{Project.userName}</Card.Title>
                  <h6 className="text-danger">
                  User:   {Project.userName}
                  </h6>
                  <Card.Text className="text-danger">
                    {Project.userEmail}
                  </Card.Text>


                  <Button
                    onClick={() => deleteHandler(Project._id)}
                    variant="success"
                    size="sm"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => deleteHandler(Project._id)}
                    variant="danger"
                    size="sm"
                  >
                    Cancel
                  </Button>

                </Card.Body>

                <Card.Footer>
                  <small className="text-muted text-center">
                    {Project.bookedServiceStatus}
                  </small>

                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    );
};

export default YourProjects;