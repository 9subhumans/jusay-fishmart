import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function Introduction() {
  return (
    <div>
      <Navbar bg="transparent" expand="lg" className="navbar-aqua">
        <Container>
          <Navbar.Brand href="#">Jusay Fishmart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="./products">Shop</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">FAQ's</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link href="./LogIn">Log in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="py-5">
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center">
            <h1 className="mb-3">Welcome to Jusay Fishmart</h1>
            <p className="lead">
              We are your one-stop shop for fresh, high-quality seafood.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Introduction;