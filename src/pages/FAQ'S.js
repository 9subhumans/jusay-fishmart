import React from "react";
import { Container, Card, Button, Navbar, Nav } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { Accordion } from "react-bootstrap";

const FAQPage = () => {
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
              <Nav.Link href="#">Contact Us</Nav.Link>
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
        <h1 className="mb-4">Frequently Asked Questions</h1>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                How can I order products from Jusay Fishmart?
                <FaChevronDown className="ms-2" />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                You can order products from Jusay Fishmart by visiting our website and adding items to your cart. Once you're ready to checkout, you can enter your shipping and payment information and complete your order.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                What is the return policy for Jusay Fishmart?
                <FaChevronDown className="ms-2" />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                We offer a 30-day return policy for all products purchased from Jusay Fishmart. If you're not satisfied with your purchase, you can return it for a full refund within 30 days of delivery.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                How can I contact customer support?
                <FaChevronDown className="ms-2" />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                You can contact customer support by emailing us at support@jusayfishmart.com or by calling us at 555-555-5555.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </>
  );
};

export default FAQPage;