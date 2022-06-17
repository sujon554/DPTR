import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Dptr = ({ project }) => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const [recentProjects, setRecentProjects] = useState([]);
  useEffect(() => {
    fetch("https://lit-fjord-88326.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setRecentProjects(data));
  }, []);

  return (
    <>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>

      {recentProjects.map((recentPro) => (
        <>
          <h5>{recentPro.externalName}</h5>
        </>
      ))}

      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Project Developer Team</Modal.Title>
        </Modal.Header>

        <Modal.Body className="lh-1"></Modal.Body>

        <Modal.Body>
          {recentProjects.map((recentPro) => (
            <>
              <h4>Team Member One</h4>
              <ul>
                <h5>{recentPro.Developer0}</h5>
                <p>{recentPro.dept0}</p>
                <p>{recentPro.ID0}</p>
                <p>{recentPro.intake0}</p>
              </ul>
              <hr />
              <h4>Team Member Two</h4>
              <ul>
                <h5>{recentPro.Developer1}</h5>
                <p>{recentPro.dept1}</p>
                <p>{recentPro.ID1}</p>
                <p>{recentPro.intake1}</p>
              </ul>
              <hr />
              <h4>Team Member Three</h4>
              <ul>
                <h5>{recentPro.Developer2}</h5>
                <p>{recentPro.dept2}</p>
                <p>{recentPro.ID2}</p>
                <p>{recentPro.intake2}</p>
              </ul>
            </>
          ))}
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {recentProjects.map((recentPro) => (
            <>
              <h5>{recentPro.supervisorName}</h5>
            </>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Dptr;
