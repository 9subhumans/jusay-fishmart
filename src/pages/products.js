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
  },
  []); 

  return (
    <React.Fragment>
      <Container className="my-5">
        <Row>
          {
            products.map((p) => (
              <Col key={p.id} xs={3} >
              <Card className="my-3 custom-card"> {/* add custom class */}
                <Card.Body>
                  <Card.Img  
                  src={p.image}
                   />
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Body className="pt-3" style={{fontSize: 15}}>{p.description}</Card.Body>
                  <Card.Text className="pt-3  ">{p.quantity}{p.unit} = ₱{p.price}.00</Card.Text>
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