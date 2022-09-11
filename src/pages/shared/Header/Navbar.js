import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const activeStyle = {
    fontWeight: "bold",
    fontSize: "1.2rem",
    textAlign: "center",
    color: "red",
  };
  return (
    <Container className="Navbar">
      <NavLink className="navItem ml-3" activeStyle={activeStyle} to="/home">
        Home
      </NavLink>
      <NavLink className="navItem" activeStyle={activeStyle} to="/department">
        Department
      </NavLink>
      <NavLink className="navItem" activeStyle={activeStyle} to="/dptr">
        DPTR Committee
      </NavLink>
      <NavLink className="navItem" activeStyle={activeStyle} to="/ippolicy">
        IP Policy
      </NavLink>
      <input
        className="navItem mx-auto search"
        type="text"
        placeholder="Search Your Content"
      />
      {user?.email ? (
        <>
          <NavLink
            className="navItem text-decoration-none me-3"
            to="/dashboard"
          >
            Dashboard
          </NavLink>

          <Button size="sm" variant="danger" onClick={logOut}>
            Logout
          </Button>
          <span className="text-decoration-none ms-3" to="#">
            {user.displayName}
          </span>
          <span className="text-decoration-none ms-3" to="#">
            {user.email}
          </span>
        </>
      ) : (
        <NavLink className="navItem" activeStyle={activeStyle} to="/login">
          Login
        </NavLink>
      )}
    </Container>
  );
};

export default Navbar;
