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
        Create Project <strong className="text-info">For Students</strong>
      </h3>

      {/* Inpur Here from UI  */}

      <Form
        className="d-flex flex-column w-75 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-floating">
          <input
            type="text"
            style={{ outline: "none" }}
            onClick={successTextRemover}
            className="form-control mb-3 py-2 px-3"
            placeholder="Project Title"
            id="floatingInputGroup1"
            {...register("ProjectTitle", { required: true })}
          />
          <label className="p-2" for="floatingInputGroup1">
            Project Title
          </label>
        </div>
        <div className="form-floating">
          <label className="p-2" for="floatingInputGroup1"></label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            style={{ outline: "none" }}
            onClick={successTextRemover}
            className="form-control mb-3 py-2 px-3"
            placeholder="Group Name"
            id="floatingInputGroup2"
            {...register("Groupname")}
          />
          <label className="p-2" for="floatingInputGroup2">
            Group Name
          </label>
        </div>

        <div className="form-floating">
          <input
            style={{ outline: "none" }}
            onClick={successTextRemover}
            className="form-control mb-3 py-2 px-3"
            placeholder="Department"
            id="floatingInputGroup3"
            {...register("department", { required: true })}
          />
          <label className="p-2" for="floatingInputGroup3">
            Department
          </label>
        </div>

        <input
          className="mb-3 p-2 d-none"
          defaultValue="Pending"
          {...register("bookedServiceStatus")}
        />

        {/* Supervisor ______________________________________  */}
        <Col>
          <Row md={3} className="mx-0">
            <input
              style={{ outline: "none" }}
              className="mb-3 py-2 px-3"
              placeholder={user.displayName}
              defaultValue={user.displayName}
              {...register("userName")}
            />

            <div className="form-floating">
              <input
                style={{ outline: "none" }}
                onClick={successTextRemover}
                className="form-control mb-3 py-2 px-3"
                placeholder="Designation"
                id="floatingInputGroup4"
                {...register("designation", { required: true })}
              />
              <label className="p-2 ps-3" for="floatingInputGroup4">
                Designation
              </label>
            </div>

            <input
              style={{ outline: "none" }}
              className="mb-3 py-2 px-3"
              placeholder={user.email}
              defaultValue={user.email}
              {...register("userEmail")}
            />
          </Row>
        </Col>

        {/* other ********************************** */}

        {/* ________________________________________________ */}

        <div className="form-floating">
          <textarea
            style={{ outline: "none" }}
            onClick={successTextRemover}
            className="form-control mb-3 py-2 px-3"
            placeholder="Project Summary"
            id="floatingInputGroup5"
            {...register("summary")}
          />
          <label className="p-2" for="floatingInputGroup5">
            Project Summary
          </label>
        </div>

        <div className="form-floating">
          <input
            style={{ outline: "none" }}
            onClick={successTextRemover}
            className="form-control mb-3 py-2 px-3"
            placeholder="Technology"
            id="floatingInputGroup6"
            {...register("technology")}
          />
          <label className="p-2" for="floatingInputGroup6">
            Technology
          </label>
        </div>

        <div className="form-floating">
          <textarea
            style={{ outline: "none" }}
            onClick={successTextRemover}
            className="form-control mb-3 py-2 px-3"
            id="floatingInputGroup7"
            placeholder="Purpose This Project"
            {...register("purpose")}
          />
          <label className="p-2" for="floatingInputGroup7">
            Purpose
          </label>
        </div>

        <Col>
          <Row xs={2} md={2} className="mx-0"></Row>
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
