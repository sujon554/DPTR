import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Table } from "react-bootstrap";

const Review = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch("https://lit-fjord-88326.herokuapp.com/projects")
        .then(res => res.json())
        .then(data => setReview(data));
        console.log(review)

    }, []);

    return (
      
          <Container>
      <h1>
         <strong className="text-info">All Reviews</strong>
      </h1>
      <h3>Total All Projects {review.length}</h3>
      <Row className="g-5">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Project Title</th>
              <th>DPTR Code</th>
              <th>Release Date</th>
              <th>External Feedback</th>
           
            </tr>
          </thead>
          <tbody>
            {review.map((Project) => (
              <tr>
                <td>{Project.title}</td>
                <td>{Project.dptrCode}</td>
                <td>{Project.releaseDate}</td>
                <td>{Project.externalReview}</td>
                
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
    );
};

export default Review;