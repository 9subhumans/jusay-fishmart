import React, { useState, useEffect } from "react";
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
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
        <div className="products-container">
          {
            products.map((p) => (
              <Card key={p.id} className="my-3 product-card">
                <Card.Body>
                   <Image
                      src={p.image}
                      height={200}
                      width={320}
                      alt={p.image}
                      className="card-img"
                   />
                  <Card.Title>
                    <Link href={`product/${p.id}`}>
                      {p.name}
                    </Link>
                  </Card.Title>
                  <Card.Body className="p-0" style={{fontSize: 15}}>
                      {
                        p.description
                        .split(' ')
                        .slice(0, 20).join(' ')
                      }
                      ...&nbsp;
                      <Link style={{ color: 'blue' }} href={`product/${p.id}`}>See more</Link>
                    </Card.Body>
                  <Card.Text className="pt-3  ">{p.quantity}{p.unit} = ₱{p.price}.00</Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button href="src/pages/admin/orderdetails.js" variant="primary" className="mr-2">
                      Add to cart
                    </Button>
                    <i class="bi bi-heart" />
                  </div>
                </Card.Body>
              </Card>
            ))
          }
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ProductsPage;