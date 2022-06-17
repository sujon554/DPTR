import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MoreProjects = () => {
  //  Projects
  const [Projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://lit-fjord-88326.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Container>
      <h1>All Projects</h1>

      <div className="table-striped text-start">
        {Projects.map((project) => (
          <div key={project._id} project={project}>
            <Link to={`/singleprojet/${project._id}`}>
            <h1>{project.title}</h1>
            </Link>
            <div className="d-flex justify-content-start">
              <p>{project.bookedServiceStatus}</p> 
              <p>Release Date{project.releaseDate}</p>
              <p>Release Date{project.dept0}</p>
            </div>
           
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MoreProjects;
