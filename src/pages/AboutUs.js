import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';


const AboutUs = () => {
  return (
    <div>
    <Navbar bg="transparent" expand="lg" className="navbar-aqua">
        <Container>
          <Navbar.Brand href="#">Jusay Fishmart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="./products">Shop</Nav.Link>
              <Nav.Link href="./AboutUs">About Us</Nav.Link>
              <Nav.Link href="./ContactUs">Contact Us</Nav.Link>
              <Nav.Link href="./FAQ'S">FAQ's</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="./LogIn">Log in</Nav.Link>
              <Nav.Link href="./user">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <h2 className="mb-4">About Us</h2>
          <p>Jusay Fishmart is an online seafood store that delivers fresh and high-quality seafood straight to your doorstep. We believe that everyone should have access to the best seafood products, which is why we source our products from the most trusted suppliers in the industry.</p>
          <p>Our mission is to provide our customers with a convenient and hassle-free way to purchase seafood products without sacrificing quality. We are committed to providing exceptional customer service and ensuring that our customers are satisfied with their purchases.</p>
          <p>Thank you for choosing Jusay Fishmart!</p>
        </Col>
        <Col md={6}>
          <img src="https://dummyimage.com/600x400/000/fff" alt="About Us" className="img-fluid" />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default AboutUs;