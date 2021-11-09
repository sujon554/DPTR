import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slide1 from '../../../images/depament/cse.jpg'
import slide2 from '../../../images/depament/download.jpg'
import slide3 from '../../../images/depament/som.jpg'

const Banner = () => {
    return (
        <Container>
             <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
                    src={ slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
                    src={ slide2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
                    src={ slide3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
       </Container>
    );
};

export default Banner;