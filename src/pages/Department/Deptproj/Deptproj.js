import React from 'react';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Deptproject from './Deptproject';

const Deptproj = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/service.json")
          .then((res) => res.json())
          .then((data) => setProjects(data));
      }, []);

    return (
        <Container>
           {
            projects.map((project) => (<Deptproject
                key={project.id} project={project}
            ></Deptproject>
    
         
        ))}
       </Container>
    );
};

export default Deptproj;