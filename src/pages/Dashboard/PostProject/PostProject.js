import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const PostProject = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();
  const { user } = useAuth();

  const onSubmit = (data) => {
    const proceed = window.confirm(
      "Are you sure, you want to Request this Project?"
    );
   if(proceed) {
    axios
    .post("https://lit-fjord-88326.herokuapp.com/projects", data)
    .then((res) => {
      if (res.data.insertedId) {
        // alert("Package Addeded Successfully!");
        reset();
        setSuccess("Project Added Successfully !");
      }
    });
   }
  };

  //Remove Success Text
  const successTextRemover = () => {
    setSuccess("");
  };

  return (
    <div>
      <h3 className="text-center text-dark mb-5 text-uppercase">
        add a new <strong className="text-info">Project</strong>
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
          placeholder="Project Title"
          {...register("title", { required: true })}
        />

        <Col>
          <Row xs={2} md={4} className="mx-0">
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Department"
              {...register("department", { required: true })}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="DEPT CODE"
              {...register("dptrCode", { required: true })}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Release Date"
              {...register("releaseDate", { required: true })}
            />

            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Rating (out of 5)"
              {...register("rating")}
            />
          </Row>
        </Col>

        <Col>
          <Row xs={2} md={4} className="mx-0">
            {/* Developer One _____________________________ */}
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Developer Name"
              {...register("Developer0", { required: true })}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Developer Department"
              {...register("dept0")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Developer ID"
              {...register("ID0")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Developer Intake"
              {...register("intake0")}
            />
          </Row>
        </Col>

        <Col>
          <Row xs={2} md={4} className="mx-0">
            {/* Developer Two ______________________________________  */}
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Developer Name"
              {...register("Developer1")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Developer Department"
              {...register("dept1")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Developer ID"
              {...register("ID1")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Developer Intake"
              {...register("intake1")}
            />
          </Row>
        </Col>

        <Col>
          <Row xs={2} md={4} className="mx-0">
            {/* Developer Three ______________________________________  */}
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Developer Name"
              {...register("Developer2")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Developer Department"
              {...register("dept2")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Developer ID"
              {...register("ID2")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Developer Intake"
              {...register("intake2")}
            />
          </Row>
        </Col>

        <Col>
          <Row xs={2} md={4} className="mx-0">
            {/* Supervisor ______________________________________  */}
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
              placeholder="Supervisor Designation"
              {...register("supervisorDesignation", { required: true })}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Supervisor Department"
              {...register("supervisorDept", { required: true })}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="Supervisor University"
              {...register("supervisorUniversity", { required: true })}
            />
          </Row>
        </Col>

        {/* other ********************************** */}

        {/* ________________________________________________ */}
        <textarea
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Summary"
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
          placeholder="Necessary"
          {...register("necessary")}
        />

        <Col>
          <Row xs={2} md={4} className="mx-0">
            {/* External Name one______________________________________  */}
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="External Name"
              {...register("externalName", { required: true })}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="External Professor"
              {...register("externalProfessor")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="External University"
              {...register("externalUniversity")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="External Address"
              {...register("externalAddress")}
            />
          </Row>
        </Col>

        <Col>
          <Row xs={2} md={4} className="mx-0">
            {/* External Name Two ______________________________________  */}
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="External Name"
              {...register("externalName1")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="External Professor"
              {...register("externalProfessor1")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="External University"
              {...register("externalUniversity1")}
            />
            <input
              style={{ outline: "none" }}
              onClick={successTextRemover}
              className="mb-3 py-2 px-3"
              placeholder="External Address"
              {...register("externalAddress1")}
            />
          </Row>
        </Col>

        <textarea
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="External Review"
          {...register("externalReview", { required: true })}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Video URL"
          {...register("video")}
        />

        <input
          className="mb-3 p-2 d-none"
          defaultValue="Pending"
          {...register("bookedServiceStatus")}
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

        <Button className="w-100 p-2" variant="success" type="submit">
          Add Project
        </Button>
        


        
      </Form>

      <p className="text-center text-danger text-uppercase mt-4 mb-5 pb-5 fs-4">
        {success}
      </p>
    </div>
  );
};

export default PostProject;
