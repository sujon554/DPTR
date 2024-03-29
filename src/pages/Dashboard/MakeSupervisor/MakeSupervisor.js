import React from 'react';
import { useState } from "react";
import Swal from "sweetalert2";
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";

const MakeSupervisor = () => {
    const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://lit-fjord-88326.herokuapp.com/users/supervisor", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "supervisor added successfully!",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });

    e.preventDefault();
  };
    return (
        <Container>
        <h1>Make a supervisor</h1>
  
        <Form
          onSubmit={handleAdminSubmit}
          className="d-flex justify-content-center my-5"
        >
          <InputGroup className="mb-3 w-50">
            <FormControl onBlur={handleOnBlur} placeholder="Enter E-mail" />
            <Button variant="info" type="submit">
              Make supervisor
            </Button>
          </InputGroup>
        </Form>
      </Container>
    );
};

export default MakeSupervisor;