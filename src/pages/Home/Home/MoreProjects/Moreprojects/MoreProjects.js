import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MoreProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://lit-fjord-88326.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Container>
      <h1>ALL PROJECTS</h1>

      <div className="table-striped text-start">
        {projects.map((project) => (
          <div key={project._id} project={project}>
            <table className="table table-striped">
              <tbody>
                <tr>
                 <th>
                 <Link
                    className="text-decoration-none cursor-pointer"
                    to={`/singleprojet/${project._id}`}
                  >
                    <ul>
                      <li>
                        <h3>{project.title}</h3>
                      </li>
                    </ul>
                    <div className="d-flex m-1 justify-content-start">
                    <h6>Status: {project.bookedServiceStatus} ||</h6>
                    <h6>Release Date: {project.releaseDate} ||</h6>
                    <h6>Department of: {project.department} || </h6>
                    <h6>DPTR Code: {project.dptrCode} </h6>
                  </div>
                  </Link>
                 </th>
                 
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MoreProjects;
