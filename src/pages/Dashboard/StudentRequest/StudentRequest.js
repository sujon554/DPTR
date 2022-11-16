import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import {  useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const StudentRequest = () => {
  const { register, handleSubmit, reset } = useForm();
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState([]);
  const [desable, setDesable] = useState(0);
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [success, setSuccess] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useAuth();
  const {id} = useParams();

  useEffect(() => {
    fetch(
      `https://lit-fjord-88326.herokuapp.com/reqproject?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // check status 
  useEffect(() => {
    fetch(
      `https://lit-fjord-88326.herokuapp.com/studentReq/${id}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  // student request to supervisor from Modal 
  const onSubmit = (data) => {
    const proceed = window.confirm(
      "Are you sure, you want to Request this Project?"
    );
    if (proceed) {
      axios.post("https://lit-fjord-88326.herokuapp.com/studentReq", data).then((res) => {
        if (res.data.insertedId) {
          // alert("Package Addeded Successfully!");
          reset();
          setSuccess("Project Requested Successfully !");
        }
      });
    }
    setDesable(true);
  };

  //Remove Success Text
  const successTextRemover = () => {
    setSuccess("");
  };



  return (
    <div>
      <Container>
        <h1>
          Student<strong className="text-info"> Projects Request</strong>
        </h1>
        <h3 className="my-5">Total projects {projects.length}</h3>
        <Row className="g-5">
          {projects.map((Project) => (
            <Col sm={2} md={4} xl={3} key={Project._id} Project={Project}>
              <Card>
                <Card.Body>
                  <Card.Title>{Project.title}</Card.Title>
                  <h6>{Project.supervisorName}</h6>
                  <Card.Title>Booked By</Card.Title>
                  <Card.Title>{Project.userName}</Card.Title>
                  <h6 className="text-danger">User: {Project.userName}</h6>
                  <Card.Text className="text-danger">
                    {Project.userEmail}
                  </Card.Text>

                  {/* ****************
                    Request Modal 
                    *************** */}
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => setLgShow(true)}
                    disabled={desable}
                  >
                    Request
                  </Button>

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
                        <Button
                          className="w-100 p-2"
                          variant="success"
                          type="submit"
                        >
                          Request to Supervisor
                        </Button>
                      </Form>
                      <p className="text-center text-danger text-uppercase mt-4 fs-4">
        {success}
      </p>
                    </Modal.Body>
                  </Modal>

                  {/* ********************
                  Open Modal For details  
                  ********************** */}
                  <Button variant="info" size="sm" onClick={handleShow}>
                    Details
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Group Name: {Project.Groupname}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h3>Project Title: {Project.ProjectTitle}</h3>
                      <h4>Department: {Project.department}</h4>
                      <p>
                        <strong>Summary:</strong> {Project.summary}
                      </p>
                      <p>
                        <strong>Technology: </strong> {Project.technology}
                      </p>
                      <p>
                        <strong>Purpose:</strong> {Project.purpose}
                      </p>
                      <hr></hr>
                      <h4>Supervisor</h4>
                      <p>
                        <strong>Name:</strong> {Project.userName}
                      </p>
                      <p>
                        <strong>Designation:</strong> {Project.designation}
                      </p>
                      <p>
                        <strong>Email:</strong> {Project.userEmail}
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Card.Body>

                <Card.Footer>
                  {status.map(stat => (
                    <p key={stat._id} className="text-muted text-center">
                   console.log{stat}
                    <span>{stat.bookedServiceStatus}</span>
             
              </p>
                  ))}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default StudentRequest;
