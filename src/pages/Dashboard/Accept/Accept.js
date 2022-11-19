import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";


const Accept = () => {
    const [projects, setProjects] = useState([]);
    const [reload, setReload] = useState(false);
    const [status, setStatus] = useState("Accept");
  const { user } = useAuth();

  
  useEffect(() => {
    fetch(
      `https://lit-fjord-88326.herokuapp.com/studentReq?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);


 //Update Status
 const handleUpdate = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to approve this package?"
    );
    if (proceed) {
      setStatus(status);
      fetch(`https://lit-fjord-88326.herokuapp.com/studentsreqapproval/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.matchedCount) {
            setReload(!reload);
          }
        });
    }
  };

    return (
        <Container>
        <h1>
        Accept<strong className="text-info"> from Supervisor</strong>
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

                  <Button
                  className="m-2"
                  
                  onClick={() => handleUpdate(Project._id)}
                  variant="success"
                  size="sm"
                >
                  Approval
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
    );
};

export default Accept;