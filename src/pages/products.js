import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars  } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar, NavDropdown, InputGroup } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

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
      <Navbar className="navbar-aqua" expand="lg">
        <Container>
          <Navbar.Brand href="./Introduction">Jusay's Fishmart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-between w-100">
              <Form className="d-flex">
                <InputGroup>
                  <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                  <Form.Control type="search" placeholder="Search" />
                </InputGroup>
              </Form>
              <NavDropdown title={<FontAwesomeIcon icon={faBars} />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Item href="./admin/product">Add Product</NavDropdown.Item>
                <NavDropdown.Item href="#">Add Product</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-flex align-items-center">
              <Nav.Link href="#">
                <FaShoppingCart /> Cart
              </Nav.Link>
            </div>
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
                    <Card.Body className="pt-3" style={{fontSize: 15}}>{p.description}</Card.Body>
                    <Card.Text className="pt-3  ">{p.quantity}{p.unit} = {p.price}.00</Card.Text>
                    <Button href="src/pages/admin/orderdetails.js" variant="primary" className="mr-2">
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