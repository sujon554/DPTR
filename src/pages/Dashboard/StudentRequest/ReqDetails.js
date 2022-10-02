import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


const ReqDetails = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(
          'https://lit-fjord-88326.herokuapp.com/reqproject'
        )
          .then((res) => res.json())
          .then((data) => setProjects(data));
      }, []);


    return (
        <div>
            
        </div>
    );
};

export default ReqDetails;