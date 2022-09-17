import React, { useEffect, useState } from "react";
import Projects from "../Home/Projects/Projects";
import '../Home/Home.css'
const Body = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://lit-fjord-88326.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.reverse()));
  }, []);
  
  return (
    <div className="container">
     



      {projects.slice(0, 1).map((project) => (
        <Projects key={project.id} project={project}></Projects>
      ))}
    </div>
  );
};

export default Body;

