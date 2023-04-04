import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Introduction() {
  return (
    <div>
      <Head>
        <title>Jusay Fishmart | Introduction</title>
      </Head>
      <Container className="py-5">
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center">
            <h1 className="mb-3">Welcome to Jusay Fishmart</h1>
            <p className="lead">
              We are your online shop for fresh, high-quality seafood.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Introduction;