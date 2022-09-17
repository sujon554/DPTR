import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Modal, Navbar, Table } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Menu = () => {
  const { user, logOut } = useAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://lit-fjord-88326.herokuapp.com/projects"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  const activeStyle = {
    fontWeight: "bold",
    fontSize: "1.2rem",
    textAlign: "center",
    color: "red",
    borderBottom: "2px solid #fff"
  };

  return (
    <Navbar className="Navbar sticky-top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLink
            className="navItem ml-3"
            activeStyle={activeStyle}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="navItem"
            activeStyle={activeStyle}
            to="/department"
          >
            Department
          </NavLink>
          <NavLink className="navItem" activeStyle={activeStyle} to="/dptr">
            DPTR Committee
          </NavLink>
          <NavLink className="navItem" activeStyle={activeStyle} to="/ippolicy">
            IP Policy
          </NavLink>
          <input
            onClick={handleShow}
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
              <span className="text-decoration-none text-light ms-3" to="#">
                {user.displayName}
              </span>
              <span className="text-decoration-none text-light ms-3" to="#">
                {user.email}
              </span>
            </>
          ) : (
            <NavLink className="navItem" activeStyle={activeStyle} to="/login">
              Login
            </NavLink>
          )}

          <Modal  size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Search Your Keywords</Modal.Title>
            </Modal.Header>
            <Modal.Body className="">
              <input
                style={{ width: "80%", height: "80%", color: "black" }}
                className="navItem mx-auto search"
                type="text"
                placeholder="Search Your Content"
                onChange={(e) => setSearchTitle(e.target.value)}
              />

              {loading ? (
                <h4>Loading ...</h4>
              ) : (
                posts
                  .filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (
                      value.title
                        .toLowerCase()
                        .includes(searchTitle.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((item) => (
                    <div key={item._id}>
                     <table className="table table-striped mt-3">
                      <tbody>
                       <tr>
                       <th> <Link className="text-decoration-none cursor-pointer" to={`/singleprojet/${item._id}`}>
                        <h4 >{item.title}</h4>
                      </Link></th>
                       </tr>
                      </tbody>
                     </table>
                    </div>
                  ))
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
