import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

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
        {Projects.map((recentPro) => (
          <>
            <h1>{recentPro.title}</h1>
            <div className="d-flex justify-content-start">
              <p>{recentPro.bookedServiceStatus}</p> 
              <p>Release Date{recentPro.releaseDate}</p>
            </div>
          </>
        ))}
      </div>
    </Container>
  );
};

export default MoreProjects;
