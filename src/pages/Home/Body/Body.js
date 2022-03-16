import React, { useEffect, useState } from 'react';
import Projects from '../Home/Projects/Projects';

const Body = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/service.json")
          .then((res) => res.json())
          .then((data) => setProjects(data));
      }, []);
    return (
        <div className="container">
            {
            projects.map((project) => (<Projects 
                key={project.id} project={project}
                ></Projects>
    
         
        ))}
        </div>
    );
};

export default Body;