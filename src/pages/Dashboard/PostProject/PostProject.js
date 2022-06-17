import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const PostProject = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();
  const { user } = useAuth();

  const onSubmit = (data) => {
    axios
      .post("https://lit-fjord-88326.herokuapp.com/projects", data)
      .then((res) => {
        if (res.data.insertedId) {
          // alert("Package Addeded Successfully!");
          reset();
          setSuccess("Project Added Successfully !");
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
          {...register("title")}
        />

        {/* Developer One _____________________________ */}
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Developer Name"
          {...register("Developer0")}
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

        {/* Supervisor ______________________________________  */}
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Supervisor Name"
          {...register("supervisorName")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Supervisor Designation"
          {...register("supervisorDesignation")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Supervisor Department"
          {...register("supervisorDept")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Supervisor University"
          {...register("supervisorUniversity")}
        />

        {/* External Name one______________________________________  */}
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="External Name"
          {...register("externalName")}
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

        {/* other ********************************** */}
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="DEPT CODE"
          {...register("dptrCode")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Release Date"
          {...register("releaseDate")}
        />

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
        <textarea
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="External Review"
          {...register("externalReview")}
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
        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          defaultValue={user.displayName}
          {...register("userName")}
        />
        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          defaultValue={user.email}
          {...register("userEmail")}
        />

        {/* <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Rating (out of 5)"
          {...register("star")}
        /> */}

        <Button className="w-50" variant="success" type="submit">
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
