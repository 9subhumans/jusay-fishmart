import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaShoppingCart } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <>
      <Navbar bg="transparent" expand="lg" className="navbar-aqua">
        <Container>
          <Navbar.Brand href="#">Jusay Fishmart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="./products">Shop</Nav.Link>
              <Nav.Link href="./AboutUs">About Us</Nav.Link>
              <Nav.Link href="./ContactUs">Contact Us</Nav.Link>
              <Nav.Link href="#">FAQ's</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="./LogIn">Log in</Nav.Link>
              <Nav.Link href="./user">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-5">
        <h1>Contact Us</h1>
        <Row className="mt-4">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h4>Contact Information:</h4>
            <p><strong>Address:</strong> 123 Main St, Cebu City</p>
            <p><strong>Email:</strong> info@jusayfishmart.com</p>
            <p><strong>Phone:</strong> (032) 123-4567</p>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default ContactUs;