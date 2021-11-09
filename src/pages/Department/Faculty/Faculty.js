import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Faculty = () => {
    return (
        <Container>
            <Row>
                <Col className="flex-column text-start" xs={6} md={4}>
                    <h3>Business & Others Faculty</h3>
                    <Nav.Link>Accounting</Nav.Link>
                    <Nav.Link>Finance</Nav.Link>
                    <Nav.Link>Management</Nav.Link>
                    <Nav.Link>Marketing</Nav.Link>
                    <Nav.Link>English</Nav.Link>
                    <Nav.Link>Economics</Nav.Link>
                    <Nav.Link>Law & Justice</Nav.Link>
                    
                </Col>
                <Col className="flex-column text-start"  xs={6} md={4}>
                    <h3>Engineering & Applied Science</h3>
                    <Nav.Link>Computer Science and Engineering</Nav.Link>
                    <Nav.Link>Electrical and Electronic Engineering</Nav.Link>
                    <Nav.Link>Textile Engineering</Nav.Link>
                    <Nav.Link>Civil Engineering</Nav.Link>
                    <Nav.Link>Mathematics</Nav.Link>
                    <Nav.Link>Statistics</Nav.Link>

                </Col>
                <Col className="text-start" xs={6} md={4}>
                    <h3>Infromation</h3>
                    <ul>Rules and Regulations</ul>
                    <ul>Evaluation & Grading</ul>
                    <ul>Thesis Policy</ul>
                    <ul>Project Policy</ul>
                    <ul>Academic Policy</ul>
                    <ul>Special Authors</ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Faculty;