import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
//import { FaShoppingCart } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="navbar-aqua">
      <Container>
        <Navbar.Brand href="#">Jusay Fishmart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./products">Shop</Nav.Link>
            <Nav.Link href="./AboutUs">About Us</Nav.Link>
            <Nav.Link href="./FAQs">FAQ's</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="./LogIn">Log in</Nav.Link>
            <Nav.Link href="./user">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;