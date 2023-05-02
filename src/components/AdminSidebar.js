import React from 'react';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap';
import { FaAmazon } from 'react-icons/fa'


const Sidebar = () => {
  return (
    <Container fluid className="p-0 h-100">
      <Row className="h-100" noGutters>
        <Col className="bg-dark h-100">
          <Image alt="Logo" src="/images/logo.png" fluid className="p-3" />
          <Nav className="flex-column">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="/admin/products">Products</Nav.Link>
            <Nav.Link href="/admin/transaction">Transaction log</Nav.Link>
            <Nav.Link href="/admin/inventory">Inventory log</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;