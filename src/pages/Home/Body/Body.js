import React from 'react';
import { Col,  Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Video from "./20201205_170028.mp4";
import './Body.css'

const Body = () => {
    return (
        <div className='container body'>
             <Col md lg="9">
                    
                <h1>Work Title Here || Work Title Here || Work Title Here</h1>
                <h4>List of Supervisor | Author | Co-author | Author | Co-author</h4>
                <Row>
                    <Col>
                        <h6>(Full and Final)</h6>
                    </Col>
                    <Col>
                        <h6>Rating(avg): 5</h6>
                    </Col>
                    <Col>
                        <h6>Released on 26/10/21</h6>
                    </Col>
                        <Col>
                            <h6>(DPTR Code: 09</h6>
                     </Col>
                </Row>

                <h5 className="text-start">Executive Summary</h5>

                <p className="text-start pe-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui illum natus, fugiat quasi ducimus voluptate magnam? Aliquam, minus incidunt mollitia placeat numquam corrupti totam velit a! Exercitationem excepturi cupiditate optio placeat vel, itaque neque eveniet nemo esse praesentium distinctio sequi? Est deserunt facilis odit culpa nobis! Praesentium nobis quod provident voluptates esse ex pariatur culpa veniam at excepturi amet velit totam, et distinctio sapiente ullam quo nihil quia expedita explicabo, molestiae in rerum exercitationem nesciunt. Nesciunt sit totam, magni illo et consectetur distinctio? Nostrum, adipisci praesentium! Vel doloribus eius omnis quaerat consequuntur, porro eligendi sunt autem numquam soluta tempora modi, ipsum esse debitis eos, explicabo alias labore excepturi vero reprehenderit minus ratione cupiditate vitae corrupti! Quod accusantium voluptatum beatae, ad illum neque fuga eaque inventore. Commodi, distinctio animi. Eius ut eveniet quis inventore nulla perspiciatis obcaecati fuga totam laboriosam dolorem iste temporibus modi eaque, et praesentium aliquam officiis quidem tempore possimus unde earum harum! Doloremque similique pariatur, deserunt sunt quos quidem eius? Possimus repellat molestiae esse rerum recusandae? Nihil aspernatur voluptates ipsum deleniti, iusto eius voluptatem, soluta voluptatibus modi ipsa, vitae corrupti! Ab suscipit reprehenderit fugit consequatur omnis ipsam assumenda voluptate quos necessitatibus iste. Perferendis dolores libero nemo possimus officiis!</p>

                <h5 className="text-start">Topic or Keyword</h5>
                <p className="text-start">Software, Testing, ete etc ete etc ete etc ete etc ete  ete etc ete etc</p>
 
                <h5 className="text-start">Why it is Necceryary</h5>
                <ul className="text-start">
                    <li>It work on kdfd</li>
                    <li>It work on kdfd</li>
                    <li>It work on kdfd</li>
                </ul>

                <h5 className="text-start">Application</h5>
                <ul className="text-start">
                    <li>It work on kdfd</li>
                    <li>It work on kdfd</li>
                    <li>It work on kdfd</li>
                </ul>
            </Col>

            


            <Col ld md="3" className="text-start ps-3">
            <video controls autostart width={100} height={100} src={Video} type="video/mp4" />

                <h4>Recent 5 Submited Work</h4>
                <Link>Title of Project/Thesis here</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur.</p>
                <Link>Title of Project/Thesis here</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur.</p>
                <Link>Title of Project/Thesis here</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur.</p>
                <Link>Title of Project/Thesis here</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur.</p>
                <Link>Title of Project/Thesis here</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur.</p>
                <Link>Title of Project/Thesis here</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur.</p>
                   
            </Col>
        </div>
    );
};

export default Body;

