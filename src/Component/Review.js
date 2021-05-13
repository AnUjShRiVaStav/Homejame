import React from 'react';
import './Review.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




export default function Review(){
    return(
        <div className = 'review'>
        <h2>
            <u style = { {color: 'blue'}}>Re</u>views
        </h2>
    
       
        <div className = 'review_' >
        <Container>
    
      <Row>
    <Col>  <Card border="light"  style={{ width: '18rem', background:'rgb(16, 16, 32)' }}>
    <Card.Header>
    <img className="rounded-circle z-depth-2" alt="10x10" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true" style = {{ width: '51px', height: '50px',marginRight:'25px',objectfit: 'cover'}}  />
          
    Sophi</Card.Header>
    <span>PALOALTO,CA</span>
    <Card.Body>
      <Card.Text>
      Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt ut labore et dolore magna aliqua.
      </Card.Text>
    </Card.Body>
  </Card></Col>


    <Col> <Card border="light"  style={{ width: '18rem', background:'rgb(16, 16, 32)' }}>
    <Card.Header>
    <img className="rounded-circle z-depth-2" alt="10x10" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
          data-holder-rendered="true" style = {{ width: '51px', height: '50px',marginRight:'25px',objectfit: 'cover'}}  />
          
    James</Card.Header>
    <span>PALOALTO,CA</span>
    <Card.Body>
      <Card.Text>
      Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt ut labore et dolore magna aliqua.
      </Card.Text>
    </Card.Body>
  </Card></Col>


    <Col> <Card border="light"  style={{ width: '18rem', background:'rgb(16, 16, 32)'}}>
    <Card.Header>
    <img className="rounded-circle z-depth-2" alt="10x10" src="https://c.ndtvimg.com/2019-09/ct1nrns8_hrithik-roshan-_625x300_25_September_19.jpg"
          data-holder-rendered="true" style = {{ width: '51px', height: '50px',marginRight:'25px',objectfit: 'cover'}}  />

    Ritik</Card.Header>
    <span>UK</span>
    <Card.Body>
      <Card.Text>
      Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt ut labore et dolore magna aliqua.
      </Card.Text>
    </Card.Body>
  </Card></Col>


      </Row>
</Container>

   </div>
  </div>
    );
}