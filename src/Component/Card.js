import React from 'react'
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Cards.css';
import SaveOutlined from '@ant-design/icons/SaveOutlined'


export default function Data (){
    return(
        <div>
        
     <div className = 'Cards'>
     <h2>
          <u style = { {color: 'blue'}}>Up</u>coming Shows
        </h2>
        <Container  style={{ marginTop:'40px' }}>
  
  <Row>
    <Col><Card text="white" style={{ width: '15rem',background:'rgb(16, 16, 32)' }}>
  <Card.Img variant="top" src="https://superstarsbio.com/wp-content/uploads/2018/09/Benny-Dayal-1.jpg"
  height = '200px'
   />
  <Card.Body>
  <button className= 'button'>Folk</button>
    <Card.Title>Benny Dayal</Card.Title>
   <a href="More Info">More Info -> </a>
   <SaveOutlined style = {{marginLeft:'70px', color:'pink'}} />
  </Card.Body>
</Card></Col>


<Col><Card  text="white" style={{ width: '15rem', background:'rgb(16, 16, 32)' }}>
  <Card.Img variant="top" src="https://www.filmibeat.com/img/popcorn/profile_photos/vijay-yesudas-20180323100350-1772.jpg"
    height = '200px'
   />
  <Card.Body>
  <button className= 'button'>Bollywood</button>
    <Card.Title>Vijay Yesudas</Card.Title>
    <a href="More Info">More Info -> </a>
    <SaveOutlined style = {{marginLeft:'70px', color:'pink'}} />
   
  </Card.Body>
</Card></Col>




    <Col><Card  text="white" style={{ width: '15rem',background:'rgb(16, 16, 32)' }}>
  <Card.Img variant="top" src="https://www.filmibeat.com/img/2019/08/c-032-1565590568.jpg"
  height = '200px'
   />
  <Card.Body>
  <button className= 'button'>Folk</button>
    <Card.Title >Andrea Jeremiah</Card.Title>
   
    <a href="More Info">More Info -> </a>
    <SaveOutlined style = {{marginLeft:'70px', color:'pink'}} />
  </Card.Body>
</Card></Col>



    <Col><Card  text="white" style={{ width: '15rem',background:'rgb(16, 16, 32)'  }}>
  <Card.Img variant="top" src="http://bookmycelebrity.com/celebrity/wp-content/uploads/2014/05/Shilpa-Rao.jpg"
  height = '200px'
   />
  <Card.Body>
  <button className= 'button'>Folk</button>
    <Card.Title>Silpa Roa</Card.Title>
    <a href="More Info">More Info -> </a>
    <SaveOutlined style = {{marginLeft:'70px', color:'pink'}} />
  </Card.Body>
</Card></Col>
  </Row>
</Container>
</div>

 </div>
    )
}