import React, { useEffect, useState } from "react";
import Projects from "../Home/Projects/Projects";

const Body = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://lit-fjord-88326.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.reverse()));
  }, []);
  return (
    <div className="container">
      {projects.map((project) => (
        <Projects key={project.id} project={project}></Projects>
      ))}
    </div>
  );
};

export default Body;

// random()
