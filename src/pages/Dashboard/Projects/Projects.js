import React, { useEffect, useState } from "react";
import { Card, Col, Container, Button, Row } from "react-bootstrap";

const Projects = () => {

    const [orders, setOrders] = useState([]);
  const [reload, setReload] = useState(false);
  const [status, setStatus] = useState("Full & Final");
  useEffect(() => {
    fetch("https://lit-fjord-88326.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [reload]);

  //Update Status
  const handleUpdate = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to approve this package?"
    );
    if (proceed) {
      setStatus(status);
      fetch(`https://lit-fjord-88326.herokuapp.com/updateStatus/${id}`, {
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

  //   /Delete Orders
  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this package?"
    );
    if (proceed) {
      fetch(`https://lit-fjord-88326.herokuapp.com/allprojects/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingOrders = orders.filter((order) => order._id !== id);
            console.log(remainingOrders);
            setOrders(remainingOrders);
          }
        });
    }
  };

    return (
        <Container>
      <h1>
        Approved <strong className="text-info"> Projects</strong>
      </h1>
      <h3>Total All Orders {orders.length}</h3>
      <Row className="g-5">
        {orders.map((order) => (
          <Col sm={2} md={4} key={order._id} order={order}>
            <Card>
             
              <Card.Body>
                <Card.Title>{order.title}</Card.Title>

                <Card.Title>{order.singleWatchPrice}</Card.Title>
                <Card.Title>Booked By</Card.Title>
                <Card.Title>{order.userName}</Card.Title>
                <Card.Text className="text-danger">{order.userEmail}</Card.Text>
                <Button
                  className="m-2"
                  onClick={() => handleUpdate(order._id)}
                  variant="success"
                  size="sm"
                >
                  Full & Final
                </Button>
                <Button
                  className="m-2"
                  onClick={() => deleteHandler(order._id)}
                  variant="danger"
                  size="sm"
                >
                  Cancel
                </Button>
              </Card.Body>

              <Card.Footer>
                <small className="text-muted text-center">
                  {order.bookedServiceStatus}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    );
};

export default Projects;