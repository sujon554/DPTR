import { Button } from 'bootstrap';
import React from 'react';
import { Col,  Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Deptproject = ({project}) => {
    const {
        id,
        title,
        author,
        coAuthor,
        summary,
        externalInternal,
        technology,
        dptrCode,
        necessary,
        releaseDate,
        video,
        Developer0,
        dept0,
        ID0,
       intake0,
        Developer1,
        dept1,
        ID1,
       intake1,
        Developer2,
        dept2,
        ID2,
       intake2
      } = project;
    return (
        <Row>

        {/* Title Here start  */}
      <Col className="text-start" md lg="9">
        <h1>{title}</h1>
        <Row>
          <Col>
            <h6>(Full and Final)</h6>
          </Col>
          <Col>
            <h6>Rating(avg): 5</h6>
          </Col>
          <Col>
            <h6>Released on {releaseDate}</h6>
          </Col>
          <Col>
            <h6>DPTR Code: {dptrCode}</h6>
          
          </Col>
          <hr />
        </Row>
            {/* Modal    <!-- Button trigger modal --> */}
          


        <div className="d-flex justify-content-start">


{/* **************************************************************** */}

{/* **************************************************************** */}




        <h4 className="pe-2"></h4>
       <h4 className="ps-2">Project Supervisor</h4>
        <hr />
        </div>

        <h5>Executive Summary</h5>
        <p className="text-start pe-3">{summary}</p>

        <h5>Use Technology</h5>
        <p>{technology} </p>

        <h5>Why it is Necceryary</h5>
        <ul>{necessary}</ul>

        <h5>Application</h5>
        <ul>
          <li>It work on kdfd</li>
          <li>It work on kdfd</li>
          <li>It work on kdfd</li>
        </ul>
      </Col>

      <Col ld md="3" className="text-start ps-3">
        <video
          controls
          autostart
          width={100}
          height={100}
          type="video/mp4"
        >
        {video}
        </video>

        <h4>Recent 5 Submited Work</h4>
        <Link>Title of Project/Thesis here</Link>
        
      </Col>
    </Row>
    );
};

export default Deptproject;