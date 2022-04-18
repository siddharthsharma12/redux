import React from 'react'
import {Container,Row,Col, ListGroup} from "react-bootstrap"
import{ BsFillCartPlusFill} from 'react-icons/bs'

function Home(props) {
console.warn("home",props.data)
  return (
    <div>
    <ListGroup bsPrefix className='shop'>
     <h3>Shopping</h3>    
    </ListGroup>
    <Container>
    <Row>
    <ListGroup className='pos'>
  
  <ListGroup bsPrefix className='cart'>
  <span className='pul'>{props.data.length}</span>
 <BsFillCartPlusFill/>
  </ListGroup>
   <Col md={4} lg={4}>
    <ListGroup bsPrefix className='d-flex-one'>
   <ListGroup className='phone'>
   <img src="./images/pic.jpg" />
   </ListGroup>
  <ListGroup className='span'>
    <ListGroup>
    I-phone
    </ListGroup>
    <ListGroup>
    price:8000/-
    </ListGroup>
    </ListGroup>

    <ListGroup className='btn'>
    <button onClick={() =>
       props.addToCartHandler({price:1000,name:"i-phone"})}>
    Add To cart
    </button>
    
    </ListGroup>

    </ListGroup>
  
    </Col>
    </ListGroup>
    </Row>
    </Container>
    
   
    
    </div>
  )
}

export default Home