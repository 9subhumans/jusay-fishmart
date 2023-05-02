import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavigationBar } from '@/components/NavigationBar'

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>Jusay Fishmart | About Us</title>
      </Head>
      <NavigationBar />
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <h2 className="mb-4">About Us</h2>
          <p>Jusay Fishmart is an online seafood store that delivers fresh and high-quality seafood straight to your doorstep. We believe that everyone should have access to the best seafood products, which is why we source our products from the most trusted suppliers in the industry.</p>
          <p>Our mission is to provide our customers with a convenient and hassle-free way to purchase seafood products without sacrificing quality. We are committed to providing exceptional customer service and ensuring that our customers are satisfied with their purchases.</p>
          <p>Thank you for choosing Jusay Fishmart!</p>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default AboutUs;