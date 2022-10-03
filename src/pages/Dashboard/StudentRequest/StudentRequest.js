import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const StudentRequest = () => {
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://lit-fjord-88326.herokuapp.com/reqproject?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  //   /Delete projects
  //   const deleteHandler = (id) => {
  //     console.log(id);
  //     const proceed = window.confirm(
  //       "Are you sure, you want to delete this package?"
  //     );
  //     if (proceed) {
  //       fetch(`https://lit-fjord-88326.herokuapp.com/reqproject/${id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.deletedCount > 0) {
  //             const remainingProjects = projects.filter((Project) => Project._id !== id);
  //             setProjects(remainingProjects);
  //           }
  //         });
  //     }
  //   };

  return (
    <div>
      <Container>
        <h1>
          Student<strong className="text-info"> Projects Request</strong>
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
                  <h6 className="text-danger">User: {Project.userName}</h6>
                  <Card.Text className="text-danger">
                    {Project.userEmail}
                  </Card.Text>

                  <Button variant="success" size="sm">
                    Request
                  </Button>
                  {/* Open Modal For details  */}
                  <Button variant="info" size="sm" onClick={handleShow}>
                    Details
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>{Project.Groupname}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                     <h3>Group Name: {Project.ProjectTitle}</h3>
                     <h3>Department: {Project.department}</h3>
                     <p><strong>Summary:</strong> {Project.summary}</p>
                     <p><strong>Technology: </strong> {Project.technology}</p>
                     <p><strong>Purpose:</strong> {Project.purpose}</p>
                    <hr></hr>
                    <h4>Supervisor</h4>
                    <p><strong>Name:</strong> {Project.userName}</p>
                    <p><strong>Designation:</strong> {Project.designation}</p>
                    <p><strong>Email:</strong> {Project.userEmail}</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
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

export default StudentRequest;
