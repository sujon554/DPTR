import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const RequestProject = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();
  const { user } = useAuth();

  const onSubmit = (data) => {
    axios
      .post("https://lit-fjord-88326.herokuapp.com/reqproject", data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          setSuccess("Project Request Successfully !");
        }
      });
  };

  //Remove Success Text
  const successTextRemover = () => {
    setSuccess("");
  };

  return (
    <div>
      <h3 className="text-center text-dark mb-5 text-uppercase">
        Request Project <strong className="text-info">From Student</strong>
      </h3>

      {/* Inpur Here from UI  */}

      <Form
        className="d-flex flex-column w-75 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Group Name"
          {...register("Groupname", { required: true })}
        />

        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Department"
          {...register("department", { required: true })}
        />

        <input
          className="mb-3 p-2 d-none"
          defaultValue="Pending"
          {...register("bookedServiceStatus")}
        />
        {/* Team Member One _____________________________ */}
        <Col>
          <Row xs={3} md={3} className="mx-0">
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Team Member Name"
              {...register("member0", { required: true })}
            />

            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Student ID"
              {...register("ID0", { required: true })}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Intake"
              {...register("intake0", { required: true })}
            />
          </Row>
        </Col>
        <Col>
          <Row xs={3} md={3} className="mx-0">
            {/* Developer One _____________________________ */}
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Team Member Name"
              {...register("member1")}
            />

            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Student ID"
              {...register("ID1")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Intake"
              {...register("intake1")}
            />
          </Row>
        </Col>
        <Col>
          <Row xs={3} md={3} className="mx-0">
            {/* Developer One _____________________________ */}
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Team Member Name"
              {...register("member2")}
            />

            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Student ID"
              {...register("ID2")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Intake"
              {...register("intake2")}
            />
          </Row>
        </Col>
        <Col>
          <Row xs={3} md={3} className="mx-0">
            {/* Developer One _____________________________ */}
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Team Member Name"
              {...register("member3")}
            />

            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Student ID"
              {...register("ID3")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Intake"
              {...register("intake3")}
            />
          </Row>
        </Col>
        <Col>
          <Row xs={3} md={3} className="mx-0">
            {/* Developer One _____________________________ */}
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Team Member Name"
              {...register("member4")}
            />

            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Student ID"
              {...register("ID4")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Intake"
              {...register("intake4")}
            />
          </Row>
        </Col>

        {/* Supervisor ______________________________________  */}
        <Col>
          <Row xs={2} md={4} className="mx-0">
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Supervisor Name"
              {...register("supervisorName", { required: true })}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Designation"
              {...register("designation", { required: true })}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Department"
              {...register("supervisorDept", { required: true })}
            />
          </Row>
        </Col>

        {/* other ********************************** */}

        {/* ________________________________________________ */}
        <textarea
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Project Summary"
          {...register("summary")}
        />

        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Technology"
          {...register("technology")}
        />

        <textarea
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Purpose This Project"
          {...register("purpose")}
        />

        <Col>
          <Row xs={2} md={2} className="mx-0">
            <input
              style={{ outline: "none" }}
              className="mb-3 py-2 px-3"
              placeholder={user.displayName}
              defaultValue={user.displayName}
              {...register("userName")}
            />
            <input
              style={{ outline: "none" }}
              className="mb-3 py-2 px-3"
              placeholder={user.email}
              defaultValue={user.email}
              {...register("userEmail")}
            />
          </Row>
        </Col>

        <Button className="w-100 p-2" variant="danger" type="submit">
          Request Project
        </Button>
      </Form>

      <p className="text-center text-danger text-uppercase mt-4 mb-5 pb-5 fs-4">
        {success}
      </p>
    </div>
  );
};

export default RequestProject;
