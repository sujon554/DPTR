import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const UpdateProject = () => {
  const { register, handleSubmit, reset } = useForm();
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [success, setSuccess] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    //Remove Success Text
    const successTextRemover = () => {
      setSuccess("");
    };
  

     // Post project 
  const onSubmit = (data) => {
    const proceed = window.confirm(
      "Are you sure, you want to Request this Project?"
    );
    if (proceed) {
      axios.post("https://lit-fjord-88326.herokuapp.com/projects", data).then((res) => {
        if (res.data.insertedId) {
          reset();
          setSuccess("Project Requested Successfully !");
        }
      });
    }
    
  };



  useEffect(() => {
    fetch("https://lit-fjord-88326.herokuapp.com/studentReq")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Container>
      <h1>
        Update<strong className="text-info"> Project when Completed</strong>
      </h1>
      <Row className="g-5">
          {projects.map((Project) => (
            <Col sm={1} md={3}  key={Project._id} Project={Project}>
              <Card>
                <Card.Body>
                  <Card.Title>{Project.title}</Card.Title>
                  <h6>{Project.supervisor}</h6>
                 
                  
                  <h6 className="text-danger">User: {Project.Groupname}</h6>
                  <Card.Text className="text-danger">
                    {Project.userEmail}
                  </Card.Text>
                  
                </Card.Body>

                <Card.Footer>
                  <small className="text-muted text-center">
                    {Project.bookedServiceStatus}
                  </small>
                  <Button  onClick={() => setLgShow(true)} className="bg-success ms-3 py-1 px-2">Send Admin</Button>
                </Card.Footer>

                {/* modal  */}


                <Modal
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title">
                        <h3>Project Title: {Project.ProjectTitle}</h3>
                        Group Name: {Project.Groupname} || {Project.department}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                          <Col sm={6}>
                            <label>Project Title: </label>
                            <input
                              style={{ outline: "none" }}
                              onClick={successTextRemover}
                              className="mb-3 py-2 px-3"
                              placeholder="Project Title"
                              defaultValue={Project.ProjectTitle}
                              {...register("title", { required: true })}
                            />
                            <br />
                            <label>Department: </label>
                            <input
                              style={{ outline: "none" }}
                              onClick={successTextRemover}
                              className="mb-3 py-2 px-3"
                              placeholder="Department"
                              defaultValue={Project.department}
                              {...register("department", { required: true })}
                            />
                            <br />
                            <label>Group Name: </label>

                            <input
                              style={{ outline: "none" }}
                              onClick={successTextRemover}
                              className="mb-3 py-2 px-3"
                              placeholder="Project Group"
                              defaultValue={Project.Groupname}
                              {...register("Groupname", { required: true })}
                            />
                            <br />
                            <label>Summary: </label>
                            <input
                              style={{ outline: "none" }}
                              onClick={successTextRemover}
                              className="mb-3 py-2 px-3"
                              placeholder="Project Summary"
                              defaultValue={Project.summary}
                              {...register("summary", { required: true })}
                            />
                            <br />
                            <label>Technology: </label>
                            <input
                              style={{ outline: "none" }}
                              onClick={successTextRemover}
                              className="mb-3 py-2 px-3"
                              placeholder="technologys"
                              defaultValue={Project.technology}
                              {...register("technology", { required: true })}
                            />
                            <br />
                            <label>Purpose: </label>
                            <input
                              style={{ outline: "none" }}
                              onClick={successTextRemover}
                              className="mb-3 py-2 px-3"
                              placeholder="Purpose"
                              defaultValue={Project.purpose}
                              {...register("purpose", { required: true })}
                            />

                            <h4>Supervisor Info</h4>
                            <label>Supervisor: </label>
                            <input
                           
                              style={{ outline: "none" }}
                              onClick={successTextRemover}
                              className="mb-3 py-2 px-3"
                              placeholder="supervisor"
                              defaultValue={Project.userName}
                              {...register("supervisor", { required: true })}
                            />
                            <br />

                            <label>Designation: </label>
                            <input
                              style={{ outline: "none" }}
                              onClick={successTextRemover}
                              className="mb-3 py-2 px-3"
                              placeholder="designation"
                              defaultValue={Project.designation}
                              {...register("designation", { required: true })}
                            />
                            <br />
                            <label>Email: </label>

                            <input
                              style={{ outline: "none" }}
                              onClick={successTextRemover}
                              className="mb-3 py-2 px-3"
                              placeholder="userEmail"
                              defaultValue={Project.userEmail}
                              {...register("userEmail", { required: true })}
                            />
                          </Col>


                          <Col sm={6}>
                            <Col>
                              <label>Date: </label>
                              <input
                                type="date"
                                style={{ outline: "none" }}
                                onClick={successTextRemover}
                                className="mb-3 py-2 px-3"
                                {...register("releaseDate", { required: true })}
                              />
                              <Row xs={3} className="mx-0">
                                {/* Developer One _____________________________ */}
                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder="Student Name"
                                  {...register("Developer0", {
                                    required: true,
                                  })}
                                />

                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder=" ID"
                                  {...register("ID0", { required: true })}
                                />
                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder=" Intake *"
                                  {...register("intake0", { required: true })}
                                />
                              </Row>
                            </Col>

                            <Col>
                              <Row xs={3} className="mx-0">
                                {/* Developer Two ______________________________________  */}
                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder="Student Name"
                                  {...register("Developer1")}
                                />

                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder=" ID"
                                  {...register("ID1")}
                                />
                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder=" Intake"
                                  {...register("intake1")}
                                />
                              </Row>
                            </Col>

                            <Col>
                              <Row xs={3} className="mx-0">
                                {/* Developer Three ______________________________________  */}
                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder="student Name"
                                  {...register("Developer2")}
                                />

                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder=" ID"
                                  {...register("ID2")}
                                />
                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder=" Intake"
                                  {...register("intake2")}
                                />
                              </Row>
                            </Col>
                            <Col>
                              <Row xs={3} className="mx-0">
                                {/* Developer Three ______________________________________  */}
                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder="student Name"
                                  {...register("Developer3")}
                                />

                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder=" ID"
                                  {...register("ID3")}
                                />
                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder=" Intake"
                                  {...register("intake3")}
                                />
                              </Row>
                            </Col>
                            <Col>
                              <Row xs={3} className="mx-0">
                                {/* Developer Three ______________________________________  */}
                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder="student Name"
                                  {...register("Developer4")}
                                />

                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder=" ID"
                                  {...register("ID4")}
                                />
                                <input
                                  style={{ outline: "none" }}
                                  onClick={successTextRemover}
                                  className="mb-3 py-2 px-3"
                                  placeholder=" Intake"
                                  {...register("intake4")}
                                />
                              </Row>
                            </Col>
                            <input
                              className="mb-3 p-2 d-none"
                              defaultValue="Pending"
                              {...register("bookedServiceStatus")}
                            />
                          </Col>
                        </Row>
                       
                      </Form>
                      <p className="text-center text-danger text-uppercase mt-4 fs-4">
        {success}
      </p>
                    </Modal.Body>
                  </Modal>
              </Card>
            </Col>
          ))}
        </Row>
    </Container>
  );
};

export default UpdateProject;
