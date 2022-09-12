import React, { useEffect, useState } from "react";
import { Container, Button, Row, Table } from "react-bootstrap";

const RequestAccept = () => {
  const [request, setRequest] = useState([]);
  const [reload, setReload] = useState(false);
  const [status, setStatus] = useState("Approved");

  useEffect(() => {
    fetch("https://lit-fjord-88326.herokuapp.com/reqproject")
      .then((res) => res.json())
      .then((data) => setRequest(data));
  }, [reload]);

  //Update Status
  const handleUpdate = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to approve this Project?"
    );
    if (proceed) {
      setStatus(status);
      fetch(`https://lit-fjord-88326.herokuapp.com/requestapproval/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.matchedCount) {
            setReload(!reload);
          }
        });
    }
  };

  // /Delete Orders
  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this package?"
    );
    if (proceed) {
      fetch(`https://lit-fjord-88326.herokuapp.com/projects/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingOrders = request.filter(
              (request) => request._id !== id
            );

            setRequest(remainingOrders);
          }
        });
    }
  };
  return (
    <>
      <h1>
        Approved <strong className="text-info"> Projects</strong>
      </h1>
      <h3>Total Projects {request.length}</h3>
      <Row className="g-5">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Department</th>
              <th>Team Member</th>
              <th>Supervisor</th>
              <th>Technology</th>
              <th>Summary</th>
              <th>Purpose</th>
              <th>Approve</th>
              <th>Status</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {request.map((request) => (
              <tr key={request._id}>
                <th>{request.Groupname}</th>
                <th>{request.department}</th>
                <th>
                  <ul>
                    {request.member0}
                    {request.ID0}
                    {request.intake0}
                  </ul>
                  <ul>
                    {request.member1}
                    {request.ID1}
                    {request.intake1}
                  </ul>
                  <ul>
                    {request.member2}
                    {request.ID2}
                    {request.intake2}
                  </ul>
                  <ul>
                    {request.member3}
                    {request.ID3}
                    {request.intake3}
                  </ul>
                  <ul>
                    {request.member4}
                    {request.ID4}
                    {request.intake4}
                  </ul>
                </th>
                <th>
                  <ul>
                    {request.supervisorName}
                    {request.designation}
                    {request.supervisorDept}
                  </ul>
                </th>
                <th>{request.summary}</th>
                <th>{request.technology}</th>
                <th>{request.purpose}</th>
                <th>
                  <Button
                    className="m-2"
                    onClick={() => handleUpdate(request._id)}
                    variant="success"
                    size="sm"
                  >
                    Approve
                  </Button>
                </th>
                <th>{request.bookedServiceStatus}</th>
                <th>
                  <Button
                    className="m-2"
                    onClick={() => deleteHandler(request._id)}
                    variant="danger"
                    size="sm"
                  >
                    Delete
                  </Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default RequestAccept;
