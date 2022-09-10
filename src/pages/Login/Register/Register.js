import React, { useState } from "react";
import { Alert, Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useHistory, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();
  const history = useHistory();

  const handleOnInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password not matched");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name);
    e.preventDefault();
  };

  return (
    <Container>
      <h1 className="mb-5">
        <strong className="text-danger">REGISTRATION</strong>
        <strong className="text-info">HERE</strong>
      </h1>

      <Row>
        <Col>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <input
                className="w-75 p-1"
                onBlur={handleOnInput}
                type="text"
                name="name"
                placeholder="Your name"
              />{" "}
              <br />
              <br />
              <input
                className="w-75 p-1"
                onBlur={handleOnInput}
                type="email"
                name="email"
                placeholder="E-mail"
              />{" "}
              <br />
              <br />
              <input
                className="w-75 p-1"
                onBlur={handleOnInput}
                type="password"
                name="password"
                placeholder="Password"
              />{" "}
              <br />
              <br />
              <input
                className="w-75 p-1"
                onBlur={handleOnInput}
                type="password"
                name="password2"
                placeholder="Re-type password"
              />{" "}
              <br />
              <br />
              <Button
                className="bg-success text-white w-50"
                type="submit"
                variant="contained"
              >
                Register
              </Button>{" "}
              <br />
              <br />
              {isLoading && <Spinner animation="border" />}
              {user?.email && (
                <Alert severity="success">User Created successfully!</Alert>
              )}
              <NavLink to="/login">
                <Button
                  className="fs-5 my-5 text-danger text-bold"
                  variant="text"
                >
                  Already Registered?{" "}
                  <strong className="text-info">Please Login</strong>
                </Button>
              </NavLink>
            </form>
          )}

          {authError && <Alert severity="error">{authError}</Alert>}
        </Col>
        <Col>
          <img
            src="https://image.shutterstock.com/image-photo/hand-pressing-register-now-on-260nw-328898132.jpg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
