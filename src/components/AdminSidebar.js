import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap';
import { FaAmazon } from 'react-icons/fa'


const Sidebar = () => {
  return (
    <Container fluid className="p-0 h-100">
      <Row className="h-100" noGutters>
        <Col className="bg-dark h-100">
          <Image alt="Logo" src="/images/logo.png" fluid className="p-3" />
          <Nav className="flex-column">
            <Link className="nav-link" href="/admin">Home</Link>
            <Link className="nav-link" href="/admin/products">Products</Link>
            <Link className="nav-link" href="#">Contact</Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;