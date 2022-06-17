import React from 'react';
import { useEffect, useState } from "react";
import { Container, Button, Row, Table } from "react-bootstrap";


const ManageAllProjects = () => {
    const [projects, setProjects] = useState([]);
    // const [reload, setReload] = useState(false);
    useEffect(() => {
      fetch("https://lit-fjord-88326.herokuapp.com/projects")
        .then((res) => res.json())
        .then((data) => setProjects(data));
    }, []);
  
    //   /Delete Orders
    const deleteHandler = (id) => {
      const proceed = window.confirm(
        "Are you sure, you want to delete this Project?"
      );
      if (proceed) {
        fetch(`https://lit-fjord-88326.herokuapp.com/projects/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingProjects = projects.filter(
                (Project) => Project._id !== id
              );
  
              setProjects(remainingProjects);
            }
          });
      }
    };

    return (
         <Container>
      <h1>
        Manage <strong className="text-info">All Projects</strong>
      </h1>
      <h3>Total All Orders {projects.length}</h3>
      <Row className="g-5">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Project SupervisorName</th>
              <th>Project Department</th>
              <th>DPTR Code</th>
              <th>Release Date</th>
              <th>Project Delete</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((Project) => (
              <tr>
                <td>{Project.title}</td>
                <td>{Project.supervisorName}</td>
                <td>{Project.dept0}</td>
                <td>{Project.dptrCode}</td>
                <td>{Project.releaseDate}</td>
                <td>
                  <Button
                    className="bg-danger"
                    onClick={() => deleteHandler(Project._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
    );
};

export default ManageAllProjects;