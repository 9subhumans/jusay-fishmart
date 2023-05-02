import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { NavigationBar } from '@/components/NavigationBar'

const ContactUs = () => {
  return (
    <>
    <Head>
      <title>Jusay Fishmart | Contact Us</title>
    </Head>
    <NavigationBar />
      <Container className="my-5">
        <h1>Contact Us</h1>
        <Row className="mt-4">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h4>Contact Information:</h4>
            <p><strong>Address:</strong> 123 Main St, Cebu City</p>
            <p><strong>Email:</strong> kirby@jusayfishmart.com</p>
            <p><strong>Phone:</strong> (+63) 9123456789</p>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default ContactUs;