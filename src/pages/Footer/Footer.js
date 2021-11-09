import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h3>About</h3>
                        <ol>Project</ol>
                        <ol>Thesis</ol>
                        <ol>Something</ol>
                        <ol>something</ol>
                    
                    </Col>
                    <Col>
                        <h3>Phone</h3>
                        <ol>3254254325</ol>
                        <ol>32453425345</ol>
                        <ol>32453425345</ol>
                        <ol>32453425345</ol>
                        <ol>32453425345</ol>
                       
                    </Col>
                    <Col>
                        <h3>DepartMent</h3>
                        <ol>CSE</ol>
                        <ol>EEE</ol>
                        <ol>SE</ol>
                        <ol>TE</ol>
                        <ol>CST</ol>
                    </Col>
                    <Col>
                        <h3>DepartMent</h3>
                        <ol>CSE</ol>
                        <ol>EEE</ol>
                        <ol>SE</ol>
                        <ol>TE</ol>
                        <ol>CST</ol>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;