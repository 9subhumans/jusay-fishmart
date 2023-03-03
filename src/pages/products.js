import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const response = await axios.get('/api/products');

      setProducts(response.data);
    }

    execute();
  }, []);

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-between w-100">
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="search" placeholder="Search" />
                </Form.Group>
              </Form>
              <NavDropdown title={<FontAwesomeIcon icon={faHippo} />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-5">
        <Row>
          {
            products.map((p) => (
              <Col key={p.id} xs={4} >
                <Card className="my-3">
                  <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>{p.description}</Card.Text>
                    <Card.Text>$1.00</Card.Text>
                    <Button variant="primary" className="mr-2">
                      Add to cart
                    </Button>
                    <i className="far fa-heart mr-2"></i>
                    <i className="far fa-bookmark"></i>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ProductsPage;